---
last_update:
    date: 2023-01-06
---

## Environment

#### build.gradle.kts
```gradle
plugins {
    kotlin("jvm") version "1.7.21"
    application
}

repositories {
    mavenCentral()
}

dependencies {
    testImplementation(kotlin("test"))
    testImplementation("org.junit.jupiter", "junit-jupiter", "latest")
    testImplementation("org.assertj", "assertj-core", "3.12.0")
}

tasks.withType<KotlinCompile> {
    kotlinOptions.jvmTarget = "18"
}
```