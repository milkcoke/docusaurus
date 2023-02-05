---
title: Adapter Pattern
description: Understand about adapter pattern
tags: [design-pattern, structure-pattern]
keywords: [design pattern, adapter pattern]
last_update:
    date: 2023-01-30
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**기존 코드를 클라이언트가 사용하는 인터페이스의 구현체로 바꿔주는 패턴**

![Adapter_Pattern](screenshots/Adapter_Pattern.svg)


## Why to use
클라이언트가 사용하는 인터페이스를 따르지 않는 기존 코드를 재사용할 수 있게함. <br></br>
인터페이스가 서로 달라도 같이 사용할 수 있게끔 호환성을 갖추게해줌.

## When to use
- 외부 라이브러리와 기존 코드를 연결해야할 때

![Adapter pattern before diagram](screenshots/adapter_pattern_before_diagram.png)

### Example Code

#### Client
LoginHandler 는 Client 에 해당한다. <br></br>
UserDetailsService 라는 Target 을 참조하고있다.

```java
@RequiredArgsConstructor
public class LoginHandler {
    private final UserDetailsService userDetailsService;

    public String login(String username, String password) {

        UserDetails userDetails = userDetailsService.loadUserByName(username);
        // 입력한 이름과 비번이 맞으면 return

        if (userDetails.getPassword().equals(password)) {
            return userDetails.getUserName();
        } else {
            throw new IllegalArgumentException();
        }
    }
}
```

#### Target
<Tabs>
<TabItem value="target1" label="UserDetails.java">

```java
public interface UserDetails {
    String getUserName();
    String getPassword();
}
```

</TabItem>

<TabItem value="target2" label="UserDetailsService.java">

```java
public interface UserDetailsService {
    UserDetails loadUserByName(String username);
}
```

</TabItem>
</Tabs>

#### Adaptee
<Tabs>
<TabItem value="adaptee-1" label="Account.java">

```java
@Getter
@AllArgsConstructor
public class Account {
    private String name;
    private String password;
    private String email;
}
```

</TabItem>

<TabItem value="adaptee-2" label="AccountService.java">

```java
public class AccountService {
    private HashMap<String, Account> accountHashMap = new HashMap();
    public Account createByUserName(String userName) {
        Account account = new Account(userName, userName, userName);
        this.accountHashMap.put(userName, account);
        return account;
    }

    public Account findAccountByUserName(String userName) {
        return this.accountHashMap.get(userName);
    }

    public void updateAccount(Account account) {

    }
}
```

</TabItem>
</Tabs>

## How to use
외부 라이브러리에 존재하는 인터페이스 UserDetails, UserDetailsService 와 <br></br>
앱에서만 사용하는 Account, AccountService 를 연결할 것인가? <br></br>

#### 관계 정리

| Class Name                      | Role    |
|---------------------------------|---------|
| LogInHandler                    | Client  |
| UserDetails, UserDetailsService | Target  |
| Account, AccountService         | Adaptee |

Target 과 Adaptee 를 연결할 2개의 Adapter 클래스 `AccountUserDetailsAdapter`, `AccountUserDetailsServiceAdapter` 를 정의한다. <br></br>
다음과 같이 Target 과 Adaptee 를 맵핑하여 어댑터를 구현할 수 있다.
#### AccountUserDetailsAdapter.java

UserDetails (Target) 을 구현하고 Account (Adaptee) 를 참조한다. 
```java
@RequiredArgsConstructor
public class AccountUserDetailsAdapter implements UserDetails {
    private final Account account;

    @Override
    public String getUserName() {
        return this.account.getName();
    }

    @Override
    public String getPassword() {
        return this.account.getPassword();
    }
}
```

#### AccountUserDetailsServiceAdapter.java
UserDetailsService (Target) 을 구현하고 AccountService (Adaptee) 를 참조한다.
```java
@RequiredArgsConstructor
public class AccountUserDetailsServiceAdapter implements UserDetailsService {
    private final AccountService accountService;

    @Override
    public UserDetails loadUserByName(String username) {
        Account foundAccount = this.accountService.findAccountByUserName(username);
        return new AccountUserDetailsAdapter(foundAccount);
    }
}
```

### Class Diagram
![Adapter pattern class diagram](screenshots/adapter_pattern_after_diagram.png)

## Pros and Cons

### 장점
- 기존 코드 Adaptee 변경 없이 Adapter를 정의하여 원하는 인터페이스를 구현할 수 있다. (OCP)
- 어댑터는 오로지 Target - Adaptee 를 **연결하는 역할만 한다.** (SRP) <br></br> 

### 단점
- 클래스 수 증가로 인한 복잡도 증가

## Java 에 적용된 어댑터 패턴 예제
#### AdapterInJava.java
- 생성자: Adapter
- 인자: Adaptee
- 반환 타입: Target

으로 구성된 예제를 살펴보자.
```java
public class AdapterInJava {
    public static void main(String[] args) {
        

        String[] champNames = new String[]{"카르마", "럼블", "바이"};
        
        // List<String> 은 Target
        // Arrays.asList() 는 Adapter
        // champNames 는 Adaptee
        List<String> champNameList = Arrays.asList(champNames);

        // 반환된 Enumeration<String> 은 Target
        // Collections.enumeration() 는 Adapter
        // ChampNameList 는 Adaptee
        Enumeration<String> enumeration = Collections.enumeration(champNameList);
    }
}
```

---
## 🔗 Reference
[GoF 디자인 패턴 - 백기선](https://www.inflearn.com/course/%EB%94%94%EC%9E%90%EC%9D%B8-%ED%8C%A8%ED%84%B4/dashboard)