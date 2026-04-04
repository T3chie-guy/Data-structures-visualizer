const DATA = {
  "Arrays": {
    "1-D": [
      { name: "Array Traversal", views: 9505, completion: 88, level: "Easy" },
      { name: "Sliding Window Minimum", views: 8566, completion: 73, level: "Easy" },
      { name: "Subarray Sum Queries", views: 3585, completion: 69, level: "Medium" },
      { name: "Rotation Visualizer", views: 3961, completion: 55, level: "Medium" },
      { name: "Two Pointer Technique", views: 2235, completion: 76, level: "Easy" },
      { name: "Kadane's Algorithm", views: 3950, completion: 85, level: "Easy" },
      { name: "Prefix Sum Array", views: 4360, completion: 89, level: "Easy" },
      { name: "Binary Search on Array", views: 6143, completion: 67, level: "Medium" },
      { name: "Dutch National Flag", views: 3170, completion: 46, level: "Hard" },
    ],
    "Multi-dimensional": [
      { name: "Matrix Traversal", views: 4200, completion: 80, level: "Easy" },
      { name: "Spiral Matrix", views: 2900, completion: 55, level: "Medium" },
      { name: "Matrix Rotation", views: 1800, completion: 48, level: "Hard" },
      { name: "Row-Column Zeroing", views: 3100, completion: 72, level: "Medium" },
    ]
  },
  "Stacks": {
    "Basics": [
      { name: "Stack Push & Pop", views: 7200, completion: 92, level: "Easy" },
      { name: "Balanced Parentheses", views: 5400, completion: 78, level: "Easy" },
      { name: "Infix to Postfix", views: 3200, completion: 60, level: "Medium" },
      { name: "Next Greater Element", views: 2800, completion: 52, level: "Medium" },
      { name: "Largest Rectangle in Histogram", views: 1900, completion: 38, level: "Hard" },
    ],
    "Applications": [
      { name: "Undo/Redo Mechanism", views: 3100, completion: 85, level: "Easy" },
      { name: "Browser History Stack", views: 2500, completion: 88, level: "Easy" },
      { name: "Expression Evaluator", views: 1700, completion: 55, level: "Medium" },
    ]
  },
  "Queues": {
    "Basics": [
      { name: "Queue Enqueue & Dequeue", views: 6800, completion: 91, level: "Easy" },
      { name: "Circular Queue", views: 4200, completion: 72, level: "Medium" },
      { name: "Queue using Stacks", views: 3100, completion: 65, level: "Medium" },
      { name: "Level Order Traversal", views: 2700, completion: 70, level: "Medium" },
    ],
    "Priority Queue": [
      { name: "Min Heap Operations", views: 3900, completion: 68, level: "Medium" },
      { name: "Max Heap Operations", views: 3700, completion: 70, level: "Medium" },
      { name: "K Largest Elements", views: 2100, completion: 48, level: "Hard" },
    ],
    "Deque": [
      { name: "Sliding Window Maximum", views: 2400, completion: 55, level: "Hard" },
      { name: "Palindrome Check with Deque", views: 3200, completion: 82, level: "Easy" },
    ]
  },
  "Hash Tables": {
    "Chaining": [
      { name: "Hash Function Visualization", views: 4100, completion: 85, level: "Easy" },
      { name: "Collision with Chaining", views: 3200, completion: 75, level: "Medium" },
      { name: "Rehashing Demo", views: 1800, completion: 60, level: "Medium" },
    ],
    "Open Addressing": [
      { name: "Linear Probing", views: 3600, completion: 72, level: "Medium" },
      { name: "Quadratic Probing", views: 2800, completion: 65, level: "Medium" },
      { name: "Double Hashing", views: 1600, completion: 50, level: "Hard" },
    ]
  },
  "Linked List": {
    "Singly": [
      { name: "Insert & Delete Node", views: 7800, completion: 88, level: "Easy" },
      { name: "Reverse a Linked List", views: 6200, completion: 80, level: "Easy" },
      { name: "Floyd's Cycle Detection", views: 4100, completion: 65, level: "Medium" },
      { name: "Merge Two Sorted Lists", views: 3600, completion: 70, level: "Medium" },
    ],
    "Doubly": [
      { name: "DLL Insert & Delete", views: 5200, completion: 82, level: "Easy" },
      { name: "LRU Cache (DLL + HashMap)", views: 2400, completion: 48, level: "Hard" },
    ],
    "Circular": [
      { name: "Circular List Traversal", views: 3800, completion: 80, level: "Easy" },
      { name: "Josephus Problem", views: 2100, completion: 52, level: "Hard" },
    ]
  },
  "Trees": {
    "Binary Tree": [
      { name: "Tree Traversals (In/Pre/Post)", views: 8900, completion: 86, level: "Easy" },
      { name: "Height of Binary Tree", views: 7200, completion: 84, level: "Easy" },
      { name: "Mirror a Binary Tree", views: 5100, completion: 75, level: "Medium" },
      { name: "Diameter of Binary Tree", views: 3800, completion: 62, level: "Medium" },
    ],
    "BST": [
      { name: "BST Insert & Delete", views: 6400, completion: 82, level: "Easy" },
      { name: "BST Search Visualization", views: 5900, completion: 88, level: "Easy" },
      { name: "Validate BST", views: 4200, completion: 65, level: "Medium" },
      { name: "Kth Smallest in BST", views: 3100, completion: 68, level: "Medium" },
    ],
    "AVL Tree": [
      { name: "AVL Rotations Demo", views: 4700, completion: 70, level: "Medium" },
      { name: "AVL Insert with Balancing", views: 3900, completion: 62, level: "Hard" },
    ],
    "Heap": [
      { name: "Heapify Visualization", views: 5200, completion: 74, level: "Medium" },
      { name: "Heap Sort Animation", views: 4800, completion: 76, level: "Medium" },
      { name: "Build Max Heap", views: 4100, completion: 78, level: "Easy" },
    ]
  },
  "Graphs": {
    "BFS": [
      { name: "BFS Traversal Visualization", views: 7100, completion: 82, level: "Easy" },
      { name: "Shortest Path (BFS)", views: 5800, completion: 74, level: "Medium" },
      { name: "Connected Components", views: 4100, completion: 70, level: "Medium" },
    ],
    "DFS": [
      { name: "DFS Traversal Visualization", views: 6800, completion: 80, level: "Easy" },
      { name: "Topological Sort (DFS)", views: 4200, completion: 62, level: "Medium" },
      { name: "Cycle Detection in Graph", views: 3600, completion: 58, level: "Hard" },
    ],
    "Dijkstra": [
      { name: "Dijkstra's Algorithm Demo", views: 5900, completion: 68, level: "Medium" },
      { name: "Single Source Shortest Path", views: 4800, completion: 65, level: "Hard" },
    ]
  },
  "Sorting": {
    "Bubble Sort": [
      { name: "Bubble Sort Animation", views: 12400, completion: 95, level: "Easy" },
      { name: "Optimized Bubble Sort", views: 8200, completion: 88, level: "Easy" },
    ],
    "Merge Sort": [
      { name: "Merge Sort Divide & Conquer", views: 9800, completion: 82, level: "Medium" },
      { name: "Bottom-Up Merge Sort", views: 5100, completion: 68, level: "Medium" },
    ],
    "Quick Sort": [
      { name: "Quick Sort with Pivot", views: 10200, completion: 78, level: "Medium" },
      { name: "Lomuto vs Hoare Partition", views: 4800, completion: 60, level: "Hard" },
      { name: "Randomized Quick Sort", views: 3900, completion: 65, level: "Medium" },
    ],
    "Heap Sort": [
      { name: "Heap Sort Full Demo", views: 7600, completion: 76, level: "Medium" },
      { name: "In-place Heap Sort", views: 4200, completion: 62, level: "Hard" },
    ]
  }
};
