# Project Peach sorbet

## ガイドライン

### 1. スタイル

---

#### 1.1 Indent(インデント)
基本的にTAB、そして1TAB = 4Space。

---

#### 1.2 未使用な変数・パラメーター
アンダバー(_)を使ってください  
例）
```
const testFunc = (_apple: string = "", banana: string = "") => {
    return banana;
}
```

---

### 2. Directory 構造

```
@ = src

/src/
    assets/     - 静的アセット
    logics/     - ロジック全般
    openapi/    - APIのDocumentation
    router/     - APIロジック
    stores/     - データマップなど
```

---

### 3. Error Handling
serverError() と handleError()を使ってください。  
詳細は@/router/apiLogics/_template.ts

---

### 4. API Response



