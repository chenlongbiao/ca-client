import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Archives from '@/components/core/humanCenter/archives/archives'
import Attendance from '@/components/core/humanCenter/attendance/attendance'
import InviteJob from '@/components/core/humanCenter/inviteJob/inviteJob'
import Performance from '@/components/core/humanCenter/performance/performance'
import Salary from '@/components/core/humanCenter/salary/salary'
import Train from '@/components/core/humanCenter/train/train'
import ContractApprove from '@/components/core/contractManage/contractApprove/contractApprove'
import ContractFiling from '@/components/core/contractManage/contractFiling/contractFiling'
import DataModification from '@/components/core/personalCenter/dataModification/dataModification'
import Membership from '@/components/core/personalCenter/membership/membership'
import PersonalData from '@/components/core/personalCenter/personalData/personalData'
import Attachement from '@/components/core/repository/attachement/attachement'
import CommonFile from '@/components/core/repository/commonFile/commonFile'
import Index from '@/components/core/index/index'
import Setting from '@/components/core/setting/setting'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        // 人事档案
        {
          path: '/humancenter/Archives',
          name: 'Archives',
          component: Archives
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
        // 首页
        {
          path: '',
          name: 'index',
          component: Index
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
