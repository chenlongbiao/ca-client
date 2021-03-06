import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Login = r => require.ensure([], () => r(require('@/components/login/Login')), 'Login')
const Home = r => require.ensure([], () => r(require('@/components/home/Home')), 'Home')
const Archives = r => require.ensure([], () => r(require('@/components/core/humanCenter/archives/Archives')), 'Archives')
const Attendance = r => require.ensure([], () => r(require('@/components/core/humanCenter/attendance/Attendance')), 'Attendance')
const InviteJob = r => require.ensure([], () => r(require('@/components/core/humanCenter/inviteJob/InviteJob')), 'InviteJob')
const Performance = r => require.ensure([], () => r(require('@/components/core/humanCenter/performance/Performance')), 'Performance')
const Salary = r => require.ensure([], () => r(require('@/components/core/humanCenter/salary/Salary')), 'Salary')
const Train = r => require.ensure([], () => r(require('@/components/core/humanCenter/train/Train')), 'Train')
const ContractApprove = r => require.ensure([], () => r(require('@/components/core/contractManage/contractApprove/ContractApprove')), 'ContractApprove')
const ContractFiling = r => require.ensure([], () => r(require('@/components/core/contractManage/contractFiling/ContractFiling')), 'ContractFiling')
const DataModification = r => require.ensure([], () => r(require('@/components/core/personalCenter/dataModification/DataModification')), 'DataModification')
const Membership = r => require.ensure([], () => r(require('@/components/core/personalCenter/membership/Membership')), 'Membership')
const PersonalData = r => require.ensure([], () => r(require('@/components/core/personalCenter/personalData/PersonalData')), 'PersonalData')
const Attachement = r => require.ensure([], () => r(require('@/components/core/repository/attachement/Attachement')), 'Attachement')
const CommonFile = r => require.ensure([], () => r(require('@/components/core/repository/commonFile/CommonFile')), 'CommonFile')
const Index = r => require.ensure([], () => r(require('@/components/core/index/Index')), 'Index')
const Setting = r => require.ensure([], () => r(require('@/components/core/setting/Setting')), 'Setting')
const WebSockt = r => require.ensure([], () => r(require('@/components/core/Sock/WebSockt')), 'WebSockt')
// const ContractFiling = r => require.ensure([], () => r(require('@/components/core/contractManage/contractFiling/ContractFiling')), 'ContractFiling');
// import Home from '@/components/home/Home'
// import Archives from '@/components/core/humanCenter/archives/Archives'
// import Attendance from '@/components/core/humanCenter/attendance/Attendance'
// import InviteJob from '@/components/core/humanCenter/inviteJob/InviteJob'
// import Performance from '@/components/core/humanCenter/performance/Performance'
// import Salary from '@/components/core/humanCenter/salary/Salary'
// import Train from '@/components/core/humanCenter/train/Train'
// import ContractApprove from '@/components/core/contractManage/contractApprove/ContractApprove'
// import ContractFiling from '@/components/core/contractManage/contractFiling/ContractFiling'
// import DataModification from '@/components/core/personalCenter/dataModification/DataModification'
// import Membership from '@/components/core/personalCenter/membership/Membership'
// import PersonalData from '@/components/core/personalCenter/personalData/PersonalData'
// import Attachement from '@/components/core/repository/attachement/Attachement'
// import CommonFile from '@/components/core/repository/commonFile/CommonFile'
// import Index from '@/components/core/index/Index'
// import Setting from '@/components/core/setting/Setting'
// import Login from '@/components/login/Login'
export default new Router({
  mode: 'history',
  routes: [
    // nginx下访问路由中未定义的路由（打错路径）处理方案
    { path: '*', redirect: '/' },
    // 注册
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      // redirect: '/login',
      children: [
        // 人事档案
        {
          path: '/humancenter/Archives',
          name: 'Archives',
          component: Archives
        },
        // 首页
        {
          path: '',
          name: 'index',
          component: Index
        },
        // 考勤
        {
          path: '/humancenter/Attendance',
          name: 'Attendance',
          component: Attendance
        },
        // 招聘
        {
          path: '/humancenter/InviteJob',
          name: 'Attendance',
          component: InviteJob
        },
        // 绩效
        {
          path: '/humancenter/Performance',
          name: 'Performance',
          component: Performance
        },
        // 工资
        {
          path: '/humancenter/Salary',
          name: 'Salary',
          component: Salary
        },
        // 培训
        {
          path: '/humancenter/Train',
          name: 'Train',
          component: Train
        },
        // 合同审批
        {
          path: '/contractManage/contractApprove',
          name: 'contractApprove',
          component: ContractApprove
        },
        // 合同归档
        {
          path: '/contractManage/contractFiling',
          name: 'contractFiling',
          component: ContractFiling
        },
        // 普通文件
        {
          path: '/repository/commonFile',
          name: 'commonFile',
          component: CommonFile
        },
        // 附件文件
        {
          path: '/repository/attachement',
          name: 'attachement',
          component: Attachement
        },
        // 个人资料
        {
          path: '/personalCenter/personalData',
          name: 'personalData',
          component: PersonalData
        },
        // 组织关系
        {
          path: '/personalCenter/membership',
          name: 'membership',
          component: Membership
        },
        // 资料修改
        {
          path: '/personalCenter/dataModification',
          name: 'dataModification',
          component: DataModification
        },
        // 设置
        {
          path: '/setting',
          name: 'setting',
          component: Setting
        }
      ]
    },
    // 通信
    {
      path: '/WebSockt',
      name: 'WebSockt',
      component: WebSockt
    }
  ]
})
