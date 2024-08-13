import { Component, OnInit } from '@angular/core';


// interface SubMenu {
//   title: string;
//   route: string;
// }

// interface Menu {
//   title: string;
//   icon: string;
//   expanded: boolean;
//   subMenus: SubMenu[];
// }

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  // menus = [
  //   {
  //     name: 'Home',
  //     icon: 'home',
  //     link: '/home',
  //   },
  //   {
  //     name: 'Dashboard',
  //     icon: 'dashboard',
  //     expanded: false,
  //     subMenus: [
  //       { name: 'Admin Dashboard', link: '/admindashboard' },
  //       { name: 'Manager Dashboard', link: '/' }
  //     ]
  //   },
  //   {
  //     name: 'Employee',
  //     icon: 'people',
  //     expanded: false,
  //     subMenus: [
  //       { name: 'Add Employee', link: '/createemployee' },
  //       { name: 'List Employee', link: '/listemployee' },
  //       { name: 'Detail Employee', link: '/detailemployee' },
  //     ]
  //   },
  //   {
  //     name: 'Department',
  //     icon: 'account_circle',
  //     expanded: false,
  //     subMenus: [
  //       { name: 'Add Department', link: '/createdepartment' },
  //       { name: 'List Department', link: '/listdepartment' },
  //       { name: 'Detail Department', link: '/detaildepartment' },
  //     ]
  //   },
  //   {
  //     name: 'Attendance',
  //     icon: 'check_circle',
  //     // icon: 'event',
  //     expanded: false,
  //     subMenus: [
  //       { name: 'Add Attendance', link: '/createattendance' },
  //       { name: 'List Attendance', link: '/viewattendance' },
  //       { name: 'Detail Attendance', link: '/detailattendance' },
  //     ]
  //   },
  //   {
  //     name: 'Leave',
  //     icon: 'airlineseatreclineextra',
  //     expanded: false,
  //     subMenus: [
  //       { name: 'Add Leave', link: '/createleave' },
  //       { name: 'List Leave', link: '/listleave' },
  //       { name: 'Detail Leave', link: '/detailleave' },
  //     ]
  //   },
  //   {
  //     name: 'Payroll',
  //     icon: 'payments',
  //     expanded: false,
  //     subMenus: [
  //       { name: 'Create Payroll', link: '/createpayroll' },
  //       { name: 'List Payroll', link: '/listpayroll' },
  //       { name: 'Detail Payroll?', link: '/detailpayroll' },
  //     ]
  //   },
  //   {
  //     name: 'Report',
  //     icon: 'report',
  //     expanded: false,
  //     subMenus: [
  //       { name: 'Employee Report', link: '/employeereport' },
  //       { name: 'Leave Report', link: '/leavereport' },
  //       { name: 'Payroll Report', link: '/payrollreport' },
  //       { name: 'Feedback Report', link: '/feedbackreport' },
  //     ]
  //   },
  //   {
  //     name: 'Profile',
  //     icon: 'logout',
  //     expanded: false,
  //     subMenus: [
  //       { name: 'View Profile', link: '/profile' },
  //       { name: 'Log Out', link: '/logout' },
  //       { name: 'Forget Password?', link: '/forgetpassword' },
  //     ]
  //   },
  // ];

  // constructor() { }


  // menus: Menu[] = [
  //   {
  //     title: 'Dashboard',
  //     icon: 'dashboard',
  //     expanded: false,
  //     subMenus: [
  //       { title: 'Overview', route: '/dashboard/overview' },
  //       { title: 'Stats', route: '/dashboard/stats' }
  //     ]
  //   },
  //   {
  //     title: 'Employee',
  //     icon: 'people',
  //     expanded: false,
  //     subMenus: [
  //       { title: 'Add Employee', route: '/createemployee' },
  //       { title: 'List Department', route: '/employees' }
  //     ]
  //   },
  //   {
  //     title: 'Attendance',
  //     icon: 'event',
  //     expanded: false,
  //     subMenus: [
  //       { title: 'View Attendance', route: '/viewattendance' },
  //       { title: 'Attendance List', route: '/listattendance' }
  //     ]
  //   },
  //   {
  //     title: 'Leave',
  //     icon: 'business',
  //     expanded: false,
  //     subMenus: [
  //       { title: 'List Leave', route: '/leave' },
  //       { title: 'Add Leave', route: '/createleave' }
  //     ]
  //   },
  //   // Add more menus as needed
  // ];

  // toggleSubmenu(menu: any): void {
  //   menu.expanded = !menu.expanded;
  // }
  // hoverSubmenu(menu: any, hover: boolean): void {
  //   if (hover) {
  //     menu.expanded = true;
  //   } else {
  //     menu.expanded = false;

  //   }
  // }
}
