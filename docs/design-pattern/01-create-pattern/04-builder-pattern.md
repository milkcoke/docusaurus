---
title: Builder Pattern
description: Understand about builder pattern
tags: [design-pattern, create-pattern]
keywords: [design pattern, builder pattern]
last_update:
    date: 2023-01-22
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview
동일한 프로세스로 객체를 생성할 수 있게하는 패턴.
![Builder pattern overview diagram](./screenshots/builder_pattern.svg)

## Why to use
일관된 클래스 생성 규칙과 프로세스로 가독성 있는 코드로 객체 생성 방식 정립.


## 기존 생성자 방식의 한계
매우 긴 생성자를 생성하거나, 간단한 생성자로 인스턴스 생성후 장황하게 setter 로 만들면 일괄된 프로세스로 객체를 생성하지 못하므로 실수할 위험이 증가함. <br></br>
ex) 5박 6일이면 '6일'만 구하거나 '5박'만 세팅하면 안되고 강제해야함 <br></br>
setter 를 사용하면 안됨. => 인스턴스가 불완전한 프로세스로 만들어질 위험이 있고 <br></br>
다양한 파라미터를 지원하는 생성자를 만들 때 너무 김.

1. **생성자 생성시 너무 길고 장황하다.**
2. 불완전한 객체 생성 프로세스 <br></br>
   **객체 생성 프로세스를 강제할 수 없다.** <br></br>
   ex) 여행의 경우 Days, nights, startDate, endDate 는 반드시 필요하고 <br></br>
   나머지 속성은 Optional 이라고 가정하자. <br></br>
   해당 파라미터들만 받는 생성자를 만드는 방법도 있지만 <br></br>
   각 속성별로 변경하는 커스텀 메소드를 나눠놨다고하면 이를 강제하기 까다롭다.

:::caution
위와 같은 상황에서는 매우 여러 생성자를 정의해야하고 내부 로직도 복잡해지기 쉽다.
:::


## When to use
- 복잡한 객체를 만드는 프로세스를 정립하고 독립적으로 분리해야할 때
- 객체 생성 프로세스 로직이 복잡할 때
- 많은 생성자를 정의해야 할 때
- 객체 생성시 생성자에 필요한 파라미터가 많아질 때

## How to use

> 인스턴스 만드는 방법을 Builder 인터페이스를 정의하고 step 별로 나눠 프로세스를 정립한다.

1. 빌더 Interface 정의
2. 빌더 구현체 정의
3. Director 정의 (Optional)

### Example
카직스

<Tabs>
<TabItem value="product" label="Product">

#### TourPlan.java
Product class 정의
```java
@Getter
@NoArgsConstructor(access = AccessLevel.PUBLIC)
// Don't recommend input al fields into constructor
@AllArgsConstructor(access = AccessLevel.PUBLIC)
public class TourPlan {
    private String title;
    private int nights;
    private int days;

    private LocalDate startDate;
    private LocalDate endDate;
    private String stayPlace;
    private List<DetailPlan> plans = new ArrayList();
    
    // nights - days 는 별도로 지정하지 않아도
    // startDate - endDate 연산 만으로 쉽게 구해진다.
    public void changeDays(int days) {
        if (days <= 0) {
            throw new IllegalArgumentException("days should be greater than 0");
        }

        this.nights = days - 1;
        this.days = days;
    }

    // 필수 지정 메소드
    public void changeDate(LocalDate startDate, LocalDate endDate) {
        this.startDate = startDate;
        this.endDate = endDate;
    }

    public void changeStayPlace(String stayPlace) {
        this.stayPlace = stayPlace;
    }

    @Override
    public String toString() {
        return "title : " + this.title + "\n" +
                "start date:  " + this.startDate + "\n"
                + "endDate: " + this.endDate;
    }
}
```

</TabItem>
<TabItem value="builder" label="Builder">

#### TourPlanBuilder.java
**Builder interface 정의**

```java
public interface TourPlanBuilder {
    // builderStep A, B, C ..
   TourPlanBuilder title(String title);
   TourPlanBuilder date(LocalDate startDate, LocalDate endDate) throws IllegalArgumentException;
   TourPlanBuilder days(int days);
   TourPlanBuilder stayPlace(String stayPlace);

   // 이 안에서 빌드 시점에 데이터를 검증할 수 있음.
   // ex) Required 가 모두 빠짐없이 입력되었는가?
   // highlight-next-line
   TourPlan build();
}
```
</TabItem>

<TabItem value="concrete builder" label="ConcreteBuilder">

#### CalendarTourBuilder.java

```java
@Getter
@NoArgsConstructor(access =  AccessLevel.PUBLIC)
public class CalendarTourBuilder implements TourPlanBuilder {
    private String title;
    private int nights;
    private int days;

    private LocalDate startDate;
    private LocalDate endDate;
    private String stayPlace;
    private List<DetailPlan> plans = new ArrayList();

    private void updateNightsAndDaysByDate(LocalDate startDate, LocalDate endDate) {
        this.days = Period.between(startDate, endDate).getDays() + 1;
        this.nights = days - 1;
    }
    @Override
    public TourPlanBuilder title(String title) {
        this.title = title;
        return this;
    }

    @Override
    public TourPlanBuilder date(LocalDate startDate, LocalDate endDate) throws IllegalArgumentException {

        if (endDate.isBefore(startDate)) {
            throw new IllegalArgumentException("startDate should precede endDate.");
        }
        this.startDate = startDate;
        this.endDate = endDate;

        // 자동으로 N박 N+1일이 정해짐
        updateNightsAndDaysByDate(startDate, endDate);
        return this;
    }

    @Override
    public TourPlanBuilder days(int days) {
        this.days = days;
        return this;
    }

    @Override
    public TourPlanBuilder stayPlace(String stayPlace) {
        this.stayPlace = stayPlace;
        return this;
    }
    
    @Override
    public TourPlan build() {
        if (this.startDate == null || this.endDate == null) {
            throw new MissingFormatArgumentException("You are required to input " + "startDate and endDate");
        } else if (this.title == null) {
            throw new MissingFormatArgumentException("You are required to input " + "title");
        }

        return new TourPlan(title, nights, days, startDate, endDate, stayPlace, plans);
    }
}
```

</TabItem>
<TabItem value="director" label="Director">

#### TourPlanDirector.java
클라이언트가 복잡한 생성 로직을 모른체 Director 를 통해 곧바로 Product 를 생성할 수 있음.
```java
@Component
@RequiredArgsConstructor
public class TourPlanDirector {
    private final TourPlanBuilder tourPlanBuilder;

    public TourPlan createHawaiiPackageTourPlan(LocalDate startDate, LocalDate endDate) {
        return this.tourPlanBuilder
                .title("Hawaii")
                .date(startDate, endDate)
                .build();
    }

    public TourPlan createClimbingPlan(LocalDate startDate, LocalDate endDate) {
        return this.tourPlanBuilder
                .title("동네뒷산")
                .date(startDate, endDate)
                .build();
    }
}
```
</TabItem>
</Tabs>


---

### `@Builder` annotation in Lombok (Not Recommended)
별도로 Builder, Director 클래스 정의없이 빌더를 사용할 수 있어 매우 간단하다. <br></br>
그러나 이 방법은 `@AllArgsConstructor` 어노테이션을 사용해야하므로 권장되지 않는다.

### Spring 활용 예
UriComponentBuilder 로 URI 를 안전하게 생성할 수 있다.

```java
public class SpringCreatePatternTest {
    @Test
    void uriComponentTest() {
        var uriComponents = UriComponentsBuilder.newInstance()
                .scheme("https")
                .host("www.m-falcon.tistory")
                .path("656")
                .build()
                .encode()
                .toUriString();

        var designPatternUri = "https://www.m-falcon.tistory/656";

        assertThat(uriComponents).isEqualTo(designPatternUri);
    }
}
```


## Question
Required / Optional 나눌 수 있을까?

> `build()` method 에서 null check 하는 방법보다 뭔가 더 fancy 한 방법이 있을 것 같다.



## Pros and Cons
### 장점
- **인스턴스를 생성하는 프로세스 강제**<br></br>
단순 생성자로 인스턴스를 만들 때에는 일련의 체계가 없어 실수하기 쉬움.<br></br>
**생성자에 validation 로직 삽입시 복잡도 증가 불가피**

- **Director 클래스를 통해 복잡한 객체를 만드는 과정을 Wrapping 할 수 있음.**<br></br> 
별도의 Builder 를 커스텀하여 동일한 프로세스를 거치지만 다른 인스턴스를 만들 수도 있게함 (확장성)

### 단점
- 성능 면에서 약간의 오버헤드가 발생 <br></br>
생성하고자하는 인스턴스 생성자가 아닌 builder 를 경유해야 하므로 추가 인스턴스 생성으로 인한 약간의 오베헤드 발생
- 구조상 복잡도 증가 <br></br>
Builder 또는 Director 등 별도의 인터페이스 및 클래스 정의 필요.

---
## 🔗 Reference
[코딩으로 학습하는 GoF의 디자인 패턴 - 백기선](https://www.inflearn.com/course/%EB%94%94%EC%9E%90%EC%9D%B8-%ED%8C%A8%ED%84%B4)