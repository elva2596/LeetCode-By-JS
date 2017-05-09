/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    /*

     iteratively

     方法一:使用三个变量
     使用p和q两个指针配合工作，使得两个结点间的指向反向，同时用记录剩下的链表

     var p = head,
     q = head.next,
     r;
     if(head===null||head.next===null){
     return head;
     }
     head.next = null;
     while(q){
     r =q.next;
     q.next = p;
     p=q;
     q=r;
     }
     return p

     or 使用一个中间变量

     var cur  =head,
     pre = null;
     if(head===null||head.next===null){
     return head;
     }

     while(cur){
     var temp = cur.next;
     cur.next = pre;
     pre = cur;
     cur = temp
     }
     return pre
     */


    /*
     iteratively

     方法二:使用两个变量;
     从单链表的第二个元素开始一直到链表的末尾，将元素依次插入到第一个结点(head)之后，最后将第一个链表挪到新链表的最后

     var p = head.next,
     q;
     if(head===null||head.next===null){
     return head
     }
     while(p.next){
     q= p.next;
     p.next = q.next;
     q.next = head.next;
     head.next = q;
     }

     //将旧的head移到新链表的末尾
     p.next = head;//形成环，将旧的head移到新的链表的最后一个元素以后
     head = p.next.next;//将新head移到第一个元素上
     p.next.next = null;//断掉旧head与第一个元素的连接指针
     return head;
     */


    /*

     递归实现:
     从后往前反转，从最后两个结点开始反转，依次向前，将后一个链表结点指向前一个结点，注意每次反转后要将原链表中前一个
     结点的指针域置空，表示将原链表中前一个结点指向后一个结点的指向关系断开


     if(head===null||head.next===null){
     return head
     }else{
     var newNode = reverseList(head.next);
     console.log(newNode)
     head.next.next= head;
     head.next = null
     return newNode
     }
     */


}