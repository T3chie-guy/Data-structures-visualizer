const DATA = {
  "Arrays": {
    "1-D": {
      "visualizations": [
        { name: "Array Traversal" },
        { name: "Sliding Window Minimum" },
        {
          name: "Two Pointer Technique"
        },
        {
          name: "Kadane's Algorithm"
        },
        { name: "Prefix Sum Array" },
        { name: "Binary Search on Array" },
        { name: "Dutch National Flag" },
      ],
      "theory":
      {
        generalKnowledge: "Are Stored in continous memory location with the index of the first element being 0 eg arr[0]",
        declaration:
        {
          theory: "You specify data type and size of array",
          codeSnippet: "../public/code-snippets/array/1-D-declaration.png"
        },
        initialization: {
          theory: "jfdjfgdjg",
          codeSnippet: "../public/code-snippets/array/1-D-initialization.png"
        },
        displaying: {
          theory: "ata",
          codeSnippet: "../public/code-snippets/array/1-D-displaying.png"
        }

      },


      "quiz": [
        { name: "Basic Array Quiz", completion: 0, level: "Easy" },
        { name: "Array Complexity Analysis", completion: 0, level: "Medium" },
      ]
    },
    "Multi-dimensional": {
      "visualizations": [
        { name: "Matrix Traversal" },
        { name: "Spiral Matrix" },
        { name: "Matrix Rotation" },
        { name: "Row-Column Zeroing" },
      ],
      "theory":
      {
        generalKnowledge: "ckcnskcn Stored in continous memory location with the index of the first element being 0 eg arr[0]",
        declaration:
        {
          theory: "You specify data type and size of array",
          codeSnippet: "../public/code-snippets/array/1-D-declaration.png"
        },
        initialization: {
          theory: "jfdjfgdjg",
          codeSnippet: "../public/code-snippets/array/1-D-initialization.png"
        },
        displaying: {
          theory: "ata",
          codeSnippet: "../public/code-snippets/array/1-D-displaying.png"
        }

      },

      "quiz": []
    }
  },
  "Stacks": {
    "Basics": {
      "visualizations": [
        { name: "Stack Push & Pop" },
        { name: "Balanced Parentheses" },
        { name: "Infix to Postfix" },
        { name: "Next Greater Element" },
        { name: "Largest Rectangle in Histogram" },
      ],
      "theory": [],
      "quiz": []
    },
    "Applications": {
      "visualizations": [
        { name: "Undo/Redo Mechanism" },
        { name: "Browser History Stack" },
        { name: "Expression Evaluator" },
      ],
      "theory": [],
      "quiz": []
    }
  },
  "Queues": {
    "Basics": {
      "visualizations": [
        { name: "Queue Enqueue & Dequeue" },
        { name: "Circular Queue" },
        { name: "Queue using Stacks" },
        { name: "Level Order Traversal" },
      ],
      "theory": [],
      "quiz": []
    },
    "Priority Queue": {
      "visualizations": [
        { name: "Min Heap Operations" },
        { name: "Max Heap Operations" },
        { name: "K Largest Elements" },
      ],
      "theory": [],
      "quiz": []
    },
    "Deque": {
      "visualizations": [
        { name: "Sliding Window Maximum" },
        { name: "Palindrome Check with Deque" },
      ],
      "theory": [],
      "quiz": []
    }
  },
  "Hash Tables": {
    "Chaining": {
      "visualizations": [
        { name: "Hash Function Visualization" },
        { name: "Collision with Chaining" },
        { name: "Rehashing Demo" },
      ],
      "theory": [],
      "quiz": []
    },
    "Open Addressing": {
      "visualizations": [
        { name: "Linear Probing" },
        { name: "Quadratic Probing" },
        { name: "Double Hashing" },
      ],
      "theory": [],
      "quiz": []
    }
  },
  "Linked List": {
    "Singly": {
      "visualizations": [
        { name: "Insert & Delete Node" },
        { name: "Reverse a Linked List" },
        { name: "Floyd's Cycle Detection" },
        { name: "Merge Two Sorted Lists" },
      ],
      "theory": [],
      "quiz": []
    },
    "Doubly": {
      "visualizations": [
        { name: "DLL Insert & Delete" },
        { name: "LRU Cache (DLL + HashMap)" },
      ],
      "theory": [],
      "quiz": []
    },
    "Circular": {
      "visualizations": [
        { name: "Circular List Traversal" },
        { name: "Josephus Problem" },
      ],
      "theory": [],
      "quiz": []
    }
  },
  "Trees": {
    "Binary Tree": {
      "visualizations": [
        { name: "Tree Traversals (In/Pre/Post)" },
        { name: "Height of Binary Tree" },
        { name: "Mirror a Binary Tree" },
        { name: "Diameter of Binary Tree" },
      ],
      "theory": [],
      "quiz": []
    },
    "BST": {
      "visualizations": [
        { name: "BST Insert & Delete" },
        { name: "BST Search Visualization" },
        { name: "Validate BST" },
        { name: "Kth Smallest in BST" },
      ],
      "theory": [],
      "quiz": []
    },
    "AVL Tree": {
      "visualizations": [
        { name: "AVL Rotations Demo" },
        { name: "AVL Insert with Balancing" },
      ],
      "theory": [],
      "quiz": []
    },
    "Heap": {
      "visualizations": [
        { name: "Heapify Visualization" },
        { name: "Heap Sort Animation" },
        { name: "Build Max Heap" },
      ],
      "theory": [],
      "quiz": []
    }
  },
  "Graphs": {
    "BFS": {
      "visualizations": [
        { name: "BFS Traversal Visualization" },
        { name: "Shortest Path (BFS)" },
        { name: "Connected Components" },
      ],
      "theory": [],
      "quiz": []
    },
    "DFS": {
      "visualizations": [
        { name: "DFS Traversal Visualization" },
        { name: "Topological Sort (DFS)" },
        { name: "Cycle Detection in Graph" },
      ],
      "theory": [],
      "quiz": []
    },
    "Dijkstra": {
      "visualizations": [
        { name: "Dijkstra's Algorithm Demo" },
        { name: "Single Source Shortest Path" },
      ],
      "theory": [],
      "quiz": []
    }
  },
  "Sorting": {
    "Bubble Sort": {
      "visualizations": [
        { name: "Bubble Sort Animation" },
        { name: "Optimized Bubble Sort" },
      ],
      "theory": [],
      "quiz": []
    },
    "Merge Sort": {
      "visualizations": [
        { name: "Merge Sort Divide & Conquer" },
        { name: "Bottom-Up Merge Sort" },
      ],
      "theory": [],
      "quiz": []
    },
    "Quick Sort": {
      "visualizations": [
        { name: "Quick Sort with Pivot" },
        { name: "Lomuto vs Hoare Partition" },
        { name: "Randomized Quick Sort" },
      ],
      "theory": [],
      "quiz": []
    },
    "Heap Sort": {
      "visualizations": [
        { name: "Heap Sort Full Demo" },
        { name: "In-place Heap Sort" },
      ],
      "theory": [],
      "quiz": []
    }
  },
  "Searching": {
    "Linear Search": {
      "visualizations": [
        { name: "Basic Linear Search" },
        { name: "Searching in Unsorted Array" },
        { name: "Global Maximum Search" },
      ],
      "theory": [],
      "quiz": []
    },
    "Binary Search": {
      "visualizations": [
        { name: "Iterative Binary Search" },
        { name: "Recursive Binary Search" },
        { name: "Lower Bound / Upper Bound" },
        { name: "Search in Rotated Sorted Array" },
        { name: "Square Root using Binary Search" },
      ],
      "theory": [],
      "quiz": []
    },
    "Specialized": {
      "visualizations": [
        { name: "Ternary Search" },
        { name: "Jump Search" },
        { name: "Exponential Search" },
      ],
      "theory": [],
      "quiz": []
    }
  }
};
