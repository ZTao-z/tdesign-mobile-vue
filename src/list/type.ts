/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TNode } from '../common';

export interface TdListProps {
  /**
   * 自定义加载中。值为空不显示加载中，值为 'loading' 显示加载中状态，值为 'load-more' 显示加载更多状态。值类型为函数，则表示自定义加载状态呈现内容
   */
  asyncLoading?: string | TNode;
  /**
   * 底部
   */
  footer?: string | TNode;
  /**
   * 头部
   */
  header?: string | TNode;
  /**
   * 排列方式（待设计稿输出）
   * @default horizontal
   */
  layout?: 'horizontal' | 'vertical';
  /**
   * 尺寸
   * @default medium
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * 是否展示分割线
   * @default false
   */
  split?: boolean;
  /**
   * 是否展示斑马纹
   * @default false
   */
  stripe?: boolean;
  /**
   * 点击加载更多时触发
   */
  onLoadMore?: () => void;
  /**
   * 列表滚动时触发，scrollTop 表示顶部滚动距离
   */
  onScroll?: ({ scrollTop: number }: any) => void;
}
