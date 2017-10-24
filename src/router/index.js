import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Archives from '@/components/core/humanCenter/archives/Archives'
import Attendance from '@/components/core/humanCenter/attendance/Attendance'
import InviteJob from '@/components/core/humanCenter/inviteJob/InviteJob'
import Performance from '@/components/core/humanCenter/performance/Performance'
import Salary from '@/components/core/humanCenter/salary/Salary'
import Train from '@/components/core/humanCenter/train/Train'
import ContractApprove from '@/components/core/contractManage/contractApprove/ContractApprove'
import ContractFiling from '@/components/core/contractManage/contractFiling/ContractFiling'
import DataModification from '@/components/core/personalCenter/dataModification/DataModification'
import Membership from '@/components/core/personalCenter/membership/Membership'
import PersonalData from '@/components/core/personalCenter/personalData/PersonalData'
import Attachement from '@/components/core/repository/attachement/Attachement'
import CommonFile from '@/components/core/repository/commonFile/CommonFile'
import Index from '@/components/core/index/Index'
import Setting from '@/components/core/setting/Setting'
import Login from '@/components/login/Login'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
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
    }
  ]
})
