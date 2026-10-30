# FilterHub EEAT 框架 (E-E-A-T Plan)

> 阶段：Phase 2 — EEAT 规划
> 主体（占位）：**Qinghe Yinghui Filter**（清河滤清器产业集群定位）
> 域名（占位）：`chinafilterhub.com`
> 日期：2026-10-29
> 状态：**本文件所有实体字段均为占位符（provisional），无工商核验数据前不写实值。**

## 1. 主体与占位符纪律

**硬约束（零编造）**：Qinghe Yinghui Filter 为暂定主体，尚无任何工商核验数据（统一社会信用代码、法定代表人、注册资本、注册地址、成立日期、联系电话、邮箱域名所有权）。在取得权威核验（工商/百科/资质/实拍）前：

- **品牌名 / 法律实体名 / 地址 / 电话 / 邮箱 / 信用代码 / 成立年份** 一律用显式占位符，格式统一为 `[provisional: <字段>]`。
- **禁止**写入任何「看起来真实」的实值（哪怕是行业典型值、近似值）。
- Organization schema 只发已确认字段；缺失字段**省略**，页面主体披露区标注「available on request / provisional」。

### 占位符清单（需后续核验）

| 字段 | 当前状态 | 占位值 | 核验来源 |
|---|---|---|---|
| 品牌名 | provisional | `Qinghe Yinghui Filter`（暂定，待确认） | 用户确认 |
| 法律实体全称（英） | provisional | `[provisional: legalName]` | 工商核验 |
| 法律实体全称（中） | provisional | `[provisional: legalNameZh]` | 工商核验 |
| 统一社会信用代码 | provisional | `[provisional: creditCode]` | 工商核验（CN-USCC） |
| 注册地址 | provisional | `[provisional: address]` | 工商核验 |
| 成立年份 | provisional | `[provisional: establishedYear]` | 工商核验 |
| 法定代表人 | provisional | `[provisional: legalRep]` | 工商核验 |
| 注册资本 | provisional | `[provisional: registeredCapital]` | 工商核验 |
| 电话/WhatsApp | provisional | `[provisional: phone]` | 用户确认 |
| 邮箱 | provisional | `[provisional: email]` | 用户确认 + 域名所有权 |
| 域名所有权 | provisional | `chinafilterhub.com`（占位） | DNS/ICP 备案 |
| 工厂面积/员工/产能 | **pending（非占位）** | 综合 5 站，无主体自身数据 | 实拍 + 主体确认 |
| 认证/资质 | **pending（非占位）** | 无主体自身认证 | 资质证书实拍 |

> 区分：`provisional` = 主体字段待核验（结构在、值空缺）；`pending` = 规格字段待补充（5 站未公开）。两者都**不填推测值**。

## 2. 品牌-实体-域名关系说明（模板）

> 用于公司页与 Organization schema 的诚实披露，防止「品牌 ≠ 法律实体 ≠ 域名」被误读。

```
[品牌名] 是 [chinafilterhub.com] 主站展示的品牌。
该品牌的运营法律实体为 [provisional: legalName]（[provisional: legalNameZh]），
统一社会信用代码 [provisional: creditCode]，注册于 [provisional: address]。
本页所示品牌/主体/域名信息为暂定（provisional），
待工商核验完成后更新为可溯源的权威值。
```

**三处口径一致**（Organization schema、页面署名、数据子站 publisher.name）：品牌名用 `Qinghe Yinghui Filter`（不改动），法律实体全称仅在 `legalName` 字段，待核验。

## 3. 清河产业集群背景素材（框架性）

> 来源：5 站抓取 + 既有知识整合（hbxueyuan 位于清河县、hycarfilter 兄弟项目已核验清河宏盈主体）。以下为**框架性背景**，非本主体自身事实，需区分标注。

### 3.1 已采集到的集群事实（可安全引用，标注来源）

- hbxueyuan（河北雪缘滤清器）位于**中国河北省清河县**（`verified`，站点地址）。
- hycarfilter 兄弟项目主体「清河县宏盈汽车零部件有限公司」位于清河县（已核验，非本主体）。

### 3.2 框架性陈述（需主体确认后才可写实）

清河县（河北省邢台市）是中国滤清器/汽车零部件产业集群区域之一，集聚滤清器与相关配件制造商。**此陈述为区域背景框架，须在本主体工商核验 + 工厂实拍后，方可与主体绑定为「我们的产业集群优势」叙述。**

### 3.3 诚实边界

- 产业集群定位**不能替代**主体自身的资质证据。E-E-A-T 的「经验/专业/权威/可信」靠：真实工厂实拍、质检设备、认证证书、可溯源的客户案例——**当前全部 provisional/pending**。
- 不得用「清河产业集群」暗示本主体拥有集群内其他厂商的资质或规模。

## 4. 后续核验清单（Checklist）

| # | 核验项 | 方法 | 状态 |
|---|---|---|---|
| 1 | 统一社会信用代码 | 国家企业信用信息公示系统 / 爱企查 / 天眼查 | 待办 |
| 2 | 法定代表人 + 注册资本 + 成立日期 + 经营范围 | 同上 | 待办 |
| 3 | 注册地址 + 工厂地址 | 工商 + 实拍 | 待办 |
| 4 | 域名备案/所有权（chinafilterhub.com） | ICP 备案查询 / DNS | 待办 |
| 5 | 品牌商标 | 商标局查询 | 待办 |
| 6 | 认证证书（ISO 9001 等） | 证书实拍（编号可溯源） | 待办 |
| 7 | 工厂实拍（产线/质检/仓储） | 供应商实拍图 | 待办 |
| 8 | 客户案例（可背书） | 合同/PO/客户授权 | 待办 |
| 9 | 生产设备参数（本主体） | 实拍 + 设备铭牌 | 待办 |
| 10 | 邮箱域名所有权 + SPF/DKIM/DMARC | 域名 DNS 记录 | 待办 |

## 5. 诚实披露纪律

1. **claimed ≠ accredited**：目录/列表里的认证、资质一律标「claimed（声称），未独立认可」，除非有可溯源认证记录。
2. **evidence ≠ approval**：有公开足迹（域名可访问、站点存在）≠ 认证已认可；证据不升级为认可。
3. **品牌史 vs 法律实体史**：如品牌/团队沿革早于法律实体注册，两者分开披露，不合并成「成立 N 年」的虚假连续史。
4. **制造模式如实**：自有生产为核心，或「部分品类与协作工厂合作」——不虚构代工厂。
5. **数据状态随字段**：每字段带 `verified/catalog-confirmed/reference/pending/provisional`，混字段产品按字段级标注。
6. **占位符可见**：`provisional` 字段在页面渲染为「待核验」而非留空误导，或省略不发。
