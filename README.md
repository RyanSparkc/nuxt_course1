# 旅館預訂系統 - Nuxt 3 實作

這是一個使用 Nuxt 3 開發的旅館預訂系統示範專案。專案展示了如何使用 Nuxt 3 的各種功能來建立一個完整的旅館預訂網站。

## 專案功能

- 首頁展示
- 房間列表瀏覽
- 房間詳細資訊查看
- 預訂流程
- 會員系統（登入/註冊）

## 技術實作

- **Nuxt 3**: 使用最新的 Nuxt 3 框架
- **Vue 3**: 採用組合式 API
- **路由系統**:
  - 動態路由 (`[room]`, `[bookingId]`)
  - 巢狀路由結構
  - 404 頁面處理 (`[...slug].vue`)
- **UI 元件**:
  - Swiper 輪播
  - 日期選擇器
  - 載入動畫

## 專案結構

```text
pages/
├── index.vue                 # 首頁
├── rooms/                    # 房間相關頁面
│   ├── index.vue            # 房間列表
│   └── [room]/              # 動態路由
│       ├── index.vue        # 房間詳情
│       ├── booking.vue      # 預訂頁面
│       └── confirmation/
│           └── [bookingId].vue  # 預訂確認
├── account/                  # 會員相關
│   ├── AccountLogin.vue     # 登入
│   └── AccountSignup.vue    # 註冊
└── [...slug].vue            # 404 頁面

components/                   # 共用元件
├── rooms/
│   ├── BookingLoading.vue   # 預訂載入動畫
│   └── DatePickerModal.vue  # 日期選擇器
```

## 開始使用

1. 安裝依賴：

```bash
npm install
```

1. 開發模式：

```bash
npm run dev
```

1. 生產環境建置：

```bash
npm run build
npm run preview
```

## 注意事項

- 本專案使用 Vite 作為建置工具
- 使用 Node.js 版本 = 20.16.0
- 開發時請確保安裝所有必要依賴

## 相關文件

- [Nuxt 3 文件](https://nuxt.com/docs)
- [Vue 3 文件](https://vuejs.org/)
