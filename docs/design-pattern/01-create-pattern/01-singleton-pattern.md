---
title: Singleton Pattern
description: Understand about singleton pattern
tags: [design-pattern, create-pattern]
keywords: [design pattern, singleton]
last_update:
    date: 2024-03-09
---

# Multiple Approach

## (1) Native approach

```java
class Settings {
  private static Settings instance;
  
  private Settings(){}
  public static Settings getInstance() {
    if (instance == null) this.instance = new Settings();
    return instance;
  }
}
```

This approach is simple but not thread-safe.

## (2) Static Factory method approach
```java
class Settings {
  private Settings(){}
  
  // Thread safe since this is static instance.
  // Eager loading
  private final static Settings INSTANCE = new Settings();
  
  public static Settings getInstance() {
    return INSTANCE;
  }
}
```

This approach thread-safe but eager loading. \
This class always be created even though you don't use this class.


## (3) BillPugh approach
```java
class Settings {
  private Settings(){}
  // Thread safe
  // Lazy loading
  private static class SettingsHolder {
    private final static Settings INSTANCE = new Settings();
  }
  
  public static Settings getInstance() {
    return SettingsHolder.INSTANCE;
  }
}
```

This approach is thread-safe and also be loaded lazily.

## (4) Enum approach
```java
enum Settings {
  INSTANCE;
}
```
Enum is best simple approach. \
Enum is thread-safe but always be loaded eagerly. \
And does not support 'inheritance' from other class. \
Enum already inherits from Enum class in `java.lang.Enum.java`.

# Summary
| Approach              | Pros                                         | Cons                                                    |
|-----------------------|----------------------------------------------|---------------------------------------------------------|
| Naive                 | Simple                                       | Not thread-safe, Eager Loading                          |
| Static factory method | Thread-safe                                  | Eager Loading                                           |
| BillPugh              | Relative simple\ Thread-safe\ Lazy Loading   |                                                         |
| Enum                  | Best simple\Thread-safe \ Prevent reflection | Eager Loading  \ Unable to inheritance from other class |


> **Use BillPugh approach when you have to lazy load or required to inheritance** \
> **In all other situation, use Enum**
