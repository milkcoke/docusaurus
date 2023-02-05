---
title: State Pattern
description: Understand about state pattern
tags: [design-pattern, behavior-pattern]
keywords: [design pattern, state pattern]
last_update:
    date: 2023-02-02
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview
객체 내부 상태에 따라 객체의 행동이 달라지는 패턴 <br></br>
특정 상태를 조건으로 하는 행위를 분리할 수 있다. <br></br>
새 행위를 추가해도 기존 행위에 영향을 미치지 않는다.

![State pattern overview diagram](screenshots/state_pattern_overview_diagram.svg)

## Why to use
로직이 특정 상태에 따라 조건부로 실행되면 <br></br>
코드를 위에서 아래로 읽는 방식으로 시나리오 파악이 어렵다. <br></br>
이럴 때 상태 패턴을 활용한다.

## When to use
- Operation 을 상태에 따라 실행시키는 로직을 구조화 하고 싶을 때

### Example
온라인 강의 - 학생이 존재하고
온라인 강의 상태는 DRAFT, PRIVATE, PUBLISHED 3가지를 갖는다.
온라인 강의 상태에 따라 다음과 같이 권한이 부여된다.

| Index   | 학생 등록         | 리뷰 등록 |
|---------|---------------|-------|
| DRAFT   | 1명만 가능        | 불가능   |
| PRIVATE | 사전 등록된 학생만 가능 | 가능    |
| PUBLIC  | 가능            | 가능    |

상태별 행위를 온라인 강의 클래스 내에서 모두 관리하면 다음과 같이 복잡한 코드가 만들어진다.
#### OnlineCourse.java
```java
@Getter
public class OnlineCourse {

    public enum State {
        // 총 3개의 상태를 갖고, 이 상태마다 행위가 달라진다.
        DRAFT, PUBLISHED, PRIVATE
    }

    private State state = State.DRAFT;
    private List<String> reviews = new ArrayList<>();
    private List<Student> students = new ArrayList<>();

    // 리뷰 등록 아모르파티 
    public void addReview(String review, Student student) {
        if (this.state == State.PUBLISHED) {
            this.reviews.add(review);
        } else if (this.state == State.PRIVATE && this.students.contains(student)) {
            this.reviews.add(review);
        } else {
            throw new UnsupportedOperationException("리뷰를 작성할 수 없습니다.");
        }
    }

    // 학생 등록 아모르파티
    public void addStudent(Student student) {
        if (this.state == State.DRAFT || this.state == State.PUBLISHED) {
            this.students.add(student);
        } else if (this.state == State.PRIVATE && availableTo(student)) {
            this.students.add(student);
        } else {
            throw new UnsupportedOperationException("학생을 해당 수업에 추가할 수 없습니다.");
        }

        if (this.students.size() > 1) {
            this.state = State.PRIVATE;
        }
    }

    public void changeState(State newState) {
        this.state = newState;
    }
    
    private boolean availableTo(Student student) {
        return student.isEnabledForPrivateClass(this);
    }
}
```

## How to use
:::info
1. **상태에 따라 달라지는 행위를 State 인터페이스로 위임한다.**
2. 상태 개수만큼 State 인터페이스를 구현하는 Concrete Class 를 생성한다. <br></br>
이때, 각각의 상태는 Context 로 온라인 강의를 참조한다.
:::

온라인 강의 상태에 따라 학생 등록과 리뷰 등록 행위가 달라지므로
두 메소드를 state 패턴의 State interface 로 위임할 필요가 있다.

```java
// state 에 얽혀있는 메소드 => State interface 로 위임.
public void addStudent(Student student) {}
// state 에 얽혀있는 메소드 => State interface 로 위임.
public void addReview(String review, Student student) {}
```



### Context
#### OnlineCourse.java
```java
@Getter
public class OnlineCourse {
    private State state = new DraftState(this);
    private Set<Student> students = new HashSet<>();
    private List<String> reviews = new ArrayList<>();

    public void changeState(State newState) {
        this.state = newState;
    }

    public boolean isRegisteredStudent(Student student) {
        return this.students.contains(student);
    }

    // add -> 직접 online course 에 적용
    public void addStudent(Student student) {
        this.students.add(student);
    }

    public void addReview(String review) {
        this.reviews.add(review);
    }
    // register -> state 에 위임.
    public void registerStudent(Student student) {
        if (isRegisteredStudent(student)) throw new IllegalArgumentException("이미 등록된 학생입니다.");
        this.state.addStudent(student);
    }

    public void registerReview(Student student, String review) {
        this.state.addReview(student, review);
    }
}
```


### State
<Tabs>
<TabItem value="interface" label="State.java">

```java
public interface State {
    void addStudent(Student student);
    void addReview(Student student, String review);
}
```

</TabItem>

<TabItem value="draft" label="DraftState.java">

```java
@RequiredArgsConstructor
public class DraftState implements State {
    // 일종의 컨텍스트
    private final OnlineCourse onlineCourse;
    @Override
    public void addStudent(Student student) {
        this.onlineCourse.addStudent(student);
        // 등록된 학생 수가 2명 이상이면 상태 변경
        if (this.onlineCourse.getStudents().size() > 1) {
            this.onlineCourse.changeState(new PrivateState(this.onlineCourse));
        }
    }

    @Override
    public void addReview(Student student, String review) {
        throw new UnsupportedOperationException("드래프트 상태에서는 리뷰를 남길 수 없습니다.");
    }
}
```

</TabItem>

<TabItem value="private" label="PrivateState.java">

```java
@RequiredArgsConstructor
public class PrivateState implements State {
    private final OnlineCourse onlineCourse;

    @Override
    public void addStudent(Student student) {
        if (student.isRegistered(this.onlineCourse)) {
            this.onlineCourse.addStudent(student);
        } else {
            throw new UnsupportedOperationException("프라이빗 코스에 사전 등록된 학생만 정식 등록 가능합니다.");
        }
    }

    @Override
    public void addReview(Student student, String review) {
        if (this.onlineCourse.isRegisteredStudent(student)) {
            this.onlineCourse.addReview(review);
        } else {
            throw new UnsupportedOperationException("프라이빗 코스에 사전 등록된 학생만 리뷰를 남길 수 있습니다.");
        }
    }
}
```

</TabItem>

<TabItem value="published" label="PublishedState.java">

```java
@RequiredArgsConstructor
public class PublishedState implements State {
    private final OnlineCourse onlineCourse;

    @Override
    public void addStudent(Student student) {
        this.onlineCourse.addStudent(student);
    }

    @Override
    public void addReview(Student student, String review) {
        this.onlineCourse.addReview(review);
    }
}
```

</TabItem>

</Tabs>

### Client (Test code)
#### ClientTest.java
```java
class ClientTest {
    private Student falcon;
    private Student vladimir;
    private OnlineCourse onlineCourse;

    @BeforeEach
    void beforeEach() {
        falcon = new Student("falcon");
        vladimir = new Student("vladimir");
        onlineCourse = new OnlineCourse();
    }

    @DisplayName("드래프트 상태 리뷰 등록 실패")
    @Test
    void addReviewFailTest() {
        assertThrows(UnsupportedOperationException.class, () -> onlineCourse.registerReview(falcon, "나 팰콘인데 이거 ㄹㅇ 개좋음"));
    }

    @DisplayName("프리이빗 상태 사전 미등록 학생 등록 실패")
    @Test
    void addStudentFailTest() {
        this.onlineCourse.changeState(new PrivateState(onlineCourse));

        falcon.registerCourse(onlineCourse);
        onlineCourse.registerStudent(falcon); // 성공

        // vladimir 는 미등록
        assertThrows(UnsupportedOperationException.class, () -> onlineCourse.registerStudent(vladimir));
    }

    @DisplayName("공개 수업은 모든 학생 등록 및 리뷰 등록 성공")
    @Test
    void addStudentsAndReviewsTest() {
        this.onlineCourse.changeState(new PublishedState(onlineCourse));

        onlineCourse.registerStudent(falcon);
        onlineCourse.registerReview(vladimir, "나 블라디인데 이거 듣지도 않았지만 리뷰 등록 된다해서 해봄 ㅋ");
    }
}
```

### Class Diagram
![State pattern class diagram](screenshots/statepattern_diagram.png)

## Pros and Cons

### 장점
- **상태에 따른 행동을 깔끔하게 분리할 수 있다.** <br></br>
코드를 위에서 아래로 읽어 시나리오를 분석할 수 있게 된다.
- **상태 - 행위별로 단위 테스트가 쉬워진다.**
- **Client 기존 코드 변경 없이 새로운 상태 확장이 가능하다. (OCP)**

### 단점
- **복잡도 증가**
- **상태 개수가 증가한 만큼 클래스를 생성해야하고 관리해야함.** <br></br>
상태 조건 - 트리거가 완벽하게 구성된 것 같지만 이렇게 복잡한 상태가 존재할 경우 <br></br>
Node.js 같은 Event-Driven 프로그래밍을 제공하는 플랫폼을 사용하는 것이 더 나아보인다.

---
## 🔗 Reference
[코딩으로 학습하는 GoF의 디자인 패턴 - 백기선](https://www.inflearn.com/course/%EB%94%94%EC%9E%90%EC%9D%B8-%ED%8C%A8%ED%84%B4)