import {Component, Input, OnInit} from '@angular/core';
/**
 * Created by admin on 2017/7/8.
 */
@Component({
  templateUrl: './dirtree.component.html',
  selector: 'app-tree',
  styleUrls: ['./dirtree.component.css']
})
export class DirtreeComponent {

  // 超简单, 重点: 接收上级的值
  // 可以为树建立一个接口, 这里简化为any
  @Input() treelists: any;

  // 点击动作
  itemClick(item) {
    // 建立一个服务来接收这个值, 或者借助双向绑定, 处理动作
    item.open = !item.open;  // 本例只简单演示开关, 借助 treelists本身实现
    console.log(JSON.stringify(item));
  }

  editClick(item) {
    console.log('点击了修改按钮');
  }
}
