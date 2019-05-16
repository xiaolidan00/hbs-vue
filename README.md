# hbs-vue

> 好班手考勤系统

## 功能设计

### 登录注册

>登录（无操作一小时退出登录）

>注册:选择注册类型，填写个人信息，是否有公司或班级，创建/加入

>忘记密码：通过安全问答获得修改密码权限（每天最多三次）

### 主页

> 工作、消息、个人

#### 工作

>考勤:地理定位签到，地图

>请假

>审批:补考勤

>统计：年/月/周统计考勤签到签退情况，图表

#### 消息

>消息:分类（发出，收到，部门，公司），工作任务汇报，抄送人已读未读情况

>审批请假回复消息：同意与否

>公告：分类标签

>发送消息

#### 个人

>个人账号信息

>班级或公司：加入、退出、创建

>版本信息

>账号安全：登录日志，修改密码，安全问答

>语言设置

>退出账号

#### 权限设置

**学生**

>班委工作栏有管理模块:

(1)回复审批和请假:班委不能审批自己

(2)制定修改考勤规则:上下课签到签退时间,考勤地点

(3)制定修改学期日程表:课程表和上课日，放假日

(4)管理班级成员:邀请成员，通过申请，删除成员，设置成员权限（班长最多两个）

(5)修改班级考勤记录

(6)修改班级信息

>同学工作栏有工具模块(班委包含同学权限):

(1)查看日程，课程表

(2)通讯录


**职员**

>管理员：

(1)回复审批和请假：管理员不能审批自己

(2)制定修改考勤规则:上下班签到签退时间，早到，加班，考勤地点，外勤

(3)制定修改一年日历表：休假日和上班日，补班日

(4)管理班级成员:邀请成员，通过申请，删除成员，设置成员权限（超级管理员最多两个）

(5)修改公司考勤记录

(6)修改公司信息

>员工:

(1)查看日程表

(2)通讯录
