/**
 * Given a linked list, determine if it has a cycle in it.
 * 判断单链表是否有环
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/*
   判断单链表是否有环
     使用快慢指针的方法:
        1.用两个指针fast和slow分别指向头结点，即fast = slow = head
        2.fast和slow分别采用1和2作为步长遍历该链表(fast应该检查其下一个结点是否为空)
        3.如果fast遇到了null,则证明该链表没有环；若fast和slow在某时刻指向同一结点，则说明该链表有环
   【判断环的入口】:
         固定fast在他们第一次相遇的结点，然后slow回到表头，然后它们均以1为步长遍历链表，则他们再次相遇时，
         即为环开始结点
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    var fast = head;
    var slow = head;
    while(fast&&fast.next){
        fast = fast.next.next;
        slow = slow.next;
        if(fast==slow){
            return true
        }
    }
    return false;
};


/*
    先判断单链表是否有环，如果有环找到环的入口
 */
 /**
 * @param {ListNode} head
 * @return {ListNode} loopPort
 */

 var findLoopPort = function (head){
     var fast = head;
     var slow = head;
     while(fast&&fast.next){
         fast = fast.next.next;
         slow = slow.next;
         //存在环的情况下终止循环
         if(fast==slow){
             break;
         }
     }
     //不存在环(即循环终止也没有找到环)
     if(fast!=slow){
         return null
     }

     slow = head;
     while(fast!=slow){
         slow =slow.next;
         fast= fast.next;
     }
     return fast;

 };