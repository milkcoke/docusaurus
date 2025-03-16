---
title: Abstract Factory Pattern
description: Understand about the abstract factory pattern
tags: [design-pattern, create-pattern]
keywords: [design pattern, abstract factory pattern]
last_update:
  date: 2025-03-16
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview
제품 군을 만드는데 유용한 패턴.

## When to use
그룹 단위의 여러 구성요소 객체를 만들어야 할 때

## How to use
![Abstract factory pattern](./screenshots/abstract_factory_pattern.svg)

1. Product 를 정의한다.
2. Product 의 구성 요소가 많다. -> Abstract factory 패턴 적용 신호
3. 구성 요소를 정의한다.
4. 구성 요소를 생성하는 Abstract factory 인터페이스 또는 추상 클래스를 정의한다.
5. Abstract factory 에게 Product 구성 요소 생성을 위임한다. 

### Element
각 그룹의 구성요소. 

<Tabs>
<TabItem value="button" label="Button">

```java
public interface Button {
  void click();
}
```
</TabItem>
<TabItem value="window-button" label="Window Button">

```java
public class WindowsButton implements Button {
  @Override
  public void click() {
    System.out.println("Windows button clicked");
  }
}
```
</TabItem>
<TabItem value="mac-button" label="Mac Button">

```java
public class MacButton implements Button {
  @Override
  public void click() {
    System.out.println("Mac button clicked");
  }
}
```
</TabItem>
<TabItem value="checkbox" label="Checkbox">

```java
public interface CheckBox {
  void click();
}
```
</TabItem>
<TabItem value="windows-checkbox" label="Windows Checkbox">

```java
public class WindowsCheckBox implements CheckBox {
  @Override
  public void click() {
    System.out.println("Windows checkbox clicked");
  }
}
```
</TabItem>
<TabItem value="mac-checkbox" label="Mac Checkbox">

```java
public class MacCheckBox implements CheckBox {
  @Override
  public void click() {
    System.out.println("Mac checkbox clicked");
  }
}
```
</TabItem>
</Tabs>

### Product Factory
Abstract Factory 인터페이스 <br></br>
각각의 구성 요소(Button, CheckBox) 생성 역할 담당.

<Tabs>
<TabItem value="gui-factory" label="GUIFactory">

```java
public interface GUIFactory {
  Button createButton();
  CheckBox createCheckbox();
}
```
</TabItem>
<TabItem value="windows-gui-factory" label="Windows GUI Factory">

```java
public class WindowsGuiFactory implements GUIFactory {
  @Override
  public Button createButton() {
    return new WindowsButton();
  }

  @Override
  public CheckBox createCheckbox() {
    return new WindowsCheckBox();
  }
}
```
</TabItem>

<TabItem value="mac-gui-factory" label="Mac GUI Factory">

```java
public class MacGuiFactory implements GUIFactory {
  @Override
  public Button createButton() {
    return new MacButton();
  }

  @Override
  public CheckBox createCheckbox() {
    return new MacCheckBox();
  }
}
```
</TabItem>
</Tabs>

### Product
객체의 '사용'부분만 신경씀. <br></br>
'구성요소 생성' (그룹군) 은 Factory 에게 위임.

<Tabs>
<TabItem value="gui" label="GUI">

```java
public interface GUI {
  void display();
}
```
</TabItem>
<TabItem value="windows-gui" label="Windows GUI">

```java
@RequiredArgsConstructor
public class WindowsGui {
  private final Button button;
  private final CheckBox checkBox;
  public WindowsGui(GuidFactory factory) {
    this.button = factory.createButton();
    this.checkBox = factory.createCheckBox();
  }
  public void display() {
    System.out.println("showing windows button and checkbox..");
  }
}
```
</TabItem>
<TabItem value="mac-gui" label="Mac GUI">

```java
@RequiredArgsConstructor
public class  MacGui {
  private final Button button;
  private final CheckBox checkBox;
  public MacGui(GuidFactory factory) {
    this.button = factory.createButton();
    this.checkBox = factory.createCheckBox();
  }

  public void display() {
    System.out.println("showing mac button and checkbox..");
  }
}
```
</TabItem>
</Tabs>

## Conclusion
Product 가 구성 요소를 어떻게 조합할지 모른 체, 제품을 정의할 수 있게되었다.
:::info
**Product 객체 사용에만 관심을 갖고, 구성 요소 생성은 Factory 로 위임했다.** <br></br>
구성 요소 추가, 변경은 오로지 Factory 에서만 이뤄진다.
:::

이로써 WindowsGUI, MacGUI 제품의 Button, CheckBox 를 유연하게 구성할 수 있게됐다. <br></br>
Abstract factory 패턴이 없다면 다음과 같이 구성요소를 의미하는 Product 클래스가 지속적으로 늘어날 수도 있다.

- WindowsButtonMacCheckBoxGUI
- WindowsButtonWindowsCheckBoxGUI
- MacButtonMacCheckBoxGUI
- MacButtonWindowsCheckBoxGUI

즉, 구성요소가 하나 늘어날 때마다 사용보다 '생성' 조합을 의미하는 클래스가 늘어날 수 있다. <br></br>
**클래스 개수 == 기본 Product 수 * Element 수**





