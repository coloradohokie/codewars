/* 
Description:
There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

input
customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
output
The function should return an integer, the total time required.
*/



function queueTime(customers, n) {
    if (customers.length === 0) return 0
    if (n === 0) return 0
    if (n === 1) return customers.reduce((a, b) => a+b, 0)
    if (customers.length <= n) return Math.max(...customers)
    
    const queue = []
    for (let i =0; i < n; i++) {
      queue[i] = 0
    }
    for (let i = 0; i < customers.length; i++) {
      const minValue = Math.min(...queue)
      const selectedQueue = queue.indexOf(minValue)
      queue[selectedQueue] += customers[i]
    }  
    
    return Math.max(...queue)
}