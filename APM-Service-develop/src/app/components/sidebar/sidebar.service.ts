import {Injectable} from '@angular/core';
import {ROUTING} from '../../shared/routing';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  toggled = false;
  menus = [
    {
      title: 'Servis',
      type: 'header'
    },
    {
      title: 'Taleplerim',
      icon: 'fa fa-edit',
      active: false,
      type: 'dropdown',
      badge: {
        text: 'New ',
        class: 'badge-warning'
      },
      submenus: [
        {
          title: 'Talep Oluştur',
          routerLink:'/'+ROUTING.REQUEST_OPEN,
          badge: {
            text: 'Pro ',
            class: 'badge-success'
          }
        },
        {
          title: 'Talepleri Listele',
          routerLink: ROUTING.REQUEST_LIST
        },
        {title:'Talep Havuzum',
        routerLink: ROUTING.REQUEST_POOL}
      ]
    },
    {
      title: 'Ekstra',
      type: 'header'
    },
    {
      title: 'Backup Yönetimi',
      icon: 'fa fa-book',
      type: 'single-row',
      routerLink: ROUTING.BACKUP_LIST
    },
    {
      title: 'Takvim',
      icon: 'fa fa-calendar',
      active: false,
      type: 'simple'
    },
    {
      title: 'İnsan Kaynakları',
      type: 'header'
    },
    {
      title: 'Şirket Bilgileri',
      icon: 'fa fa-edit',
      active: false,
      badge: {
        text: 'Pro ',
        class: 'badge-success'
      },
      type: 'dropdown',
      submenus: [
        {
          title: 'Çalışanlar',
          routerLink:'/'+ ROUTING.EMPLOYEES,
        },
        {
          title: 'Ekipler',
          routerLink: ROUTING.TEAMS
        },
        {
          title: 'Departmanlar',
          routerLink: ''
        }
      ]
    },
  ];

  constructor() {
  }

  _hasBackgroundImage = true;

  get hasBackgroundImage() {
    return this._hasBackgroundImage;
  }

  set hasBackgroundImage(hasBackgroundImage) {
    this._hasBackgroundImage = hasBackgroundImage;
  }

  toggle() {
    this.toggled = !this.toggled;
  }

  getSidebarState() {
    return this.toggled;
  }

  setSidebarState(state: boolean) {
    this.toggled = state;
  }

  getMenuList() {
    return this.menus;
  }
  getToggleData(){
    return this.toggled;
  }
}
