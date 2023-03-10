---
title: Decorator Pattern
description: Understand about decorator pattern
tags: [design-pattern, structure-pattern]
keywords: [design pattern, decorator pattern]
last_update:
    date: 2023-01-24
---

## Overview
π **λ°μ½λ μ΄ν° ν¨ν΄μ λμ μΌλ‘ λ°νμμ λΆκ°κΈ°λ₯μ μΆκ°ν  μ μκ²νλ λμμΈ ν¨ν΄μ΄λ€.**

## When to use

νΉμ  μ¬μ©μ (Client) κ° λκΈμ λ€λ μλΉμ€κ° μλ€κ³  νμ. <br></br>
μ΄ λ, λκΈ λμ λΆμ ".." κ°μ λ¬Έμμ΄μ μλμΌλ‘ trim μ²λ¦¬κ° νμνλ€λ μκ΅¬μ¬ν­μ΄ μμ΄
TrimmingCommentService ν΄λμ€λ₯Ό μμλ°μ κ΅¬μ±νλ€.
#### Client.java
```java
@Component
@Getter
public class Client {
    private CommentService commentService;

    @Autowired
    public Client(CommentService commentService) {
        this.commentService = commentService;
    }

    public void writeComment(String comment) {
        commentService.addComment(comment);
    }
}
```

#### CommentService.java
```java
@Component
public class CommentService {
    private List<String> comments = new ArrayList();

    public void addComment(String comment) {
        this.comments.add(comment);
    }
}
```

#### TrimmingCommentService.java
```java
public class TrimmingCommentService extends CommentService {

    @Override
    public void addComment(String comment) {
        super.addComment(getTrimmedComment(comment));
    }

    // λΆλͺ ν΄λΌμ΄μΈνΈ μ½λ λ³κ²½ μμ΄ μλ‘μ΄ κΈ°λ₯ νμ₯μ λλͺ¨νμ§λ§
    // Compile time μ μ΄λ―Έ μ΄ κΈ°λ₯μ μλ²½ν fix ν΄μΌλ§ νλ€λκ² λ¨μ μ΄λ€.
    // μ μ°νμ§ μλ€. Runtime μμ λ°κΏμΌνλ€λ©΄?
    private String getTrimmedComment(String comment) {
        return comment.replace("..","");
    }
}
```

**νμ¬κΉμ§μ κ΅¬ν λ΄μ­μ ν΄λμ€ λ€μ΄μ΄κ·Έλ¨μΌλ‘ νννλ©΄ λ€μκ³Ό κ°λ€.**
![Comment Service Diagram](screenshots/Comment_service_diagram.png)

ν΄λΌμ΄μΈνΈμμ  λ€μκ³Ό κ°μ΄ Trimming λ λκΈμ μμ±νλ μλΉμ€λ₯Ό μ¬μ©ν  μ μμ κ²μ΄λ€.
#### ClientCommentTest.java
```java
import m.falcon.designpattern.domain.comment.service.TrimmingCommentService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.*;

class ClientCommentTest {

    @DisplayName("λκΈ λ¬κΈ° .. μ κ±° νμ€νΈ")
    @Test
    void writeTrimCommentTest() {
        // μμ±μ DI
        // highlight-start
        // λ§μ½, spam filtering μ΄ νμνλ€λ©΄?
        Client client = new Client(new TrimmingCommentService());
        // highlight-end
        client.writeComment("..μΉ΄λ₯΄λ§..");

        String trimmedComment = "μΉ΄λ₯΄λ§";
        assertThat(client.getCommentService().getComments().get(0)).isEqualTo(trimmedComment);
    }
}
```

### λ¬Έμ μ 
λ§μ½ "Http" κ° ν¬ν¨λ λκΈ μμ±μ λ°©μ§νλ νν°λ§μ΄ νμνλ€λ©΄ μ΄λ»κ² ν΄μΌν κΉ? <br></br>
**μμμ ν΅ν΄ SpamFilteringCommentService λ₯Ό κ΅¬ννλ©΄ λ  κ²μ΄λ€.**

#### HttpFilterCommentService.java
```java
public class HttpFilterCommentService extends CommentService {
    @Override
    public void addComment(String comment) {
        if (isSpamComment(comment)) {
            return;
        }
        super.addComment(comment);
    }

    private Boolean isSpamComment(String comment) {
        return comment.contains("http://");
    }
}
```

κ·Έλ λ€λ©΄ ν΄λΌμ΄μΈνΈλ μμ±μ μ£Όμμ λ€μκ³Ό κ°μ΄ λ³κ²½νμ¬ μ¬μ©ν΄μΌνλ€.
```java
// highlight-start
Client client = new Client(new HttpFilterCommentService());
// highlight-end
client.writeComment("http://karma.com");
```
> λ λμκ°μ, Http νν°λ§κ³Ό Trimming μ μ±μ λμμ μ μ©νκ³ μΆλ€. <br></br>
κ²½μ°μ λ°λΌμλ λμ€ ν μ μ±λ§ μ μ©νκ³  μΆλ€. μ΄λ»κ² ν΄μΌν κΉ?

#### 1. μμ ν΄λμ€ μΆκ°
μμκ³Ό μμ±μ μ£Όμμ ν΅ν΄ λ¬Έμ λ₯Ό ν΄κ²°νλ λ°©λ²μ΄λ€. <br></br>
ν΄λμ€ λ€μ΄μ΄κ·Έλ¨μ ννν΄λ³΄λ©΄ λ€μκ³Ό κ°μ΄ νμν μ μ±μ΄ λμ΄λ  λλ§λ€ ν΄λμ€ μΆκ°κ° λΆκ°νΌνλ€.
![Comments Service Diagrams](screenshots/Comment_service_diagrams.png)


> μλ°μμ μμμ λ¨μΌ μμλ§ κ°λ₯νκ³ , μ»΄νμΌ νμμ μ μ± μ€μ μ΄ μλ£λμ΄μΌ νκΈ° λλ¬Έμ μ μ°μ±μ΄ λ¨μ΄μ§λ€. <br></br>
> π‘ Decorator ν¨ν΄μ μ΄λ¬ν μν©μ λ¬Έμ λ₯Ό ν΄κ²°νκΈ° μν΄ μ‘΄μ¬νλ€.

> π **λ°μ½λ μ΄ν° ν¨ν΄μ λ°νμμ μ μ±μ λ³κ²½νμ¬ λ€λ₯΄κ² λμνλ μ μ°ν μ½λ μμ±μ λλ ν¨ν΄μ΄λ€.**

## Why to use
λ°νμμ λμ μΌλ‘ λ€λ₯Έ μλΉμ€ (κΈ°λ₯)μ μ¬μ©ν  μ μλλ‘ νκ² νκΈ°μν΄.

## How to use
νΉμ  Component λ₯Ό νλ Decorator λ₯Ό Interface λλ abstract ν΄λμ€λ‘ λ§λ€κ³  <br></br>
κ΅¬μ²΄ Decorator ν΄λμ€λ₯Ό νλμ© μΆκ°νλ€.

μ΄ μμ μμλ `CommentService` κ° Component λ€.

![Decorator Class diagram](screenshots/decorator_diagram.png)

#### CommentService.java
```java
public interface CommentService {
    void addComment(String comment);
    void printAllComments();
}
```

#### DefaultCommentService.java
```java
@Component
@Getter
public class DefaultCommentService implements CommentService {
    private List<String> comments = new ArrayList();

    @Override
    public void addComment(String comment) {
        this.comments.add(comment);
    }

    @Override
    public void printAllComments() {
        for (var comment : comments) {
            System.out.println(comment);
        }
    }
}

```

#### CommentDecorator.java
```java
@Component
@RequiredArgsConstructor
public abstract class CommentDecorator implements CommentService {
    // κ΅¬νμ²΄κ° μλ Interface(μ­ν ) μλ§ μμ‘΄ => DIP μμΉ μ€μ
    private final CommentService commentService;

    @Override
    public void addComment(String comment) {
        this.commentService.addComment(comment);
    }

    @Override
    public void printAllComments() {
        this.commentService.printAllComments();
    }
}
```
#### HttpFilteringCommentDecorator.java
```java
public class HttpFilteringCommentDecorator extends CommentDecorator {
    public HttpFilteringCommentDecorator(CommentService commentService) {
        super(commentService);
    }
    @Override
    public void addComment(String comment) {
        if (isSpamComment(comment)) {
            return;
        }
        super.addComment(comment);
    }

    private Boolean isSpamComment(String comment) {
        return comment.contains("http://");
    }
}
```

#### TrimmingCommentDecorator.java
```java
public class TrimmingCommentDecorator extends CommentDecorator {
    public TrimmingCommentDecorator(CommentService commentService) {
        super(commentService);
    }

    @Override
    public void addComment(String comment) {
        super.addComment(trimComment(comment));
    }

    private String trimComment(String comment) {
        return comment.replace("..", "");
    }
}
```

### ClientTest.java
```java
class ClientCommentTest {
    private CommentService commentService = new DefaultCommentService();
    private static boolean enabledHttpFilter = true;
    private static boolean enabledTrimFilter = true;

    @DisplayName("Http λ° Trim νν° λμ μ μ©")
    @Test
    void dynamicCommentPolicyApplyTest() {
        // π‘Decorator λ₯Ό ν΅ν μμ±μ μ£ΌμμΌλ‘ Http, Trimming λμ νν° μ μ©
        if (enabledHttpFilter) {
            commentService = new HttpFilteringCommentDecorator(commentService);
        }
        if (enabledTrimFilter) {
            commentService = new TrimmingCommentDecorator(commentService);
        }

        Client client = new Client(commentService);
        client.writeComment("μΉ΄λ₯΄λ§..");
        client.writeComment("http://karma.com");
        client.writeComment("https://karma.com");
        client.getCommentService().printAllComments();
    }
}
```
### μΆλ ₯ κ²°κ³Ό
Http, Trimming νν° λͺ¨λ μ μ©λ κ²μ νμΈν  μ μλ€.
```text
μΉ΄λ₯΄λ§
https://karma.com
```
μ΄μ²λΌ λ°νμ λ΄μ λμ μΌλ‘ νν°λ§ μ μ±μ μ μ©ν μλ, μ μ©νμ§ μμ μλ μλ€.

## λ΄λΆ λμ μ€λͺ μμ
μ΄λ»κ² νλμ κ°μ²΄λ‘λΆν° ν λ²μ addComment λ©μλ νΈμΆλ‘ μ¬λ¬ μ μ±μ λͺ¨λ μ μ©ν  μ μλ κ²μΌκΉ? <br></br>
μμκ³Ό ν¨κ» νν€μ³λ³΄μ

<iframe width="900" height="600" src="https://www.youtube.com/embed/0XQNSO_0kSc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Pros and Cons
### μ₯μ 
- μλ‘μ΄ ν΄λμ€ μμ± μμ΄ κΈ°μ‘΄ κΈ°λ₯ μ‘°ν© <br></br>
ex) HttpFilterDecorator + TrimmingFilterDecorator μ‘°ν© <br></br>
μ‘°ν©μ΄ λΆκ°λ₯νλ€λ©΄ ν ν΄λμ€ λ΄μ 2κ°μ§ μ΄μμ νν°λ₯Ό κ°μ΄ κ±Έμ΄μΌν¨.
- λ°νμμ λμ μΌλ‘ κΈ°λ₯ κ΅μ²΄

### λ¨μ 
- λ°μ½λ μ΄ν° μ‘°ν© μ½λ λ³΅μ‘μ± μ¦κ°
> λ°μ½λ μ΄ν° ν¨ν΄μ μ¬μ©νμ§ μμ λ μλΈ ν΄λμ€ μκ° $O(2^N)$ μΌλ‘ λμ΄λ  μ μκΈ° λλ¬Έμ λ¨μ μ΄λΌ λ³΄κΈ°μ λ―Όλ§ν¨.

#### SRP μλ° μ½λ
```java
if (enabledHttpFilter && enabledTrimFilter) {
    // μ μ μΌλ‘ λͺ¨λ  μ‘°ν©μ λν μμ ν΄λμ€κ° μ‘΄μ¬ν΄μΌν¨ => μλΈ ν΄λμ€ μ κΈκ²©νκ² μ¦κ° μν
    // μ¬λ¬ μ±μμ κ°λ μλΈ ν΄λμ€ μμ±μ Single Responsibility Principal (SRP) μλ°°
    commentService = new HttpFilterAndTrimmingComment(); // λΆλ¦¬λ  μ μλ Filter λ‘μ§ 2κ°λ₯Ό νλμ ν΄λμ€κ° λ¬Άμ ννλ‘ κ°μ§κ³ μλ€.
}
```

---
## π Reference
[GoF λμμΈ ν¨ν΄ - λ°±κΈ°μ ](https://www.inflearn.com/course/%EB%94%94%EC%9E%90%EC%9D%B8-%ED%8C%A8%ED%84%B4/dashboard)