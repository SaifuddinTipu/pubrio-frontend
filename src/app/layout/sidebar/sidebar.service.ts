import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SidebarService {

  menus = [
    {
      title: "Lists",
      icon: "list",
      active: false,
      type: "dropdown",
      // submenus: [
      //   {
      //     title: "Main Dashboard",
      //     link: "/dashboard/main",
      //     active: false,
      //   }
      // ],
    },
    {
        title: "Company",
        icon: "business",
        active: false,
        type: "dropdown",
        // submenus: [
        //   {
        //     title: "Main Dashboard",
        //     link: "/dashboard/main",
        //     active: false,
        //   }
        // ],
    },
    {
        title: "Account HQ Location",
        icon: "location_on",
        active: true,
        type: "dropdown",
        submenus: [
          {
            title: "Searchbox",
            link: "/",
            active: false,
          }
        ],
    },
    {
        title: "Employees",
        icon: "people_outline",
        active: false,
        type: "dropdown",
        // submenus: [
        //     {
        //     title: "Main Dashboard",
        //     link: "/dashboard/main",
        //     active: false,
        //     }
        // ],
    },
    {
        title: "Industry & Keywords",
        icon: "business",
        active: false,
        type: "dropdown",
        // submenus: [
        //   {
        //     title: "Main Dashboard",
        //     link: "/dashboard/main",
        //     active: false,
        //   }
        // ],
    },
    {
        title: "Buying Intent",
        icon: "insert_chart_outlined",
        active: false,
        type: "dropdown",
        // submenus: [
        //   {
        //     title: "Main Dashboard",
        //     link: "/dashboard/main",
        //     active: false,
        //   }
        // ],
    },
    {
        title: "Technologies",
        icon: "rocket_launch",
        active: false,
        type: "dropdown",
        // submenus: [
        //   {
        //     title: "Main Dashboard",
        //     link: "/dashboard/main",
        //     active: false,
        //   }
        // ],
    },
    {
        title: "Revenue",
        icon: "attach_money",
        active: false,
        type: "dropdown",
        // submenus: [
        //   {
        //     title: "Main Dashboard",
        //     link: "/dashboard/main",
        //     active: false,
        //   }
        // ],
    },
    {
        title: "Funding",
        icon: "money",
        active: false,
        type: "dropdown",
        // submenus: [
        //   {
        //     title: "Main Dashboard",
        //     link: "/dashboard/main",
        //     active: false,
        //   }
        // ],
    },
    {
        title: "Job Posting",
        icon: "business_center",
        active: false,
        type: "dropdown",
        // submenus: [
        //   {
        //     title: "Main Dashboard",
        //     link: "/dashboard/main",
        //     active: false,
        //   }
        // ],
    },
];

  constructor() {
  }
  
  getMenuList() {
    return this.menus;
  }

}
