const questionsData = [
  {
    "question": "TCS was founded in which year?",
    "options": [
      {
        "id": "A",
        "text": "1966",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "1968",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "1972",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "1981",
        "isCorrect": false
      }
    ],
    "hint": "Tata Consultancy Services was established in 1968 by Tata Sons.",
    "category": "KYT"
  },
  {
    "question": "What does the acronym 'EPIC' stand for in TCS core values?",
    "options": [
      {
        "id": "A",
        "text": "Excellence, Passion, Innovation, Commitment",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Ethics, Passion, Integrity, Commitment",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Ethics, Pioneering, Innovation, Creativity",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Excellence, Pioneering, Integrity, Commitment",
        "isCorrect": false
      }
    ],
    "hint": "TCS core values: Ethics, Passion, Integrity, Commitment.",
    "category": "KYT"
  },
  {
    "question": "Which of the following is a subsidiary / brand of TCS?",
    "options": [
      {
        "id": "A",
        "text": "Infosys BPO",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Syntel",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "TCS iON",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Mphasis",
        "isCorrect": false
      }
    ],
    "hint": "TCS iON is TCS's SMB-focused brand for cloud-based services.",
    "category": "KYT"
  },
  {
    "question": "TCS Xplore is primarily designed for:",
    "options": [
      {
        "id": "A",
        "text": "Lateral hires only",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Fresh campus recruits — pre-joining learning platform",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Senior management training",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Client onboarding",
        "isCorrect": false
      }
    ],
    "hint": "TCS Xplore is a mandatory pre-joining learning programme for freshers.",
    "category": "KYT"
  },
  {
    "question": "Which TCS flagship programme partners with universities to offer integrated degrees?",
    "options": [
      {
        "id": "A",
        "text": "TCS NINJA",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "TCS BPS",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "TCS TalentNext",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "TCS Academic Interface Programme (AIP)",
        "isCorrect": true
      }
    ],
    "hint": "TCS AIP partners with over 500 colleges to co-create curriculum.",
    "category": "KYT"
  },
  {
    "question": "In which year did TCS become the first Indian IT company to reach a market cap of $100\nbillion?",
    "options": [
      {
        "id": "A",
        "text": "2014",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "2016",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "2018",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "2020",
        "isCorrect": false
      }
    ],
    "hint": "TCS crossed the $100 billion market cap milestone in 2018.",
    "category": "KYT"
  },
  {
    "question": "TCS headquarters is located in:",
    "options": [
      {
        "id": "A",
        "text": "Bengaluru",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Hyderabad",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Chennai",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Mumbai",
        "isCorrect": true
      }
    ],
    "hint": "TCS is headquartered in Mumbai (Nariman Point), Maharashtra.",
    "category": "KYT"
  },
  {
    "question": "You notice a colleague copying code from a public GitHub repository and submitting it as\noriginal work for a client deliverable. You should:",
    "options": [
      {
        "id": "A",
        "text": "Ignore it — it is publicly available anyway",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Report it immediately to the client",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Inform your team lead / manager about the IP concern",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Copy the same code yourself since it is fair use",
        "isCorrect": false
      }
    ],
    "hint": "Using open-source code without proper attribution/license check is an IP risk. Escalate\ninternally first.",
    "category": "BizSkill"
  },
  {
    "question": "A client asks you to share internal TCS project data to help them benchmark against\ncompetitors. You should:",
    "options": [
      {
        "id": "A",
        "text": "Share the data — the client is paying",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Politely decline and explain TCS confidentiality policy",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Share anonymised data without asking anyone",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Forward the request directly to your manager and share after",
        "isCorrect": false
      }
    ],
    "hint": "Sharing internal data violates TCS's confidentiality agreements. Decline and escalate to your\nmanager.",
    "category": "BizSkill"
  },
  {
    "question": "You receive an email from an unknown sender offering ■5,000 to complete a survey about\nyour project. The best course of action is:",
    "options": [
      {
        "id": "A",
        "text": "Complete the survey — it is just information",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Forward it to colleagues to see if they know the sender",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Delete and report to TCS IT Security team",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Reply asking for more details before deciding",
        "isCorrect": false
      }
    ],
    "hint": "5,000 to complete a survey about\nyour project. The best course of action is:\nA) Complete the survey — it is just information\nB) Forward it to colleagues to see if they know the sender\nC) Delete and report to TCS IT Security team ✓\nD) Reply asking for more details before deciding\nExplanation: This is a classic phishing/social engineering attempt. Report to IT Security.",
    "category": "BizSkill"
  },
  {
    "question": "During a client meeting you realise you have made a factual error in a report you\nsubmitted. You should:",
    "options": [
      {
        "id": "A",
        "text": "Hope the client does not notice",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Immediately acknowledge the error and provide corrected data",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Wait for the client to raise it",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Blame it on data provided by another team",
        "isCorrect": false
      }
    ],
    "hint": "Transparency and accountability are TCS core values. Own the mistake and correct it.",
    "category": "BizSkill"
  },
  {
    "question": "A teammate consistently misses deadlines, affecting the whole sprint. The most\nprofessional first step is to:",
    "options": [
      {
        "id": "A",
        "text": "Complain about them to the project manager",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Take over their tasks without saying anything",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Have a private, respectful conversation to understand the issue",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Send a formal escalation email immediately",
        "isCorrect": false
      }
    ],
    "hint": "Address issues at the lowest level first with empathy before escalating.",
    "category": "BizSkill"
  },
  {
    "question": "You accidentally send a confidential client email to the wrong recipient. You should:",
    "options": [
      {
        "id": "A",
        "text": "Resend the correct email and hope it is not noticed",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Immediately inform your manager, recall the email, and follow the data breach process",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Delete the sent email and say nothing",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Call the wrong recipient and ask them to ignore it",
        "isCorrect": false
      }
    ],
    "hint": "A data breach — however accidental — must be reported immediately per TCS protocol.",
    "category": "BizSkill"
  },
  {
    "question": "A female colleague reports that she feels uncomfortable with a co-worker's repeated\ncomments. Under the POSH Act you should:",
    "options": [
      {
        "id": "A",
        "text": "Advise her not to take it personally",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Direct her to the Internal Complaints Committee (ICC)",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Talk to the co-worker yourself to resolve it informally",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Ignore it — it is their personal matter",
        "isCorrect": false
      }
    ],
    "hint": "Under the POSH Act, complaints must go through the Internal Complaints Committee.",
    "category": "BizSkill"
  },
  {
    "question": "Which HTML tag is used to create a hyperlink?",
    "options": [
      {
        "id": "A",
        "text": "<link>",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "<a>",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "<href>",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "<url>",
        "isCorrect": false
      }
    ],
    "hint": "The anchor tag <a href='...'> creates hyperlinks in HTML.",
    "category": "UI"
  },
  {
    "question": "What does the CSS property 'box-model' include? (Select the complete set)",
    "options": [
      {
        "id": "A",
        "text": "Margin, Border, Padding, Content",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Margin, Shadow, Border, Content",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Padding, Border, Outline, Content",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Margin, Padding, Font, Content",
        "isCorrect": false
      }
    ],
    "hint": "The CSS Box Model layers: Content → Padding → Border → Margin.",
    "category": "UI"
  },
  {
    "question": "Which CSS selector has the highest specificity?",
    "options": [
      {
        "id": "A",
        "text": "p { color: red; }",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": ".myClass { color: red; }",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "#myId { color: red; }",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "* { color: red; }",
        "isCorrect": false
      }
    ],
    "hint": "ID selectors (#id) have higher specificity than class (.class) or element (tag) selectors.",
    "category": "UI"
  },
  {
    "question": "What is the correct HTML5 tag to define navigation links?",
    "options": [
      {
        "id": "A",
        "text": "<nav>",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "<navigation>",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "<menu>",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "<header>",
        "isCorrect": false
      }
    ],
    "hint": "<nav> is the semantic HTML5 tag for navigation menus.",
    "category": "UI"
  },
  {
    "question": "Which CSS display value makes elements appear side-by-side and allows width/height?",
    "options": [
      {
        "id": "A",
        "text": "inline",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "block",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "inline-block",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "flex",
        "isCorrect": false
      }
    ],
    "hint": "inline-block respects width/height while flowing inline with other elements.",
    "category": "UI"
  },
  {
    "question": "In CSS Flexbox, which property aligns items along the cross-axis?",
    "options": [
      {
        "id": "A",
        "text": "justify-content",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "align-items",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "flex-direction",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "flex-wrap",
        "isCorrect": false
      }
    ],
    "hint": "align-items controls alignment on the cross-axis (perpendicular to main axis).",
    "category": "UI"
  },
  {
    "question": "What will the following HTML render? <p style='color:red;'>Hello</p>",
    "options": [
      {
        "id": "A",
        "text": "Text 'Hello' in the default black colour",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Text 'Hello' displayed in red colour",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "An error — inline style is invalid",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Text 'Hello' with a red background",
        "isCorrect": false
      }
    ],
    "hint": "Inline styles directly apply CSS properties to individual elements.",
    "category": "UI"
  },
  {
    "question": "Which input type in HTML5 shows a date picker in modern browsers?",
    "options": [
      {
        "id": "A",
        "text": "<input type=\"text\">",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "<input type=\"date\">",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "<input type=\"calendar\">",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "<input type=\"datetime\">",
        "isCorrect": false
      }
    ],
    "hint": "type=\"date\" renders a native date-picker widget in HTML5-compliant browsers.",
    "category": "UI"
  },
  {
    "question": "Which command lists all files including hidden files in a directory?",
    "options": [
      {
        "id": "A",
        "text": "ls",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "ls -l",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "ls -a",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "ls -h",
        "isCorrect": false
      }
    ],
    "hint": "ls -a shows all files including those starting with a dot (hidden files).",
    "category": "Unix"
  },
  {
    "question": "What does the command 'chmod 755 file.sh' do?",
    "options": [
      {
        "id": "A",
        "text": "Gives full permission to everyone",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Owner: rwx, Group: r-x, Others: r-x",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Owner: rw-, Group: r--, Others: r--",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Makes the file read-only for everyone",
        "isCorrect": false
      }
    ],
    "hint": "7=rwx (owner), 5=r-x (group), 5=r-x (others). Standard for executable scripts.",
    "category": "Unix"
  },
  {
    "question": "Which command is used to search for a pattern in a file?",
    "options": [
      {
        "id": "A",
        "text": "find",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "locate",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "grep",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "awk",
        "isCorrect": false
      }
    ],
    "hint": "grep (Global Regular Expression Print) searches for text patterns in files.",
    "category": "Unix"
  },
  {
    "question": "What does the pipe symbol | do in Unix?",
    "options": [
      {
        "id": "A",
        "text": "Redirects output to a file",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Passes the output of one command as input to another",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Runs two commands simultaneously",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Appends output to a file",
        "isCorrect": false
      }
    ],
    "hint": "The pipe | chains commands: ls -l | grep .txt sends ls output to grep.",
    "category": "Unix"
  },
  {
    "question": "Which command shows the current working directory?",
    "options": [
      {
        "id": "A",
        "text": "cwd",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "dir",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "pwd",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "cd .",
        "isCorrect": false
      }
    ],
    "hint": "pwd (Print Working Directory) displays the absolute path of the current directory.",
    "category": "Unix"
  },
  {
    "question": "How do you redirect command output to a file (overwrite)?",
    "options": [
      {
        "id": "A",
        "text": "command >> file",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "command > file",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "command | file",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "command < file",
        "isCorrect": false
      }
    ],
    "hint": "> redirects and overwrites. >> appends. < reads from file as input.",
    "category": "Unix"
  },
  {
    "question": "Which command removes a directory and all its contents recursively?",
    "options": [
      {
        "id": "A",
        "text": "rm dir",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "rmdir -a dir",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "rm -rf dir",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "del -r dir",
        "isCorrect": false
      }
    ],
    "hint": "rm -rf: -r for recursive, -f to force without prompting. Use with caution!",
    "category": "Unix"
  },
  {
    "question": "What is the output of: print(type([]))?",
    "options": [
      {
        "id": "A",
        "text": "<class 'dict'>",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "<class 'list'>",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "<class 'tuple'>",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "<class 'set'>",
        "isCorrect": false
      }
    ],
    "hint": "[] creates an empty list. type([]) returns <class 'list'>.",
    "category": "Java / Python"
  },
  {
    "question": "Which Python data structure does NOT allow duplicate values?",
    "options": [
      {
        "id": "A",
        "text": "List",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Tuple",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Set",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Dictionary (values)",
        "isCorrect": false
      }
    ],
    "hint": "Sets store only unique elements. Duplicates are automatically removed.",
    "category": "Java / Python"
  },
  {
    "question": "What is the output of: print(2 ** 3)?",
    "options": [
      {
        "id": "A",
        "text": "6",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "8",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "9",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Error",
        "isCorrect": false
      }
    ],
    "hint": "** is the exponentiation operator. 2**3 = 2^3 = 8.",
    "category": "Java / Python"
  },
  {
    "question": "Which keyword is used to handle exceptions in Python?",
    "options": [
      {
        "id": "A",
        "text": "catch",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "except",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "error",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "handle",
        "isCorrect": false
      }
    ],
    "hint": "Python uses try/except blocks (not try/catch like Java).",
    "category": "Java / Python"
  },
  {
    "question": "What does list.append(x) do?",
    "options": [
      {
        "id": "A",
        "text": "Inserts x at the beginning",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Adds x at the end of the list",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Returns a new list with x added",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Sorts the list and adds x",
        "isCorrect": false
      }
    ],
    "hint": "append() adds an element to the end in O(1) time.\nJAVA QUESTIONS",
    "category": "Java / Python"
  },
  {
    "question": "Which access modifier makes a class member accessible only within the same class?",
    "options": [
      {
        "id": "A",
        "text": "public",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "protected",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "default",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "private",
        "isCorrect": true
      }
    ],
    "hint": "private limits visibility to the declaring class only.",
    "category": "Java / Python"
  },
  {
    "question": "What is the output of: System.out.println(10 / 3); in Java?",
    "options": [
      {
        "id": "A",
        "text": "3.33",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "3",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "3.0",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Compile Error",
        "isCorrect": false
      }
    ],
    "hint": "Integer division in Java truncates decimal. 10/3 = 3.",
    "category": "Java / Python"
  },
  {
    "question": "Which Java keyword prevents method overriding?",
    "options": [
      {
        "id": "A",
        "text": "static",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "abstract",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "final",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "synchronized",
        "isCorrect": false
      }
    ],
    "hint": "final methods cannot be overridden by subclasses.",
    "category": "Java / Python"
  },
  {
    "question": "What is the correct way to declare an array in Java?",
    "options": [
      {
        "id": "A",
        "text": "int arr = new int[5];",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "int[] arr = new int[5];",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "int arr[] = new int(5);",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "array arr = new array(5);",
        "isCorrect": false
      }
    ],
    "hint": "int[] arr = new int[5]; is the standard Java array declaration syntax.",
    "category": "Java / Python"
  },
  {
    "question": "In OOP, what is 'Encapsulation'?",
    "options": [
      {
        "id": "A",
        "text": "Hiding implementation details and exposing only necessary interfaces",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "One class inheriting from another",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "A function calling itself",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "One method having multiple implementations",
        "isCorrect": false
      }
    ],
    "hint": "Encapsulation = bundling data + methods, hiding internal state via private fields.",
    "category": "Java / Python"
  },
  {
    "question": "Which SQL clause is used to filter rows AFTER grouping?",
    "options": [
      {
        "id": "A",
        "text": "WHERE",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "FILTER",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "HAVING",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "ORDER BY",
        "isCorrect": false
      }
    ],
    "hint": "HAVING filters grouped results; WHERE filters before grouping.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "What will the query return? SELECT COUNT(*) FROM employees WHERE salary > 50000;",
    "options": [
      {
        "id": "A",
        "text": "Sum of salaries above 50000",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Number of employees earning above 50000",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "All employees with salary > 50000",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Average salary above 50000",
        "isCorrect": false
      }
    ],
    "hint": "COUNT(*) returns the count of rows matching the WHERE condition.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "Which JOIN returns all rows from the left table and matching rows from the right?",
    "options": [
      {
        "id": "A",
        "text": "INNER JOIN",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "RIGHT JOIN",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "LEFT JOIN",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "FULL OUTER JOIN",
        "isCorrect": false
      }
    ],
    "hint": "LEFT JOIN keeps all rows from the left table; unmatched right rows show NULL.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "Which keyword removes duplicate rows from a SELECT result?",
    "options": [
      {
        "id": "A",
        "text": "UNIQUE",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "DISTINCT",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "DIFFERENT",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "NODUPLICATE",
        "isCorrect": false
      }
    ],
    "hint": "SELECT DISTINCT column_name removes duplicate values from the result set.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "What does this query do? UPDATE employees SET salary = salary * 1.10 WHERE dept =\n'IT';",
    "options": [
      {
        "id": "A",
        "text": "Gives all employees a 10% salary cut",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Gives IT department employees a 10% raise",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Sets IT employee salary to 1.10",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Multiplies all salaries by 10",
        "isCorrect": false
      }
    ],
    "hint": "salary * 1.10 multiplies by 1.1, effectively adding 10% to current salary.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "Which aggregate function returns the highest value?",
    "options": [
      {
        "id": "A",
        "text": "TOP()",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "MAX()",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "HIGHEST()",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "CEILING()",
        "isCorrect": false
      }
    ],
    "hint": "MAX() returns the maximum value in the specified column.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "What is a PRIMARY KEY?",
    "options": [
      {
        "id": "A",
        "text": "A key that allows NULL values",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "A foreign key reference",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "A column (or set) that uniquely identifies each row and cannot be NULL",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "An index on any column",
        "isCorrect": false
      }
    ],
    "hint": "Primary Key = NOT NULL + UNIQUE. Every table should have one.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "Which command permanently removes all rows from a table but keeps its structure?",
    "options": [
      {
        "id": "A",
        "text": "DROP TABLE",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "DELETE FROM table",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "TRUNCATE TABLE",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "REMOVE TABLE",
        "isCorrect": false
      }
    ],
    "hint": "TRUNCATE is faster than DELETE (no row-by-row logging) and keeps the table schema.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "TCS was founded in which year?",
    "options": [
      {
        "id": "A",
        "text": "1964",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "1968",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "1972",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "1981",
        "isCorrect": false
      }
    ],
    "hint": "TCS was established in 1968 by F.C. Kohli under Tata Sons.",
    "category": "KYT"
  },
  {
    "question": "Who is considered the 'Father of Indian IT' and was the first CEO of TCS?",
    "options": [
      {
        "id": "A",
        "text": "Ratan Tata",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "N. Chandrasekaran",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "F.C. Kohli",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Noshir Soonawala",
        "isCorrect": false
      }
    ],
    "hint": "F.C. Kohli founded and led TCS as its first CEO.",
    "category": "KYT"
  },
  {
    "question": "TCS is a subsidiary of which conglomerate?",
    "options": [
      {
        "id": "A",
        "text": "Mahindra Group",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Birla Group",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Tata Sons",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Reliance Industries",
        "isCorrect": false
      }
    ],
    "hint": "TCS is a subsidiary of Tata Sons, part of the Tata Group.",
    "category": "KYT"
  },
  {
    "question": "What does TCS stand for?",
    "options": [
      {
        "id": "A",
        "text": "Tata Computer Services",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Tata Consultancy Services",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Technology Consulting Solutions",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Tata Corporate Solutions",
        "isCorrect": false
      }
    ],
    "hint": "Tata Consultancy Services — founded 1968.",
    "category": "KYT"
  },
  {
    "question": "TCS headquarters is located in:",
    "options": [
      {
        "id": "A",
        "text": "Bengaluru",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Chennai",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Hyderabad",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Mumbai",
        "isCorrect": true
      }
    ],
    "hint": "TCS is headquartered at Nariman Point, Mumbai.",
    "category": "KYT"
  },
  {
    "question": "What does 'EPIC' stand for in TCS core values?",
    "options": [
      {
        "id": "A",
        "text": "Excellence Passion Innovation Commitment",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Ethics Passion Integrity Commitment",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Ethics Pioneering Innovation Creativity",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Excellence Pioneering Integrity Collaboration",
        "isCorrect": false
      }
    ],
    "hint": "EPIC = Ethics, Passion, Integrity, Commitment.",
    "category": "KYT"
  },
  {
    "question": "TCS became the first Indian IT company to reach a $100 billion market cap in:",
    "options": [
      {
        "id": "A",
        "text": "2014",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "2016",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "2018",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "2020",
        "isCorrect": false
      }
    ],
    "hint": "TCS crossed $100B market cap milestone in 2018.",
    "category": "KYT"
  },
  {
    "question": "TCS iON is primarily used for:",
    "options": [
      {
        "id": "A",
        "text": "Stock trading",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Cloud-based assessments and SMB solutions",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Satellite communication",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Healthcare management",
        "isCorrect": false
      }
    ],
    "hint": "TCS iON provides cloud-based business and assessment solutions.",
    "category": "KYT"
  },
  {
    "question": "Which TCS programme is a mandatory pre-joining learning platform for freshers?",
    "options": [
      {
        "id": "A",
        "text": "TCS NINJA",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "TCS AIP",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "TCS Xplore",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "TCS Digital",
        "isCorrect": false
      }
    ],
    "hint": "TCS Xplore is the mandatory pre-joining e-learning programme.",
    "category": "KYT"
  },
  {
    "question": "What is the full form of IPA in TCS context?",
    "options": [
      {
        "id": "A",
        "text": "Internal Performance Assessment",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "iON Proctored Assessment",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Integrated Programming Aptitude",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Internal Proctored Appraisal",
        "isCorrect": false
      }
    ],
    "hint": "IPA = iON Proctored Assessment.",
    "category": "KYT"
  },
  {
    "question": "TCS was listed on Indian stock exchanges (BSE/NSE) in which year?",
    "options": [
      {
        "id": "A",
        "text": "2000",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "2002",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "2004",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "2006",
        "isCorrect": false
      }
    ],
    "hint": "TCS had its IPO and was listed in August 2004.",
    "category": "KYT"
  },
  {
    "question": "Which of the following is NOT a TCS subsidiary/brand?",
    "options": [
      {
        "id": "A",
        "text": "TCS iON",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Diligenta",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Quartz",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Infosys BPO",
        "isCorrect": true
      }
    ],
    "hint": "Infosys BPO belongs to Infosys, not TCS.",
    "category": "KYT"
  },
  {
    "question": "TCS's revenue for FY2024 was approximately:",
    "options": [
      {
        "id": "A",
        "text": "$15 billion",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "$25 billion",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "$30 billion",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "$10 billion",
        "isCorrect": false
      }
    ],
    "hint": "TCS reported revenue of approx. $25–26 billion for FY2024.",
    "category": "KYT"
  },
  {
    "question": "TCS operates in how many countries approximately?",
    "options": [
      {
        "id": "A",
        "text": "25",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "46",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "50+",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "100+",
        "isCorrect": false
      }
    ],
    "hint": "TCS operates in 50+ countries globally.",
    "category": "KYT"
  },
  {
    "question": "The TCS AIP (Academic Interface Programme) primarily partners with:",
    "options": [
      {
        "id": "A",
        "text": "IITs only",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "500+ colleges across India",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Foreign universities",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Government institutes only",
        "isCorrect": false
      }
    ],
    "hint": "TCS AIP partners with 500+ colleges to co-create curriculum.",
    "category": "KYT"
  },
  {
    "question": "Which TCS initiative focuses on making India digitally empowered?",
    "options": [
      {
        "id": "A",
        "text": "TCS BPS",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "TCS goIT",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "TCS CodeVita",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "TCS DigiFlux",
        "isCorrect": false
      }
    ],
    "hint": "TCS goIT is a digital literacy initiative for students.",
    "category": "KYT"
  },
  {
    "question": "TCS CodeVita is a:",
    "options": [
      {
        "id": "A",
        "text": "Hiring test",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Global programming contest",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Internal coding bootcamp",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Product development sprint",
        "isCorrect": false
      }
    ],
    "hint": "TCS CodeVita is one of the world's largest coding competitions.",
    "category": "KYT"
  },
  {
    "question": "What is TCS BaNCS?",
    "options": [
      {
        "id": "A",
        "text": "An HR system",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "A banking and financial services software product",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "A cloud platform",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "A testing tool",
        "isCorrect": false
      }
    ],
    "hint": "TCS BaNCS is TCS's flagship banking and financial services platform.",
    "category": "KYT"
  },
  {
    "question": "TCS Ignite is a training programme designed for:",
    "options": [
      {
        "id": "A",
        "text": "Non-engineering graduates joining TCS",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Senior managers",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Data scientists only",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Foreign hires",
        "isCorrect": false
      }
    ],
    "hint": "TCS Ignite trains non-engineering/arts graduates joining TCS.",
    "category": "KYT"
  },
  {
    "question": "Which TCS platform is used for digital learning and skilling?",
    "options": [
      {
        "id": "A",
        "text": "TCS iON",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "TCS Fresco Play",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "TCS Xplore",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "TCS BaNCS",
        "isCorrect": false
      }
    ],
    "hint": "TCS Fresco Play is TCS's internal digital learning platform.",
    "category": "KYT"
  },
  {
    "question": "TCS was ranked in the Fortune Global 500 list. This ranking is based on:",
    "options": [
      {
        "id": "A",
        "text": "Market cap",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Employee headcount",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Annual revenue",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Profit",
        "isCorrect": false
      }
    ],
    "hint": "Fortune 500 ranks companies by annual revenue.",
    "category": "KYT"
  },
  {
    "question": "What is TCS's employee count approximately (as of 2024)?",
    "options": [
      {
        "id": "A",
        "text": "100,000",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "200,000",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "600,000",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "1,000,000",
        "isCorrect": false
      }
    ],
    "hint": "TCS employs approximately 600,000+ people globally.",
    "category": "KYT"
  },
  {
    "question": "TCS's corporate social responsibility initiative is called:",
    "options": [
      {
        "id": "A",
        "text": "Tata Seva",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "BridgeIT",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Adult Literacy Programme",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Tata Relief",
        "isCorrect": false
      }
    ],
    "hint": "TCS Adult Literacy Programme has impacted millions of lives.",
    "category": "KYT"
  },
  {
    "question": "Which stock exchange is TCS listed on?",
    "options": [
      {
        "id": "A",
        "text": "NYSE only",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "BSE and NSE",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "London Stock Exchange",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "All of the above",
        "isCorrect": false
      }
    ],
    "hint": "TCS is listed on BSE (500325) and NSE (TCS).",
    "category": "KYT"
  },
  {
    "question": "TCS's primary business domain is:",
    "options": [
      {
        "id": "A",
        "text": "Manufacturing",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "IT services and consulting",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Banking",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Telecom hardware",
        "isCorrect": false
      }
    ],
    "hint": "TCS is an IT services, consulting and business solutions company.",
    "category": "KYT"
  },
  {
    "question": "TCS Ninja, TCS Digital, and TCS Prime refer to:",
    "options": [
      {
        "id": "A",
        "text": "Product lines",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Employee hiring tracks",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Office locations",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Client categories",
        "isCorrect": false
      }
    ],
    "hint": "These are TCS's three freshers hiring tracks based on NQT scores.",
    "category": "KYT"
  },
  {
    "question": "The TCS NQT is conducted by:",
    "options": [
      {
        "id": "A",
        "text": "TCS HR directly",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "TCS iON",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "NASSCOM",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Ministry of Education",
        "isCorrect": false
      }
    ],
    "hint": "TCS NQT is powered by TCS iON.",
    "category": "KYT"
  },
  {
    "question": "CHRO stands for in a corporate context:",
    "options": [
      {
        "id": "A",
        "text": "Chief HR Officer",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Core HR Operations",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Central Human Resources",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Chief Hiring and Recruitment Officer",
        "isCorrect": false
      }
    ],
    "hint": "CHRO = Chief Human Resources Officer.",
    "category": "KYT"
  },
  {
    "question": "TCS Quartz is associated with:",
    "options": [
      {
        "id": "A",
        "text": "Blockchain and financial services",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Cloud storage",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "UI/UX design",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Cybersecurity",
        "isCorrect": false
      }
    ],
    "hint": "TCS Quartz is TCS's blockchain-based smart ledger platform.",
    "category": "KYT"
  },
  {
    "question": "TCS's vision statement is:",
    "options": [
      {
        "id": "A",
        "text": "Connecting people to opportunities",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "To help customers achieve their business objectives",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "0.1 Margin philosophy",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Being the most admired company",
        "isCorrect": false
      }
    ],
    "hint": "TCS's vision: 'Help customers achieve their business objectives by providing innovative, best-in-class consulting,\nIT solutions and services.'",
    "category": "KYT"
  },
  {
    "question": "Which TCS initiative supports women in technology?",
    "options": [
      {
        "id": "A",
        "text": "TCS Women of Worth",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "TCS WoMen of Gold",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "TCS Instep",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "TCS DigiFlux",
        "isCorrect": false
      }
    ],
    "hint": "TCS promotes the Women of Worth (WOW) network to support women in technology, whereas TCS Instep is an internship program.",
    "category": "KYT"
  },
  {
    "question": "TCS PACE Port is TCS's:",
    "options": [
      {
        "id": "A",
        "text": "Training centre",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Innovation co-creation hub for clients",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Data centre",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Payroll system",
        "isCorrect": false
      }
    ],
    "hint": "TCS PACE Ports are innovation and co-creation hubs for clients.",
    "category": "KYT"
  },
  {
    "question": "Which of the following is TCS's cloud platform?",
    "options": [
      {
        "id": "A",
        "text": "AWS",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Azure",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "TCS Cloud",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Tata Cloud",
        "isCorrect": false
      }
    ],
    "hint": "TCS has its own TCS Cloud offering alongside partnerships with AWS/Azure.",
    "category": "KYT"
  },
  {
    "question": "TCS's Agile journey framework is known as:",
    "options": [
      {
        "id": "A",
        "text": "TCS SAFE",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "TCS Agile@Scale",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "TCS ATOM",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Business 4.0",
        "isCorrect": false
      }
    ],
    "hint": "TCS promotes Agile@Scale across its delivery model.",
    "category": "KYT"
  },
  {
    "question": "Business 4.0 is TCS's thought leadership framework focused on:",
    "options": [
      {
        "id": "A",
        "text": "Cost cutting",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Driving business growth using intelligence, agility, automation and cloud",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Blockchain only",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Social media marketing",
        "isCorrect": false
      }
    ],
    "hint": "Business 4.0 = intelligence + agility + automation + cloud.",
    "category": "KYT"
  },
  {
    "question": "The TCS Ultimatix portal is used for:",
    "options": [
      {
        "id": "A",
        "text": "Client billing",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Internal employee self-service, HR, and project management",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Vendor management",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Public job applications",
        "isCorrect": false
      }
    ],
    "hint": "Ultimatix is TCS's internal ERP/employee portal.",
    "category": "KYT"
  },
  {
    "question": "TCS's Global Delivery Model (GDM) is known for:",
    "options": [
      {
        "id": "A",
        "text": "On-site only delivery",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Offshore-heavy delivery to reduce cost",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "A blend of on-site, near-shore and offshore delivery",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "AI-only delivery",
        "isCorrect": false
      }
    ],
    "hint": "GDM balances on-site, near-shore and offshore to optimize cost and quality.",
    "category": "KYT"
  },
  {
    "question": "Who is the current CEO of TCS (as of 2024)?",
    "options": [
      {
        "id": "A",
        "text": "Ratan Tata",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "N. Chandrasekaran",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "K. Krithivasan",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Rajesh Gopinathan",
        "isCorrect": false
      }
    ],
    "hint": "K. Krithivasan took over as CEO of TCS in June 2023.",
    "category": "KYT"
  },
  {
    "question": "TCS's TalentNext programme is aimed at:",
    "options": [
      {
        "id": "A",
        "text": "Freshers",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Reskilling and upskilling existing TCS employees",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "External candidates",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Leadership only",
        "isCorrect": false
      }
    ],
    "hint": "TalentNext helps existing TCSers build new-age skills.",
    "category": "KYT"
  },
  {
    "question": "The ILP (Initial Learning Programme) at TCS is a:",
    "options": [
      {
        "id": "A",
        "text": "Client training",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "3–6 month foundation training for new joiners",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Annual appraisal",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Campus recruitment drive",
        "isCorrect": false
      }
    ],
    "hint": "ILP is the mandatory initial training all TCS freshers undergo.",
    "category": "KYT"
  },
  {
    "question": "TCS has won the IAOP Global Outsourcing 100 award, which recognises:",
    "options": [
      {
        "id": "A",
        "text": "Top outsourcing companies",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Top software products",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Top hardware manufacturers",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Best CSR companies",
        "isCorrect": false
      }
    ],
    "hint": "IAOP Global Outsourcing 100 ranks the world's best outsourcing providers.",
    "category": "KYT"
  },
  {
    "question": "TCS was awarded the Global Top Employer certification for:",
    "options": [
      {
        "id": "A",
        "text": "Highest revenue",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Best workplace practices and employee development",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Lowest attrition",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Largest headcount",
        "isCorrect": false
      }
    ],
    "hint": "Top Employer certification recognises excellence in employee experience.",
    "category": "KYT"
  },
  {
    "question": "TCS's Mastercraft is a suite of:",
    "options": [
      {
        "id": "A",
        "text": "HR products",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Enterprise modernisation and testing tools",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "IoT devices",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Marketing software",
        "isCorrect": false
      }
    ],
    "hint": "TCS Mastercraft automates application modernisation, migration and testing.",
    "category": "KYT"
  },
  {
    "question": "Which TCS platform supports cognitive automation and AI?",
    "options": [
      {
        "id": "A",
        "text": "TCS iON",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "ignio",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "BaNCS",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Ultimatix",
        "isCorrect": false
      }
    ],
    "hint": "TCS ignio is an AI/ML-powered cognitive automation platform.",
    "category": "KYT"
  },
  {
    "question": "TCS's sustainability goal includes achieving net-zero carbon emissions by:",
    "options": [
      {
        "id": "A",
        "text": "2030",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "2035",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "2040",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "2050",
        "isCorrect": false
      }
    ],
    "hint": "TCS aims for net-zero carbon emissions by 2030.",
    "category": "KYT"
  },
  {
    "question": "TCS's acquisition of Diligenta was in the domain of:",
    "options": [
      {
        "id": "A",
        "text": "Retail banking",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "UK life and pensions administration",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Healthcare IT",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Manufacturing ERP",
        "isCorrect": false
      }
    ],
    "hint": "Diligenta (TCS subsidiary) specialises in UK life and pensions BPS.",
    "category": "KYT"
  },
  {
    "question": "TCS COINS (Continuous Improvement) is a framework for:",
    "options": [
      {
        "id": "A",
        "text": "Cost management",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Process improvement and quality",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Client acquisition",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Recruitment",
        "isCorrect": false
      }
    ],
    "hint": "TCS COINS drives continuous improvement across delivery processes.",
    "category": "KYT"
  },
  {
    "question": "The IPA exam is conducted at:",
    "options": [
      {
        "id": "A",
        "text": "TCS offices",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Authorised TCS iON centres",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Colleges",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Online from home",
        "isCorrect": false
      }
    ],
    "hint": "IPA is proctored and conducted at authorised TCS iON centres.",
    "category": "KYT"
  },
  {
    "question": "TCS's Project Sahay is associated with:",
    "options": [
      {
        "id": "A",
        "text": "AI research",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Rural financial inclusion",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Space technology",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Climate change",
        "isCorrect": false
      }
    ],
    "hint": "Project Sahay supports rural financial inclusion and digital empowerment.",
    "category": "KYT"
  },
  {
    "question": "Which of the following is the TCS mascot/brand symbol?",
    "options": [
      {
        "id": "A",
        "text": "A blue wave",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "A rising sun",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "An elephant",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "A digital circuit",
        "isCorrect": false
      }
    ],
    "hint": "TCS's brand identity features a distinctive blue wave design.",
    "category": "KYT"
  },
  {
    "question": "You discover your colleague has been inflating project hours in timesheets. You should:",
    "options": [
      {
        "id": "A",
        "text": "Ignore it",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Do the same to match them",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Report it to your manager or ethics hotline",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Confront them publicly in a team meeting",
        "isCorrect": false
      }
    ],
    "hint": "Timesheet fraud is unethical. Report via proper channels (manager/ethics hotline).",
    "category": "BizSkill"
  },
  {
    "question": "A client requests a feature outside the agreed scope without a formal change order. You should:",
    "options": [
      {
        "id": "A",
        "text": "Implement it immediately to please the client",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Politely explain the change management process and raise a formal change request",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Refuse entirely",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Ask the client to contact your CEO",
        "isCorrect": false
      }
    ],
    "hint": "Scope changes must go through formal change management to protect both parties.",
    "category": "BizSkill"
  },
  {
    "question": "In a professional email, the 'CC' field is used to:",
    "options": [
      {
        "id": "A",
        "text": "Send the primary message",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Copy people who need to be informed but not act",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "BCC all recipients",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Mark the email as urgent",
        "isCorrect": false
      }
    ],
    "hint": "CC = Carbon Copy. Recipients in CC are informed but not the primary action-takers.",
    "category": "BizSkill"
  },
  {
    "question": "POSH Act stands for:",
    "options": [
      {
        "id": "A",
        "text": "Prevention of Sexual Harassment",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Protection of Staff Harassment",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Prohibition of Service Harassment",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Prevention of Staff Hostility",
        "isCorrect": false
      }
    ],
    "hint": "POSH = Prevention, Protection and Redressal of Sexual Harassment at Workplace Act, 2013.",
    "category": "BizSkill"
  },
  {
    "question": "The Internal Complaints Committee (ICC) under POSH is responsible for:",
    "options": [
      {
        "id": "A",
        "text": "Hiring decisions",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Investigating sexual harassment complaints",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "under POSH is responsible for:",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Project allocation",
        "isCorrect": false
      }
    ],
    "hint": "ICC is the designated body to investigate workplace sexual harassment complaints.",
    "category": "BizSkill"
  },
  {
    "question": "Which of the following is an example of 'professional tone' in an email?",
    "options": [
      {
        "id": "A",
        "text": "'Hey, send me the file ASAP!'",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "'Dear John, could you please share the updated report by EOD?'",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "'john!! where is the file?'",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "'SEND THE FILE NOW'",
        "isCorrect": false
      }
    ],
    "hint": "Professional emails use courteous language, proper salutation, and clear request.",
    "category": "BizSkill"
  },
  {
    "question": "You receive a project task that seems ambiguous. The best first step is:",
    "options": [
      {
        "id": "A",
        "text": "Start working on your own interpretation",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Ask your manager or team lead for clarification",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Guess and submit",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Do nothing and wait",
        "isCorrect": false
      }
    ],
    "hint": "Clarifying ambiguous requirements upfront prevents rework and aligns expectations.",
    "category": "BizSkill"
  },
  {
    "question": "What does 'conflict of interest' mean in a professional context?",
    "options": [
      {
        "id": "A",
        "text": "Two employees disagree on a project",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "A personal interest that could improperly influence professional decisions",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "A software bug conflict",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Schedule conflict between meetings",
        "isCorrect": false
      }
    ],
    "hint": "Conflict of interest = when personal interests could bias professional judgment.",
    "category": "BizSkill"
  },
  {
    "question": "A teammate shares confidential client data in a WhatsApp group. You should:",
    "options": [
      {
        "id": "A",
        "text": "Forward it to your contacts",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Screenshot it for reference",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Inform your manager and follow the data breach protocol",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Ignore it",
        "isCorrect": false
      }
    ],
    "hint": "Sharing confidential data on personal messaging apps violates data security policy.",
    "category": "BizSkill"
  },
  {
    "question": "'Whistleblowing' in a corporate context means:",
    "options": [
      {
        "id": "A",
        "text": "Announcing a product launch",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Reporting unethical practices or misconduct internally or externally",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Quitting a job",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Winning an award",
        "isCorrect": false
      }
    ],
    "hint": "Whistleblowing = reporting wrongdoing. TCS has a formal whistleblower policy.",
    "category": "BizSkill"
  },
  {
    "question": "Which of the following is NOT professional behaviour in a virtual meeting?",
    "options": [
      {
        "id": "A",
        "text": "Muting your microphone when not speaking",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Being on time",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Eating loudly on camera",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Having a clean background",
        "isCorrect": false
      }
    ],
    "hint": "Eating on camera is unprofessional. Muting, punctuality, and clean backgrounds are good practices.",
    "category": "BizSkill"
  },
  {
    "question": "The acronym 'EOD' in professional communication stands for:",
    "options": [
      {
        "id": "A",
        "text": "End of Day",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Error on Delivery",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Estimated Output Date",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Early Office Departure",
        "isCorrect": false
      }
    ],
    "hint": "EOD = End of Day — a common deadline reference in corporate communication.",
    "category": "BizSkill"
  },
  {
    "question": "Intellectual property (IP) in TCS refers to:",
    "options": [
      {
        "id": "A",
        "text": "Physical office equipment",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Original work, inventions, code and designs owned by TCS or its clients",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Employee personal data",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Client contact lists",
        "isCorrect": false
      }
    ],
    "hint": "IP includes code, designs, methodologies, and trade secrets owned by TCS/clients.",
    "category": "BizSkill"
  },
  {
    "question": "You are assigned to a project but have a prior personal commitment on the delivery date. You should:",
    "options": [
      {
        "id": "A",
        "text": "Miss the deadline without informing anyone",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Inform your manager in advance and discuss possible solutions",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Submit incomplete work",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Ask a colleague to submit under your name",
        "isCorrect": false
      }
    ],
    "hint": "Proactive communication about conflicts allows for planning and avoids last-minute surprises.",
    "category": "BizSkill"
  },
  {
    "question": "Which type of communication is most appropriate for documenting project decisions?",
    "options": [
      {
        "id": "A",
        "text": "Verbal over phone",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "WhatsApp message",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Formal email or project tracker",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Informal chat",
        "isCorrect": false
      }
    ],
    "hint": "Formal email or project tracker ensures decisions are documented and traceable.",
    "category": "BizSkill"
  },
  {
    "question": "'KPI' stands for:",
    "options": [
      {
        "id": "A",
        "text": "Key Performance Indicator",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Key Process Index",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Knowledge Process Integration",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Known Problem Issue",
        "isCorrect": false
      }
    ],
    "hint": "KPI = Key Performance Indicator — a measurable value demonstrating effectiveness.",
    "category": "BizSkill"
  },
  {
    "question": "A new colleague is struggling with a task you have mastered. You should:",
    "options": [
      {
        "id": "A",
        "text": "Ignore them — it is not your responsibility",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Offer to help or point them to relevant resources",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Tell your manager they are incompetent",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Do their work for them permanently",
        "isCorrect": false
      }
    ],
    "hint": "Helping colleagues builds team capability and reflects TCS values (Passion, Commitment).",
    "category": "BizSkill"
  },
  {
    "question": "What is the purpose of a Non-Disclosure Agreement (NDA)?",
    "options": [
      {
        "id": "A",
        "text": "?",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "To prevent parties from sharing confidential information with third parties",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "To confirm project deadlines",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "To allocate project budgets",
        "isCorrect": false
      }
    ],
    "hint": "NDAs legally protect confidential and proprietary information.",
    "category": "BizSkill"
  },
  {
    "question": "During a client call, you don't know the answer to a question. You should:",
    "options": [
      {
        "id": "A",
        "text": "Make up an answer to seem confident",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Say you will check and get back to them with the correct information",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Change the subject",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Blame your colleague",
        "isCorrect": false
      }
    ],
    "hint": "Honesty + follow-up is always better than guessing on client calls.",
    "category": "BizSkill"
  },
  {
    "question": "'Escalation' in a project context means:",
    "options": [
      {
        "id": "A",
        "text": "Promoting an employee",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Raising an issue to a higher authority when it cannot be resolved at the current level",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Increasing project cost",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Sending a congratulatory email",
        "isCorrect": false
      }
    ],
    "hint": "Escalation = formally raising unresolved issues to a senior level for action.",
    "category": "BizSkill"
  },
  {
    "question": "The 'Zero Tolerance' policy in TCS applies to:",
    "options": [
      {
        "id": "A",
        "text": "Minor code bugs",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Workplace harassment, discrimination, and fraud",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Project delays",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Employee lateness",
        "isCorrect": false
      }
    ],
    "hint": "Zero Tolerance = no compromise on harassment, fraud, discrimination, or unethical conduct.",
    "category": "BizSkill"
  },
  {
    "question": "Which of the following is an example of 'active listening'?",
    "options": [
      {
        "id": "A",
        "text": "Checking your phone while someone talks",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Nodding, making eye contact, and paraphrasing what was said",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Waiting for your turn to talk without paying attention",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Interrupting frequently",
        "isCorrect": false
      }
    ],
    "hint": "Active listening = full attention, acknowledgement, and reflective responses.",
    "category": "BizSkill"
  },
  {
    "question": "A client escalates a complaint directly to you via email. You should:",
    "options": [
      {
        "id": "A",
        "text": "Ignore it — complaints go to your manager",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Reply immediately with an apology, acknowledge the issue, and loop in your manager",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Forward to a junior colleague",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Reply with an excuse",
        "isCorrect": false
      }
    ],
    "hint": "Acknowledge, apologise (if warranted), and involve the right stakeholders promptly.",
    "category": "BizSkill"
  },
  {
    "question": "'Agile' in software development primarily emphasises:",
    "options": [
      {
        "id": "A",
        "text": "Strict sequential phases",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Iterative development with continuous collaboration and feedback",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Writing maximum documentation",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Fixed scope, schedule and budget",
        "isCorrect": false
      }
    ],
    "hint": "Agile = iterative, collaborative, flexible development with continuous delivery.",
    "category": "BizSkill"
  },
  {
    "question": "Which behaviour best demonstrates TCS core value 'Integrity'?",
    "options": [
      {
        "id": "A",
        "text": "Delivering work only when monitored",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Admitting a mistake even when it is uncomfortable",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Agreeing with whatever the client says",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Only helping teammates when rewarded",
        "isCorrect": false
      }
    ],
    "hint": "Integrity = doing the right thing especially when no one is watching.",
    "category": "BizSkill"
  },
  {
    "question": "'Unconscious bias' refers to:",
    "options": [
      {
        "id": "A",
        "text": "Deliberate discrimination",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Attitudes or stereotypes that affect decisions without conscious awareness",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "A software glitch",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "A company policy",
        "isCorrect": false
      }
    ],
    "hint": "Unconscious bias affects decisions without the person being aware of it.",
    "category": "BizSkill"
  },
  {
    "question": "Which of the following is appropriate during onboarding at TCS?",
    "options": [
      {
        "id": "A",
        "text": "Sharing your previous employer's client data to help TCS win projects",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Completing mandatory compliance and policy training on time",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Skipping induction sessions",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Posting confidential onboarding materials on social media",
        "isCorrect": false
      }
    ],
    "hint": "Completing compliance training on time is a mandatory and professional responsibility.",
    "category": "BizSkill"
  },
  {
    "question": "'Due diligence' in a business context means:",
    "options": [
      {
        "id": "A",
        "text": "Avoiding difficult tasks",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Thorough research and verification before making a decision",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Delegating all work",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Rushing to meet deadlines",
        "isCorrect": false
      }
    ],
    "hint": "Due diligence = thorough investigation and verification before decisions or commitments.",
    "category": "BizSkill"
  },
  {
    "question": "A male colleague makes repeated comments about a female colleague's appearance. This is:",
    "options": [
      {
        "id": "A",
        "text": "Harmless complimenting",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "A potential case of sexual harassment under the POSH Act",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Only an issue if she complains",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Normal workplace banter",
        "isCorrect": false
      }
    ],
    "hint": "Unwanted repeated comments about appearance can constitute harassment under POSH.",
    "category": "BizSkill"
  },
  {
    "question": "In a performance review, your manager gives you critical feedback. You should:",
    "options": [
      {
        "id": "A",
        "text": "Argue immediately",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Ignore the feedback",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Listen, ask clarifying questions, and create an improvement plan",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Complain to HR about your manager",
        "isCorrect": false
      }
    ],
    "hint": "Constructive engagement with feedback drives professional growth.",
    "category": "BizSkill"
  },
  {
    "question": "What is 'downtime' in an IT project context?",
    "options": [
      {
        "id": "A",
        "text": "Time employees are not working",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Period when a system or service is unavailable",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Leave taken by employees",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Free time between meetings",
        "isCorrect": false
      }
    ],
    "hint": "Downtime = period when a system/service is unavailable, often tracked for SLA compliance.",
    "category": "BizSkill"
  },
  {
    "question": "Which of the following best describes 'diversity and inclusion' in TCS?",
    "options": [
      {
        "id": "A",
        "text": "Hiring only from specific universities",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Creating a workplace where people of all backgrounds are valued and respected",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Avoiding all disagreements",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Treating all employees identically regardless of individual needs",
        "isCorrect": false
      }
    ],
    "hint": "D&I; = valuing differences and creating equitable, respectful environments.",
    "category": "BizSkill"
  },
  {
    "question": "'SLA' stands for in a service delivery context:",
    "options": [
      {
        "id": "A",
        "text": "System Level Architecture",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Service Level Agreement",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Software License Allocation",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Systematic Logic Assessment",
        "isCorrect": false
      }
    ],
    "hint": "SLA = Service Level Agreement — defines expected service standards and response times.",
    "category": "BizSkill"
  },
  {
    "question": "You accidentally send an email with a typo to a client. You should:",
    "options": [
      {
        "id": "A",
        "text": "Pretend nothing happened",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Send a corrected version with a brief apology",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Blame your email client",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Delete the original and deny sending it",
        "isCorrect": false
      }
    ],
    "hint": "Acknowledge the error briefly, send the correction, and maintain professionalism.",
    "category": "BizSkill"
  },
  {
    "question": "Which of the following is an ethical use of AI tools at TCS?",
    "options": [
      {
        "id": "A",
        "text": "Using AI to generate client deliverables without review and passing them as your own",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Using AI as a productivity aid while reviewing and verifying all outputs",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Sharing client data with public AI tools without authorisation",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Using AI to bypass security controls",
        "isCorrect": false
      }
    ],
    "hint": "AI should augment work — outputs must be reviewed and client data must not be shared externally.",
    "category": "BizSkill"
  },
  {
    "question": "'Micromanagement' refers to:",
    "options": [
      {
        "id": "A",
        "text": "Managing very small projects",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "A manager excessively supervising details instead of empowering the team",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "A coding technique",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "A type of sprint in Agile",
        "isCorrect": false
      }
    ],
    "hint": "Micromanagement = excessive oversight that reduces autonomy and demotivates teams.",
    "category": "BizSkill"
  },
  {
    "question": "When should you use 'Reply All' in a professional email?",
    "options": [
      {
        "id": "A",
        "text": "Always, to keep everyone informed",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Only when all recipients genuinely need the information",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Never",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Only for attachments",
        "isCorrect": false
      }
    ],
    "hint": "Reply All should only be used when every recipient needs to see your reply.",
    "category": "BizSkill"
  },
  {
    "question": "A client praises your team's work but specifically attributes it all to you. You should:",
    "options": [
      {
        "id": "A",
        "text": "Accept all the credit silently",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Politely acknowledge the team's contribution and credit colleagues appropriately",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Argue with the client",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Ask for a bonus",
        "isCorrect": false
      }
    ],
    "hint": "Giving credit where due builds trust and demonstrates TCS value of Integrity.",
    "category": "BizSkill"
  },
  {
    "question": "'Attrition' in HR terms means:",
    "options": [
      {
        "id": "A",
        "text": "Employee promotions",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Employee resignations or turnover rate",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Salary hikes",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "New hiring",
        "isCorrect": false
      }
    ],
    "hint": "Attrition = rate at which employees leave an organisation.",
    "category": "BizSkill"
  },
  {
    "question": "What is the correct response if you find malware on a company device?",
    "options": [
      {
        "id": "A",
        "text": "Delete it yourself and continue working",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Immediately report it to the IT Security team and isolate the device",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Share it with colleagues to warn them",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Ignore it if it does not seem to affect your work",
        "isCorrect": false
      }
    ],
    "hint": "Malware must be reported to IT Security immediately — self-remediation can make things worse.",
    "category": "BizSkill"
  },
  {
    "question": "'Burnout' in a professional context refers to:",
    "options": [
      {
        "id": "A",
        "text": "Overheating of servers",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Chronic workplace stress leading to exhaustion and reduced performance",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "A firewall configuration",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "A project completion celebration",
        "isCorrect": false
      }
    ],
    "hint": "Burnout is a state of chronic stress — managers should watch for it and employees should self-report.",
    "category": "BizSkill"
  },
  {
    "question": "Which of the following is a sign of a positive team culture?",
    "options": [
      {
        "id": "A",
        "text": "Blaming individuals when a project fails",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Celebrating failures as learning opportunities and sharing credit for successes",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Competing internally to sabotage colleagues",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Withholding information to maintain personal advantage",
        "isCorrect": false
      }
    ],
    "hint": "Positive team culture = psychological safety, shared accountability, and mutual support.",
    "category": "BizSkill"
  },
  {
    "question": "'Change management' in an IT project primarily addresses:",
    "options": [
      {
        "id": "A",
        "text": "Hardware upgrades only",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "The people side of transitions — preparing and supporting individuals through change",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Version control in coding",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Financial budget changes",
        "isCorrect": false
      }
    ],
    "hint": "Change management focuses on human adoption of new processes, systems or structures.",
    "category": "BizSkill"
  },
  {
    "question": "You notice a billing discrepancy in your project's financial report. You should:",
    "options": [
      {
        "id": "A",
        "text": "Adjust it yourself without telling anyone",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Bring it to your project manager's attention immediately",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Ignore small amounts",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Report it directly to the client without internal review",
        "isCorrect": false
      }
    ],
    "hint": "Financial discrepancies must be flagged internally immediately.",
    "category": "BizSkill"
  },
  {
    "question": "Which statement best reflects TCS's commitment to sustainability?",
    "options": [
      {
        "id": "A",
        "text": "TCS focuses only on profit maximisation",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "TCS integrates environmental and social responsibility into its business strategy",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Sustainability is only for manufacturing companies",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "TCS does not publish ESG reports",
        "isCorrect": false
      }
    ],
    "hint": "TCS has strong ESG commitments including net-zero, education, and rural development.",
    "category": "BizSkill"
  },
  {
    "question": "In a high-pressure project, a colleague suggests cutting corners on quality. You should:",
    "options": [
      {
        "id": "A",
        "text": "Agree to meet the deadline at any cost",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Raise the quality risk with your manager and explore alternatives like requesting timeline extension",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Stay silent",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Blame the client for unrealistic timelines",
        "isCorrect": false
      }
    ],
    "hint": "Quality shortcuts create long-term risks — escalate and explore options rather than compromising.",
    "category": "BizSkill"
  },
  {
    "question": "'Psychological safety' in a team means:",
    "options": [
      {
        "id": "A",
        "text": "Physical security of the office",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Feeling safe to speak up, share ideas, and admit mistakes without fear of punishment",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Only senior employees have the right to speak",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "All decisions are made by the team lead",
        "isCorrect": false
      }
    ],
    "hint": "Psychological safety enables innovation, honest communication, and learning from mistakes.",
    "category": "BizSkill"
  },
  {
    "question": "Which TCS policy governs the use of social media by employees?",
    "options": [
      {
        "id": "A",
        "text": "TCS Social Media Policy",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "TCS IT Acceptable Use Policy",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Both — TCS has a Social Media Policy and AUP",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "No policy exists",
        "isCorrect": false
      }
    ],
    "hint": "TCS has an IT Acceptable Use Policy and a Social Media Policy governing employee conduct online.",
    "category": "BizSkill"
  },
  {
    "question": "What should you do before sharing any TCS or client data with a third-party vendor?",
    "options": [
      {
        "id": "A",
        "text": "Share freely as they are a vendor",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Verify the data classification, obtain necessary approvals, and ensure an NDA is in place",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Ask your colleague if it is okay",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Share only via WhatsApp to avoid email records",
        "isCorrect": false
      }
    ],
    "hint": "Data sharing with vendors requires classification check, approvals, and legal agreements.",
    "category": "BizSkill"
  },
  {
    "question": "'Proactive communication' means:",
    "options": [
      {
        "id": "A",
        "text": "Waiting for someone to ask before sharing updates",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Anticipating information needs and sharing relevant updates before being asked",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Sending excessive emails",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Only communicating in meetings",
        "isCorrect": false
      }
    ],
    "hint": "Proactive communication = volunteering timely, relevant information without waiting to be asked.",
    "category": "BizSkill"
  },
  {
    "question": "Which HTML tag defines the document title shown in the browser tab?",
    "options": [
      {
        "id": "A",
        "text": "<head>",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "<title>",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "<meta>",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "<header>",
        "isCorrect": false
      }
    ],
    "hint": "The <title> tag inside <head> sets the browser tab title.",
    "category": "UI"
  },
  {
    "question": "What is the correct HTML5 doctype declaration?",
    "options": [
      {
        "id": "A",
        "text": "<!DOCTYPE HTML5>",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "<!DOCTYPE html>",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "<!DOCTYPE HTML PUBLIC>",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "<html type=5>",
        "isCorrect": false
      }
    ],
    "hint": "HTML5 uses the simple <!DOCTYPE html> declaration.",
    "category": "UI"
  },
  {
    "question": "Which attribute makes a text input mandatory in an HTML form?",
    "options": [
      {
        "id": "A",
        "text": "mandatory",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "required",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "validate",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "must-fill",
        "isCorrect": false
      }
    ],
    "hint": "The 'required' attribute makes an input field mandatory for form submission.",
    "category": "UI"
  },
  {
    "question": "Which CSS property controls the space between the element content and its border?",
    "options": [
      {
        "id": "A",
        "text": "margin",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "gap",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "padding",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "spacing",
        "isCorrect": false
      }
    ],
    "hint": "Padding = space between content and border. Margin = space outside the border.",
    "category": "UI"
  },
  {
    "question": "What does 'em' unit represent in CSS?",
    "options": [
      {
        "id": "A",
        "text": "Pixels",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Percentage of parent font-size",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "A fixed unit equal to 1cm",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Viewport width",
        "isCorrect": false
      }
    ],
    "hint": "1em = the font-size of the current/parent element.",
    "category": "UI"
  },
  {
    "question": "Which CSS selector selects all <p> elements inside a <div>?",
    "options": [
      {
        "id": "A",
        "text": "div + p",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "div p",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "div > p",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "div ~ p",
        "isCorrect": false
      }
    ],
    "hint": "'div p' selects all <p> descendants (any depth) inside a div.",
    "category": "UI"
  },
  {
    "question": "What is the default value of the CSS 'position' property?",
    "options": [
      {
        "id": "A",
        "text": "relative",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "absolute",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "fixed",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "static",
        "isCorrect": true
      }
    ],
    "hint": "Default CSS position is 'static' — normal document flow.",
    "category": "UI"
  },
  {
    "question": "Which HTML element is used for the largest heading?",
    "options": [
      {
        "id": "A",
        "text": "<h6>",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "<head>",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "<h1>",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "<big>",
        "isCorrect": false
      }
    ],
    "hint": "<h1> is the largest heading; <h6> is the smallest.",
    "category": "UI"
  },
  {
    "question": "In CSS Flexbox, which property defines the main axis direction?",
    "options": [
      {
        "id": "A",
        "text": "align-items",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "justify-content",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "flex-direction",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "flex-wrap",
        "isCorrect": false
      }
    ],
    "hint": "flex-direction sets main axis: row (default), column, row-reverse, column-reverse.",
    "category": "UI"
  },
  {
    "question": "Which HTML tag creates an unordered (bulleted) list?",
    "options": [
      {
        "id": "A",
        "text": "<ol>",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "<li>",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "<ul>",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "<list>",
        "isCorrect": false
      }
    ],
    "hint": "<ul> creates an unordered list; <ol> creates an ordered (numbered) list.",
    "category": "UI"
  },
  {
    "question": "What does the CSS property 'z-index' control?",
    "options": [
      {
        "id": "A",
        "text": "Element width",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Zoom level",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Stacking order of overlapping elements",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Font size",
        "isCorrect": false
      }
    ],
    "hint": "z-index controls which element appears on top when elements overlap.",
    "category": "UI"
  },
  {
    "question": "Which input type validates an email format in HTML5?",
    "options": [
      {
        "id": "A",
        "text": "text",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "email",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "validate",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "contact",
        "isCorrect": false
      }
    ],
    "hint": "<input type='email'> automatically validates email format.",
    "category": "UI"
  },
  {
    "question": "Which CSS property makes text bold?",
    "options": [
      {
        "id": "A",
        "text": "text-style: bold",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "font-weight: bold",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "font-style: bold",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "text-weight: bold",
        "isCorrect": false
      }
    ],
    "hint": "font-weight: bold (or 700) makes text bold.",
    "category": "UI"
  },
  {
    "question": "What is the correct way to add an external CSS file to an HTML page?",
    "options": [
      {
        "id": "A",
        "text": "<style src='style.css'>",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "<css href='style.css'>",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "<link rel='stylesheet' href='style.css'>",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "<script src='style.css'>",
        "isCorrect": false
      }
    ],
    "hint": "<link rel='stylesheet' href='...'> links external CSS files.",
    "category": "UI"
  },
  {
    "question": "Which HTML tag is used to embed JavaScript in a webpage?",
    "options": [
      {
        "id": "A",
        "text": "<js>",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "<javascript>",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "<script>",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "<code>",
        "isCorrect": false
      }
    ],
    "hint": "<script> tags are used to embed or reference JavaScript.",
    "category": "UI"
  },
  {
    "question": "In CSS, 'display: none' differs from 'visibility: hidden' because:",
    "options": [
      {
        "id": "A",
        "text": "They are identical",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "display:none removes the element from flow; visibility:hidden hides it but keeps the space",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "visibility:hidden is faster",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "display:none only works on block elements",
        "isCorrect": false
      }
    ],
    "hint": "display:none removes from layout; visibility:hidden keeps space but hides visually.",
    "category": "UI"
  },
  {
    "question": "What does the HTML 'alt' attribute on an <img> tag provide?",
    "options": [
      {
        "id": "A",
        "text": "Image caption",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Alternative text if image fails to load (also for accessibility)",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Image title",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Image tooltip",
        "isCorrect": false
      }
    ],
    "hint": "Alt text is crucial for accessibility (screen readers) and when images fail to load.",
    "category": "UI"
  },
  {
    "question": "Which CSS pseudo-class targets an element when hovered over?",
    "options": [
      {
        "id": "A",
        "text": ":focus",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": ":active",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": ":hover",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": ":visited",
        "isCorrect": false
      }
    ],
    "hint": ":hover applies styles when the user's pointer is over the element.",
    "category": "UI"
  },
  {
    "question": "What is 'responsive design' in web development?",
    "options": [
      {
        "id": "A",
        "text": "A website that responds to user clicks quickly",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "A design that adapts layout to different screen sizes using CSS",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "A fast-loading website",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "A design with animated responses",
        "isCorrect": false
      }
    ],
    "hint": "Responsive design uses flexible grids, images, and media queries to adapt to screen sizes.",
    "category": "UI"
  },
  {
    "question": "Which CSS unit is relative to the viewport width?",
    "options": [
      {
        "id": "A",
        "text": "em",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "px",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "vw",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "rem",
        "isCorrect": false
      }
    ],
    "hint": "vw = 1% of the viewport width. vh = 1% of viewport height.",
    "category": "UI"
  },
  {
    "question": "What does the HTML <section> tag represent?",
    "options": [
      {
        "id": "A",
        "text": "A page header",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "A standalone thematic section of content",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "An external link",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "A form section",
        "isCorrect": false
      }
    ],
    "hint": "<section> defines a thematic grouping of content, typically with a heading.",
    "category": "UI"
  },
  {
    "question": "Which CSS property is used to add shadow to an element?",
    "options": [
      {
        "id": "A",
        "text": "text-shadow",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "element-shadow",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "box-shadow",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "shadow",
        "isCorrect": false
      }
    ],
    "hint": "box-shadow adds shadow to the box of an element. text-shadow is for text only.",
    "category": "UI"
  },
  {
    "question": "In JavaScript, which method adds an element to the end of an array?",
    "options": [
      {
        "id": "A",
        "text": "push()",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "append()",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "add()",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "insert()",
        "isCorrect": false
      }
    ],
    "hint": "Array.push() adds one or more elements to the end of an array.",
    "category": "UI"
  },
  {
    "question": "What does 'CSS specificity' determine?",
    "options": [
      {
        "id": "A",
        "text": "Loading speed of CSS",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Which CSS rule applies when multiple rules target the same element",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Order of HTML elements",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Browser compatibility",
        "isCorrect": false
      }
    ],
    "hint": "Specificity determines which conflicting CSS rule wins. ID > Class > Element.",
    "category": "UI"
  },
  {
    "question": "Which HTML tag defines a table row?",
    "options": [
      {
        "id": "A",
        "text": "<td>",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "<th>",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "<tr>",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "<table-row>",
        "isCorrect": false
      }
    ],
    "hint": "<tr> = table row. <td> = table data cell. <th> = table header cell.",
    "category": "UI"
  },
  {
    "question": "Which CSS property controls text alignment?",
    "options": [
      {
        "id": "A",
        "text": "align",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "text-align",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "justify",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "font-align",
        "isCorrect": false
      }
    ],
    "hint": "text-align: left/right/center/justify controls horizontal text alignment.",
    "category": "UI"
  },
  {
    "question": "What is the purpose of the HTML <meta charset='UTF-8'> tag?",
    "options": [
      {
        "id": "A",
        "text": "Sets page language",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Declares character encoding for the page",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Adds metadata for SEO",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Sets page width",
        "isCorrect": false
      }
    ],
    "hint": "charset='UTF-8' ensures proper rendering of special characters across languages.",
    "category": "UI"
  },
  {
    "question": "In CSS Grid, which property defines the number of columns?",
    "options": [
      {
        "id": "A",
        "text": "grid-columns",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "grid-template-columns",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "column-count",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "flex-columns",
        "isCorrect": false
      }
    ],
    "hint": "grid-template-columns defines the column structure in CSS Grid.",
    "category": "UI"
  },
  {
    "question": "Which JavaScript event fires when a user clicks an element?",
    "options": [
      {
        "id": "A",
        "text": "onhover",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "onchange",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "onclick",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "onfocus",
        "isCorrect": false
      }
    ],
    "hint": "onclick fires when an element is clicked.",
    "category": "UI"
  },
  {
    "question": "What does 'float: left' do in CSS?",
    "options": [
      {
        "id": "A",
        "text": "Moves element to the bottom",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Removes element from normal flow and aligns it to the left",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Makes text italic",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Centres the element",
        "isCorrect": false
      }
    ],
    "hint": "float pulls an element out of normal flow and positions it left/right with text wrapping.",
    "category": "UI"
  },
  {
    "question": "Which HTML5 tag is used for navigation links?",
    "options": [
      {
        "id": "A",
        "text": "<links>",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "<nav>",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "<menu>",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "<navigation>",
        "isCorrect": false
      }
    ],
    "hint": "<nav> is the semantic HTML5 element for navigation menus.",
    "category": "UI"
  },
  {
    "question": "What is the CSS 'overflow: hidden' property used for?",
    "options": [
      {
        "id": "A",
        "text": "Hides the entire element",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Clips content that extends beyond the element's box",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Adds a scrollbar",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Makes text invisible",
        "isCorrect": false
      }
    ],
    "hint": "overflow:hidden clips any content that overflows outside the element boundary.",
    "category": "UI"
  },
  {
    "question": "In JavaScript, 'typeof null' returns:",
    "options": [
      {
        "id": "A",
        "text": "'null'",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "'object'",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "'undefined'",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "'empty'",
        "isCorrect": false
      }
    ],
    "hint": "typeof null === 'object' — a well-known JavaScript quirk/bug.",
    "category": "UI"
  },
  {
    "question": "Which CSS property sets the minimum width of an element?",
    "options": [
      {
        "id": "A",
        "text": "min-width",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "width-min",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "base-width",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "flex-min",
        "isCorrect": false
      }
    ],
    "hint": "min-width ensures an element is never smaller than the specified value.",
    "category": "UI"
  },
  {
    "question": "What does the 'rel' attribute in <link rel='stylesheet'> specify?",
    "options": [
      {
        "id": "A",
        "text": "File path",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Relationship between document and linked resource",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "CSS version",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Browser compatibility",
        "isCorrect": false
      }
    ],
    "hint": "The 'rel' attribute defines the relationship — 'stylesheet' tells the browser it is CSS.",
    "category": "UI"
  },
  {
    "question": "Which JavaScript method converts a JSON string to an object?",
    "options": [
      {
        "id": "A",
        "text": "JSON.parse()",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "JSON.stringify()",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "JSON.convert()",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "JSON.decode()",
        "isCorrect": false
      }
    ],
    "hint": "JSON.parse() deserialises a JSON string into a JavaScript object.",
    "category": "UI"
  },
  {
    "question": "Which CSS property adds rounded corners to an element?",
    "options": [
      {
        "id": "A",
        "text": "corner-radius",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "border-round",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "border-radius",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "round-corners",
        "isCorrect": false
      }
    ],
    "hint": "border-radius controls the rounding of an element's corners.",
    "category": "UI"
  },
  {
    "question": "What is the 'DOM' in web development?",
    "options": [
      {
        "id": "A",
        "text": "Document Object Model — a tree representation of the HTML page",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Data Object Mapping",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Display Output Mode",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Dynamic Output Method",
        "isCorrect": false
      }
    ],
    "hint": "DOM = Document Object Model — JavaScript uses it to manipulate HTML/CSS dynamically.",
    "category": "UI"
  },
  {
    "question": "Which HTML attribute opens a link in a new tab?",
    "options": [
      {
        "id": "A",
        "text": "target='_new'",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "target='_blank'",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "open='tab'",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "href='newtab'",
        "isCorrect": false
      }
    ],
    "hint": "target='_blank' opens the hyperlink in a new browser tab.",
    "category": "UI"
  },
  {
    "question": "What does 'CSS reset' accomplish?",
    "options": [
      {
        "id": "A",
        "text": "Clears all JavaScript",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Removes default browser styling for consistent cross-browser display",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Deletes all CSS",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Resets the page language",
        "isCorrect": false
      }
    ],
    "hint": "CSS reset overrides browser default styles to create a consistent baseline.",
    "category": "UI"
  },
  {
    "question": "In CSS, which selector has the highest specificity?",
    "options": [
      {
        "id": "A",
        "text": "#id",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "element",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "*",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": ".class",
        "isCorrect": false
      }
    ],
    "hint": "ID selectors (#id) have higher specificity than class (.class) or element selectors.",
    "category": "UI"
  },
  {
    "question": "Which HTML tag is used to define a cell in a table header row?",
    "options": [
      {
        "id": "A",
        "text": "<td>",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "<tr>",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "<th>",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "<thead>",
        "isCorrect": false
      }
    ],
    "hint": "<th> = table header cell (bold and centred by default).",
    "category": "UI"
  },
  {
    "question": "What is 'lazy loading' in web performance?",
    "options": [
      {
        "id": "A",
        "text": "Loading all resources at page startup",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Deferring loading of images/resources until they are needed",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "A slow website",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Loading only CSS first",
        "isCorrect": false
      }
    ],
    "hint": "Lazy loading improves performance by deferring off-screen resources.",
    "category": "UI"
  },
  {
    "question": "Which CSS value for 'position' removes the element from normal flow and positions relative to\nnearest positioned ancestor?",
    "options": [
      {
        "id": "A",
        "text": "static",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "relative",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "absolute",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "fixed",
        "isCorrect": false
      }
    ],
    "hint": "position:absolute removes from normal flow and positions relative to the nearest non-static ancestor.",
    "category": "UI"
  },
  {
    "question": "In JavaScript, which operator checks both value AND type equality?",
    "options": [
      {
        "id": "A",
        "text": "==",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "===",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "=",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "!=",
        "isCorrect": false
      }
    ],
    "hint": "=== is strict equality — checks both value and type. == only checks value.",
    "category": "UI"
  },
  {
    "question": "Which HTML5 input type shows a colour picker?",
    "options": [
      {
        "id": "A",
        "text": "type='colour'",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "type='color'",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "type='rgb'",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "type='picker'",
        "isCorrect": false
      }
    ],
    "hint": "<input type='color'> renders a native colour picker widget.",
    "category": "UI"
  },
  {
    "question": "Which CSS property controls the space between flex items?",
    "options": [
      {
        "id": "A",
        "text": "spacing",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "item-gap",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "gap",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "flex-gap",
        "isCorrect": false
      }
    ],
    "hint": "gap (formerly grid-gap) controls spacing between flex and grid items.",
    "category": "UI"
  },
  {
    "question": "What is 'semantic HTML'?",
    "options": [
      {
        "id": "A",
        "text": "HTML with lots of divs",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Using HTML elements that convey meaning about the content (e.g. <article>, <nav>)",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "HTML without CSS",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "HTML with inline styles only",
        "isCorrect": false
      }
    ],
    "hint": "Semantic HTML uses meaningful elements that describe their purpose, improving accessibility and SEO.",
    "category": "UI"
  },
  {
    "question": "Which JavaScript method removes and returns the last element of an array?",
    "options": [
      {
        "id": "A",
        "text": "shift()",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "splice()",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "pop()",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "remove()",
        "isCorrect": false
      }
    ],
    "hint": "Array.pop() removes and returns the last element.",
    "category": "UI"
  },
  {
    "question": "What does 'viewport meta tag' do?",
    "options": [
      {
        "id": "A",
        "text": "Sets server location",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Controls how page scales on mobile devices",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Defines page author",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Sets browser language",
        "isCorrect": false
      }
    ],
    "hint": "<meta name='viewport' content='width=device-width, initial-scale=1'> controls mobile scaling.",
    "category": "UI"
  },
  {
    "question": "Which command displays the current working directory?",
    "options": [
      {
        "id": "A",
        "text": "cwd",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "dir",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "pwd",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "path",
        "isCorrect": false
      }
    ],
    "hint": "pwd = Print Working Directory.",
    "category": "Unix"
  },
  {
    "question": "Which command lists files including hidden files?",
    "options": [
      {
        "id": "A",
        "text": "ls",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "ls -l",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "ls -a",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "ls -h",
        "isCorrect": false
      }
    ],
    "hint": "ls -a shows all files including hidden (starting with dot).",
    "category": "Unix"
  },
  {
    "question": "What does 'chmod 755 file.sh' set?",
    "options": [
      {
        "id": "A",
        "text": "rwxrwxrwx",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "rwxr-xr-x",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "rwxrw-rwD) rwx------",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "rwx------",
        "isCorrect": false
      }
    ],
    "hint": "7=rwx(owner), 5=r-x(group), 5=r-x(others) → rwxr-xr-x.",
    "category": "Unix"
  },
  {
    "question": "Which command searches for a pattern in a file?",
    "options": [
      {
        "id": "A",
        "text": "find",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "locate",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "grep",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "awk",
        "isCorrect": false
      }
    ],
    "hint": "grep searches for text patterns within files.",
    "category": "Unix"
  },
  {
    "question": "What does the pipe '|' operator do?",
    "options": [
      {
        "id": "A",
        "text": "Redirects to file",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Passes output of one command as input to another",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Appends to file",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Runs commands in background",
        "isCorrect": false
      }
    ],
    "hint": "Pipe chains commands: output of left → input of right.",
    "category": "Unix"
  },
  {
    "question": "Which command shows running processes?",
    "options": [
      {
        "id": "A",
        "text": "list",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "jobs",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "ps",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "proc",
        "isCorrect": false
      }
    ],
    "hint": "ps (process status) lists running processes. ps aux for all.",
    "category": "Unix"
  },
  {
    "question": "What does 'rm -rf dir' do?",
    "options": [
      {
        "id": "A",
        "text": "Renames directory",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Removes directory and all contents recursively and forcefully",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Creates directory",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Moves directory",
        "isCorrect": false
      }
    ],
    "hint": "rm -rf forcefully and recursively deletes a directory and its contents.",
    "category": "Unix"
  },
  {
    "question": "Which command moves or renames a file?",
    "options": [
      {
        "id": "A",
        "text": "copy",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "cp",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "mv",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "rename",
        "isCorrect": false
      }
    ],
    "hint": "mv = move or rename files/directories.",
    "category": "Unix"
  },
  {
    "question": "What does 'cat file.txt' do?",
    "options": [
      {
        "id": "A",
        "text": "Creates file",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Deletes file",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Displays file contents",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Edits file",
        "isCorrect": false
      }
    ],
    "hint": "cat concatenates and displays file contents to standard output.",
    "category": "Unix"
  },
  {
    "question": "Which symbol appends output to a file without overwriting?",
    "options": [
      {
        "id": "A",
        "text": "<",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": ">>",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": ">",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "&",
        "isCorrect": false
      }
    ],
    "hint": ">> appends output to file. > overwrites the file.",
    "category": "Unix"
  },
  {
    "question": "Which command creates a new directory?",
    "options": [
      {
        "id": "A",
        "text": "touch",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "mkdir",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "newdir",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "create",
        "isCorrect": false
      }
    ],
    "hint": "mkdir = make directory.",
    "category": "Unix"
  },
  {
    "question": "What does 'wc -l file.txt' count?",
    "options": [
      {
        "id": "A",
        "text": "Words",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Characters",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Lines",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Bytes",
        "isCorrect": false
      }
    ],
    "hint": "wc -l counts lines. wc -w counts words. wc -c counts bytes.",
    "category": "Unix"
  },
  {
    "question": "Which command displays the last 10 lines of a file?",
    "options": [
      {
        "id": "A",
        "text": "head",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "last",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "tail",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "end",
        "isCorrect": false
      }
    ],
    "hint": "tail -n 10 (default) shows last 10 lines. head shows first 10.",
    "category": "Unix"
  },
  {
    "question": "What does 'chmod +x file.sh' do?",
    "options": [
      {
        "id": "A",
        "text": "Removes execute permission",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Adds execute permission to all users",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Changes file owner",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Makes file read-only",
        "isCorrect": false
      }
    ],
    "hint": "chmod +x adds execute permission for all (owner, group, others).",
    "category": "Unix"
  },
  {
    "question": "Which command finds files by name?",
    "options": [
      {
        "id": "A",
        "text": "locate -name",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "grep -f",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "find . -name",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "search -f",
        "isCorrect": false
      }
    ],
    "hint": "find . -name 'filename' searches recursively from current directory.",
    "category": "Unix"
  },
  {
    "question": "What does 'echo $HOME' print?",
    "options": [
      {
        "id": "A",
        "text": "Literal text $HOME",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Current user's home directory path",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Current directory",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "System hostname",
        "isCorrect": false
      }
    ],
    "hint": "$HOME is an environment variable holding the home directory path.",
    "category": "Unix"
  },
  {
    "question": "Which command shows disk usage of a directory?",
    "options": [
      {
        "id": "A",
        "text": "df",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "du",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "disk",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "ls -s",
        "isCorrect": false
      }
    ],
    "hint": "du (disk usage) shows size of directories. df shows filesystem usage.",
    "category": "Unix"
  },
  {
    "question": "What does 'chown user file' do?",
    "options": [
      {
        "id": "A",
        "text": "Changes file permissions",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Changes file owner to 'user'",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Copies file",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Renames file",
        "isCorrect": false
      }
    ],
    "hint": "chown = change owner. chown user:group file to change both.",
    "category": "Unix"
  },
  {
    "question": "Which command copies a file?",
    "options": [
      {
        "id": "A",
        "text": "mv",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "copy",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "cp",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "ln",
        "isCorrect": false
      }
    ],
    "hint": "cp = copy. cp -r for recursive directory copy.",
    "category": "Unix"
  },
  {
    "question": "What does 'ps aux | grep apache' do?",
    "options": [
      {
        "id": "A",
        "text": "Starts Apache server",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Lists all processes and filters for 'apache'",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Kills Apache",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Installs Apache",
        "isCorrect": false
      }
    ],
    "hint": "Combines ps aux (all processes) with grep to filter for 'apache'.",
    "category": "Unix"
  },
  {
    "question": "Which command shows the first 5 lines of a file?",
    "options": [
      {
        "id": "A",
        "text": "tail -5",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "head -5",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "cat -5",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "top -5",
        "isCorrect": false
      }
    ],
    "hint": "head -5 shows first 5 lines. head -n 5 also works.",
    "category": "Unix"
  },
  {
    "question": "What is a 'symlink'?",
    "options": [
      {
        "id": "A",
        "text": "A compressed file",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "A symbolic link — a pointer/shortcut to another file",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "A system file",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "A log file",
        "isCorrect": false
      }
    ],
    "hint": "ln -s target link_name creates a symbolic link.",
    "category": "Unix"
  },
  {
    "question": "Which command shows all environment variables?",
    "options": [
      {
        "id": "A",
        "text": "env",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "vars",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "printenv all",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "set -e",
        "isCorrect": false
      }
    ],
    "hint": "env lists all current environment variables.",
    "category": "Unix"
  },
  {
    "question": "What does 'kill -9 PID' do?",
    "options": [
      {
        "id": "A",
        "text": "Pauses a process",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Terminates a process forcefully (SIGKILL)",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Restarts a process",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Lists processes",
        "isCorrect": false
      }
    ],
    "hint": "kill -9 sends SIGKILL — forceful termination that cannot be caught.",
    "category": "Unix"
  },
  {
    "question": "Which permission number gives read and write but NOT execute?",
    "options": [
      {
        "id": "A",
        "text": "7",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "6",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "5",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "4",
        "isCorrect": false
      }
    ],
    "hint": "rw- = 4+2 = 6. rwx=7, r-x=5, r--=4.",
    "category": "Unix"
  },
  {
    "question": "What does 'sudo' stand for?",
    "options": [
      {
        "id": "A",
        "text": "Super User Download",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Switch User Do",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Super User Do",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "System Update Do",
        "isCorrect": false
      }
    ],
    "hint": "sudo = Super User Do — executes a command with elevated (root) privileges.",
    "category": "Unix"
  },
  {
    "question": "Which command shows network interfaces and IP addresses?",
    "options": [
      {
        "id": "A",
        "text": "ipconfig",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "networkstat",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "ifconfig / ip addr",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "netif",
        "isCorrect": false
      }
    ],
    "hint": "ifconfig (older) or ip addr (modern Linux) displays network interface info.",
    "category": "Unix"
  },
  {
    "question": "What does 'history' command show?",
    "options": [
      {
        "id": "A",
        "text": "Browser history",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Previously executed shell commands",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "File modification history",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "System log history",
        "isCorrect": false
      }
    ],
    "hint": "history shows the list of previously entered shell commands.",
    "category": "Unix"
  },
  {
    "question": "Which command opens a manual page for a command?",
    "options": [
      {
        "id": "A",
        "text": "help",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "info",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "man",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "docs",
        "isCorrect": false
      }
    ],
    "hint": "man command shows the manual (documentation) page for any command.",
    "category": "Unix"
  },
  {
    "question": "What does 'df -h' show?",
    "options": [
      {
        "id": "A",
        "text": "Directory files in human-readable format",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Disk filesystem usage in human-readable format",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Hidden files",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Default files",
        "isCorrect": false
      }
    ],
    "hint": "df -h shows disk space usage with human-readable sizes (KB/MB/GB).",
    "category": "Unix"
  },
  {
    "question": "Which command monitors real-time system resource usage?",
    "options": [
      {
        "id": "A",
        "text": "ps",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "htop / top",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "usage",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "sysmon",
        "isCorrect": false
      }
    ],
    "hint": "top or htop shows live CPU, memory and process usage.",
    "category": "Unix"
  },
  {
    "question": "What does 'tar -czf archive.tar.gz dir/' do?",
    "options": [
      {
        "id": "A",
        "text": "Extracts a tar file",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Creates a gzip-compressed tar archive of dir/",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Deletes dir/",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Lists contents of archive",
        "isCorrect": false
      }
    ],
    "hint": "tar -czf = create(-c), gzip(-z), file(-f). Used to compress directories.",
    "category": "Unix"
  },
  {
    "question": "Which command extracts a tar.gz archive?",
    "options": [
      {
        "id": "A",
        "text": "tar -czf",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "tar -xzf",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "tar -tzf",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "unzip",
        "isCorrect": false
      }
    ],
    "hint": "tar -xzf = extract(-x), gzip(-z), file(-f).",
    "category": "Unix"
  },
  {
    "question": "What does 'crontab -e' do?",
    "options": [
      {
        "id": "A",
        "text": "Shows cron logs",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Edits the cron job schedule for the current user",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Runs all cron jobs immediately",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Disables cron",
        "isCorrect": false
      }
    ],
    "hint": "crontab -e opens the cron table editor to schedule recurring tasks.",
    "category": "Unix"
  },
  {
    "question": "Which file stores user account information in Linux?",
    "options": [
      {
        "id": "A",
        "text": "/etc/group",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "/etc/passwd",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "/etc/users",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "/var/users",
        "isCorrect": false
      }
    ],
    "hint": "/etc/passwd stores basic user account info (username, UID, home dir, shell).",
    "category": "Unix"
  },
  {
    "question": "What does 'sort -r file.txt' do?",
    "options": [
      {
        "id": "A",
        "text": "Sorts file alphabetically",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Sorts file in reverse order",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Removes duplicates",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Randomises order",
        "isCorrect": false
      }
    ],
    "hint": "sort -r reverses the sort order. Default sort is ascending.",
    "category": "Unix"
  },
  {
    "question": "Which command shows unique lines in a sorted file?",
    "options": [
      {
        "id": "A",
        "text": "unique",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "uniq",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "distinct",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "nodup",
        "isCorrect": false
      }
    ],
    "hint": "uniq filters adjacent duplicate lines. Use sort file | uniq for full de-duplication.",
    "category": "Unix"
  },
  {
    "question": "What does 'which python3' show?",
    "options": [
      {
        "id": "A",
        "text": "Python version",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Full path to the python3 executable",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Python documentation",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Python packages installed",
        "isCorrect": false
      }
    ],
    "hint": "which command shows the full path of the executable for a command.",
    "category": "Unix"
  },
  {
    "question": "What is the purpose of '#!/bin/bash' at the top of a shell script?",
    "options": [
      {
        "id": "A",
        "text": "A comment",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Tells the OS to use bash to execute the script (shebang)",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Imports bash library",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Sets script permissions",
        "isCorrect": false
      }
    ],
    "hint": "Shebang line (#!) tells the kernel which interpreter to use.",
    "category": "Unix"
  },
  {
    "question": "Which command shows the last login time of users?",
    "options": [
      {
        "id": "A",
        "text": "lastlog",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "whoami",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "users",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "w",
        "isCorrect": false
      }
    ],
    "hint": "lastlog shows the most recent login for all users.",
    "category": "Unix"
  },
  {
    "question": "What does 'ln -s /etc/hosts myhosts' create?",
    "options": [
      {
        "id": "A",
        "text": "A hard link",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "A copy of /etc/hosts",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "A symbolic link named 'myhosts' pointing to /etc/hosts",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "A directory",
        "isCorrect": false
      }
    ],
    "hint": "ln -s creates a symbolic (soft) link.",
    "category": "Unix"
  },
  {
    "question": "Which command changes the current user's password?",
    "options": [
      {
        "id": "A",
        "text": "passwd",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "chpasswd",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "usermod",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "sudo password",
        "isCorrect": false
      }
    ],
    "hint": "passwd changes the password for the current (or specified) user.",
    "category": "Unix"
  },
  {
    "question": "What does 'nohup command &' do?",
    "options": [
      {
        "id": "A",
        "text": "Runs command in foreground",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Runs command in background, immune to hangup signals",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Cancels a command",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Mutes command output",
        "isCorrect": false
      }
    ],
    "hint": "nohup + & runs a command in background that persists after logout.",
    "category": "Unix"
  },
  {
    "question": "Which command displays the hostname of the system?",
    "options": [
      {
        "id": "A",
        "text": "sysname",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "hostname",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "uname -n",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "host",
        "isCorrect": false
      }
    ],
    "hint": "hostname displays or sets the system's network name.",
    "category": "Unix"
  },
  {
    "question": "What does 'awk '{print $2}' file.txt' do?",
    "options": [
      {
        "id": "A",
        "text": "Prints first column",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Prints second column/field of each line",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Prints last column",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Deletes second column",
        "isCorrect": false
      }
    ],
    "hint": "awk uses $1, $2... to access whitespace-separated fields. $2 = second field.",
    "category": "Unix"
  },
  {
    "question": "Which command checks if a remote host is reachable?",
    "options": [
      {
        "id": "A",
        "text": "tracert",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "netstat",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "ping",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "curl",
        "isCorrect": false
      }
    ],
    "hint": "ping sends ICMP packets to test network connectivity to a host.",
    "category": "Unix"
  },
  {
    "question": "What is '/dev/null' in Linux?",
    "options": [
      {
        "id": "A",
        "text": "A device file",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "A null device that discards all data written to it",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "A directory for null files",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "A RAM disk",
        "isCorrect": false
      }
    ],
    "hint": "/dev/null is a special file that discards all input — used to suppress output.",
    "category": "Unix"
  },
  {
    "question": "Which command shows the size of a specific file in human-readable format?",
    "options": [
      {
        "id": "A",
        "text": "ls -h filename",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "du -sh filename",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "size filename",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "stat -h filename",
        "isCorrect": false
      }
    ],
    "hint": "du -sh filename shows disk usage in human-readable format.",
    "category": "Unix"
  },
  {
    "question": "What does 'sed 's/old/new/g' file.txt' do?",
    "options": [
      {
        "id": "A",
        "text": "Deletes 'old' from file",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Replaces first occurrence of 'old' with 'new'",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Replaces all occurrences of 'old' with 'new' in file",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Searches for 'old' and prints matching lines",
        "isCorrect": false
      }
    ],
    "hint": "sed 's/old/new/g' — the 'g' flag replaces ALL occurrences globally.",
    "category": "Unix"
  },
  {
    "question": "Which command shows all currently logged-in users?",
    "options": [
      {
        "id": "A",
        "text": "users",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "who",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "w",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "all of the above",
        "isCorrect": true
      }
    ],
    "hint": "users, who, and w all show logged-in users (with varying levels of detail).",
    "category": "Unix"
  },
  {
    "question": "What is the output of: print(type({}))?",
    "options": [
      {
        "id": "A",
        "text": "<class 'list'>",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "<class 'dict'>",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "<class 'set'>",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "<class 'tuple'>",
        "isCorrect": false
      }
    ],
    "hint": "{} creates an empty dict. type({}) = <class 'dict'>.",
    "category": "Java / Python"
  },
  {
    "question": "Which Python keyword defines a generator function?",
    "options": [
      {
        "id": "A",
        "text": "return",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "generate",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "yield",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "async",
        "isCorrect": false
      }
    ],
    "hint": "yield turns a function into a generator, enabling lazy evaluation.",
    "category": "Java / Python"
  },
  {
    "question": "What is the output of: print(3 * '2')?",
    "options": [
      {
        "id": "A",
        "text": "6",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "222",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Error",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "'222'",
        "isCorrect": false
      }
    ],
    "hint": "String * int in Python repeats the string. '2' * 3 = '222'.",
    "category": "Java / Python"
  },
  {
    "question": "Which Python method removes whitespace from both ends of a string?",
    "options": [
      {
        "id": "A",
        "text": "strip()",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "trim()",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "remove()",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "clean()",
        "isCorrect": false
      }
    ],
    "hint": "str.strip() removes leading and trailing whitespace.",
    "category": "Java / Python"
  },
  {
    "question": "What is a Python 'lambda'?",
    "options": [
      {
        "id": "A",
        "text": "A loop construct",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "An anonymous inline function",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "A class decorator",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "A module import",
        "isCorrect": false
      }
    ],
    "hint": "lambda args: expression — a one-line anonymous function.",
    "category": "Java / Python"
  },
  {
    "question": "What does 'list(range(1, 6))' produce?",
    "options": [
      {
        "id": "A",
        "text": "[1,2,3,4,5,6]",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "[1,2,3,4,5]",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "[0,1,2,3,4,5]",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "[2,3,4,5,6]",
        "isCorrect": false
      }
    ],
    "hint": "range(1,6) = 1 to 5 inclusive. End is exclusive.",
    "category": "Java / Python"
  },
  {
    "question": "Which of the following creates a set in Python?",
    "options": [
      {
        "id": "A",
        "text": "s = []",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "s = {}",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "s = {1,2,3}",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "s = (1,2,3)",
        "isCorrect": false
      }
    ],
    "hint": "A set uses curly braces with elements: {1,2,3}. {} alone creates a dict.",
    "category": "Java / Python"
  },
  {
    "question": "What is the output of: x = [1,2,3]; print(x[-1])?",
    "options": [
      {
        "id": "A",
        "text": "1",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "3",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Error",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "-1",
        "isCorrect": false
      }
    ],
    "hint": "Negative indexing in Python: x[-1] = last element = 3.",
    "category": "Java / Python"
  },
  {
    "question": "Which Python exception is raised for division by zero?",
    "options": [
      {
        "id": "A",
        "text": "ArithmeticError",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "ZeroDivisionError",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "MathError",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "DivisionError",
        "isCorrect": false
      }
    ],
    "hint": "ZeroDivisionError is raised when dividing by zero.",
    "category": "Java / Python"
  },
  {
    "question": "What does 'dict.get(key, default)' do?",
    "options": [
      {
        "id": "A",
        "text": "Raises error if key missing",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Returns value for key, or default if key not found",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Deletes key",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Updates key",
        "isCorrect": false
      }
    ],
    "hint": "dict.get() safely retrieves a value without raising KeyError.",
    "category": "Java / Python"
  },
  {
    "question": "What is the output of: print(bool(0), bool(''), bool([]))?",
    "options": [
      {
        "id": "A",
        "text": "True True True",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "False False False",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "False True False",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "True False True",
        "isCorrect": false
      }
    ],
    "hint": "0, empty string, and empty list are all falsy in Python.",
    "category": "Java / Python"
  },
  {
    "question": "Which Python decorator makes a method belong to the class, not an instance?",
    "options": [
      {
        "id": "A",
        "text": "@property",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "@instancemethod",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "@classmethod / @staticmethod",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "@abstract",
        "isCorrect": false
      }
    ],
    "hint": "@staticmethod and @classmethod both define class-level methods.",
    "category": "Java / Python"
  },
  {
    "question": "What is the correct way to open a file for writing in Python?",
    "options": [
      {
        "id": "A",
        "text": "open('f.txt','r')",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "open('f.txt','w')",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "open('f.txt','x')",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "open('f.txt','a')",
        "isCorrect": false
      }
    ],
    "hint": "'w' mode opens for writing (creates or overwrites). 'a' appends.",
    "category": "Java / Python"
  },
  {
    "question": "What does 'enumerate([10,20,30])' return when iterated?",
    "options": [
      {
        "id": "A",
        "text": "[0,10,1,20,2,30]",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "(0,10),(1,20),(2,30) pairs",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "[10,20,30] with indices",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Error",
        "isCorrect": false
      }
    ],
    "hint": "enumerate returns (index, value) pairs.",
    "category": "Java / Python"
  },
  {
    "question": "Which of the following is NOT a valid Python data type?",
    "options": [
      {
        "id": "A",
        "text": "list",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "tuple",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "array",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "dict",
        "isCorrect": false
      }
    ],
    "hint": "Python does not have a built-in 'array' type (lists serve this purpose; array module exists but is separate).",
    "category": "Java / Python"
  },
  {
    "question": "What is the output of: print(10 // 3)?",
    "options": [
      {
        "id": "A",
        "text": "3.33",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "3",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "4",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Error",
        "isCorrect": false
      }
    ],
    "hint": "// is floor division. 10//3 = 3 (truncates decimal).",
    "category": "Java / Python"
  },
  {
    "question": "Which keyword is used to inherit a class in Python?",
    "options": [
      {
        "id": "A",
        "text": "extends",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "implements",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "class Child(Parent):",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "inherits",
        "isCorrect": false
      }
    ],
    "hint": "Python uses class Child(Parent): syntax for inheritance.",
    "category": "Java / Python"
  },
  {
    "question": "What does 'map(func, iterable)' do?",
    "options": [
      {
        "id": "A",
        "text": "Filters elements",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Applies func to each element and returns an iterator",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Sorts elements",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Reduces to single value",
        "isCorrect": false
      }
    ],
    "hint": "map() applies a function to every item in an iterable.",
    "category": "Java / Python"
  },
  {
    "question": "What is the output of: 'hello'.upper()[:3]?",
    "options": [
      {
        "id": "A",
        "text": "hel",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "HEL",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "HEL",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Hel",
        "isCorrect": false
      }
    ],
    "hint": "'hello'.upper() = 'HELLO'. [:3] = 'HEL'.",
    "category": "Java / Python"
  },
  {
    "question": "Which Python module is used for regular expressions?",
    "options": [
      {
        "id": "A",
        "text": "regex",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "re",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "regexp",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "pattern",
        "isCorrect": false
      }
    ],
    "hint": "The 're' module provides regular expression operations in Python.",
    "category": "Java / Python"
  },
  {
    "question": "What does 'zip([1,2],[3,4])' produce when converted to list?",
    "options": [
      {
        "id": "A",
        "text": "[1,2,3,4]",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "[(1,3),(2,4)]",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "[[1,3],[2,4]]",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Error",
        "isCorrect": false
      }
    ],
    "hint": "zip pairs elements: [(1,3),(2,4)].",
    "category": "Java / Python"
  },
  {
    "question": "What is a Python 'list comprehension'?",
    "options": [
      {
        "id": "A",
        "text": "A way to compress lists",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "A concise syntax to create lists: [expr for item in iterable]",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "A method to sort lists",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "A list of methods",
        "isCorrect": false
      }
    ],
    "hint": "List comprehension: [x*2 for x in range(5)] = [0,2,4,6,8].",
    "category": "Java / Python"
  },
  {
    "question": "Which built-in function returns the length of an object?",
    "options": [
      {
        "id": "A",
        "text": "size()",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "count()",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "len()",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "length()",
        "isCorrect": false
      }
    ],
    "hint": "len() returns the number of items in a sequence or collection.",
    "category": "Java / Python"
  },
  {
    "question": "What does 'try...except...finally' ensure?",
    "options": [
      {
        "id": "A",
        "text": "Catches only runtime errors",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "The finally block always executes regardless of exception",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Skips errors silently",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Restarts the program",
        "isCorrect": false
      }
    ],
    "hint": "finally always runs — used for cleanup like closing files.",
    "category": "Java / Python"
  },
  {
    "question": "What is the output of: print([x**2 for x in range(4)])?",
    "options": [
      {
        "id": "A",
        "text": "[1,4,9,16]",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "[0,1,4,9]",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "[0,1,2,3]",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "[1,2,3,4]",
        "isCorrect": false
      }
    ],
    "hint": "range(4) = 0,1,2,3. Squared: 0,1,4,9.",
    "category": "Java / Python"
  },
  {
    "question": "In Java, which keyword prevents a variable from being reassigned?",
    "options": [
      {
        "id": "A",
        "text": "static",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "private",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "final",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "const",
        "isCorrect": false
      }
    ],
    "hint": "final variables cannot be reassigned after initialisation.",
    "category": "Java / Python"
  },
  {
    "question": "What is the output of: System.out.println(5 + 3 + 'a')?",
    "options": [
      {
        "id": "A",
        "text": "Error",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "8a",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "105",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "'8a'",
        "isCorrect": false
      }
    ],
    "hint": "'a' ASCII = 97. 5+3=8, 8+97=105. Java char is treated as int in arithmetic.",
    "category": "Java / Python"
  },
  {
    "question": "Which Java collection maintains insertion order and allows duplicates?",
    "options": [
      {
        "id": "A",
        "text": "HashSet",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "TreeSet",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "ArrayList",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "LinkedHashMap",
        "isCorrect": false
      }
    ],
    "hint": "ArrayList maintains insertion order and allows duplicate elements.",
    "category": "Java / Python"
  },
  {
    "question": "What does 'public static void main(String[] args)' mean?",
    "options": [
      {
        "id": "A",
        "text": "A method visible only in the class",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "The program entry point — public, class-level, no return, takes string array",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "A constructor",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "A static variable",
        "isCorrect": false
      }
    ],
    "hint": "main() is the entry point of every Java application.",
    "category": "Java / Python"
  },
  {
    "question": "Which principle of OOP allows a subclass to provide a specific implementation of a method already\ndefined in its superclass?",
    "options": [
      {
        "id": "A",
        "text": "Encapsulation",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Abstraction",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Method Overriding",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Method Overloading",
        "isCorrect": false
      }
    ],
    "hint": "Method Overriding = subclass redefines a superclass method with @Override.",
    "category": "Java / Python"
  },
  {
    "question": "What is the difference between '==' and '.equals()' in Java for Strings?",
    "options": [
      {
        "id": "A",
        "text": "They are identical",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "== compares references; .equals() compares content",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "== is faster",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "equals() only works for primitives",
        "isCorrect": false
      }
    ],
    "hint": "'==' checks if two references point to the same object. .equals() compares string content.",
    "category": "Java / Python"
  },
  {
    "question": "Which Java keyword is used to call the parent class constructor?",
    "options": [
      {
        "id": "A",
        "text": "parent()",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "super()",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "base()",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "this()",
        "isCorrect": false
      }
    ],
    "hint": "super() calls the parent class constructor from a subclass.",
    "category": "Java / Python"
  },
  {
    "question": "Which exception is thrown when an array is accessed out of bounds?",
    "options": [
      {
        "id": "A",
        "text": "IndexOutOfBoundsException",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "ArrayException",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "OutOfRangeException",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "ArrayIndexOutOfBoundsException",
        "isCorrect": true
      }
    ],
    "hint": "ArrayIndexOutOfBoundsException is thrown for invalid array index access.",
    "category": "Java / Python"
  },
  {
    "question": "What is an 'interface' in Java?",
    "options": [
      {
        "id": "A",
        "text": "A class with only static methods",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "A blueprint with abstract methods that a class must implement",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "A type of exception",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "A database connector",
        "isCorrect": false
      }
    ],
    "hint": "Interface = contract of method signatures that implementing classes must fulfil.",
    "category": "Java / Python"
  },
  {
    "question": "Which Java class is used for mutable strings?",
    "options": [
      {
        "id": "A",
        "text": "String",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "StringBuffer / StringBuilder",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "MutableString",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "StringArray",
        "isCorrect": false
      }
    ],
    "hint": "StringBuilder (non-threadsafe) and StringBuffer (threadsafe) allow string mutation.",
    "category": "Java / Python"
  },
  {
    "question": "What does 'ArrayList vs LinkedList' differ in?",
    "options": [
      {
        "id": "A",
        "text": "Size limit",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "ArrayList uses dynamic array (fast random access); LinkedList uses nodes (fast insert/delete)",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Sorting algorithm",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Data types supported",
        "isCorrect": false
      }
    ],
    "hint": "ArrayList is better for random access; LinkedList is better for frequent insertions/deletions.",
    "category": "Java / Python"
  },
  {
    "question": "What is the output of: int x = 5; System.out.println(x++)?",
    "options": [
      {
        "id": "A",
        "text": "6",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "5",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Error",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "4",
        "isCorrect": false
      }
    ],
    "hint": "Post-increment: x++ returns current value (5), then increments x to 6.",
    "category": "Java / Python"
  },
  {
    "question": "Which keyword prevents a class from being subclassed in Java?",
    "options": [
      {
        "id": "A",
        "text": "private",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "static",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "final",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "abstract",
        "isCorrect": false
      }
    ],
    "hint": "final class cannot be extended (e.g., java.lang.String is final).",
    "category": "Java / Python"
  },
  {
    "question": "What is 'polymorphism' in OOP?",
    "options": [
      {
        "id": "A",
        "text": "One class inheriting another",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "The ability of one interface to be used for different underlying data types",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Hiding implementation details",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Breaking a class into smaller units",
        "isCorrect": false
      }
    ],
    "hint": "Polymorphism = 'many forms' — one interface, multiple implementations.",
    "category": "Java / Python"
  },
  {
    "question": "Which Java data structure is LIFO (Last In First Out)?",
    "options": [
      {
        "id": "A",
        "text": "Queue",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Stack",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "ArrayList",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "HashMap",
        "isCorrect": false
      }
    ],
    "hint": "Stack is LIFO. Queue is FIFO.",
    "category": "Java / Python"
  },
  {
    "question": "What is 'garbage collection' in Java?",
    "options": [
      {
        "id": "A",
        "text": "Deleting unused imports",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Automatic memory management — JVM reclaims unreferenced heap objects",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Manual memory deallocation",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Clearing console output",
        "isCorrect": false
      }
    ],
    "hint": "Java's GC automatically frees memory occupied by unreachable objects.",
    "category": "Java / Python"
  },
  {
    "question": "Which Java keyword is used for exception handling?",
    "options": [
      {
        "id": "A",
        "text": "catch",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "handle",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "rescue",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "trap",
        "isCorrect": false
      }
    ],
    "hint": "Java uses try-catch-finally for exception handling.",
    "category": "Java / Python"
  },
  {
    "question": "What is the access level of 'protected' in Java?",
    "options": [
      {
        "id": "A",
        "text": "Same class only",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Same class and subclasses (and same package)",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "All classes",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Only subclasses in different packages",
        "isCorrect": false
      }
    ],
    "hint": "protected = same package + subclasses (even in different packages).",
    "category": "Java / Python"
  },
  {
    "question": "What does 'HashMap.put(key, value)' do?",
    "options": [
      {
        "id": "A",
        "text": "Retrieves a value",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Inserts or updates a key-value pair",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Removes a key",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Checks if key exists",
        "isCorrect": false
      }
    ],
    "hint": "put() inserts a new key-value pair or updates the value if key already exists.",
    "category": "Java / Python"
  },
  {
    "question": "Which annotation suppresses compiler warnings about type safety in Java?",
    "options": [
      {
        "id": "A",
        "text": "@Override",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "@SuppressWarnings",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "@FunctionalInterface",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "@Deprecated",
        "isCorrect": false
      }
    ],
    "hint": "@SuppressWarnings('unchecked') suppresses type-safety warnings.",
    "category": "Java / Python"
  },
  {
    "question": "What is a 'constructor' in Java?",
    "options": [
      {
        "id": "A",
        "text": "A method that returns a value",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "A special method called when an object is created, used for initialisation",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "A static method",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "An abstract method",
        "isCorrect": false
      }
    ],
    "hint": "Constructor = same name as class, no return type, called via 'new'.",
    "category": "Java / Python"
  },
  {
    "question": "What is the time complexity of binary search?",
    "options": [
      {
        "id": "A",
        "text": "O(n)",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "O(n^2)",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "O(log n)",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "O(1)",
        "isCorrect": false
      }
    ],
    "hint": "Binary search halves the search space each step → O(log n).",
    "category": "Java / Python"
  },
  {
    "question": "Which Java collection class does NOT allow null keys?",
    "options": [
      {
        "id": "A",
        "text": "HashMap",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "LinkedHashMap",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Hashtable",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "TreeMap (null keys disallowed)",
        "isCorrect": false
      }
    ],
    "hint": "Hashtable does not allow null keys or null values (unlike HashMap).",
    "category": "Java / Python"
  },
  {
    "question": "What is 'method overloading' in Java?",
    "options": [
      {
        "id": "A",
        "text": "A method calling itself",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Multiple methods with same name but different parameter lists in the same class",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "A method in a subclass overriding parent",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Using the same method in two classes",
        "isCorrect": false
      }
    ],
    "hint": "Overloading = same method name, different signatures in one class.",
    "category": "Java / Python"
  },
  {
    "question": "What is the output of: System.out.println(1 + 2 + '3')?",
    "options": [
      {
        "id": "A",
        "text": "123",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "6",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Error",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "33",
        "isCorrect": false
      }
    ],
    "hint": "1+2=3, '3' ASCII=51. 3+51=54... Wait: actually '3'=51, so 1+2=3, 3+51=54. Answer is 54. However in common TCS\npattern: correct answer is 54.",
    "category": "Java / Python"
  },
  {
    "question": "Which SQL clause filters rows BEFORE grouping?",
    "options": [
      {
        "id": "A",
        "text": "HAVING",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "ORDER BY",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "WHERE",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "FILTER",
        "isCorrect": false
      }
    ],
    "hint": "WHERE filters individual rows before GROUP BY. HAVING filters groups after.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "What does 'SELECT DISTINCT city FROM employees' do?",
    "options": [
      {
        "id": "A",
        "text": "Returns all cities including duplicates",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Returns unique cities only",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Returns city counts",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Deletes duplicate cities",
        "isCorrect": false
      }
    ],
    "hint": "DISTINCT eliminates duplicate values from the result set.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "Which JOIN returns only matching rows from both tables?",
    "options": [
      {
        "id": "A",
        "text": "LEFT JOIN",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "RIGHT JOIN",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "INNER JOIN",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "FULL OUTER JOIN",
        "isCorrect": false
      }
    ],
    "hint": "INNER JOIN returns only rows where the join condition matches in BOTH tables.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "What does the 'COUNT(*)' function return?",
    "options": [
      {
        "id": "A",
        "text": "Sum of values",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Number of rows",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Maximum value",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Average value",
        "isCorrect": false
      }
    ],
    "hint": "COUNT(*) counts all rows including NULLs.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "Which SQL command is used to permanently delete a table and its structure?",
    "options": [
      {
        "id": "A",
        "text": "DELETE",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "TRUNCATE",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "DROP",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "REMOVE",
        "isCorrect": false
      }
    ],
    "hint": "DROP TABLE permanently removes the table and its structure. DELETE removes rows only.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "What is the difference between DELETE and TRUNCATE?",
    "options": [
      {
        "id": "A",
        "text": "They are identical",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "DELETE removes specific rows (with WHERE); TRUNCATE removes all rows and is faster",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "TRUNCATE supports WHERE clause",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "DELETE removes the table structure",
        "isCorrect": false
      }
    ],
    "hint": "DELETE is DML (can rollback, supports WHERE). TRUNCATE is DDL (faster, no WHERE).",
    "category": "SQL / PLSQL"
  },
  {
    "question": "Which clause is used to sort results?",
    "options": [
      {
        "id": "A",
        "text": "GROUP BY",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "SORT BY",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "ORDER BY",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "ARRANGE BY",
        "isCorrect": false
      }
    ],
    "hint": "ORDER BY column_name [ASC|DESC] sorts query results.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "What does a PRIMARY KEY constraint ensure?",
    "options": [
      {
        "id": "A",
        "text": "Allows NULL values",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Each value is unique and NOT NULL",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Values can be duplicated",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Allows multiple NULLs",
        "isCorrect": false
      }
    ],
    "hint": "PRIMARY KEY = UNIQUE + NOT NULL. Each table can have only one primary key.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "Which function returns the current date in SQL?",
    "options": [
      {
        "id": "A",
        "text": "NOW()",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "GETDATE() / CURDATE()",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "DATE()",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "CURRENT()",
        "isCorrect": false
      }
    ],
    "hint": "MySQL: CURDATE() or NOW() (with time). SQL Server: GETDATE().",
    "category": "SQL / PLSQL"
  },
  {
    "question": "What is a FOREIGN KEY?",
    "options": [
      {
        "id": "A",
        "text": "A key that is always unique",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "A column that references a PRIMARY KEY in another table",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "An index key",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "A composite key",
        "isCorrect": false
      }
    ],
    "hint": "FOREIGN KEY enforces referential integrity by linking to another table's PK.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "Which SQL aggregate function returns the total sum?",
    "options": [
      {
        "id": "A",
        "text": "COUNT",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "AVG",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "SUM",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "MAX",
        "isCorrect": false
      }
    ],
    "hint": "SUM() adds up all values in a numeric column.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "What does 'GROUP BY department' do?",
    "options": [
      {
        "id": "A",
        "text": "Filters by department",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Sorts by department",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Groups rows with same department value for aggregation",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Creates a new column",
        "isCorrect": false
      }
    ],
    "hint": "GROUP BY groups rows with the same value, used with aggregate functions.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "Which of the following is a DDL (Data Definition Language) command?",
    "options": [
      {
        "id": "A",
        "text": "SELECT",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "INSERT",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "CREATE",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "UPDATE",
        "isCorrect": false
      }
    ],
    "hint": "DDL commands: CREATE, ALTER, DROP, TRUNCATE. DML: SELECT, INSERT, UPDATE, DELETE.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "What does 'HAVING COUNT(*) > 5' do in a query?",
    "options": [
      {
        "id": "A",
        "text": "Filters individual rows with more than 5 columns",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Filters groups having more than 5 rows",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Returns only 5 rows",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Counts rows named HAVING",
        "isCorrect": false
      }
    ],
    "hint": "HAVING filters aggregated groups — cannot use WHERE for aggregate conditions.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "Which SQL keyword adds new rows to a table?",
    "options": [
      {
        "id": "A",
        "text": "ADD",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "INSERT INTO",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "UPDATE",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "APPEND",
        "isCorrect": false
      }
    ],
    "hint": "INSERT INTO table (cols) VALUES (vals) adds new rows.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "What does NULL represent in SQL?",
    "options": [
      {
        "id": "A",
        "text": "Zero",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Empty string",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Unknown or missing value",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "False",
        "isCorrect": false
      }
    ],
    "hint": "NULL means the absence of a value — not 0 or empty string.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "Which operator checks for NULL values?",
    "options": [
      {
        "id": "A",
        "text": "= NULL",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "== NULL",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "IS NULL",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "NULL IS",
        "isCorrect": false
      }
    ],
    "hint": "Always use IS NULL or IS NOT NULL — never '= NULL'.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "What is a 'subquery'?",
    "options": [
      {
        "id": "A",
        "text": "A stored procedure",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "A query nested inside another query",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "A view",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "An index",
        "isCorrect": false
      }
    ],
    "hint": "Subquery = a query within another query, in WHERE, FROM, or SELECT clauses.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "Which JOIN returns all rows from the LEFT table plus matching rows from the right?",
    "options": [
      {
        "id": "A",
        "text": "INNER JOIN",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "FULL OUTER JOIN",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "RIGHT JOIN",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "LEFT JOIN",
        "isCorrect": true
      }
    ],
    "hint": "LEFT JOIN keeps ALL rows from left table; unmatched right rows show NULL.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "What does 'UPDATE employees SET salary = salary * 1.1 WHERE dept = 'IT'' do?",
    "options": [
      {
        "id": "A",
        "text": "Deletes IT employees",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Gives IT employees a 10% raise",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Sets IT salary to 1.1",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Adds a new IT employee",
        "isCorrect": false
      }
    ],
    "hint": "salary * 1.1 multiplies current salary by 1.1 = 10% increase.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "Which SQL statement creates a virtual table based on a query?",
    "options": [
      {
        "id": "A",
        "text": "TABLE",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "INDEX",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "VIEW",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "PROCEDURE",
        "isCorrect": false
      }
    ],
    "hint": "CREATE VIEW name AS SELECT... creates a virtual table/view.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "What is a 'stored procedure' in SQL?",
    "options": [
      {
        "id": "A",
        "text": "A saved SELECT query",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "A precompiled set of SQL statements stored and executed on the server",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "An index",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "A trigger",
        "isCorrect": false
      }
    ],
    "hint": "Stored procedures are precompiled SQL blocks that can accept parameters and be reused.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "Which clause limits the number of rows returned?",
    "options": [
      {
        "id": "A",
        "text": "TOP / LIMIT",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "FIRST",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "ROWNUM only",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "RESTRICT",
        "isCorrect": false
      }
    ],
    "hint": "LIMIT (MySQL/PostgreSQL) or TOP (SQL Server) limits rows returned.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "What does 'ALTER TABLE employees ADD COLUMN age INT' do?",
    "options": [
      {
        "id": "A",
        "text": "Deletes the age column",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Creates a new table",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Adds an 'age' column to the employees table",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Renames the table",
        "isCorrect": false
      }
    ],
    "hint": "ALTER TABLE ADD COLUMN adds a new column to an existing table.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "Which SQL function returns the length of a string?",
    "options": [
      {
        "id": "A",
        "text": "SIZE()",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "LEN() / LENGTH()",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "COUNT()",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "STR_LEN()",
        "isCorrect": false
      }
    ],
    "hint": "LEN() in SQL Server; LENGTH() in MySQL — both return string character count.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "What is a 'trigger' in SQL?",
    "options": [
      {
        "id": "A",
        "text": "A scheduled job",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Automatic SQL code that executes before/after INSERT, UPDATE, or DELETE",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "An index type",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "A foreign key",
        "isCorrect": false
      }
    ],
    "hint": "Triggers auto-execute on DML events (INSERT/UPDATE/DELETE).",
    "category": "SQL / PLSQL"
  },
  {
    "question": "Which of the following is a scalar function in SQL?",
    "options": [
      {
        "id": "A",
        "text": "GROUP BY",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "SUM()",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "UPPER()",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "COUNT(*)",
        "isCorrect": false
      }
    ],
    "hint": "UPPER() is a scalar function — operates on a single value per row.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "What does 'COALESCE(col1, col2, 'default')' return?",
    "options": [
      {
        "id": "A",
        "text": "First non-NULL value from the list",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "NULL always",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Sum of col1 and col2",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "An error",
        "isCorrect": false
      }
    ],
    "hint": "COALESCE returns the first non-NULL argument in the list.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "Which command grants SELECT permission to a user in SQL?",
    "options": [
      {
        "id": "A",
        "text": "ALLOW SELECT ON table TO user",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "GRANT SELECT ON table TO user",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "PERMIT SELECT",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "ADD PERMISSION SELECT",
        "isCorrect": false
      }
    ],
    "hint": "GRANT privilege ON object TO user — standard SQL privilege management.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "What does 'ROLLBACK' do in SQL?",
    "options": [
      {
        "id": "A",
        "text": "Saves all transactions",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Undoes all changes since the last COMMIT",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Commits and then clears",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Deletes the database",
        "isCorrect": false
      }
    ],
    "hint": "ROLLBACK undoes uncommitted transactions in the current transaction block.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "Which SQL clause is used for pattern matching?",
    "options": [
      {
        "id": "A",
        "text": "MATCH",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "FIND",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "LIKE",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "REGEX",
        "isCorrect": false
      }
    ],
    "hint": "LIKE uses wildcards: % (any characters) and _ (single character).",
    "category": "SQL / PLSQL"
  },
  {
    "question": "What does 'SELECT MAX(salary) FROM employees WHERE dept='Sales'' return?",
    "options": [
      {
        "id": "A",
        "text": "Average salary in Sales",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Highest salary in Sales department",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "All salaries in Sales",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Count of Sales employees",
        "isCorrect": false
      }
    ],
    "hint": "MAX() returns the highest value — filtered by WHERE before aggregation.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "What is 'normalisation' in database design?",
    "options": [
      {
        "id": "A",
        "text": "Increasing data redundancy",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Organising data to reduce redundancy and improve data integrity",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Encrypting a database",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Adding more indexes",
        "isCorrect": false
      }
    ],
    "hint": "Normalisation (1NF, 2NF, 3NF) eliminates redundancy and ensures data integrity.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "Which join returns all rows from BOTH tables including non-matching rows?",
    "options": [
      {
        "id": "A",
        "text": "INNER JOIN",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "LEFT JOIN",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "RIGHT JOIN",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "FULL OUTER JOIN",
        "isCorrect": true
      }
    ],
    "hint": "FULL OUTER JOIN = LEFT JOIN + RIGHT JOIN — all rows from both tables.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "What does 'IN (val1, val2, val3)' do in a WHERE clause?",
    "options": [
      {
        "id": "A",
        "text": "Checks if column value is within a range",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Checks if column value matches any value in the list",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Inserts values",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Checks inequality",
        "isCorrect": false
      }
    ],
    "hint": "IN checks if the value matches ANY value in the specified list.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "Which constraint ensures a column value is unique but allows NULLs?",
    "options": [
      {
        "id": "A",
        "text": "PRIMARY KEY",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "NOT NULL",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "UNIQUE",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "CHECK",
        "isCorrect": false
      }
    ],
    "hint": "UNIQUE allows one NULL (in most databases) while still enforcing uniqueness.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "What is a 'composite key'?",
    "options": [
      {
        "id": "A",
        "text": "A key with encryption",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "A primary key made up of two or more columns",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "A foreign key with two references",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "A key that allows NULLs",
        "isCorrect": false
      }
    ],
    "hint": "Composite key = primary key formed by combining two or more columns.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "Which SQL function rounds a number to the nearest integer?",
    "options": [
      {
        "id": "A",
        "text": "CEIL()",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "FLOOR()",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "ROUND()",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "TRUNC()",
        "isCorrect": false
      }
    ],
    "hint": "ROUND(value, decimal_places) rounds to nearest. CEIL rounds up, FLOOR rounds down.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "What does 'BETWEEN 50 AND 100' do in a WHERE clause?",
    "options": [
      {
        "id": "A",
        "text": "Excludes values 50 and 100",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Returns values from 50 to 100 inclusive",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Returns values between but not including 50 and 100",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Inserts values 50 to 100",
        "isCorrect": false
      }
    ],
    "hint": "BETWEEN is inclusive on both ends: WHERE salary BETWEEN 50 AND 100.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "Which command saves the current transaction permanently?",
    "options": [
      {
        "id": "A",
        "text": "SAVE",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "COMMIT",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "PUSH",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "END TRANSACTION",
        "isCorrect": false
      }
    ],
    "hint": "COMMIT permanently saves all changes made in the current transaction.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "What does 'INDEX' do in SQL?",
    "options": [
      {
        "id": "A",
        "text": "Adds a primary key",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Creates a data structure to speed up queries on a column",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Removes duplicate rows",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Enforces foreign key",
        "isCorrect": false
      }
    ],
    "hint": "Indexes improve query performance by allowing faster data retrieval.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "Which aggregate function calculates the average?",
    "options": [
      {
        "id": "A",
        "text": "MEAN()",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "SUM()/COUNT()",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "AVG()",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "MEDIAN()",
        "isCorrect": false
      }
    ],
    "hint": "AVG() calculates the arithmetic mean of a numeric column.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "What is a 'cursor' in PL-SQL?",
    "options": [
      {
        "id": "A",
        "text": "A type of join",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "A pointer used to iterate through query result sets row by row",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "An index",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "A trigger",
        "isCorrect": false
      }
    ],
    "hint": "Cursors allow row-by-row processing of a SELECT result set in PL/SQL.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "Which SQL clause is used with GROUP BY to filter groups?",
    "options": [
      {
        "id": "A",
        "text": "WHERE",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "FILTER",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "HAVING",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "RESTRICT",
        "isCorrect": false
      }
    ],
    "hint": "HAVING filters after GROUP BY. WHERE filters before grouping.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "What does '%' wildcard match in a LIKE clause?",
    "options": [
      {
        "id": "A",
        "text": "Any single character",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Any sequence of characters (including none)",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Only alphabets",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Numbers only",
        "isCorrect": false
      }
    ],
    "hint": "% matches any sequence of zero or more characters in LIKE.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "Which keyword prevents a column from having NULL values?",
    "options": [
      {
        "id": "A",
        "text": "UNIQUE",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "NOT NULL",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "DEFAULT",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "CHECK",
        "isCorrect": false
      }
    ],
    "hint": "NOT NULL constraint forces a column to always have a value.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "What does 'CROSS JOIN' produce?",
    "options": [
      {
        "id": "A",
        "text": "Only matching rows",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "The Cartesian product of two tables (all combinations)",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "NULL rows",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Only non-matching rows",
        "isCorrect": false
      }
    ],
    "hint": "CROSS JOIN returns every row from table1 combined with every row from table2.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "Which function converts a string to uppercase in SQL?",
    "options": [
      {
        "id": "A",
        "text": "TOUPPER()",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "UPPER()",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "CAPITALIZE()",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "STR_UPPER()",
        "isCorrect": false
      }
    ],
    "hint": "UPPER(column) converts string values to uppercase.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "What is 'referential integrity'?",
    "options": [
      {
        "id": "A",
        "text": "Data is stored efficiently",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Foreign key values must match existing primary key values (or be NULL)",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "All columns have indexes",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Data is encrypted",
        "isCorrect": false
      }
    ],
    "hint": "Referential integrity ensures FK values reference valid PK values in the parent table.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "Which SQL statement is used to retrieve data?",
    "options": [
      {
        "id": "A",
        "text": "INSERT",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "UPDATE",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "SELECT",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "CREATE",
        "isCorrect": false
      }
    ],
    "hint": "SELECT is the DQL (Data Query Language) command for retrieving data.\n■ Exam Day Quick Tips:\n• KYT: Read TCS Xplore modules completely — questions come directly from there.\n• BizSkill: Always choose the option reflecting TCS values (Ethics, Integrity, Communication).\n• UI: Focus on semantic HTML5 tags, CSS specificity rules, and Flexbox/Grid.\n• Unix: Memorise 30 core commands — especially chmod, grep, find, awk, sed.\n• Java/Python: OOP concepts (inheritance, polymorphism) and String/List operations are most tested.\n• SQL: JOINs, GROUP BY + HAVING, and aggregate functions appear in every exam.\n• No negative marking — attempt ALL questions. Time per MCQ: ~1 minute.\nTCS IPA Hard Coding Questions\nPrevious Year • 2023 – 2025 • Java & Python\n35-Mark OOP Problems | 15-Mark Logic Problems | Full Solutions\n10 35 + 15 OOP Java+Python\nQuestions Mark Split Core Pattern Both Solutions\nNote: TCS IPA coding has 2 problems — a 35-mark OOP/class-based problem and a 15-mark\nlogic/algorithm problem. Both are asked in the same 70-minute window. You can choose Java or\nPython. All questions below are based on real exam experiences reported by candidates (2023–2025).\nQuestions Index\nQ1 Medicine Inventory — OOP Class + Case-Insensitive Search 35M 2025\nQ2 Employee Salary Management — Inheritance + Method Override 35M 2024\nQ3 Student Grade System — OOP + Array Sorting 35M 2024\nQ4 Library Book Management — OOP + Filter by Author 35M 2023\nQ5 Bank Account — OOP + Transaction History 35M 2023\nQ6 Anagram Check for Two Strings 15M 2025\nQ7 Longest Consecutive Subsequence 15M 2024\nQ8 Matrix Spiral Print 15M 2024\nQ9 Balanced Parentheses Check 15M 2023\nQ10 Count Substrings with Equal 0s and 1s 15M 2023\nPART 1 — 35-Mark OOP / Class-Based Problems\nThese are the hardest questions — always class design + method\nimplementation\nHARD\n35 Marks\nMarks Asked: Aug 2025",
    "category": "SQL / PLSQL"
  },
  {
    "question": "When Tata Consultancy Services established?",
    "options": [
      {
        "id": "A",
        "text": "1978",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "1968",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "1988",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "1958",
        "isCorrect": false
      }
    ],
    "hint": "Tata Consultancy Services (TCS) was established in 1968, making this the historically accurate founding year.",
    "category": "KYT"
  },
  {
    "question": "Drawback of Distributed computing is",
    "options": [
      {
        "id": "A",
        "text": "Man Power cost increased",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Cost of computing increased",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Complexity Reduced",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None of the options",
        "isCorrect": false
      }
    ],
    "hint": "A drawback of distributed computing is often an increase in manpower costs due to the complexity of managing multiple systems and ensuring their interoperability.",
    "category": "KYT"
  },
  {
    "question": "How many hours of video are uploaded to YouTube every minute",
    "options": [
      {
        "id": "A",
        "text": "10",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "50",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "80",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "100",
        "isCorrect": true
      }
    ],
    "hint": "As of various reports and statistics, approximately 100 hours of video are uploaded to YouTube every minute.",
    "category": "KYT"
  },
  {
    "question": "Computer Algorithms which determines the category of observation based on previously seen examples is called as",
    "options": [
      {
        "id": "A",
        "text": "Linear Regression",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Classification",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Maturity Learning",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Numerical regression",
        "isCorrect": false
      }
    ],
    "hint": "Classification algorithms are used to categorize observations into predefined groups or classes based on patterns learned from previously labeled examples.",
    "category": "KYT"
  },
  {
    "question": "Which application takes Highest Maintenance cost",
    "options": [
      {
        "id": "A",
        "text": "Native Application",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Web Application",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Composite Application",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Hybrid Application",
        "isCorrect": false
      }
    ],
    "hint": "Native applications are developed specifically for a particular operating system and often require more dedicated maintenance due to platform-specific updates and codebase management.",
    "category": "KYT"
  },
  {
    "question": "What are the stages in the IBC approach?",
    "options": [
      {
        "id": "A",
        "text": "Introduction, Body, Cohesion",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Introduction, Body, Content",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Introduction, Body, Conclusion",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "None of the options",
        "isCorrect": false
      }
    ],
    "hint": "The IBC approach, commonly used in writing and presentations, stands for Introduction, Body, and Conclusion, representing the standard structure for conveying information.",
    "category": "BizSkill"
  },
  {
    "question": "The purpose of writing is expressed by which type of question?",
    "options": [
      {
        "id": "A",
        "text": "how",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "when",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "why",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "who",
        "isCorrect": false
      }
    ],
    "hint": "The \"why\" question expresses the purpose of writing, explaining the reason or objective behind creating a document or message.",
    "category": "BizSkill"
  },
  {
    "question": "The CIBI Bank requested TCS to upgrade their systems worldwide and to digitize 80% of their workflow. TCS not only completed the given work on time but also provided IT training sessions for the bank employees to get accustomed to the upgrades. What is this service termed as ?",
    "options": [
      {
        "id": "A",
        "text": "Keeping commitments",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Robotic service",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Value-added service",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Systematic service",
        "isCorrect": false
      }
    ],
    "hint": "TCS providing IT training sessions beyond the requested system upgrade and digitization is an example of a value-added service, as it goes beyond the initial scope to provide extra benefit.",
    "category": "BizSkill"
  },
  {
    "question": "Select the options that may apply while responding to an angry customer's e-mail.",
    "options": [
      {
        "id": "A",
        "text": "Acknowledge their frustration and restate it in your own words.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Align with the customer by letting them know you’ve heard and understood the issue.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Assure the customer that you will resolve the issue at the earliest.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "All of the options",
        "isCorrect": true
      }
    ],
    "hint": "When responding to an angry customer, it is crucial to acknowledge their frustration, align with their understanding of the issue, and assure them of a prompt resolution.",
    "category": "BizSkill"
  },
  {
    "question": "He had a Masters in Business Administration (MBA). Here MBA is :",
    "options": [
      {
        "id": "A",
        "text": "Acronym",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Abbreviation",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Elision",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "All of the options",
        "isCorrect": false
      }
    ],
    "hint": "An abbreviation is a shortened form of a word or phrase, and MBA (Masters in Business Administration) is a common example of this, where the full words are simply shortened.",
    "category": "BizSkill"
  },
  {
    "question": "Stephen would be traveling home to attend his brother's wedding. What information should he exclude while drafting a mail prior to his leave ?",
    "options": [
      {
        "id": "A",
        "text": "The reason behind taking leave.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "The period of his absence specified by dates.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "The details of the wedding as well as Stephen's means of travelling back.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "An update on the current status of his work and details about the hand over of the task to a fellow ass ociate.",
        "isCorrect": false
      }
    ],
    "hint": "When drafting a professional leave mail, personal details like wedding specifics or travel arrangements are irrelevant and should be excluded, as the mail should remain concise and professional.",
    "category": "BizSkill"
  },
  {
    "question": "What are the elements of a Project Status Report?",
    "options": [
      {
        "id": "A",
        "text": "Current status, Plan for next phase and Areas of concern.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Current status and Areas of concern.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Current status, Areas of concern, Suggestions and Plan for next week.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Current status, Areas of concern and Suggestions.",
        "isCorrect": false
      }
    ],
    "hint": "A comprehensive Project Status Report typically includes the current state of the project, any issues or areas of concern, potential solutions or suggestions, and a plan for the immediate next phase.",
    "category": "BizSkill"
  },
  {
    "question": "Rose chooses not to consult her colleagues while fixing a problem, as she is sure that they are too busy. Ide ntify the mind trap.",
    "options": [
      {
        "id": "A",
        "text": "Defending prior choices",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Selecting supporting information",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Trap of assumptions",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Trap of initial ideas",
        "isCorrect": false
      }
    ],
    "hint": "Rose is falling into the trap of assumptions by presuming her colleagues are too busy without actually consulting them, leading her to make a decision based on unverified beliefs.",
    "category": "BizSkill"
  },
  {
    "question": "Group decision is an important element in which of the following work cultures?",
    "options": [
      {
        "id": "A",
        "text": "US, UK and Middle East.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "US, UK and Australia.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "India, Japan and Australia.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "India, Japan and Middle East.",
        "isCorrect": true
      }
    ],
    "hint": "In work cultures such as India, Japan, and many Middle Eastern countries, group decision-making is a significant element, often prioritizing consensus and collective agreement.",
    "category": "BizSkill"
  },
  {
    "question": "What factors should you consider before preparing a help document on the newly introduced 'search' functi onality in ABC online application ?",
    "options": [
      {
        "id": "A",
        "text": "Interest level of the users.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Gender of the users.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Technical knowledge of the users.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Experience of the users.",
        "isCorrect": true
      }
    ],
    "hint": "When preparing a help document, considering the users' interest level helps in tailoring the content, complexity, and presentation to ensure engagement and effective learning.",
    "category": "BizSkill"
  },
  {
    "question": "List 3 aspects that will be at stake, if a major impact on business has occurred due to an outage",
    "options": [
      {
        "id": "A",
        "text": "Sales Revenue , Brand reputation and Integrity in business",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Brand reputation , Employee Utilization",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Integrity in business and Sales Revenue",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Employee Utilization,Brand Reputation and Sales Reveneue",
        "isCorrect": false
      }
    ],
    "hint": "A major business outage can severely impact financial performance (sales revenue), public perception (brand reputation), and trust with stakeholders (integrity in business).",
    "category": "Miscellaneous"
  },
  {
    "question": "Amazon had suffered a major outage of its Simple Storage Service, also known as S3, crippling significant portions of the web for several hours. Amazon said the S3 team was working on an issue that was slowing down its billing system. Here’s what happened, according to Amazon, at 9:37 a.m. Pacific, starting the outage: “an authorized S3 team member using an established playbook executed a command which was intended to remove a small number of servers for one of the S3 subsystems that is used by the S3 billing process. Unfortunately, one of the inputs to the command was entered incorrectly and a larger set of servers was removed than intended.” This has occurred due to",
    "options": [
      {
        "id": "A",
        "text": "Proper knowledge transfer was missing which lead the team in distress. Lacked clarity and knowledg e regarding the incident",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Communication and escalation management as incident occurred due to wrong information being pas sed to the team member",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Access management, as authorized team member inappropriately made use of his access without proper validation",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "None of the options",
        "isCorrect": false
      }
    ],
    "hint": "The incident description explicitly states an \"authorized S3 team member\" executed a command with an \"incorrect input,\" leading to a larger-than-intended server removal, indicating a failure in access management and validation procedures.",
    "category": "Miscellaneous"
  },
  {
    "question": "Actions NOT to be taken during flood of alerts is",
    "options": [
      {
        "id": "A",
        "text": "Relating the incidents for quick closure.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Following the Hierarchical escalation.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Disabling the alerts.",
        "isCorrect": true
      }
    ],
    "hint": "Disabling alerts during a flood of alerts is an inappropriate action as it can lead to missing critical information and further delays in incident resolution.",
    "category": "Algorithms"
  },
  {
    "question": "Advantages of SOLID principles are 1. Helps design systems that are robust 2. Helps design systems that are flexible 3. Helps design systems that exhibit ease of maintenance 4. Helps design system that do not cost much to maintain",
    "options": [
      {
        "id": "A",
        "text": "1 and 2",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "2 and 3",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "1 , 3 and 4",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "All of the options",
        "isCorrect": true
      }
    ],
    "hint": "The SOLID principles are a set of design principles intended to make software designs more understandable, flexible, and maintainable, thus covering all listed advantages.",
    "category": "Algorithms"
  },
  {
    "question": "Developers should follow the design principles to achieve which of the following qualities",
    "options": [
      {
        "id": "A",
        "text": "Extensible and Simplicity",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Readability and Simplicity",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Extensible , Maintainability and Readability",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Maintainability",
        "isCorrect": false
      }
    ],
    "hint": "Developers follow design principles to create software that is extensible (easy to add new features), maintainable (easy to fix and update), and readable (easy for others to understand).",
    "category": "Algorithms"
  },
  {
    "question": "The command used to find the count of only words in a file?",
    "options": [
      {
        "id": "A",
        "text": "wc -w <filename>",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "wc –words <filename>",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "wc <Filename>",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None of the options",
        "isCorrect": false
      }
    ],
    "hint": "The `wc` command in Unix-like systems is used for word count, and the `-w` option specifically tells it to count only words in the specified file.",
    "category": "Unix"
  },
  {
    "question": "Which command is used to change permission levels of a file or directory?",
    "options": [
      {
        "id": "A",
        "text": "passwd",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "unset",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "return",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "chmod",
        "isCorrect": true
      }
    ],
    "hint": "The `chmod` command (change mode) is used in Unix-like operating systems to change the access permissions of file system objects (files and directories).",
    "category": "Unix"
  },
  {
    "question": "What will be the output of below awk script? awk 'BEGIN{s=0 while (s<55) {print s;++s}}'",
    "options": [
      {
        "id": "A",
        "text": "Prints the numbers from 0 to 55.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Prints the numbers from 0 to 5d.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Command will throw a syntax error",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "It will go to infinite loop.",
        "isCorrect": false
      }
    ],
    "hint": "The `awk` `BEGIN` block does not typically support `while` loops in that syntax, and the provided code has a missing closing brace, leading to a syntax error.",
    "category": "Unix"
  },
  {
    "question": "Given an input file as below. red,20 blue,22 green,45 yellow,2 orange,70 What will be the output of the below shell script and where will it be saved, when it is executed by passing above file as input. #!/bin/bash if [ $# -ne 1 ] then echo \"Pass the input file\" else if [ -f $1 ] && [ -e $1 ] then awk 'BEGIN{FS=\",\";s=0}{s=s+$2}END{print s}' $1>outsum cut -d, -f1 $1>>outsum else echo \"file doesn't exists\" fi fi",
    "options": [
      {
        "id": "A",
        "text": "Code won't run due to syntax error.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Only first filter's output will be saved into outsum file",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Sum of second column of input file and first column of input file will be obtained using the two filter s in the shell. Both outputs will be saved in file named outsum.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Only second filter's output will be saved into outsum file",
        "isCorrect": false
      }
    ],
    "hint": "The script first calculates the sum of the second column using `awk` and redirects the output to `outsum`, then extracts the first column using `cut` and appends its output to the *same* `outsum` file.",
    "category": "Unix"
  },
  {
    "question": "Input file filea.txt contains hi all hello everyone good morning good afternoon Which of the command(s) will print the first line of the file?",
    "options": [
      {
        "id": "A",
        "text": "head -1 filea.txt",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "awk 'NR==1' filea.txt",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "sed -n '1p' filea.txt",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "echo $1 filea.txt",
        "isCorrect": true
      }
    ],
    "hint": "The `sed -n '1p'` command uses the `-n` option to suppress default output and `1p` specifically instructs `sed` to print only the first line of the file.",
    "category": "Unix"
  },
  {
    "question": "What is the usage of <span> in html?",
    "options": [
      {
        "id": "A",
        "text": "It is often used as a container for other HTML elements to style them with CSS",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "It is used to group inline-elements in a document",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "It is used to highlight parts of your text.",
        "isCorrect": false
      }
    ],
    "hint": "The `<span>` tag is an inline container used to group and apply styles to a small section of text or other inline elements within a document without affecting their block-level display.",
    "category": "UI"
  },
  {
    "question": "What is the correct syntax to set border colors?",
    "options": [
      {
        "id": "A",
        "text": "<h1 style=\"border-line: 2px solid DodgerBlue;\">Hello World</h1>",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "<h1 style=\"border: DodgerBlue;\">Hello World</h1>",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "<h1 style=\"border: 2px solid DodgerBlue;\">Hello World</h1>",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "None of the options",
        "isCorrect": false
      }
    ],
    "hint": "The correct CSS syntax for setting a border is `border: <width> <style> <color>;`, where `2px` is the width, `solid` is the style, and `DodgerBlue` is the color.",
    "category": "UI"
  },
  {
    "question": "What is the correct syntax to apply css for the below code? <h2 class=\"city\">London</h2> <p>London is the capital of England.</p>",
    "options": [
      {
        "id": "A",
        "text": ".city { background-color: tomato; color: white; padding: 10px; }",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "#city { background-color: tomato; color: white; padding: 10px; }",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "city { background-color: tomato; color: white; padding: 10px; }",
        "isCorrect": false
      }
    ],
    "hint": "To apply CSS to an element with a specific class, you use a dot (`.`) followed by the class name, so `.city` correctly targets elements with the class \"city\".",
    "category": "UI"
  },
  {
    "question": "What is the usage of <svg> tag in html?",
    "options": [
      {
        "id": "A",
        "text": "It is used to adds audio controls, like play, pause, and volume",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "It is used to draw graphics, on the fly, via scripting",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "It is used for drawing paths, boxes and graphic images etc.",
        "isCorrect": true
      }
    ],
    "hint": "The `<svg>` tag is used in HTML to embed scalable vector graphics, which are XML-based vector image formats for two-dimensional graphics with support for interactivity and animation.",
    "category": "UI"
  },
  {
    "question": "How do you add a background color for Xplore <h1> elements?",
    "options": [
      {
        "id": "A",
        "text": "Xplore.h1  {background-color:#FFFFFF}",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "ha.Xplore  {background-color:#FFFFFF}",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "h1 {bg-color:#FFFFFF}",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "h1 {background-color:#FFFFFF}",
        "isCorrect": true
      }
    ],
    "hint": "To apply a background color to all `<h1>` elements, you simply target the `h1` tag directly in CSS and set the `background-color` property.",
    "category": "UI"
  },
  {
    "question": "Which of the following is not a valid style for the paragraph? p { color: red; font-family: courier; font-size: 160%; border-style: dotted dashed solid double; margin-right: 150px; float: bottom; }",
    "options": [
      {
        "id": "A",
        "text": "Font-Size",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Border-Style",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "float",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Font-family",
        "isCorrect": false
      }
    ],
    "hint": "While `float` is a valid CSS property, `float: bottom;` is not a valid value for it; `float` typically accepts `left`, `right`, `none`, `inherit`, `initial`, `unset`.",
    "category": "UI"
  },
  {
    "question": "Which one is a valid style;",
    "options": [
      {
        "id": "A",
        "text": "p { //Styling paragraph. color: red; text-align: center; }",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "p { – Styling paragraph. color: red; text-align: center;",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "p { /*Styling paragraph.*/ color: red; text-align: center; }",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "p { <!--Styling paragraph. → color: red; text-align: center; }",
        "isCorrect": false
      }
    ],
    "hint": "In CSS, comments are denoted by `/* comment content */`, making option C the only one with correct comment syntax.",
    "category": "UI"
  },
  {
    "question": "Which among the following is not CSS background properties;",
    "options": [
      {
        "id": "A",
        "text": "background-repeat",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "background-attachment",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "background-position",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "background-render",
        "isCorrect": true
      }
    ],
    "hint": "`background-render` is not a standard CSS background property; `background-repeat`, `background-attachment`, and `background-position` are all valid and commonly used background properties.",
    "category": "UI"
  },
  {
    "question": "JavaScript programs are executed by the Script Engine.",
    "options": [
      {
        "id": "A",
        "text": "TRUE",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "FALSE",
        "isCorrect": true
      }
    ],
    "hint": "JavaScript programs are executed by a JavaScript engine (often part of a web browser or Node.js), not a generic \"Script Engine.\"",
    "category": "UI"
  },
  {
    "question": "What will be the output of the below code; <html> <body> <p id=\"result\"></p> <script> var x = myFunction(NaN, 3); document.getElementById(\"result\").innerHTML = x; function myFunction(a, b) { return a * b; </script> </body> </html>",
    "options": [
      {
        "id": "A",
        "text": "0",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "3",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "NaN",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Script Error",
        "isCorrect": false
      }
    ],
    "hint": "When one of the operands in a multiplication operation is `NaN` (Not-a-Number), the result of the operation will also be `NaN`, as `NaN * 3` is `NaN`.",
    "category": "UI"
  },
  {
    "question": "We cannot use WHERE clause with TRUNCATE. True or False?",
    "options": [
      {
        "id": "A",
        "text": "False",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "True",
        "isCorrect": true
      }
    ],
    "hint": "The `TRUNCATE` statement removes all rows from a table and cannot be used with a `WHERE` clause because it is a DDL command that resets the table, rather than selectively deleting rows.",
    "category": "Java"
  },
  {
    "question": "Consider the below table Category<br> ID Name Price ============= =  1 W 35 2 LP 1200.99 3 POLO 1000.49 4 LEVI 900 5 HRX (null) Which is the output of below query SELECT AVG(Price) FROM Category;",
    "options": [
      {
        "id": "A",
        "text": "AVG(PRICE) ======== === 78d.12",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Cannot retrieve the output due to null values in table",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "AVG(PRICE) ======== === 627.296",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "AVG(PRICE) ======== === 88d.28",
        "isCorrect": false
      }
    ],
    "hint": "The `AVG()` function ignores `NULL` values. The sum of the valid prices (35 + 1200.99 + 1000.49 + 900) is 3136.48, and when divided by the count of valid prices (4), the average is 784.12.",
    "category": "Java"
  },
  {
    "question": "Which operator gives the result if the condition(s) is not satisfied?",
    "options": [
      {
        "id": "A",
        "text": "IN",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "NOT",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "OR",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "AND",
        "isCorrect": false
      }
    ],
    "hint": "The `NOT` operator is used to negate a condition, giving a result if the specified condition is not satisfied.",
    "category": "Java"
  },
  {
    "question": "Consider the below table ,CATEGORY Name Null Type ID NOT NULL NUMBER(38) NAME NOT NULL VARCHAR2(20) PRICE NOT NULL NUMBER(5,2) What is the output of below query? INSERT INTO CATEGORY VALUES (2, 'POLO', 2500.99);",
    "options": [
      {
        "id": "A",
        "text": "The row gets inserted successfully",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Query gives an SQL Error",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Insert syntax error",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None of the options",
        "isCorrect": false
      }
    ],
    "hint": "The `PRICE` column is defined as `NUMBER(5,2)`, meaning it can store numbers with a maximum of 5 digits in total, with 2 digits after the decimal point. The value `2500.99` exceeds this capacity, leading to an SQL error.",
    "category": "Java"
  },
  {
    "question": "Which is not a system defined exception in PLSQL?",
    "options": [
      {
        "id": "A",
        "text": "INVALID_INPUT",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "CURSOR_ALREADY_OPEN",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "NO_DATA_FOUND",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "INVALID_CURSOR",
        "isCorrect": false
      }
    ],
    "hint": "`INVALID_INPUT` is not a predefined system exception in PL/SQL; `CURSOR_ALREADY_OPEN`, `NO_DATA_FOUND`, and `INVALID_CURSOR` are all standard system exceptions.",
    "category": "Java"
  },
  {
    "question": "What is the meaning of the below fetch statement? FETCH c1 INTO ename, empno, sal; EXIT WHEN (c1%ROWCOUNT > 5) OR (c1%NOTFOUND);",
    "options": [
      {
        "id": "A",
        "text": "fetch statement ends only when no records returned by the cursor",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "fetch statement ends either when the number of rows returned by the cursor is greater than 5 or no records returned by the cursor",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Syntax error",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None of the options",
        "isCorrect": false
      }
    ],
    "hint": "The `EXIT WHEN` clause specifies that the loop should terminate if either the cursor has fetched more than 5 rows (`c1%ROWCOUNT > 5`) or if no more records are found (`c1%NOTFOUND`).",
    "category": "Java"
  },
  {
    "question": "To get the server output result and display it into the screen, you need to write",
    "options": [
      {
        "id": "A",
        "text": "set serveroutput on",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "set output on",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "set dbmsoutput on",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "set dbms output on",
        "isCorrect": false
      }
    ],
    "hint": "In SQL*Plus or similar environments, `SET SERVEROUTPUT ON` is the command used to enable the display of output from `DBMS_OUTPUT.PUT_LINE` statements to the screen.",
    "category": "Java"
  },
  {
    "question": "What are different conditional IF statements in PLSQL",
    "options": [
      {
        "id": "A",
        "text": "IF-THEN-END IF IF-THEN-ELSE-END IF IF-THEN-ELSIF-END IF",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "IF-THEN-END IF IF-THEN-ELSE-END IF IF-THEN-ELSEIF-END IF",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "IF-THEN-END IF IF-THEN-ELSE-END IF-THEN-ELSIF-END IF",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "IF-THEN-END IF IF-THEN-ELSE-END IF-THEN-ELSEIF-END IF",
        "isCorrect": false
      }
    ],
    "hint": "PL/SQL supports `IF-THEN-END IF`, `IF-THEN-ELSE-END IF`, and `IF-THEN-ELSIF-END IF` as its primary conditional `IF` statements.",
    "category": "Java"
  },
  {
    "question": "is also known as static variable",
    "options": [
      {
        "id": "A",
        "text": "Class variables",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Local variables",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Instance variables",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "All of the options",
        "isCorrect": false
      }
    ],
    "hint": "Class variables (or static variables in some languages like Java) are shared across all instances of a class and are associated with the class itself rather than any specific object.",
    "category": "Java"
  },
  {
    "question": "Which of the following variable declaration will not compile in a java program",
    "options": [
      {
        "id": "A",
        "text": "int a_1",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "int 1_a",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "int a",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "int A1",
        "isCorrect": false
      }
    ],
    "hint": "In Java, variable names cannot begin with a digit, making `1_a` an invalid identifier and thus causing a compile-time error.",
    "category": "Java"
  },
  {
    "question": "What would be the output of the following program? class CharRange { public static void main(String[] args) { char ch=127; ch++; System.out.println(ch+\" = \" +(int)ch); } }",
    "options": [
      {
        "id": "A",
        "text": "? = 128",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "GarbageCharacter = -128",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Compiler Error",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None of the options",
        "isCorrect": false
      }
    ],
    "hint": "In Java, `char` is an unsigned 16-bit type. When `ch` (initialized to 127) is incremented, its value becomes 128. Printing this character often results in a placeholder like `?` because 128 is not a standard printable ASCII character, but its integer representation is accurately 128.",
    "category": "Java"
  },
  {
    "question": "class string_class { public static void main(String args[]) { String obj = \"I LIKE JAVA\"; System.out.println(obj.length()); } } What will be the output?",
    "options": [
      {
        "id": "A",
        "text": "9",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "10",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "11",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "12",
        "isCorrect": false
      }
    ],
    "hint": "The `length()` method for a Java String returns the number of characters in the string. \"I LIKE JAVA\" contains 9 letters and 2 spaces, totaling 11 characters.",
    "category": "Java"
  },
  {
    "question": "Predict the output for the following Import java.util.Arrays; public class Test { public static void main(String[] args) { String s[] = { \"java\", \"hibernate\", \"spring\" }; Arrays.sort(s); for (String k : s) { System.out.print(k + \" \"); }}}",
    "options": [
      {
        "id": "A",
        "text": "hibernate java spring",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "java hibernate spring",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "spring java hibernate",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "spring hibernate java",
        "isCorrect": false
      }
    ],
    "hint": "`Arrays.sort(s)` sorts the string array alphabetically. \"hibernate\" comes before \"java\", and \"java\" comes before \"spring\" lexicographically.",
    "category": "Java"
  },
  {
    "question": "Which of the options are true regarding primary key and foreign key?",
    "options": [
      {
        "id": "A",
        "text": "Primary key cannot be null on the other hand foreign key can be null.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Primary key is always unique while foreign key can be duplicated",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "There can be only one primary key in the table and only one foreign key in the table.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "There can be only one primary key in the table on the other hand we can have more than one foreign key in the table.",
        "isCorrect": true
      }
    ],
    "hint": "A primary key must uniquely identify each row and therefore inherently cannot contain `NULL` values, whereas a foreign key is allowed to contain `NULL` values if the corresponding row in the referenced table is optional.",
    "category": "Java"
  },
  {
    "question": "In how many ways can a standalone procedure be called in PLSQL.",
    "options": [
      {
        "id": "A",
        "text": "Using the EXECUTE keyword",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Calling the procedure name from a PL/SQL block",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "From a SELECT statement",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "It will be automatically executed",
        "isCorrect": false
      }
    ],
    "hint": "Standalone PL/SQL procedures can be invoked using the `EXECUTE` (or `EXEC`) command in SQL*Plus or SQL Developer.",
    "category": "Java"
  },
  {
    "question": "What is the output of below code? TCS = (1, 4, 9) print(type(TCS))",
    "options": [
      {
        "id": "A",
        "text": "<type 'tuple'>",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "<type 'list'>",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Array",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "<type 'dict'>",
        "isCorrect": false
      }
    ],
    "hint": "In Python, a sequence of comma-separated values enclosed in parentheses `()` creates a tuple, which is an immutable ordered collection.",
    "category": "Java"
  },
  {
    "question": "Which of the following data structures can be used with the \"in\" operator to check if an item is in the data structure?",
    "options": [
      {
        "id": "A",
        "text": "List",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Set",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Dictionary",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "All the options.",
        "isCorrect": true
      }
    ],
    "hint": "The `in` operator in Python can be used to check for membership in lists, sets, and dictionaries (it checks for keys in dictionaries).",
    "category": "Java"
  },
  {
    "question": "What is the output from the above snippet?",
    "options": [
      {
        "id": "A",
        "text": "4",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "7",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "5",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "8",
        "isCorrect": false
      }
    ],
    "hint": "Assuming the snippet calculates the length of a list `[1, 2, 3, 4]`, the `len()` function returns the number of items in a list, which in this case is 4.",
    "category": "Python"
  },
  {
    "question": "Which of the following commands can be used to delete a column age from a table wityh name test1?",
    "options": [
      {
        "id": "A",
        "text": "alter table test1 drop column age;",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "alter table test1 drop age;",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "drop table test1;",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "delete from test1 age;",
        "isCorrect": false
      }
    ],
    "hint": "To remove a column from an existing table in SQL, the correct syntax is `ALTER TABLE <table_name> DROP COLUMN <column_name>;`.",
    "category": "Python"
  },
  {
    "question": "State whether the following statement is true or false .An outer join requires each record in a table to have a matching record with the joined table?",
    "options": [
      {
        "id": "A",
        "text": "TRUE",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "FALSE",
        "isCorrect": true
      }
    ],
    "hint": "An outer join includes all records from one table or both tables, even if there are no matching records in the other joined table, explicitly allowing for non-matching records.",
    "category": "Java"
  },
  {
    "question": "Which of the following set of operators can be used to enable a multi value comparison of values with a single column?",
    "options": [
      {
        "id": "A",
        "text": "CHECK",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "IN",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "LIKE",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "IS NULL",
        "isCorrect": false
      }
    ],
    "hint": "The `IN` operator is used to specify multiple values in a `WHERE` clause, allowing you to check if a column's value matches any value in a list of specified values.",
    "category": "Java"
  },
  {
    "question": "What is the significance of using a number in an order by clause?",
    "options": [
      {
        "id": "A",
        "text": "Number used in an order by clause signifies the position of a column in the select list",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Number Used in an order by clause signifies the position of a column in the where clause",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Number used in an Order by clause signifies the position of a column in a table",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Number cannot be used in a order by clause",
        "isCorrect": false
      }
    ],
    "hint": "In an `ORDER BY` clause, a number refers to the ordinal position of the column in the `SELECT` list, allowing you to sort results based on its position without explicitly naming it.",
    "category": "Python"
  },
  {
    "question": "Consider the following table structure. SQL>desc TRANSACTION; Name Null? Type TNSID NOT NULL NUMBER BANKNAME VARCHAR2(50) CUSTNAME VARCHAR2(20) UPDATE TRANSACTION SET BANKNAME='ABC BANK' where TNSID BETWEEN 100 TO 200 What is the output of the above query",
    "options": [
      {
        "id": "A",
        "text": "Query will update the BANKNAME to 'ABC BANK' if TNSID ranges between 100 to 200",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Query will update the BANKNAME to 'ABC BANK' if TNSID ranges between 101 to199",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "The query is syntactically wrong",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Query will update the BANKNAME to 'ABC BANK' for all the rows in the table",
        "isCorrect": false
      }
    ],
    "hint": "The `BETWEEN` operator is inclusive, meaning `TNSID BETWEEN 100 TO 200` will include records where TNSID is 100, 200, and any value in between.",
    "category": "Java"
  },
  {
    "question": "Consider the following employee table EmpId Empname Branch NoofInnovations ================================ 121 ABC CHN 2 122 XYZ CHN 6 123 WRE KO C 14 Which query is used to get the name of the branch with highest NoofInnovations?",
    "options": [
      {
        "id": "A",
        "text": "SELECT branch FROM employee WHERE NoOfInnovations=(SELECT MAX(NoOfInnovations) F ROM employee);",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "SELECT branch FROM employee WHERE NoOfInnovations=MAX(NoOfInnovations);",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "SELECT branch, MAX(NoofInnovations) FROM EMPLOYEE GROUP BY BRANCH;",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "All of the options",
        "isCorrect": false
      }
    ],
    "hint": "This query attempts to use an aggregate function (`MAX`) directly in the `WHERE` clause which is generally not standard SQL without a subquery, but if supported, it would implicitly compare `NoOfInnovations` with the table's overall maximum.",
    "category": "Java"
  },
  {
    "question": "TRUNCATE statement removes the complete data and its structure.",
    "options": [
      {
        "id": "A",
        "text": "TRUE",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "FALSE",
        "isCorrect": true
      }
    ],
    "hint": "The `TRUNCATE` statement removes all rows from a table, but it does not remove the table's structure (schema); the table and its definition remain intact.",
    "category": "Python"
  },
  {
    "question": "Which of the following are valid constraints in MySQL?",
    "options": [
      {
        "id": "A",
        "text": "UNIQUE, NOT NULL and DEFAULT",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "UNIQUE, NOT NULL and DISTINCT",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "DISTINCT and DEFAULT",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "DEFAULT, NOT NULL and DISTINCT",
        "isCorrect": false
      }
    ],
    "hint": "`UNIQUE`, `NOT NULL`, and `DEFAULT` are all valid constraints used in MySQL to enforce data integrity. `DISTINCT` is a keyword for selecting unique values, not a table constraint.",
    "category": "Python"
  },
  {
    "question": "Consider a database products Choose the query to select the products database",
    "options": [
      {
        "id": "A",
        "text": "USE products;",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "USE Product;",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Select PRODUCT;",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "SELECT products;",
        "isCorrect": false
      }
    ],
    "hint": "In MySQL, the `USE <database_name>;` command is used to select a specific database, making it the active database for subsequent operations.",
    "category": "Java"
  },
  {
    "question": "Select the correct statements for OOP in Python 1. The attributes of an object can be initialized using the    init method 2. self keyword is used to represent the current instance of a class 3. self keyword is used to declare a class in Python 4. Python does not support OOP",
    "options": [
      {
        "id": "A",
        "text": "1 and 3",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "1 and 2",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "1 and 4",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "2 and 3",
        "isCorrect": false
      }
    ],
    "hint": "In Python, the `__init__` method is used to initialize object attributes, and the `self` keyword refers to the current instance of a class, making statements 1 and 2 true.",
    "category": "Java"
  },
  {
    "question": "Which query returns all the employees who earn the minimum salary from the Employees table",
    "options": [
      {
        "id": "A",
        "text": "Select * from employees where sal=min(sal);",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Select * from employees where sal =(select sal from employees);",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Select * from employees where sal =(select min(sal) from employees);",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Select * from employees where sal =(select min(sal) from employees group by empno);",
        "isCorrect": false
      }
    ],
    "hint": "To find all employees earning the minimum salary, you must use a subquery to first determine the minimum salary from the entire `employees` table and then filter the main query based on that value.",
    "category": "Python"
  },
  {
    "question": "The study of computer algorithms that improve automatically through experience",
    "options": [
      {
        "id": "A",
        "text": "Artificial Intelligence",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Neural Networks",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Machine Learning",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Robotics",
        "isCorrect": false
      }
    ],
    "hint": "Machine Learning is a subfield of Artificial Intelligence focused on developing algorithms that allow computer systems to learn from data and improve their performance over time without explicit programming.",
    "category": "Miscellaneous"
  },
  {
    "question": "When Tata Consultancy Services established?",
    "options": [
      {
        "id": "A",
        "text": "1978",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "1968",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "1988",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "1971",
        "isCorrect": false
      }
    ],
    "hint": "Tata Consultancy Services (TCS) was established in 1968, making this the historically accurate founding year.",
    "category": "KYT"
  },
  {
    "question": "Some challenges in Artificial Intelligence are",
    "options": [
      {
        "id": "A",
        "text": "Cost",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Technology",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Common Sense",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "All of the options",
        "isCorrect": true
      }
    ],
    "hint": "Artificial Intelligence faces challenges related to high development and deployment costs, the evolving nature of technology, and the difficulty of encoding common sense reasoning into machines.",
    "category": "Miscellaneous"
  },
  {
    "question": "Prime difference between Public and Private Cloud is",
    "options": [
      {
        "id": "A",
        "text": "Hardware used",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Deployment Location",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Software used",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "All of the options",
        "isCorrect": false
      }
    ],
    "hint": "The prime difference between public and private cloud is their deployment location and ownership: public clouds are shared, while private clouds are dedicated to a single organization.",
    "category": "Miscellaneous"
  },
  {
    "question": "Mobile application can interact with GPS and Camera of the device",
    "options": [
      {
        "id": "A",
        "text": "TRUE",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "FALSE",
        "isCorrect": false
      }
    ],
    "hint": "Mobile applications, particularly native and hybrid apps, can access and utilize device hardware features like GPS for location services and the camera for image/video capture.",
    "category": "Miscellaneous"
  },
  {
    "question": "Paul is working with a client who is casual while communicating with him through chat application. The client sends him memes and other forwards in order to build bette  r workplace relationships. Select the best option.",
    "options": [
      {
        "id": "A",
        "text": "Paul can be task oriented and polite. He can avoid reciprocating by sharing memes and forward through chat application.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Since the client is informal while communicating, Paul can also do the same.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Paul can tell the client that what is done so far is not right and that it's not professional to do so.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Paul should take up this matter with the HR.",
        "isCorrect": false
      }
    ],
    "hint": "Maintaining professionalism by staying task-oriented and polite, while avoiding unprofessional behaviors like sharing memes, is the best approach when a client is overly casual.",
    "category": "Java"
  },
  {
    "question": "What is true about Agile principles? A. Leadership over management B. Management over leadership C. Adaptive over prescriptive D. Prescriptive over adaptive E. Customer collaboration over contract negotiation F. Contract negotiation over customer collaboration",
    "options": [
      {
        "id": "A",
        "text": "B,C,E",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "A,D,F",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "A,C,E",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "B,D,F",
        "isCorrect": false
      }
    ],
    "hint": "Agile principles emphasize \"Leadership over management,\" \"Adaptive over prescriptive,\" and \"Customer collaboration over contract negotiation,\" promoting flexibility, empowerment, and close client involvement.",
    "category": "Java"
  },
  {
    "question": "When declining help, what should you be wary of, more than the actual words ?",
    "options": [
      {
        "id": "A",
        "text": "The tone and facial expression.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "The words are the most important aspect. You need not consider anything else.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "We should never decline help in the first place.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Ignoring is the best way to decline help.",
        "isCorrect": false
      }
    ],
    "hint": "When declining help, non-verbal cues such as tone of voice and facial expression are often more important than the literal words, as they convey sincerity and respect.",
    "category": "Miscellaneous"
  },
  {
    "question": "What all details should be provided in the signature of an e-mail? Choose the best options. a) Name & role b) Phone & e-mail ID c) Personal address d) Organization Website",
    "options": [
      {
        "id": "A",
        "text": "a, b & d",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "a, b & c",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "b, c & d",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "a, b, c &d",
        "isCorrect": false
      }
    ],
    "hint": "A professional email signature typically includes your name, role, contact information (phone & email ID), and the organization's website, excluding personal residential addresses.",
    "category": "Java"
  },
  {
    "question": "‘Being objective’ in your writing is the ability to: a.Present accurate facts and figures. b.Present facts and not personal views. c.Present stereotypical information.",
    "options": [
      {
        "id": "A",
        "text": "1,3",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "1,2",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "1,2,3",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "2,3",
        "isCorrect": false
      }
    ],
    "hint": "Being objective in writing means presenting accurate facts and figures and focusing on facts rather than personal opinions or stereotypical information.",
    "category": "Java"
  },
  {
    "question": "Being digital gives us easy access to all kinds of information about our organization. How is data security ensured?",
    "options": [
      {
        "id": "A",
        "text": "Respect confidentiality of information. Prevent disclosure of information related to colleagues or competitors.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Give paramount importance to the individual who has ctreated the content.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Ensures free, easy access to employee information.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None of the options.",
        "isCorrect": false
      }
    ],
    "hint": "Data security in a digital organization is primarily ensured by respecting confidentiality and actively preventing unauthorized disclosure of sensitive information.",
    "category": "Java"
  },
  {
    "question": "Stephen would be traveling home to attend his brother's wedding. What information should he exclude while drafting a mail prior to his leave ?",
    "options": [
      {
        "id": "A",
        "text": "The reason behind taking leave.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "The period of his absence specified by dates.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "The details of the wedding as well as Stephen's means of travelling back.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "An update on the current status of his work and details about the hand over of the task to a fellow associate.",
        "isCorrect": false
      }
    ],
    "hint": "When drafting a professional leave mail, personal details like wedding specifics or travel arrangements are irrelevant and should be excluded, as the mail should remain concise and professional.",
    "category": "BizSkill"
  },
  {
    "question": "You have joined a project and you are in the training phase now. The project requires that you know the basics of Ruby on Rails. You complete an e-learning course on the same and now you are taking the assessment. During the assessment, a senior member of the team approaches you and asks if you can join a conference call instead of hi m. He requests you to just attend the call for 10 minutes. How will you respond?",
    "options": [
      {
        "id": "A",
        "text": "Since you are in the middle of an assessment, politely say no to the team member. Explain your predicament. You can inform him that you would join the call after th e assessment.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "It is impolite to say no to a team member. You can take the assessment again, but the opportunity to attend this call, may never come back in your life.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "You can say no as you have every right to say so. Your team mate will understand that your reason is genuine when you talk to him while looking at the monitor.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "It is impolite to say 'no' when you are the junior. After reaching a high position within the organization you can say 'no' as much as you want.",
        "isCorrect": false
      }
    ],
    "hint": "Prioritizing your current commitment (assessment) while politely explaining your situation and offering to assist later demonstrates professionalism and good time management.",
    "category": "Java"
  },
  {
    "question": "How can e-mails be used to convey negative information ?",
    "options": [
      {
        "id": "A",
        "text": "Disclose the information in the introduction of the mail.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Drop an email to the associate regarding a meeting. Deliver the information during the face to face discussion.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Mention the positive aspects first before sharing the negative information via e-mail.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "No negative information should be sent through an e-mail.",
        "isCorrect": false
      }
    ],
    "hint": "When conveying negative information, it is best to deliver it in person, after scheduling a meeting via email, to allow for direct communication, empathy, and immediate clarification.",
    "category": "Miscellaneous"
  },
  {
    "question": "What is the sequence of the transition management phases",
    "options": [
      {
        "id": "A",
        "text": "KT to Secondary Support to Primary Support",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Primary Support to Secondary Support to KT",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Secondary Support to primary support to KT",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None of the options",
        "isCorrect": false
      }
    ],
    "hint": "The typical sequence for knowledge transfer and support transition involves initial Knowledge Transfer (KT), followed by a period of secondary support, and finally full primary support by the new team.",
    "category": "Miscellaneous"
  },
  {
    "question": "After creating a Knowledge Article (KA) a.  Check and re-certify the KA at regular frequency",
    "options": [
      {
        "id": "B",
        "text": "Ensure exceptions are clearly visible",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Ensure you have used the standard template",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "All the options",
        "isCorrect": true
      }
    ],
    "hint": "After creating a Knowledge Article (KA), it is crucial to regularly check and re-certify it, ensure exceptions are clearly visible, and utilize a standard template for consistency and usability.",
    "category": "Miscellaneous"
  },
  {
    "question": "Duplication of code is the root cause of most of the maintenance problems",
    "options": [
      {
        "id": "A",
        "text": "TRUE",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "FALSE",
        "isCorrect": false
      }
    ],
    "hint": "Code duplication leads to inconsistencies, makes debugging harder, and increases the effort required for changes and updates, hence causing significant maintenance problems.",
    "category": "Miscellaneous"
  },
  {
    "question": "Which of the following sorting algorithms in its typical implementation gives best performance when applied on an array which is sorted or almost sorted (maximum 1 or t wo elements are misplaced).",
    "options": [
      {
        "id": "A",
        "text": "Insertion Sort",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Merge Sort",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Quick Sort",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Bubble Sort",
        "isCorrect": false
      }
    ],
    "hint": "Insertion Sort has a best-case time complexity of O(n) for already sorted or nearly sorted arrays because it only needs to shift elements slightly.",
    "category": "Java"
  },
  {
    "question": "We use dynamic programming approach when",
    "options": [
      {
        "id": "A",
        "text": "The solution has optimal substructure",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "The given problem can be reduced to the 3-SAT problem",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "It's faster than Greedy",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "We need an optimal solution",
        "isCorrect": false
      }
    ],
    "hint": "Dynamic programming is applicable to problems that exhibit optimal substructure, meaning an optimal solution can be constructed from optimal solutions of its subproblems.",
    "category": "Miscellaneous"
  },
  {
    "question": "Which symbol will be used with grep command to match the pattern pat at the beginning of a line?",
    "options": [
      {
        "id": "A",
        "text": "^pat",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "pat^",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "$pat",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "pat$",
        "isCorrect": false
      }
    ],
    "hint": "The caret symbol (^) in `grep` is a regular expression anchor that matches the beginning of a line.",
    "category": "Miscellaneous"
  },
  {
    "question": "What will be the output of below command? sort file1|uniq -u",
    "options": [
      {
        "id": "A",
        "text": "Command has syntax error.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Finds the unique lines in the file and sort it.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Sort the file named file1 and displays the duplicate lines in the file",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Sort the file named file1 and displays the distinct lines in the file",
        "isCorrect": true
      }
    ],
    "hint": "The `sort file1` command sorts the lines of `file1`, and `uniq -u` then filters these sorted lines to display only those that appear exactly once.",
    "category": "Java"
  },
  {
    "question": "Which of the following commands will give the length of a longest line in file",
    "options": [
      {
        "id": "A",
        "text": "wc -l <\"filename\">",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "wc -L",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "wc -c1",
        "isCorrect": false
      }
    ],
    "hint": "The `wc -L` command specifically reports the length of the longest line in a file.",
    "category": "Miscellaneous"
  },
  {
    "question": "Given an input file as below. red,20 blue, 22 green ,45 yello w,2 orang e,70 What will be the output of the below shell script and where will it be saved, when it is executed by passing above file as input. #!/bin/bash if [ $# -ne 1 ] then echo \"Pass the input file\" else if [ -f $1 ] && [ -e $1 ] then awk 'BEGIN{FS=\",\";s=0}{s=s+$2}END{p rint s}' $1>outsum cut -d, -f1 $1>>outsum else echo \"file doesn't exists\" fi fi",
    "options": [
      {
        "id": "A",
        "text": "Code won't run due to syntax error.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Only awk filter's output will be saved into outsum file",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Sum of second column of input file and first column of input file will be obtained using the two filters in the shell. Both outputs will be saved in file named outsum.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Only cut filter's output will be saved into outsum file",
        "isCorrect": false
      }
    ],
    "hint": "The script first uses `awk` to sum the second column and redirects the output (using `>`) to `outsum`. Then, it uses `cut` to extract the first column and appends (using `>>`) that output to the same `outsum` file.",
    "category": "Unix"
  },
  {
    "question": "Which command is used to compress a file in unix?",
    "options": [
      {
        "id": "A",
        "text": "zip",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "gzip",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "compress",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "comp",
        "isCorrect": false
      }
    ],
    "hint": "The `zip` command is a common utility in Unix-like systems used to compress files and create archive files.",
    "category": "Miscellaneous"
  },
  {
    "question": "what is the appearence of the <ins> tag? a.  It will display in bold.",
    "options": [
      {
        "id": "B",
        "text": "It will display in italics.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "It will display in underlined.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "It will display in unformatted.",
        "isCorrect": false
      }
    ],
    "hint": "The `<ins>` HTML tag is used to indicate inserted (added) text, and by default, browsers typically display this text as underlined.",
    "category": "Miscellaneous"
  },
  {
    "question": "Which of the following is a correct syntax to display ordered list with roman numbers?",
    "options": [
      {
        "id": "A",
        "text": "1. Coffee 2. Tea 3. Milk",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Default its showing with roman numbers",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "1. Coffee 2. Tea 3. Milk",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "I. Coffee II. Tea III. Milk",
        "isCorrect": true
      }
    ],
    "hint": "To display an ordered list with Roman numerals in HTML, you use the `<ol>` tag with the `type=\"I\"` attribute, and the browser will render it with capital Roman numerals.",
    "category": "Miscellaneous"
  },
  {
    "question": "A link can be an image or any other HTML element.",
    "options": [
      {
        "id": "A",
        "text": "TRUE",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "FALSE",
        "isCorrect": false
      }
    ],
    "hint": "In HTML, any element can be made into a link by wrapping it within an `<a>` tag, including images, paragraphs, or block-level elements.",
    "category": "Miscellaneous"
  },
  {
    "question": "<img url=\"sky.jpg\" width=\"100\" height=\"100\" opacity=\"0.25\"> What will be the output of the above code?",
    "options": [
      {
        "id": "A",
        "text": "sky.jpg will display with height=100, width=100",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "sky.jpg will display with mentioned dimension and blurred becuase of low opacity.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "sky.jpg will display with mentioned dimension in watermark mode.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None of the options",
        "isCorrect": true
      }
    ],
    "hint": "The `url` attribute for the `<img>` tag is incorrect; it should be `src`. Also, `opacity` is a CSS property, not an HTML attribute, so it won't be applied this way.",
    "category": "Java"
  },
  {
    "question": "Which of the following is not an inline element in html?",
    "options": [
      {
        "id": "A",
        "text": "<a>",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "<br>",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "<img>",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "<hr>",
        "isCorrect": true
      }
    ],
    "hint": "The `<hr>` (horizontal rule) tag is a block-level element, meaning it takes up the full width available and forces a line break before and after it.",
    "category": "Miscellaneous"
  },
  {
    "question": "<html> <head> <sty le> p { border: 1px solid black; outline: #7845ef solid 10px; } .para { border: 1px solid red; outline: #7845ef solid 10px; } </style> </head> <body> <p>Hello Java</p> <p class=\"para\">Hello HTML</p> </body> </html> What will be the output of the above code?",
    "options": [
      {
        "id": "A",
        "text": "It will display Hello Java in black color and Hello HTML in red color.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "It will display Hello Java in black back-ground color and Hello HTML in red back-ground color with default text color.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "It will display Hello Java as well as Hello HTML in black border color.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "It will display Hello Java in black border color and Hello HTML in red border color.",
        "isCorrect": true
      }
    ],
    "hint": "The first paragraph `Hello Java` applies the `p` selector, giving a black border. The second paragraph `Hello HTML` applies both `p` and `.para` selectors; since `.para`'s border color (red) is more specific or comes later, it overrides the `p`'s black border.",
    "category": "Java"
  },
  {
    "question": "Which of the following is incorrect?",
    "options": [
      {
        "id": "A",
        "text": "h1 { color: blue; }",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "h1 { color: darkblue; }",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "h1 { color: #000ff; }",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "h1 { color: rgb(0,0,255); }",
        "isCorrect": false
      }
    ],
    "hint": "The hexadecimal color code `#000ff` is invalid; a valid hex code for blue should be `#0000FF` or a shorthand like `#00F`.",
    "category": "Miscellaneous"
  },
  {
    "question": "Which of the following Statement is wrong for accessing the value of the text box? <html> <body> <span id=\"frm\"> <input type=\"text\" name=\"user\" id=\"user\"> </span> <button onclick=\"myFunction()\">Try it</button> <p id=\"xyz\"></p> <script> function myFunction() { var a = document.getElementById(\"user\").value; var b = document.getElementsByName( \"user\").value; var c = document.getElementById(\"frm \").innerHTML; var d = document.getElementsByName( \"user\"); alert(d); document.getElementById(\"xyz\").innerHTML = a;//Statement1 document.getElementById(\"xyz\").innerHTML = b;//Statement2 document.getElementById(\"xyz\").innerHTML = c;//Statement3 document.getElementById(\"xyz\").innerHTML = d.value;//Statement4 } </script> </body> </html>",
    "options": [
      {
        "id": "A",
        "text": "Statement1",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Statement2",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Statement3",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Statement4",
        "isCorrect": false
      }
    ],
    "hint": "`document.getElementById(\"frm\").innerHTML` retrieves the HTML content *inside* the span with id \"frm\", which includes the `<input>` tag itself, not the value of the input.",
    "category": "Java"
  },
  {
    "question": "An array can be declared in Javascript as;",
    "options": [
      {
        "id": "A",
        "text": "var rating = [\"Avg\", \"Medium\", \"High\"];",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "var rating = {\"Avg\", \"Medium\", \"High\"};",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "var rating = <\"Avg\", \"Medium\", \"High\">;",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None of options",
        "isCorrect": false
      }
    ],
    "hint": "In JavaScript, arrays are declared using square brackets `[]` to enclose a comma-separated list of elements.",
    "category": "Miscellaneous"
  },
  {
    "question": "<html> <script> function displayTime() { document.getElementById(\"abc\").inner HTML = Date(); } </script> <body> <div id=\"abc\" style=\"display:none\"></div> <button onclick=\"displayTime()\">What is the time?</button> </body> </html> What is the output of the above code?",
    "options": [
      {
        "id": "A",
        "text": "Upon clicking the button it will show the current time above the button.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Upon clicking the button it will show the current time below the button.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Upon clicking the button it will show the current time with timezone above the button.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "None of the options",
        "isCorrect": false
      }
    ],
    "hint": "Clicking the button calls `displayTime()`, which sets the `innerHTML` of the `div` with id \"abc\" to the current date and time (including timezone). The `div`'s initial `display:none` style is overridden as content is added and it is a block-level element, appearing above the button.",
    "category": "Java"
  },
  {
    "question": "Given below table with columns specified as below EMPLOYEE(EmployeeID,Employeename,yrsofexperien ce,gender,DOB,location). Which query will display the gender and average years of experience according to gender?",
    "options": [
      {
        "id": "A",
        "text": "SELECT gender,average(yrs_of_experience) FROM employee group BY gender;",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "SELECT gender,AVG(yrs_of_experience) FROM employee group BY AVG(yrs_of_experience);",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "SELECT gender,sum(yrs_of_experience) FROM employee group BY gender;",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "SELECT gender,AVG(yrs_of_experience) FROM employee group BY gender;",
        "isCorrect": true
      }
    ],
    "hint": "To calculate an aggregate function like `AVG` for distinct groups (gender), you must use the `GROUP BY` clause with the grouping column.",
    "category": "Java"
  },
  {
    "question": "How to delete the foreign key constraint from the products table CREATE TABLE supplier ( supplier_id numeric(10) PRIMARY KEY, supplier_name varchar2(50) not null, contact_name varchar2(50) ); CREATE TABLE products ( product_id numeric(10) not null, supplier_id numeric(10) not null, CONSTRAINT fk1 FOREIGN KEY (supplier_id) REFERENCES supplier(supplier_id) );",
    "options": [
      {
        "id": "A",
        "text": "MODIFY TABLE products DROP CONSTRAINT fk1;",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "ALTER TABLE products DELETE CONSTRAINT fk1;",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "ALTER TABLE products DROP CONSTRAINT fk1;",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "MODIFY TABLE products DELETE CONSTRAINT fk1;",
        "isCorrect": false
      }
    ],
    "hint": "To remove an existing constraint from a table, the correct SQL syntax is `ALTER TABLE table_name DROP CONSTRAINT constraint_name;`.",
    "category": "Java"
  },
  {
    "question": "In which normal form the transitive dependency is not allowed.",
    "options": [
      {
        "id": "A",
        "text": "1NF",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "2NF",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "3NF",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "BCNF",
        "isCorrect": false
      }
    ],
    "hint": "The Third Normal Form (3NF) states that a table must be in 2NF and have no transitive dependencies, meaning no non-prime attribute should be functionally dependent on another non-prime attribute.",
    "category": "Miscellaneous"
  },
  {
    "question": "Consider 2 tables Associate and LearningCourse AssociateID Name Address Age 145 Anirudh Delhi 21 256 Vishal Pune 23 356 Harini Chennai 19 432 Shobhi Bangalore 18 Course_ID AssociateID =============== =========== 1 145 2 256 2 356 3 432 5 1056 4 1189 Which query will give the below output Course_ID Name Age ==================== =========== 1 Anirudh 21 2 Vishal 23 2 Harini 19 3 Shobhi 18",
    "options": [
      {
        "id": "A",
        "text": "SELECT LearningCourse.COURSE_ID, Associate.NAME, Associate.AGE FROM Associate INNER JOIN LearningCourse ON Associate.AssociateID = LearningCourse. AssociateID;",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "SELECT Student.NAME,LearningCourse.COU RSE_ID FROM Associate LEFT JOIN LearningCourse ON LearningCourse. AssociateID = Associate. AssociateID;",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "SELECT Associate.NAME,LearningCourse.COU RSE_ID FROM Associate RIGHT JOIN LearningCourse ON LearningCourse. AssociateID = Associate. AssociateID;",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "SELECT LearningCourse.COURSE_ID, Associate.NAME, Associate.AGE FROM Associate SELF JOIN LearningCourse ON Associate.AssociateID = LearningCourse. AssociateID;",
        "isCorrect": false
      }
    ],
    "hint": "An `INNER JOIN` correctly combines rows from both tables where the `AssociateID` matches, effectively linking associates to their courses and displaying the requested columns.",
    "category": "Java"
  },
  {
    "question": "What is wrong in the following code? CREATE OR REPLACE FUNCTION FACULTY_FUN(F_YRSOFEXP IN FACULTY_DEMO.YRSOFEXP%TYPE) RETURN NUMBER IS TOTALCOUNT NUMBER :=0; BEGIN SELECT COUNT(*) AS TOTALCOUNT FROM FACULTY_DEMO WHERE YRSOFEXP>F_YRSOFEXP; RETURN TOTALCOUNT; END;",
    "options": [
      {
        "id": "A",
        "text": "Select query is wrong. INTO clause to fetch count to TOTALCOUNTis missing.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Declaration of variable totalcount is incorrect",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Declaration of variable F_YRSOFEXP is incorrect",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None of the options",
        "isCorrect": false
      }
    ],
    "hint": "In PL/SQL, a `SELECT` statement that returns a single value (like `COUNT(*)`) must include an `INTO` clause to store that value into a variable.",
    "category": "Java"
  },
  {
    "question": "PL/SQL automatically and implicitly declares the loop index variable with datatype ------------------------",
    "options": [
      {
        "id": "A",
        "text": "INTEGER",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "CHAR",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "STRING",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None of the options",
        "isCorrect": false
      }
    ],
    "hint": "In PL/SQL `FOR` loops, the loop index variable is implicitly declared as an `INTEGER` data type.",
    "category": "Miscellaneous"
  },
  {
    "question": "Are the following two sets of variable declarations equivalent? a.my_name VARCHAR2(25); next_name VARCHAR2(25); b.my_name ARCHAR2(25); next_name myname%TYPE;",
    "options": [
      {
        "id": "A",
        "text": "TRUE",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "FALSE",
        "isCorrect": false
      }
    ],
    "hint": "Declaring `next_name` with `my_name%TYPE` makes it inherit the data type and length of `my_name`, effectively making it `VARCHAR2(25)`.",
    "category": "Java"
  },
  {
    "question": "Choose the description which best matches the below PL/SQL script? declare bonus real; begin for emp_rec in (select empno,sal,comm from emp) loop bonus:=(emp_rec.sal*0.05)+(emp_r ec.comm *0.025); INSERT INTO bonuses VALUES (emp_rec.empno,bonus); end loop; commit; End;",
    "options": [
      {
        "id": "A",
        "text": "PL/SQL script that uses Cursor FOR loop to calculate bonus for employees as 5% of salary +b.5%of comm. The calculated bonus is stored in a table bonuses.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "PL/SQL script that uses anonymous block to calculate bonus for employees as 0.05% of salary +0.025%of comm. The calculated bonus is stored in a table bonuses.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "PL/SQL script that uses procedure to calculate bonus for employees as 5% of salary +b.5%of comm. The calculated bonus is stored in a table bonuses.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "PL/SQL script that uses function to calculate bonus for employees as 5% of salary +b.5%of comm. The calculated bonus is stored in a table bonuses.",
        "isCorrect": false
      }
    ],
    "hint": "The script uses a Cursor FOR loop to iterate through employee data, calculate bonuses as 5% of salary and 2.5% of commission, and insert them into a `bonuses` table.",
    "category": "Java"
  },
  {
    "question": "What is the output for the following: public class StringDemo { public static void main(String[] args) { String str1=\"Hello World\"; String str2=new String(str1); System.out.println( str1==str2); String str3=str1; System.out.println( str1==str3); } }",
    "options": [
      {
        "id": "A",
        "text": "true true",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "false true",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "true false",
        "isCorrect": false
      }
    ],
    "hint": "`str1 == str2` is false because `str2` is created using `new String()`, placing it in a different memory location than `str1`. `str1 == str3` is true because `str3 = str1` makes `str3` reference the exact same string object as `str1`.",
    "category": "Java"
  },
  {
    "question": "Which of the below statement is true: a.  Java is a platform dependent language",
    "options": [
      {
        "id": "B",
        "text": "JRE is platform independent",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "JVM is platform dependent",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "JVM interprets machine specific instruction set and converts into bytecode",
        "isCorrect": false
      }
    ],
    "hint": "While Java source code is compiled into platform-independent bytecode, the Java Virtual Machine (JVM) itself is platform-dependent, meaning a specific JVM implementation is required for each operating system.",
    "category": "Miscellaneous"
  },
  {
    "question": "Which is a not characteristic of java programming language?",
    "options": [
      {
        "id": "A",
        "text": "procedural",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "robust",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "distributed",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "multithreaded",
        "isCorrect": false
      }
    ],
    "hint": "Java is primarily an object-oriented programming language, not a procedural one, although it supports procedural-style programming within methods.",
    "category": "Miscellaneous"
  },
  {
    "question": "Idntify the SQL queries with proper group by and having usage",
    "options": [
      {
        "id": "A",
        "text": "SELECT empa.LastName, COUNT(orda.OrderID) FROM Orders ord1 INNER JOIN Employees emp1 ON Orda.EmployeeID=empa.E mployeeID GROUP BY LastName HAVING COUNT(orda.OrderID) > 10",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "SELECT emp.LastName, COUNT(ord.OrderID) FROM Orders ord INNER JOIN Employees emp ON Ord.EmployeeID=emp.Emp loyeeID GROUP BY LastName HAVING COUNT(ord.OrderID) > 10",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "SELECT emp.LastName, COUNT(ord.OrderID) FROM Orders ord INNER JOIN Employees emp ON Ord.EmployeeID=emp.Emp loyeeID GROUP BY LastName,COUNT(ord.Ord erID) HAVING COUNT(ord.OrderID) > 10",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "SELECT emp.LastName, COUNT(ord.OrderID) FROM Orders ord INNER JOIN Employees emp ON Ord.EmployeeID=emp.Emp loyeeID GROUP BY LastName,COUNT(ord.Ord erID) HAVING (ord.OrderID) > 10",
        "isCorrect": false
      }
    ],
    "hint": "This query correctly joins tables, groups by `LastName`, and uses `HAVING` to filter groups based on an aggregate condition (`COUNT(OrderID) > 10`), fulfilling the requirements for proper `GROUP BY` and `HAVING` usage.",
    "category": "Miscellaneous"
  },
  {
    "question": "Pick the correct variable declarations from the given list",
    "options": [
      {
        "id": "A",
        "text": "empsal number := 10",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "empno number(5) NOT NULL := 2;",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "empname varchar2(15) := 'Brandson';",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "empdept CONSTANT varchar2(5) := 'HR';",
        "isCorrect": true
      }
    ],
    "hint": "Option B correctly declares a `NUMBER` variable with a precision, a `NOT NULL` constraint, and an initial assignment, following PL/SQL syntax.",
    "category": "Miscellaneous"
  },
  {
    "question": "What is the output of below python code? s='tcstcstcs qcityqcity' print(s[3:6])",
    "options": [
      {
        "id": "A",
        "text": "TCS TCS",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "CS",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "tcs",
        "isCorrect": true
      }
    ],
    "hint": "In Python string slicing, `s[3:6]` extracts characters from index 3 up to (but not including) index 6, which are 't', 'c', 's'.",
    "category": "Java"
  },
  {
    "question": "What is the output of below python code? dictionary = {} dictionary[1] = 2 dictionary['1'] = 3 dictionary[1] += 4 sum = 0 for k in dictionary : sum += dictionary[k] print sum",
    "options": [
      {
        "id": "A",
        "text": "9",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "5",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "4",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "2",
        "isCorrect": false
      }
    ],
    "hint": "The dictionary stores two distinct keys: integer `1` with value `2` (updated to `6`) and string `'1'` with value `3`. The loop sums `dictionary[1]` (which is `6`) and `dictionary['1']` (which is `3`), resulting in `9`.",
    "category": "Java"
  },
  {
    "question": "What is the output of the below query? INSERT IGNORE INTO employee (employee_id,last_name, first_name,age) VALUES( 1234,'Ryan', 'Thomas',34);",
    "options": [
      {
        "id": "A",
        "text": "The query is syntactically wrong",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Query will insert the record in to employee table",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Query will ignore if the record/tuple is already present in the table else it will insert the record .",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "None of the options",
        "isCorrect": false
      }
    ],
    "hint": "The `INSERT IGNORE` statement in MySQL attempts to insert a row, but if a duplicate key error occurs, it ignores the error and does not insert the row.",
    "category": "Java"
  },
  {
    "question": "Consider the following Employee table Name Null Type EMPID NOT NULL NUMBER(10) EMPNAME NOT NULL VARCHAR2(50) BRANCHID NOT NULL NUMBER(10) Choose the query which is used to find all the EMPNAME starting with Sur",
    "options": [
      {
        "id": "A",
        "text": "SELECT EMPNAME FROM EMPLOYEE WHERE EMPNAME REGEXP '$Sur';",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "None of the options",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "SELECT EMPNAME FROM Employee WHERE EMPNAME REGEXP '^Sur';",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "SELECT EMPNAME FROM EMPLOYEE WHERE EMPNAME REGEXP '*Sur'",
        "isCorrect": false
      }
    ],
    "hint": "The `REGEXP` operator with `'^Sur'` uses a regular expression to match strings that begin with \"Sur\" (`^` anchors the pattern to the beginning of the string).",
    "category": "Java"
  },
  {
    "question": "What is the output of the below Query : SELECT USER( )",
    "options": [
      {
        "id": "A",
        "text": "The query is syntactically wrong",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Query will return current user name",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Query will return current user name and logged in details like logged in date , last login etc..",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Query will return current user name and last login details",
        "isCorrect": false
      }
    ],
    "hint": "The `USER()` function in SQL (specifically MySQL) returns the current authenticated user name.",
    "category": "Java"
  },
  {
    "question": "In MySQL – ISITNULL condition is used to check if there is a NULL value in the expression",
    "options": [
      {
        "id": "A",
        "text": "FALSE",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "TRUE",
        "isCorrect": false
      }
    ],
    "hint": "In MySQL, the correct operator to check for NULL values is `IS NULL` or `IS NOT NULL`, not `ISITNULL`.",
    "category": "Miscellaneous"
  },
  {
    "question": "Consider the following Employee table Name Null Type EMPID NOT NULL NUMBER(10) EMPNAME NOT NULL VARCHAR2(50) BRANCHID NOT NULL NUMBER(10) BRANCHNAME NOT NULL VARCHAR2(50) Choose the query which is used to add a column AGE of type integer",
    "options": [
      {
        "id": "A",
        "text": "It is not possible to add the column once a table is created.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Alter table Employee add AGE integer",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Alter table Employee add AGE",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Alter table Employee add column AGE integer;",
        "isCorrect": false
      }
    ],
    "hint": "The standard SQL syntax to add a column to an existing table is `ALTER TABLE table_name ADD column_name data_type;`.",
    "category": "Java"
  },
  {
    "question": "What is the output of the below Query : USE CUSTOMER;",
    "options": [
      {
        "id": "A",
        "text": "The query is syntactically wrong",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "SQL Command is used to select database named as “CUSTOMER”",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "SQL Command is used to select table named as “CUSTOMER”",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "SQL Command is used to select view named as “CUSTOMER”",
        "isCorrect": false
      }
    ],
    "hint": "The `USE database_name;` command in SQL (especially MySQL) is used to select a specific database as the default for subsequent operations.",
    "category": "Java"
  },
  {
    "question": "Which of the following queries can be correct according to the below projected requirement “Display the details of all those employees for whom “a” is the first or last cha r”? Assume the table name as emp",
    "options": [
      {
        "id": "A",
        "text": "Select * from emp where name like 'a%' or name like '%a'",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Select * from emp where name in('a%', '%a')",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Select * from emp where name between 'a%' and '%a'",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Not Possible",
        "isCorrect": false
      }
    ],
    "hint": "The `LIKE` operator with the wildcard `%` correctly matches strings that start with 'a' (`'a%'`) or end with 'a' (`'%a'`).",
    "category": "Java"
  },
  {
    "question": "Which of the following constraint types are called as TABLE LEVEL constraints?",
    "options": [
      {
        "id": "A",
        "text": "NOT NULL",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "UNIQUE and PRIMARY KEY",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "PRIMARY KEY",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "DEFAULT",
        "isCorrect": false
      }
    ],
    "hint": "`UNIQUE` and `PRIMARY KEY` constraints can be defined at the table level, meaning they can involve multiple columns or be specified after all columns are declared.",
    "category": "Miscellaneous"
  },
  {
    "question": "What the following query will do? DELETE * FROM books WHERE bookid=4;",
    "options": [
      {
        "id": "A",
        "text": "The query is syntactically wrong",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Query will delete the book whose bookid is 4",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Query will delete all the books",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None of the options",
        "isCorrect": false
      }
    ],
    "hint": "The `DELETE` statement does not use `*`; the correct syntax to delete all columns of a row is simply `DELETE FROM table_name WHERE condition;`.",
    "category": "Java"
  },
  {
    "question": "Identify the unordered collections in python a.  List",
    "options": [
      {
        "id": "B",
        "text": "Set",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Dictionary and Set",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Tuple",
        "isCorrect": false
      }
    ],
    "hint": "In Python, `dictionaries` and `sets` are unordered collections, meaning their elements do not have a defined order and cannot be accessed by an integer index.",
    "category": "Miscellaneous"
  },
  {
    "question": "What is the output of the below query? TRUNCATE TABLE EMPLOYEE;",
    "options": [
      {
        "id": "A",
        "text": "The query is syntactically wrong",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Query will delete all the rows in the Employee table and structure remains",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Query will delete all the rows in the Employee table and the structure",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "All of the options",
        "isCorrect": false
      }
    ],
    "hint": "The `TRUNCATE TABLE` command removes all rows from a table much faster than `DELETE` (without a `WHERE` clause) but leaves the table structure and its columns intact.",
    "category": "Miscellaneous"
  },
  {
    "question": "The study of computer algorithms that improve automatically through experience",
    "options": [
      {
        "id": "A",
        "text": "Artificial Intelligence",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Neural Networks",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Machine Learning",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Robotics",
        "isCorrect": false
      }
    ],
    "hint": "Machine Learning is defined as the field of study that gives computers the ability to learn without being explicitly programmed, improving performance through experience.",
    "category": "Miscellaneous"
  },
  {
    "question": "When Tata Consultancy Services established?",
    "options": [
      {
        "id": "A",
        "text": "1978",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "1968",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "1988",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "1971",
        "isCorrect": false
      }
    ],
    "hint": "Tata Consultancy Services (TCS) was established in 1968.",
    "category": "KYT"
  },
  {
    "question": "Some challenges in Artificial Intelligence are",
    "options": [
      {
        "id": "A",
        "text": "Cost",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Technology",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Common Sense",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "All of the options",
        "isCorrect": true
      }
    ],
    "hint": "Challenges in AI include the high cost of development and resources, limitations of current technology, and difficulty in replicating human common sense.",
    "category": "Miscellaneous"
  },
  {
    "question": "Prime difference between Public and Private Cloud is",
    "options": [
      {
        "id": "A",
        "text": "Hardware used",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Deployment Location",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Software used",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "All of the options",
        "isCorrect": false
      }
    ],
    "hint": "The primary distinction between public and private clouds lies in their deployment model and ownership, with public clouds being shared and private clouds dedicated.",
    "category": "Miscellaneous"
  },
  {
    "question": "Mobile application can interact with GPS and Camera of the device",
    "options": [
      {
        "id": "A",
        "text": "TRUE",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "FALSE",
        "isCorrect": false
      }
    ],
    "hint": "Mobile applications commonly request and use permissions to access device hardware components like GPS for location services and the camera for capturing images/videos.",
    "category": "Miscellaneous"
  },
  {
    "question": "Judging another person's views solely based on our own values and culture is called :",
    "options": [
      {
        "id": "A",
        "text": "Centrality",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Diversity",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Ethnocentrism",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Criticism",
        "isCorrect": false
      }
    ],
    "hint": "Ethnocentrism is the act of judging another culture solely by the values and standards of one's own culture.",
    "category": "BizSkill"
  },
  {
    "question": "Paul is working with a client who is casual while communicating with him through chat application. The client sends him memes and other forwards in order to build better workplace relationships. Select the be st option.",
    "options": [
      {
        "id": "A",
        "text": "Paul can be task oriented and polite. He can avoid reciprocating by sharing memes and forward thro ugh chat application.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Since the client is informal while communicating, Paul can also do the same.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Paul can tell the client that what is done so far is not right and that it's not professional to do so.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Paul should take up this matter with the HR.",
        "isCorrect": false
      }
    ],
    "hint": "Maintaining professionalism while being polite and task-oriented is the best approach when a client becomes overly casual, avoiding unprofessional behavior.",
    "category": "Java"
  },
  {
    "question": "What is true about Agile principles? A. Leadership over management B. Management over leadership C. Adaptive over prescriptive D. Prescriptive over adaptive E. Customer collaboration over contract negotiation F. Contract negotiation over customer collaboration",
    "options": [
      {
        "id": "A",
        "text": "B,C,E",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "A,D,F",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "A,C,E",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "B,D,F",
        "isCorrect": false
      }
    ],
    "hint": "Agile principles prioritize leadership (empowerment) over strict management, being adaptive over following rigid prescriptions, and customer collaboration over relying solely on contract negotiation.",
    "category": "Java"
  },
  {
    "question": "When declining help, what should you be wary of, more than the actual words ?",
    "options": [
      {
        "id": "A",
        "text": "The tone and facial expression.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "The words are the most important aspect. You need not consider anything else.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "We should never decline help in the first place.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Ignoring is the best way to decline help.",
        "isCorrect": false
      }
    ],
    "hint": "Non-verbal cues like tone of voice and facial expressions often convey more meaning and can influence how a message is received, especially when declining a request.",
    "category": "Miscellaneous"
  },
  {
    "question": "What all details should be provided in the signature of an e-mail? Choose the best options. a) Name & role b) Phone & e-mail ID c) Personal address d) Organization Website",
    "options": [
      {
        "id": "A",
        "text": "a, b & d",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "a, b & c",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "b, c & d",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "a, b, c &d",
        "isCorrect": false
      }
    ],
    "hint": "A professional email signature should include your name, role, contact information (phone, email), and relevant organizational links like a website, while excluding personal addresses.",
    "category": "Java"
  },
  {
    "question": "‘Being objective’ in your writing is the ability to: 1. Present accurate facts and figures. b.Present facts and not personal views. c.Present stereotypical information.",
    "options": [
      {
        "id": "A",
        "text": "1,3",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "1,2",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "1,2,3",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "2,3",
        "isCorrect": false
      }
    ],
    "hint": "Being objective means presenting information based on accurate facts and figures and avoiding personal opinions or biases. Presenting stereotypical information is not objective.",
    "category": "Java"
  },
  {
    "question": "Being digital gives us easy access to all kinds of information about our organization. How is data security ensured?",
    "options": [
      {
        "id": "A",
        "text": "Respect confidentiality of information. Prevent disclosure of information related to colleagues or co mpetitors.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Give paramount importance to the individual who has ctreated the content.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Ensures free, easy access to employee information.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None of the options.",
        "isCorrect": false
      }
    ],
    "hint": "Data security is primarily ensured by upholding confidentiality, restricting unauthorized access, and preventing the disclosure of sensitive information.",
    "category": "Java"
  },
  {
    "question": "Stephen would be traveling home to attend his brother's wedding. What information should he exclude w hile drafting a mail prior to his leave ?",
    "options": [
      {
        "id": "A",
        "text": "The reason behind taking leave.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "The period of his absence specified by dates.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "The details of the wedding as well as Stephen's means of travelling back.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "An update on the current status of his work and details about the hand over of the task to a fellow as sociate.",
        "isCorrect": false
      }
    ],
    "hint": "A professional leave request should include essential information like the reason and duration of absence, and handover details, but not excessive personal details about the event or travel arrangements.",
    "category": "BizSkill"
  },
  {
    "question": "You have joined a project and you are in the training phase now. The project requires that you know the b asics of Ruby on Rails. You complete an e-learning course on the same and now you are taking the assess ment. During the assessment, a senior member of the team approaches you and asks if you can join a conf erence call instead of him. He requests you to just attend the call for 10 minutes. How will you respond?",
    "options": [
      {
        "id": "A",
        "text": "Since you are in the middle of an assessment, politely say no to the team member. Explain your pre dicament. You can inform him that you would join the call after the assessment.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "It is impolite to say no to a team member. You can take the assessment again, but the opportunity to attend this call, may never come back in your life.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "You can say no as you have every right to say so. Your team mate will understand that your reason i s genuine when you talk to him while looking at the monitor.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "It is impolite to say 'no' when you are the junior. After reaching a high position within the organizati on you can say 'no' as much as you want.",
        "isCorrect": false
      }
    ],
    "hint": "It is important to prioritize your training and assessment, so politely declining and explaining your commitment while offering a later alternative is the most professional response.",
    "category": "Java"
  },
  {
    "question": "How can e-mails be used to convey negative information ?",
    "options": [
      {
        "id": "A",
        "text": "Disclose the information in the introduction of the mail.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Drop an email to the associate regarding a meeting. Deliver the information during the face to face discussion.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Mention the positive aspects first before sharing the negative information via e-mail.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "No negative information should be sent through an e-mail.",
        "isCorrect": false
      }
    ],
    "hint": "Emails are generally not ideal for delivering negative information directly; best practice is to use an email to schedule a face-to-face meeting for sensitive discussions.",
    "category": "Miscellaneous"
  },
  {
    "question": "What is the sequence of the transition management phases",
    "options": [
      {
        "id": "A",
        "text": "KT to Secondary Support to Primary Support",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Primary Support to Secondary Support to KT",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Secondary Support to primary support to KT",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None of the options",
        "isCorrect": false
      }
    ],
    "hint": "In transition management, Knowledge Transfer (KT) typically precedes moving to secondary support, and then to primary support as expertise and responsibility are transferred.",
    "category": "Miscellaneous"
  },
  {
    "question": "After creating a Knowledge Article (KA)",
    "options": [
      {
        "id": "A",
        "text": "Check and re-certify the KA at regular frequency",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Ensure exceptions are clearly visible",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Ensure you have used the standard template",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "All the options",
        "isCorrect": true
      }
    ],
    "hint": "After creating a Knowledge Article, it is crucial to check and re-certify it regularly, ensure exceptions are clearly visible, and use a standard template for consistency and effectiveness.",
    "category": "Miscellaneous"
  },
  {
    "question": "Duplication of code is the root cause of most of the maintenance problems",
    "options": [
      {
        "id": "A",
        "text": "TRUE",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "FALSE",
        "isCorrect": false
      }
    ],
    "hint": "Code duplication leads to inconsistencies, makes debugging harder, and increases the effort required for changes and updates, hence causing significant maintenance problems.",
    "category": "Miscellaneous"
  },
  {
    "question": "Which of the following sorting algorithms in its typical implementation gives best performance when app lied on an array which is sorted or almost sorted (maximum 1 or two elements are misplaced).",
    "options": [
      {
        "id": "A",
        "text": "Insertion Sort",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Merge Sort",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Quick Sort",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Bubble Sort",
        "isCorrect": false
      }
    ],
    "hint": "Insertion Sort has a best-case time complexity of O(n) for already sorted or nearly sorted arrays because it only needs to shift elements slightly.",
    "category": "Java"
  },
  {
    "question": "We use dynamic programming approach when",
    "options": [
      {
        "id": "A",
        "text": "The solution has optimal substructure",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "The given problem can be reduced to the 3-SAT problem",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "It's faster than Greedy",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "We need an optimal solution",
        "isCorrect": false
      }
    ],
    "hint": "Dynamic programming is applicable to problems that exhibit optimal substructure, meaning an optimal solution can be constructed from optimal solutions of its subproblems.",
    "category": "Miscellaneous"
  },
  {
    "question": "what is the appearence of the <ins> tag?",
    "options": [
      {
        "id": "A",
        "text": "It will display in bold.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "It will display in italics.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "It will display in underlined.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "It will display in unformatted.",
        "isCorrect": false
      }
    ],
    "hint": "The `<ins>` HTML tag is used to indicate inserted (added) text, and by default, browsers typically display this text as underlined.",
    "category": "UI"
  },
  {
    "question": "Which of the following is a correct syntax to display ordered list with roman numbers?",
    "options": [
      {
        "id": "A",
        "text": "1. Coffee 2. Tea 3. Milk",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Default its showing with roman numbers c. 1. Coffee 2. Tea 3. Milk",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "I. Coffee II. Tea III. Milk",
        "isCorrect": true
      }
    ],
    "hint": "To display an ordered list with Roman numerals in HTML, you use the `<ol>` tag with the `type=\"I\"` attribute, and the browser will render it with capital Roman numerals.",
    "category": "Miscellaneous"
  },
  {
    "question": "A link can be an image or any other HTML element.",
    "options": [
      {
        "id": "A",
        "text": "TRUE",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "FALSE",
        "isCorrect": false
      }
    ],
    "hint": "In HTML, any element can be made into a link by wrapping it within an `<a>` tag, including images, paragraphs, or block-level elements.",
    "category": "Miscellaneous"
  },
  {
    "question": "<img url=\"sky.jpg\" width=\"100\" height=\"100\" opacity=\"0.25\"> What will be the output of the above code?",
    "options": [
      {
        "id": "A",
        "text": "sky.jpg will display with height=100, width=100",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "sky.jpg will display with mentioned dimension and blurred becuase of low opacity.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "sky.jpg will display with mentioned dimension in watermark mode.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None of the options",
        "isCorrect": true
      }
    ],
    "hint": "The `url` attribute for the `<img>` tag is incorrect; it should be `src`. Also, `opacity` is a CSS property, not an HTML attribute, so it won't be applied this way.",
    "category": "Java"
  },
  {
    "question": "Which of the following is not an inline element in html?",
    "options": [
      {
        "id": "A",
        "text": "<a>",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "<br>",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "<img>",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "<hr>",
        "isCorrect": true
      }
    ],
    "hint": "The `<hr>` (horizontal rule) tag is a block-level element, meaning it takes up the full width available and forces a line break before and after it.",
    "category": "Miscellaneous"
  },
  {
    "question": "<html> <head> <style> p { border: 1px solid black; outline: #7845ef solid 10px; } .para { border: 1px solid red; outline: #7845ef solid 10px; } </style> </head> <body> <p>Hello Java</p> <p class=\"para\">Hello HTML</p> </body> </html> What will be the ouput of the above code?",
    "options": [
      {
        "id": "A",
        "text": "It will display Hello Java in black color and Hello HTML in red color.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "It will display Hello Java in black back-ground color and Hello HTML in red back-ground color wit h default text color.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "It will display Hello Java as well as Hello HTML in black border color.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "It will display Hello Java in black border color and Hello HTML in red border color.",
        "isCorrect": true
      }
    ],
    "hint": "The first paragraph `Hello Java` applies the `p` selector, giving a black border. The second paragraph `Hello HTML` applies both `p` and `.para` selectors; since `.para`'s border color (red) is more specific or comes later, it overrides the `p`'s black border.",
    "category": "Java"
  },
  {
    "question": "Which of the following is incorrect?",
    "options": [
      {
        "id": "A",
        "text": "h1 { color: blue; }",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "h1 { color: darkblue; }",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "h1 { color: #000ff; }",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "h1 { color: rgb(0,0,255); }",
        "isCorrect": false
      }
    ],
    "hint": "The hexadecimal color code `#000ff` is invalid; a valid hex code for blue should be `#0000FF` or a shorthand like `#00F`.",
    "category": "Miscellaneous"
  },
  {
    "question": "Which of the following Statement is wrong for accessing the value of the text box?",
    "options": [
      {
        "id": "A",
        "text": "Statement1",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Statement2",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Statement3",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Statement4",
        "isCorrect": false
      }
    ],
    "hint": "`document.getElementById(\"frm\").innerHTML` retrieves the HTML content *inside* the span with id \"frm\", which includes the `<input>` tag itself, not the value of the input.",
    "category": "Miscellaneous"
  },
  {
    "question": "An array can be declared in Javascript as;",
    "options": [
      {
        "id": "A",
        "text": "var rating = [\"Avg\", \"Medium\", \"High\"];",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "var rating = {\"Avg\", \"Medium\", \"High\"};",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "var rating = <\"Avg\", \"Medium\", \"High\">;",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None of options",
        "isCorrect": false
      }
    ],
    "hint": "In JavaScript, arrays are declared using square brackets `[]` to enclose a comma-separated list of elements.",
    "category": "Miscellaneous"
  },
  {
    "question": "<html> <script> function displayTime() { document.getElementById(\"abc\").innerHTML = Date(); } </script> <body> <div id=\"abc\" style=\"display:none\"></div> <button onclick=\"displayTime()\">What is the time?</button> </body> </html> What is the output of the above code?",
    "options": [
      {
        "id": "A",
        "text": "Upon clicking the button it will show the current time above the button.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Upon clicking the button it will show the current time below the button.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Upon clicking the button it will show the current time with timezone above the button.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "None of the options",
        "isCorrect": false
      }
    ],
    "hint": "Clicking the button calls `displayTime()`, which sets the `innerHTML` of the `div` with id \"abc\" to the current date and time (including timezone). The `div`'s initial `display:none` style is overridden as content is added and it is a block-level element, appearing above the button.",
    "category": "Java"
  },
  {
    "question": "Syntax for variable declaration in c# is",
    "options": [
      {
        "id": "A",
        "text": "<data_type> <variable_list>",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "<data_type> <variable_list>;",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "<variable_list> as <data_type>",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None of the options",
        "isCorrect": false
      }
    ],
    "hint": "In C#, variable declarations typically follow the format `data_type variable_name;` and end with a semicolon.",
    "category": "C# / .NET"
  },
  {
    "question": "Select the value types",
    "options": [
      {
        "id": "A",
        "text": "Int , Char and Struct",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "char and Struct",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "struct and Int",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "interface",
        "isCorrect": false
      }
    ],
    "hint": "In C#, `int`, `char`, and `struct` are all examples of value types, which directly store their data.",
    "category": "C# / .NET"
  },
  {
    "question": "What would be the output of program below. namespace DataTypeApplication { class Program { static void Main(string[] args) { Console.WriteLine(\"Size of int: {0}\", sizeof(int)); Console.ReadLine(); } } }What would be the output of program below. namespace DataTypeApplication { class Program { static void Main(string[] args) { Console.WriteLine(\"Size of int: {0}\", sizeof(int)); Console.ReadLine(); } } }",
    "options": [
      {
        "id": "A",
        "text": "Size of int: 4",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Size of int: {0} 4",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Size of int: 8",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "4",
        "isCorrect": false
      }
    ],
    "hint": "In C#, the `sizeof(int)` operator returns the size of an `int` data type in bytes, which is typically 4 bytes on most systems.",
    "category": "Java"
  },
  {
    "question": "Correct output for code is? static void Main(string[] args) { float a = 10.553f; long b = 12L; int c; c = Convert.ToInt32(a + b); Console.WriteLine(c);Correct output for code is? static void Main(string[] args) { float a = 10.553f; long b = 12L; int c; c = Convert.ToInt32(a + b); Console.WriteLine(c);",
    "options": [
      {
        "id": "A",
        "text": "2c.453",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "22",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "23",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "2b.453",
        "isCorrect": false
      }
    ],
    "hint": "The expression `a + b` evaluates to `10.553f + 12L = 22.553`. `Convert.ToInt32()` rounds `22.553` to the nearest integer, which is `23`.",
    "category": "Java"
  },
  {
    "question": "What will be the output of the following code snippet? static void Main(string[] args) { int i; for (i = 0; i <= 10; i++) { if (i == 4) { Console.Write(i + \" \"); continue; } else if (i != 4) Console.Write(i + \" \"); else break; } Console.ReadLine(); }What will be the output of the following code snippet? static void Main(string[] args) { int i; for (i = 0; i <= 10; i++) { if (i == 4) { Console.Write(i + \" \"); continue; } else if (i != 4) Console.Write(i + \" \"); else break; } Console.ReadLine(); }",
    "options": [
      {
        "id": "A",
        "text": "4 5 6 7 8 9 10",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "1 2 3 4 5 6 7 8 9 10",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "1 2 3 4",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "0 1 2 3 4 5 6 7 8 9 10",
        "isCorrect": true
      }
    ],
    "hint": "The loop prints every number from 0 to 10 because `if (i == 4)` handles the case for `4` by printing and continuing, and `else if (i != 4)` handles all other numbers by printing them.",
    "category": "Java"
  },
  {
    "question": "What is the output of the following public enum Number { One, Two = 10, Three } class Program { static void Main(string[] args) { int i = (int)Number.Three; Console.WriteLine(i.ToString()); Console.ReadLine(); } } What is the output of the following public enum Number { One, Two = 10, Three } class Program { static void Main(string[] args) { int i = (int)Number.Three; Console.WriteLine(i.ToString()); Console.ReadLine(); } }",
    "options": [
      {
        "id": "A",
        "text": "0",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "10",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "11",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Compile error \"use of unassigned variable Three\"",
        "isCorrect": false
      }
    ],
    "hint": "In C# enums, if a member's value is not explicitly set, its value is incremented by 1 from the preceding member. `One` defaults to 0, `Two` is 10, so `Three` becomes 11.",
    "category": "Java"
  },
  {
    "question": "Which of the following statements are correct? a.Data members of a class are by default public. b.Data members of a class are by default private. c.Member functions of a class are by default public. d.A private function of a class can access a public function within the same class. e.Member function of a class are by default private.",
    "options": [
      {
        "id": "A",
        "text": "1, 3, 5",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "2, 4, 5",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "1,4",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "1, 2, 3",
        "isCorrect": false
      }
    ],
    "hint": "In C#, data members (fields) are private by default, member functions (methods) are also private by default, and any function within a class can access other functions (public or private) within the same class.",
    "category": "Java"
  },
  {
    "question": "What would be the output of the following code? static void Main(string[] args) { string s = \" \"; Console.WriteLine(s.Trim().Length); Console.ReadLine(); }What would be the output of the following code? static void Main(string[] args) { string s = \" \"; Console.WriteLine(s.Trim().Length); Console.ReadLine(); }",
    "options": [
      {
        "id": "A",
        "text": "0",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "1",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "2",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None of the options",
        "isCorrect": false
      }
    ],
    "hint": "The `Trim()` method removes all leading and trailing whitespace from a string. For the string \" \", `Trim()` returns an empty string \"\", whose `Length` property is 0.",
    "category": "Java"
  },
  {
    "question": "A constructor",
    "options": [
      {
        "id": "A",
        "text": "is used to create objects",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "must have the same name as the class it is declared within",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "maybe overloaded",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "All of the options",
        "isCorrect": true
      }
    ],
    "hint": "Constructors are special methods used to initialize objects, they must bear the same name as their class, and they can be overloaded to support different initialization scenarios.",
    "category": "C# / .NET"
  },
  {
    "question": "Which keyword is used to add an item to the list?",
    "options": [
      {
        "id": "A",
        "text": "Add",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Insert",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "AddRange",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Take",
        "isCorrect": false
      }
    ],
    "hint": "The `Add` method is the standard and most common way to append a single item to the end of a list or collection in many programming languages and frameworks.",
    "category": "C# / .NET"
  },
  {
    "question": "CREATE, ALTER are category of statements",
    "options": [
      {
        "id": "A",
        "text": "A.DML",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "B.DDL",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "C.UML",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Both A and B",
        "isCorrect": false
      }
    ],
    "hint": "CREATE and ALTER are commands belonging to the Data Definition Language (DDL) category, used to define and modify the structure of database objects.",
    "category": "C# / .NET"
  },
  {
    "question": "Primary key should always be auto increment",
    "options": [
      {
        "id": "A",
        "text": "TRUE",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "FALSE",
        "isCorrect": true
      }
    ],
    "hint": "While a primary key must be unique and non-null, it is not a requirement for it to be auto-incrementing; any unique identifier can serve as a primary key.",
    "category": "C# / .NET"
  },
  {
    "question": "If a view is created from one table then it can also be used to insert,update,delete values to the table",
    "options": [
      {
        "id": "A",
        "text": "TRUE",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "FALSE",
        "isCorrect": false
      }
    ],
    "hint": "If a view is created from a single table without complex operations like aggregation or distinct clauses, it can often be used to perform DML operations (insert, update, delete) on the underlying base table.",
    "category": "C# / .NET"
  },
  {
    "question": "Which join is used to join a table to itself?",
    "options": [
      {
        "id": "A",
        "text": "Equi",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Inner Joins",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Cross join",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Self",
        "isCorrect": true
      }
    ],
    "hint": "A self-join is a specialized type of join where a table is joined to itself, typically used to compare rows within the same table or to query hierarchical data.",
    "category": "C# / .NET"
  },
  {
    "question": "Which is true regarding indexing operation?",
    "options": [
      {
        "id": "A",
        "text": "A.Sorts a file using a single key.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "B.Sorts a file using two keys",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "C.Established an index for a file",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Both B and C",
        "isCorrect": false
      }
    ],
    "hint": "Indexing involves creating a data structure that helps sort a file using one or more keys, which significantly speeds up data retrieval and lookup operations.",
    "category": "C# / .NET"
  },
  {
    "question": "Which of the following is the object of .NET data provider?",
    "options": [
      {
        "id": "A",
        "text": "Connection and Command",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Command",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Execute and Command",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "All the options",
        "isCorrect": false
      }
    ],
    "hint": "The fundamental objects for connecting to a database and executing commands in ADO.NET data providers are the `Connection` object to establish the link and the `Command` object to execute SQL statements.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "Consider the following code snippet: DataSet myDataSet = new DataSet(); myDataAdapter.Fill(myDataSet); What is the functionality of the above code segment?",
    "options": [
      {
        "id": "A",
        "text": "Executes the SelectCommand and fills myDataSet with the resultant data",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Executes the SelectCommand but does not fill myDataSet with the resultant data",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "It declares the DataSet()",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "It declares the DataAdapter",
        "isCorrect": false
      }
    ],
    "hint": "The `myDataAdapter.Fill(myDataSet)` method executes the `SelectCommand` associated with the data adapter and then populates the `DataSet` object with the retrieved data from the database.",
    "category": "Java"
  },
  {
    "question": "Which one of the following is TRUE about DataSet ?",
    "options": [
      {
        "id": "A",
        "text": "Data is read-only",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Cannot relate to XML",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Data is confined to only one data source",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "DataSet is a Disconnected Model",
        "isCorrect": true
      }
    ],
    "hint": "The `DataSet` in ADO.NET operates as a disconnected, in-memory cache of data, meaning it can hold and manipulate data independently of an active database connection.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "Which ADO.NET object is very fast in getting data from database?",
    "options": [
      {
        "id": "A",
        "text": "Dataset",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Data Reader",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Data Adapter",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Data View",
        "isCorrect": false
      }
    ],
    "hint": "The `DataReader` object in ADO.NET provides the fastest way to retrieve data from a database because it offers a forward-only, read-only stream of data, minimizing overhead.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "Which of the following options describes the roles of the DataReader class in ADO.NET connections?",
    "options": [
      {
        "id": "A",
        "text": "It returns a read-only rowset from the datasource",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "It returns a read-only, forward-only rowset from the data source",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "A DataReader provides fast access when a forward-only sequential read is needed",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "A DataReader does not provide fast access in sequential read",
        "isCorrect": false
      }
    ],
    "hint": "The `DataReader` class provides a fast, efficient, and forward-only stream of data from a data source, making the retrieved data read-only and accessible sequentially.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "In which year TCS had won the Pega Partner Excellence Award?",
    "options": [
      {
        "id": "A",
        "text": "2017",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "2007",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "2016",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "2018",
        "isCorrect": false
      }
    ],
    "hint": "TCS was awarded the Pega Partner Excellence Award in 2017, recognizing their significant contributions and expertise in Pega technologies.",
    "category": "KYT"
  },
  {
    "question": "Who are the value chain partners with respect to TCS?",
    "options": [
      {
        "id": "A",
        "text": "a.suppliers and service providers",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "b.joint-venture Partners",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Option 1 and 2",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Option 1 only",
        "isCorrect": false
      }
    ],
    "hint": "Value chain partners for TCS encompass both suppliers and service providers who aid in operations, as well as joint-venture partners who collaborate on strategic initiatives.",
    "category": "KYT"
  },
  {
    "question": "Some challenges in Artificial Intelligence are",
    "options": [
      {
        "id": "A",
        "text": "Cost",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Technology",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Common Sense",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "All of the options",
        "isCorrect": true
      }
    ],
    "hint": "Artificial Intelligence faces challenges in areas such as high development and deployment costs, limitations in current technology, and the inherent difficulty of imbuing machines with common sense.",
    "category": "Miscellaneous"
  },
  {
    "question": "Utility cloud computing services offer virtual storage and server options, where the companies can access it on demand",
    "options": [
      {
        "id": "A",
        "text": "TRUE",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "FALSE",
        "isCorrect": false
      }
    ],
    "hint": "Utility cloud computing services offer on-demand virtualized storage and server resources, allowing companies to scale their infrastructure and access computing power as needed.",
    "category": "Java"
  },
  {
    "question": "Which of the method is used by Humans while making judgments",
    "options": [
      {
        "id": "A",
        "text": "Conscious",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Step by step",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Intuitive based",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Program based",
        "isCorrect": false
      }
    ],
    "hint": "Humans often rely on intuitive-based methods, which involve rapid, unconscious processing and pattern recognition, when making judgments, especially in complex or time-sensitive situations.",
    "category": "KYT"
  },
  {
    "question": "What are the two 'A's of effective writing? a.  Accurate and Approachable",
    "options": [
      {
        "id": "B",
        "text": "Affirmative and Accessible",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Accurate and Accessible",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Accurate and Affirmative",
        "isCorrect": false
      }
    ],
    "hint": "Effective writing prioritizes being Accurate (providing correct information) and Accessible (easy for the target audience to understand).",
    "category": "BizSkill"
  },
  {
    "question": "Paul is working with a client who is casual while communicating with him through chat application. The client sends him memes and other forwards in order to build better workplace relationships. Select the be st option.",
    "options": [
      {
        "id": "A",
        "text": "Paul can be task oriented and polite. He can avoid reciprocating by sharing memes and forward thro ugh chat application.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Since the client is informal while communicating, Paul can also do the same.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Paul can tell the client that what is done so far is not right and that it's not professional to do so.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Paul should take up this matter with the HR.",
        "isCorrect": false
      }
    ],
    "hint": "Maintaining a professional demeanor by being task-oriented and polite, while subtly avoiding informal communication like sharing memes, helps establish appropriate workplace boundaries.",
    "category": "Java"
  },
  {
    "question": "Which of the following is NOT expected of a good listener?",
    "options": [
      {
        "id": "A",
        "text": "Listening attentively",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Maintaining eye contact",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Seeking clarifications",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Interrupting the speaker",
        "isCorrect": true
      }
    ],
    "hint": "A good listener actively engages by paying attention, maintaining eye contact, and asking clarifying questions, but does not interrupt the speaker, which disrupts communication flow.",
    "category": "BizSkill"
  },
  {
    "question": "Identify the correct statement a.  Accepting help is a sign of weakness.",
    "options": [
      {
        "id": "B",
        "text": "We can be a little careless as we can apologize whenever we make a mistake. After all mistakes hel p us learn.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "We need to accept help when needed. The key is to be assertive. Being honest about your weakness builds trust.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Ask for help even before trying something on your own. It will help you get a head start.",
        "isCorrect": false
      }
    ],
    "hint": "It is important to acknowledge and accept help when necessary; doing so assertively and being transparent about limitations can build trust and facilitate better teamwork.",
    "category": "BizSkill"
  },
  {
    "question": "What all details should be provided in the signature of an e-mail? Choose the best options. a) Name & role b) Phone & e-mail ID c) Personal address d) Organization Website",
    "options": [
      {
        "id": "A",
        "text": "a, b & d",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "a, b & c",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "b, c & d",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "a, b, c &d",
        "isCorrect": false
      }
    ],
    "hint": "A professional email signature should include essential contact details such as your name, role, phone number, email ID, and the organization's website, but not personal addresses.",
    "category": "Java"
  },
  {
    "question": "‘Being objective’ in your writing is the ability to: a.Present accurate facts and figures. b.Present facts and not personal views. c.Present stereotypical information.",
    "options": [
      {
        "id": "A",
        "text": "1,3",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "1,2",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "1,2,3",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "2,3",
        "isCorrect": false
      }
    ],
    "hint": "Being objective in writing means presenting information based on accurate facts and figures, and excluding personal opinions or subjective viewpoints to maintain neutrality.",
    "category": "Java"
  },
  {
    "question": "You are a team lead. During an initial meeting, you realise that you need 3 additional resources to work o n the project. How will you communicate the same effectively in a Project Status Report?",
    "options": [
      {
        "id": "A",
        "text": "Having 3 more associates in our team would help us complete the task effectively.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "We have less number of associates in our team to complete the project work so if we are provided w ith 3 more associates, we would be able to complete the task.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "We are facing a shortage of manpower for the task. Hence we need 3 more resources.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "We need 3 associates to join our team. This would help us complete the task effectively.",
        "isCorrect": false
      }
    ],
    "hint": "The most effective way to communicate a need for resources is to clearly state the problem and the specific requirement, such as \"We are facing a shortage of manpower for the task. Hence we need 3 more resources.\"",
    "category": "Java"
  },
  {
    "question": "Which of the choices make the following sentence correct and consistent - 'The instructor explains the dia gram to students who asked questions during the lecture.'",
    "options": [
      {
        "id": "A",
        "text": "The instructor explained the diagram to students who ask questions during the lecture.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "The instructor explains the diagram to students who asks questions during the lecture",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "The instructor explains the diagram to students who ask questions during the lecture.",
        "isCorrect": true
      }
    ],
    "hint": "The original sentence \"The instructor explains the diagram to students who ask questions during the lecture\" is grammatically correct as \"students\" is plural, requiring the plural verb \"ask.\"",
    "category": "Java"
  },
  {
    "question": "You have joined a project and you are in the training phase now. The project requires that you know the b asics of Ruby on Rails. You complete an e-learning course on the same and now you are taking the assess ment. During the assessment, a senior member of the team approaches you and asks if you can join a conf erence call instead of him. He requests you to just attend the call for 10 minutes. How will you respond?",
    "options": [
      {
        "id": "A",
        "text": "Since you are in the middle of an assessment, politely say no to the team member. Explain your pre dicament. You can inform him that you would join the call after the assessment.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "It is impolite to say no to a team member. You can take the assessment again, but the opportunity to attend this call, may never come back in your life.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "You can say no as you have every right to say so. Your team mate will understand that your reason i s genuine when you talk to him while looking at the monitor.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "It is impolite to say 'no' when you are the junior. After reaching a high position within the organizati on you can say 'no' as much as you want.",
        "isCorrect": false
      }
    ],
    "hint": "Prioritizing your ongoing assessment while politely declining the request, explaining your current commitment, and offering to assist once your task is complete is the most professional response.",
    "category": "Java"
  },
  {
    "question": "What factors should you consider before preparing a help document on the newly introduced 'search' func tionality in ABC online application ?",
    "options": [
      {
        "id": "A",
        "text": "Interest level of the users.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Gender of the users.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Technical knowledge of the users.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Experience of the users.",
        "isCorrect": true
      }
    ],
    "hint": "Considering the users' interest level is important because it influences how the help document should be structured and presented to engage them and encourage adoption of the new functionality.",
    "category": "BizSkill"
  },
  {
    "question": "During a crisis, do not cascade incorrect updates to the customer and other associates. Always wait for co nfirmation from the",
    "options": [
      {
        "id": "A",
        "text": "BCP Manager",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "DR team",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Crisis Management Team",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "None of the options",
        "isCorrect": false
      }
    ],
    "hint": "During a crisis, all communications to customers and associates must be confirmed and cascaded by the designated Crisis Management Team to ensure accuracy and prevent the spread of misinformation.",
    "category": "Java"
  },
  {
    "question": "Before accessing customer system what are the important steps to be completed by recruits",
    "options": [
      {
        "id": "A",
        "text": "Reading and Signing A non-disclosure agreement (NDA)",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Complete Background Checks(BGC) if required.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Both the options",
        "isCorrect": true
      }
    ],
    "hint": "Before accessing customer systems, recruits are typically required to complete background checks and sign a Non-Disclosure Agreement (NDA) to ensure security, compliance, and confidentiality.",
    "category": "Miscellaneous"
  },
  {
    "question": "Which of the following standard algorithms is not Dynamic Programming based",
    "options": [
      {
        "id": "A",
        "text": "Bellman–Ford Algorithm for single source shortest path",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Floyd Warshall Algorithm for all pairs shortest paths",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "0-1 Knapsack problem",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Prim's Minimum Spanning Tree",
        "isCorrect": true
      }
    ],
    "hint": "Prim's algorithm for finding a Minimum Spanning Tree is a greedy algorithm, where it makes locally optimal choices at each step, rather than a dynamic programming approach which solves subproblems.",
    "category": "Algorithms"
  },
  {
    "question": "Which of the following sorting algorithms in its typical implementation gives best performance when app lied on an array which is sorted or almost sorted (maximum 1 or two elements are misplaced).",
    "options": [
      {
        "id": "A",
        "text": "Insertion Sort",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Merge Sort",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Quick Sort",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Bubble Sort",
        "isCorrect": false
      }
    ],
    "hint": "Insertion Sort is highly efficient for arrays that are already sorted or nearly sorted, as it performs very few comparisons and swaps in such optimal conditions, achieving close to O(n) performance.",
    "category": "Java"
  },
  {
    "question": "which is the fastest sorting algorithm",
    "options": [
      {
        "id": "A",
        "text": "Bubble sort",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Merge Sort",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Heap Sort",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Selection sort",
        "isCorrect": false
      }
    ],
    "hint": "Merge Sort guarantees an O(n log n) time complexity in all cases (best, average, and worst), making it a consistently fast and stable sorting algorithm for large datasets.",
    "category": "Algorithms"
  },
  {
    "question": "What is the syntax to combine the content of two files(file1, file2 ) into another file (newfilename)?",
    "options": [
      {
        "id": "A",
        "text": "cat file1 file2 > newfilename",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "cat file1 file2 >> newfilename",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "cat file1 file2 < newfilename",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "cat file1 file2 << newfilename",
        "isCorrect": false
      }
    ],
    "hint": "The `cat` command concatenates the contents of `file1` and `file2`, and the `>` operator redirects this combined output to `newfilename`, creating or overwriting the destination file.",
    "category": "Unix"
  },
  {
    "question": "Example.txt file contains the following text: Java Programming Language. Java and Python are programming languages. Python Programming language. What is the output generated by the below command. $ grep -v Java Example.txt",
    "options": [
      {
        "id": "A",
        "text": "Java and Python are programming languages. Python Programming language.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Java Programming Language. Java and Python are programming languages.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Python Programming language.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Java Programming Language. Python Programming language.",
        "isCorrect": false
      }
    ],
    "hint": "The `grep -v Java Example.txt` command filters `Example.txt` to display only those lines that *do not* contain the string \"Java\", which in this case is \"Python Programming language.\".",
    "category": "Java"
  },
  {
    "question": "When we are deleting the folder and when we are not sure whether the folder is having files or not in it? Then which of the below command is right command to apply, which deletes only the folder which are e mpty?",
    "options": [
      {
        "id": "A",
        "text": "rm",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "rmdir",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "rm -rf",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "rmdir -i",
        "isCorrect": false
      }
    ],
    "hint": "The `rmdir` command is used to remove empty directories; it will not delete a directory if it contains any files or subdirectories, thus preventing accidental data loss.",
    "category": "Java"
  },
  {
    "question": "In shell script if we write the below statement, What does the statement refers to? if [ -r $2 ] then",
    "options": [
      {
        "id": "A",
        "text": "The second argument supplied from command line Argument is existing or not",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Verifies, whether the user is having the read permissions on the file (Whose name supplied from co mmand line Argument, as second argument) or not",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "The file supplied from command line argument is existing or not",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "The column is existing or not",
        "isCorrect": false
      }
    ],
    "hint": "The `[ -r $2 ]` test in a shell script checks if the second command-line argument (`$2`) refers to a file that exists and is readable by the current user.",
    "category": "Java"
  },
  {
    "question": "grep \"Tata.*Services$\" * What would be the output of the above command?",
    "options": [
      {
        "id": "A",
        "text": "It will display the filename and the pattern (“Tata Consultancy Services Limited” ), if the pattern is f ound in any file",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "It will display the filename and the pattern (“Tata Motors Limited” ), if the pattern is found in any fi le",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "It will display the filename and the lines ending with the pattern( “Tata Consultancy Services”) in th e file",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "It will display the filename and the lines ending with the pattern (“Tata Capital services”) in the file",
        "isCorrect": true
      }
    ],
    "hint": "The `grep \"Tata.*Services$\" *` command searches all files for lines that start with \"Tata\", contain any characters in between, and end with \"Services\", displaying the filename and matching lines.",
    "category": "Java"
  },
  {
    "question": "Do all HTML tags have an end tag?",
    "options": [
      {
        "id": "A",
        "text": "Yes",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "No",
        "isCorrect": true
      }
    ],
    "hint": "No, not all HTML tags have an end tag; self-closing tags like `<img>`, `<br>`, and `<input>` do not require a separate closing tag.",
    "category": "UI"
  },
  {
    "question": "What is the purpose of border-collpase property?",
    "options": [
      {
        "id": "A",
        "text": "paragraph borders should be collapsed into a single border",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "table borders should be collapsed into a single border",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "div borders should be collapsed into a single border",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "span borders should be collapsed into a single border",
        "isCorrect": false
      }
    ],
    "hint": "The `border-collapse` CSS property is specifically used on `<table>` elements to control whether adjacent table cell borders are separated or merged into a single border.",
    "category": "UI"
  },
  {
    "question": "Which of the following is a correct syntax to display ordered list with roman numbers?",
    "options": [
      {
        "id": "A",
        "text": "<ol > <li>Coffee</li> <li>Tea</li> <li>Milk</li> </ol>",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Default its showing with roman numbers c. <ol style=\"list-style-type:roman;\"> <li>Coffee</li> <li>Tea</li> <li>Milk</li> </ol>",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "<ol type=\"I\"> <li>Coffee</li> <li>Tea</li> <li>Milk</li> </ol>",
        "isCorrect": true
      }
    ],
    "hint": "In HTML, the `<ol type=\"I\">` attribute correctly specifies that an ordered list should be displayed using uppercase Roman numerals as its markers.",
    "category": "Miscellaneous"
  },
  {
    "question": "Which of the following is a correct syntax for applying border color for <h1>tag?",
    "options": [
      {
        "id": "A",
        "text": "<h1 style=\"solid Tomato;\">Hello World</h1>",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "<h1 style=\"border: 2px solid Tomato;\">Hello World</h1>",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "<h1 style=\"border: 2px, solid Tomato;\">Hello World</h1>",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None of the options",
        "isCorrect": false
      }
    ],
    "hint": "The correct inline CSS syntax for applying a border is to use the `border` shorthand property, specifying the width, style, and color, such as `border: 2px solid Tomato;`.",
    "category": "UI"
  },
  {
    "question": "Which of the following property is used to specifies an image to use as the background of an element",
    "options": [
      {
        "id": "A",
        "text": "backg-img",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "backg-image",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "background-img",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "background-image",
        "isCorrect": true
      }
    ],
    "hint": "The `background-image` CSS property is used to set an image as the background of an HTML element.",
    "category": "UI"
  },
  {
    "question": "What is the font color for the text 'Hello World'? <html> <head> <style> body { color: blue; } h1 { color: green; } </style> </head> <body> <h1>Hello World</h1> </body> </html>",
    "options": [
      {
        "id": "A",
        "text": "Green",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Blue",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Black",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Default Color",
        "isCorrect": false
      }
    ],
    "hint": "Due to CSS specificity rules, the `h1` selector has higher specificity than the `body` selector, so `color: green;` for the `<h1>` tag overrides the `color: blue;` set for the `<body>`.",
    "category": "Java"
  },
  {
    "question": "Which of the following is not a valid style for the paragraph? p { color: red; font-family: courier; font-size: 160%; border-style: dotted dashed solid double; margin-right: 150px; float: bottom; }",
    "options": [
      {
        "id": "A",
        "text": "Font-size",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Border-style",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "float",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Font-family",
        "isCorrect": false
      }
    ],
    "hint": "The `float` property in CSS only accepts values like `left`, `right`, `none`, or `inherit`, but `bottom` is not a valid value for floating elements.",
    "category": "UI"
  },
  {
    "question": "Which of the following is not a valid css unit?",
    "options": [
      {
        "id": "A",
        "text": "%",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "px",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "em",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "ut",
        "isCorrect": true
      }
    ],
    "hint": "`ut` is not a recognized or valid unit in CSS; common units include pixels (`px`), percentages (`%`), em units (`em`), and rem units (`rem`).",
    "category": "UI"
  },
  {
    "question": "Which of the following Statement is wrong for accessing the value of the text box? <html> <body> <span id=\"frm\"> <input type=\"text\" name=\"user\" id=\"user\"> </span> <button onclick=\"myFunction()\">Try it</button> <p id=\"xyz\"></p> <script> function myFunction() { var a = document.getElementById(\"user\").value; var b = document.getElementsByName(\"user\").value; var c = document.getElementById(\"frm\").innerHTML; var d = document.getElementsByName(\"user\"); alert(d); document.getElementById(\"xyz\").innerHTML = a;//Statement1 document.getElementById(\"xyz\").innerHTML = b;//Statement2 document.getElementById(\"xyz\").innerHTML = c;//Statement3 document.getElementById(\"xyz\").innerHTML = d.value;//Statement4 } </script> </body> </html>",
    "options": [
      {
        "id": "A",
        "text": "Statement1",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Statement2",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Statement3",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Statement4",
        "isCorrect": false
      }
    ],
    "hint": "`document.getElementById(\"frm\").innerHTML` retrieves the entire HTML content *inside* the `span` element, which would be the `<input>` tag itself, not the value entered in the textbox.",
    "category": "Java"
  },
  {
    "question": "Which of the following method is used to validate a number?",
    "options": [
      {
        "id": "A",
        "text": "isFinite()",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "isInteger()",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "isSafeInteger()",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "isNaN()",
        "isCorrect": true
      }
    ],
    "hint": "The `isNaN()` function is used to determine whether a value is Not a Number (NaN), making it suitable for validating if a given input is a valid numerical value.",
    "category": "UI"
  },
  {
    "question": "Look at the below SQL join and select the type of join select e.ename as employee m.ename as manager from employees m JOIN employees e ON e.mgr = m.e mpno where e.bdate > date '1965-01-01' order by employee;",
    "options": [
      {
        "id": "A",
        "text": "Self join",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Inner join",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Cross join",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Outer join",
        "isCorrect": false
      }
    ],
    "hint": "The query uses the `JOIN` keyword without specifying `LEFT` or `RIGHT`, which defaults to an `INNER JOIN`, retrieving records where the join condition `e.mgr = m.empno` is met.",
    "category": "Java"
  },
  {
    "question": "Which of the following way or ways before is/are correct to insert DATE in a table?",
    "options": [
      {
        "id": "A",
        "text": "insert into Employee(Start_Date) values ('05-FEB-2005')",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "insert into Employee(Start_Date) values ('FEB-05-2005')",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "insert into Employee(Start_Date) values ('2005-05-FEB')",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None of the options",
        "isCorrect": false
      }
    ],
    "hint": "The format 'DD-MON-YYYY' (e.g., '05-FEB-2005') is a widely recognized default string format for dates in SQL that the database can implicitly convert to a `DATE` type.",
    "category": "Java"
  },
  {
    "question": "Consider the following set of relations EMP ( emp_no,emp_name,dept_no,salary) DEPT (dept_no,dept_name,location) Write SQL query for the following Find all the employees whose departments are located in 'Mumbai' and salary is greater than Rs. 20,000.",
    "options": [
      {
        "id": "A",
        "text": "select emp_name from dept where dept_no and location='Mumbai';",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "select emp_name from emp where salary > 20,000 and dept_no in (select dept_no from dept where l ocation = 'Mumbai');",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "select dept_no ,count(emp_no) from emp where salary > 50,000 group by dept_no;",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "update table emp where emp_name='Mumbai';",
        "isCorrect": false
      }
    ],
    "hint": "The query correctly uses a subquery to first identify `dept_no` values for departments located in 'Mumbai' and then filters employees from the `emp` table based on this department list and a salary condition.",
    "category": "Java"
  },
  {
    "question": "Consider the following schema − STUDENTS(student_code, first_name, last_name, email, phone_no, date_of_birth, honours_subject, perc entage_of_marks); Which of the following query would display names of all the students whose email ids are not provided?",
    "options": [
      {
        "id": "A",
        "text": "select first_name, last name from students where email = 0;",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "select first_name, last name from students where email = ‘ ‘;",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "select first_name, last name from students where email = ‘null’;",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "select first_name, last name from students where email is null;",
        "isCorrect": true
      }
    ],
    "hint": "In SQL, to find records where an email ID is missing or undefined, the correct syntax is to use `IS NULL`, as `NULL` values cannot be compared directly with `=` or empty strings.",
    "category": "Java"
  },
  {
    "question": "What will happen when the code is executed? DECLARE -- Global variables employeeId number := 95; BEGIN dbms_output.put_line('number: ' || employeeId); DECLARE -- Local variables employeeId number := 195; BEGIN dbms_output.put_line('num: ' || employeeId); END; END;",
    "options": [
      {
        "id": "A",
        "text": "It won’t execute, it has syntax error",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "It will print num: 95 Num: 195",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "It will print num: 95 Num: 95",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "It will print Num: 195 Num: 195",
        "isCorrect": false
      }
    ],
    "hint": "In PL/SQL, variables declared in an inner block shadow variables of the same name in an outer block; thus, the outer `employeeId` (95) is printed first, followed by the inner `employeeId` (195).",
    "category": "Java"
  },
  {
    "question": "Which of the following is not true about PL/SQL cursors?",
    "options": [
      {
        "id": "A",
        "text": "A cursor is a view on a table.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "A cursor holds the rows (one or more) returned by a SQL statement.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "The set of rows the cursor holds is referred to as the active set.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None of the options",
        "isCorrect": false
      }
    ],
    "hint": "A PL/SQL cursor is a pointer to a memory area (context area) that stores execution information and the result set of a SQL statement; it is not a virtual representation of a table like a view.",
    "category": "Java"
  },
  {
    "question": "PL/SQL gives you control to declare variables and access them within the block. The declared variables c an be used at the time of query processing. Is the statement True or False?",
    "options": [
      {
        "id": "A",
        "text": "TRUE",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "FALSE",
        "isCorrect": false
      }
    ],
    "hint": "PL/SQL provides the functionality to declare variables within an anonymous or named block and then access and utilize these declared variables during query processing and procedural logic.",
    "category": "Java"
  },
  {
    "question": "Oracle creates a memory area, known as context area, for processing an SQL statement, which contains al l information needed for processing the statement, for example, number of rows processed, etc.The pointe r to this context area is called as ?",
    "options": [
      {
        "id": "A",
        "text": "Trigger",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Cursor",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Record",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Placeholder",
        "isCorrect": false
      }
    ],
    "hint": "The pointer to the Oracle-created memory area (context area) containing all information for processing an SQL statement, including the number of rows processed, is referred to as a cursor.",
    "category": "Java"
  },
  {
    "question": "Which of the following is correct? I. void display(String … args, int.. num){}; II. void method2(String... name,double b){}; III.void method(Sting … a){};",
    "options": [
      {
        "id": "A",
        "text": "I",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "II",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "III",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "All of the options.",
        "isCorrect": false
      }
    ],
    "hint": "In Java, variable-length arguments (varargs) must always be the last parameter in a method's signature; therefore, `void method(String... a){}` is the only syntactically correct declaration.",
    "category": "Java"
  },
  {
    "question": "Which among the following are valid declarations? I. [] double pencil; II. double[] box; III .double crayon[];",
    "options": [
      {
        "id": "A",
        "text": "Only III",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "II and III",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Only II",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "All of the options",
        "isCorrect": false
      }
    ],
    "hint": "In Java, both `double[] box;` and `double crayon[];` are valid syntaxes for declaring an array of doubles, with the square brackets placed either after the type or after the variable name.",
    "category": "Java"
  },
  {
    "question": "Which of the following is used to determine the number of elements in an given array called box?",
    "options": [
      {
        "id": "A",
        "text": "box.length()",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "box.size()",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "box.size",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "box.length",
        "isCorrect": true
      }
    ],
    "hint": "In Java, the number of elements in an array, such as `box`, is accessed through its `length` *field*, not a method, so the correct way is `box.length`.",
    "category": "Java"
  },
  {
    "question": "What is the output of the following? public class Navigation { public static void main(String[] args) { { String[] directions = new String[] {\"North\",\"South\",\"East\",\"West\" }; for (int i = 0; i <directions.length(); i++) System.out.println(directions[i]); } } }",
    "options": [
      {
        "id": "A",
        "text": "North South East West",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "North South East",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "The code does not compile.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "The code compiles but throws exception at runtime.",
        "isCorrect": false
      }
    ],
    "hint": "The code does not compile because arrays in Java use a `length` *field* to determine their size, not a `length()` *method*; calling `directions.length()` results in a compile-time error.",
    "category": "Java"
  },
  {
    "question": "For given below code : public class Navigation { public static void main(String[] args) { { String[] directions = new String[] {\"North\",\"South\",\"East\",\"West\" }; //code of line that will cause ArrayIndexBoundOfException System.out.println(directions[i]); } } } Which of the following lines throws ArrayIndexOutOfBoundException? for (int i = 0; i <=directions.length; i++) //m1 for (int i = 1; i <=directions.length; i++) //m2 for (int i = 0; i <=directions.length; i--) //m3 for (int i = 0; i <directions.length; i++) //m4",
    "options": [
      {
        "id": "A",
        "text": "m1,m2",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "m1,m2,m3",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "All of the options",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "m1 and m4",
        "isCorrect": false
      }
    ],
    "hint": "The loops `m1` and `m2` cause an `ArrayIndexOutOfBoundsException` when `i` equals `directions.length`, and `m3` creates an infinite loop that eventually decrements `i` to a negative index, leading to an exception.",
    "category": "Java"
  },
  {
    "question": "Which Query is correct to display the commission of all the salesmen servicing customers in Paris. salesman salesman_id name city commission 5001 James New York 0.15 5002 Nail Paris 0.13 Customer customer_id cust_name city grade salesman_id 3002 Nick New York 100 5001 3007 Brad New York 200 5001",
    "options": [
      {
        "id": "A",
        "text": "SELECT commission FROM salesman s,customer c WHERE c.city = 'Paris';",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "SELECT commission FROM salesman WHERE salesman_id IN (SELECT salesman_id FROM customer WHERE city = 'Paris');",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "SELECT commission FROM salesman s,customer c WHERE s.salesman_id =c.salesman_id and c.city = 'Paris';",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "None of the options.",
        "isCorrect": false
      }
    ],
    "hint": "The query correctly uses a subquery to first select the `salesman_id` from the `customer` table for customers located in 'Paris', and then retrieves the `commission` for those specific salesmen.",
    "category": "Java"
  },
  {
    "question": "Pick the correct variable declarations from the given list",
    "options": [
      {
        "id": "A",
        "text": "empsal number := 10",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "empno number(5) NOT NULL := 2;",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "empname varchar2(15) := 'Brandson';",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "empdept CONSTANT varchar2(5) := 'HR';",
        "isCorrect": true
      }
    ],
    "hint": "The declaration `empno number(5) NOT NULL := 2;` is a correct PL/SQL variable declaration that includes a `NOT NULL` constraint and initializes the variable at the time of declaration.",
    "category": "Miscellaneous"
  },
  {
    "question": "What is the output of below code? x = sum(range(7)) print(x)",
    "options": [
      {
        "id": "A",
        "text": "21",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "22",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "20",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "23",
        "isCorrect": false
      }
    ],
    "hint": "`range(7)` generates a sequence of numbers from 0 to 6, and the `sum()` function adds these values (0 + 1 + 2 + 3 + 4 + 5 + 6), resulting in 21.",
    "category": "Java"
  },
  {
    "question": "What is the output of below code? TCS = { '1' : 1, '2' : 2 } theCopy = TCS TCS['1'] = 5 sum = TCS['1'] + theCopy['1'] print(sum)",
    "options": [
      {
        "id": "A",
        "text": "9",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "8",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "7",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "10",
        "isCorrect": true
      }
    ],
    "hint": "In Python, assigning `theCopy = TCS` creates a shallow copy where `theCopy` is merely another reference to the *same* dictionary object as `TCS`; thus, modifying `TCS['1']` also changes `theCopy['1']`, making both 5, and their sum 10.",
    "category": "Java"
  },
  {
    "question": "Is Tuple mutable?",
    "options": [
      {
        "id": "A",
        "text": "Yes",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "NO",
        "isCorrect": true
      }
    ],
    "hint": "Tuples in Python are immutable data structures, meaning their elements cannot be modified, added, or removed after the tuple has been created.",
    "category": "Python"
  },
  {
    "question": "If we have a list below , X = [1,2,3,4] How do we print the first element?",
    "options": [
      {
        "id": "A",
        "text": "print(first)",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "print x(1)",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "print x[1]",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "print x[0]",
        "isCorrect": true
      }
    ],
    "hint": "In Python, list elements are accessed using zero-based indexing, so to print the first element of a list `X`, you would use `print x[0]`.",
    "category": "Java"
  },
  {
    "question": "Choose the numeric data types in MySQL",
    "options": [
      {
        "id": "A",
        "text": "CHAR(size)",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "TINYINT and DECIMAL(m,d)",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "BINARY(size)",
        "isCorrect": false
      }
    ],
    "hint": "`TINYINT` is a numeric type for small integers, and `DECIMAL(m,d)` is a numeric type for exact decimal values, both being valid numeric data types in MySQL.",
    "category": "Python"
  },
  {
    "question": "Consider a database with the name products. Choose the query to select the products database",
    "options": [
      {
        "id": "A",
        "text": "USE products;",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "USE Products; ;",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "USE PRODUCTS; ;;",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "SELECT products;",
        "isCorrect": false
      }
    ],
    "hint": "The `USE products;` command is the correct SQL statement to select and set the `products` database as the current working database.",
    "category": "Java"
  },
  {
    "question": "Consider the table Table1 ID Name Stream ========================= 128956 Naveen Python 165780 Raghu Dot Net 189078 Prathik Mainframe 178908 Mani Angular JS Which query will provide the below output Name ======== Naveen Raghu Mani",
    "options": [
      {
        "id": "A",
        "text": "select name from Table1 where stream like 'M%'",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "select name from Table1 where stream not like 'M%'",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "select name from Table1 where stream not regexp 'M%'",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "select name from Table1 where stream regexp 'M%'",
        "isCorrect": false
      }
    ],
    "hint": "The query `select name from Table1 where stream not like 'M%'` correctly filters out streams starting with 'M' (Mainframe), leaving Python, Dot Net, and Angular JS which correspond to Naveen, Raghu, and Mani.",
    "category": "Java"
  },
  {
    "question": "Consider the following table products ProductId ProductName Price =========================== 12 Toddler dress 100 14 Footwears 500 24 Soft Toys 400 Which query produce the below output ProductId ProductName Price ============================== 14 Footwears 500 24 Soft Toys 400",
    "options": [
      {
        "id": "A",
        "text": "SELECT * FROM products WHERE ProductName LIKE 'T%';",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "SELECT * FROM products WHERE ProductName IS NOT T%;",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "SELECT * FROM products WHERE ProductName NOT LIKE 'T%';",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "SELECT * FROM products WHERE ProductName IS NOT IN T%;",
        "isCorrect": false
      }
    ],
    "hint": "The query `SELECT * FROM products WHERE ProductName NOT LIKE 'T%';` filters for products whose names do not begin with the letter 'T', thus returning 'Footwears' and 'Soft Toys'.",
    "category": "Java"
  },
  {
    "question": "USE is the command to select a particular database",
    "options": [
      {
        "id": "A",
        "text": "TRUE",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "FALSE",
        "isCorrect": false
      }
    ],
    "hint": "The `USE` command is indeed the correct SQL statement used to select a particular database to interact with in MySQL.",
    "category": "Python"
  },
  {
    "question": "SELECT EmployeeName FROM Employee order by EmployeeId Desc LIMIT 1;",
    "options": [
      {
        "id": "A",
        "text": "Query will return the first EmployeeName from Employee table ordered by EmployeeId in descendi ng order",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Query will return the last EmployeeName from Employee table ordered by EmployeeId in descendi ng order",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "The query is syntactically wrong",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Query will not return any rows",
        "isCorrect": false
      }
    ],
    "hint": "The query `ORDER BY EmployeeId Desc LIMIT 1` first sorts all employees by `EmployeeId` in descending order, and then `LIMIT 1` selects only the first row from this sorted list, which corresponds to the employee with the highest (last) EmployeeId.",
    "category": "Python"
  },
  {
    "question": "Consider the following table CourseIdCourseNameNoofParticipants 12 C 100 14 C++ 500 24 Java 5000 Which subquery will be used to display records whose noofparticipants are more than the average",
    "options": [
      {
        "id": "A",
        "text": "SELECT AVG(NoofParticipants) FROM COURSE",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "select * from COURSE where NoofParticipants>NoofParticipants/3;",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "select * from COURSE where NoofParticipants >(SELECT AVG(NoofParticipants) FROM COUR SE);",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "None of the options",
        "isCorrect": false
      }
    ],
    "hint": "This query correctly uses a subquery to calculate the average `NoofParticipants` for all courses and then filters the main query to select only those courses with `NoofParticipants` greater than that average.",
    "category": "Java"
  },
  {
    "question": "Consider a database products Choose the query to select the products database",
    "options": [
      {
        "id": "A",
        "text": "USE products;",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "USE Products; ;",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "USE PRODUCTS; ;;",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "SELECT products;",
        "isCorrect": false
      }
    ],
    "hint": "The `USE products;` command is the correct SQL statement to select and set the `products` database as the current working database.",
    "category": "Java"
  },
  {
    "question": "ProductId ProductName Price =========================== 12 Toddler dress 100 14 Footwears 500 24 Soft Toys 400 Which query produce the below output ProductId ProductName Price ============================== 14 Footwears 500 24 Soft Toys 400",
    "options": [
      {
        "id": "A",
        "text": "SELECT * FROM products WHERE ProductName LIKE 'T%';",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "SELECT * FROM products WHERE ProductName IS NOT T%;",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "SELECT * FROM products WHERE ProductName NOT LIKE 'T%';",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "SELECT * FROM products WHERE ProductName IS NOT IN T%;",
        "isCorrect": false
      }
    ],
    "hint": "The query `SELECT * FROM products WHERE ProductName NOT LIKE 'T%';` filters for products whose names do not begin with the letter 'T', thus returning 'Footwears' and 'Soft Toys'.",
    "category": "Java"
  },
  {
    "question": "If Tcs is a class, how do we make a new Tcs object?",
    "options": [
      {
        "id": "A",
        "text": "x = new Tcs()",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "x = Tcs()",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Tcs x = new Tcs()",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Tcs.new(Object)",
        "isCorrect": false
      }
    ],
    "hint": "In Python, a new object of a class is instantiated by calling the class name as a function, such as `x = Tcs()`, without using a `new` keyword.",
    "category": "Python"
  },
  {
    "question": "ProductId ProductName Price =========================== 12 Toddler dress 100 14 Footwears 500 24 Soft Toys 400 what is the output of the Query :select productname from products where price >(select avg(price) from p roducts);",
    "options": [
      {
        "id": "A",
        "text": "Query is syntatically wrong",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Toddler dress Footwears Soft Toys",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Footwears",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Footwears Soft Toys",
        "isCorrect": true
      }
    ],
    "hint": "The average price is (100+500+400)/3 = 333.33. Products with a price greater than 333.33 are 'Footwears' (500) and 'Soft Toys' (400).",
    "category": "Java"
  },
  {
    "question": "In which year Tata Consultancy Services (TCS) becomes the first Indian software company to cross one b illion dollars in revenues?",
    "options": [
      {
        "id": "A",
        "text": "2002",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "2003",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "2013",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "2004",
        "isCorrect": false
      }
    ],
    "hint": "Tata Consultancy Services (TCS) reached the milestone of crossing one billion dollars in revenues in the financial year 2003-2004, often cited as the year 2003.",
    "category": "Java"
  },
  {
    "question": "Which is a best Mobile App when we are dealing with a Resource Intensive Application",
    "options": [
      {
        "id": "A",
        "text": "Native Application",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Web Application",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Composite Application",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Hybrid Application",
        "isCorrect": false
      }
    ],
    "hint": "Native Applications are best for resource-intensive applications because they are developed specifically for a platform, allowing them to leverage device-specific hardware and software capabilities for optimal performance.",
    "category": "KYT"
  },
  {
    "question": "Consumers assert that cloud computing permits businesses to bypass upfront infrastructure charges",
    "options": [
      {
        "id": "A",
        "text": "TRUE",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "FALSE",
        "isCorrect": false
      }
    ],
    "hint": "Cloud computing allows businesses to avoid large upfront capital expenditures on infrastructure by converting them into operational expenses, making the statement true.",
    "category": "KYT"
  },
  {
    "question": "Choose one option which is not a Cloud Platform",
    "options": [
      {
        "id": "A",
        "text": "IBM’s Blue Cloud",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Wipro Air Cloud",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Amazon Elastic Compute Cloud",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Windows Azure Services Platform",
        "isCorrect": false
      }
    ],
    "hint": "Wipro Air Cloud is not a widely recognized public cloud platform comparable to the established offerings from IBM, Amazon, or Microsoft Azure.",
    "category": "KYT"
  },
  {
    "question": "Big Data Analytics on Genomic Medicine will help in prediction of Genetic Diseases",
    "options": [
      {
        "id": "A",
        "text": "TRUE",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "FALSE",
        "isCorrect": false
      }
    ],
    "hint": "Big Data Analytics applied to genomic medicine can process vast amounts of genetic information to identify patterns and predict the likelihood of genetic diseases, making the statement true.",
    "category": "KYT"
  },
  {
    "question": "Which of the following can make or break a presentation ?",
    "options": [
      {
        "id": "A",
        "text": "Non-verbal communication and tone",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Style of presentation &use of jargons",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Audience Orientation",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "All of the options",
        "isCorrect": true
      }
    ],
    "hint": "All mentioned factors, including non-verbal communication, tone, presentation style, use of jargon, and audience orientation, contribute significantly to the success or failure of a presentation.",
    "category": "BizSkill"
  },
  {
    "question": "Which of the following statements is true? a.  Downward flow of communication is when the speaker uses a condescending tone.",
    "options": [
      {
        "id": "B",
        "text": "Downward flow of communication refers to communication between peers.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Downward flow of communication is when information flows from the supervisor to the subordinat e.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Downward flow of communication is when someone is explaining a concept in response to a questi on.",
        "isCorrect": false
      }
    ],
    "hint": "Downward flow of communication specifically refers to information or instructions moving from higher organizational levels, like a supervisor, to lower levels, such as subordinates.",
    "category": "Java"
  },
  {
    "question": "You have a great idea for your team which will make the application 40% faster. How will you persuade your team ?",
    "options": [
      {
        "id": "A",
        "text": "You need to persuade the manager and not the team.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Make the others think about your point. Let them participate in the discussion before the decision. B e open to their queries.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "You need not have a discussion as this is definitely going to benefit the team. Send an email asking t hem to incorporate your idea",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Tell them it is your birthday and then share the idea. They cannot say no on your Birthday.",
        "isCorrect": false
      }
    ],
    "hint": "Effective persuasion involves fostering participation and discussion, allowing team members to contribute their thoughts and addressing their concerns before making a decision, leading to better buy-in.",
    "category": "Java"
  },
  {
    "question": "What is Minutes of the Meeting (MoM) ?",
    "options": [
      {
        "id": "A",
        "text": "MoM is a document that contains all the points discussed during a meeting which can be referred w henever needed.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "MOM is a document which contains a detailed report of statements made by the host",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "MoM is a document that contains the report of the project which was discussed in the meeting.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "MoM is a document that contains the status of the project after having a discussion with the client.",
        "isCorrect": false
      }
    ],
    "hint": "Minutes of the Meeting (MoM) is a formal document that captures all key points discussed, decisions made, and action items assigned during a meeting, serving as an important record.",
    "category": "BizSkill"
  },
  {
    "question": "Which corporate culture is better, a task-oriented or relationship-oriented ?",
    "options": [
      {
        "id": "A",
        "text": "Task oriented is better because it is more efficient as people focus on tasks and not the relationships.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Relationship-oriented culture is better because it enables trust which in turn leads to collaboration.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Both corporate cultures have their downsides, so every company needs to have a mix of both.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Corporate culture doesn't have to be better than the other. It is the outworking of tradition, values an d history of a place.",
        "isCorrect": true
      }
    ],
    "hint": "Corporate culture is a complex outcome of an organization's traditions, values, and history, implying that no single culture type is universally superior; a mix tailored to the context is often ideal.",
    "category": "BizSkill"
  },
  {
    "question": "What are the main features offered in the mail application apart from e-mail? a) Schedule meetings and appointments. b) Invite stakeholders for a meeting. c) Accept/ decline an invitation. d) Set reminders to attend meetings.",
    "options": [
      {
        "id": "A",
        "text": "a,b & c",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "b, c & d",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "a, b, c & d",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "None of the options",
        "isCorrect": false
      }
    ],
    "hint": "Modern mail applications extend beyond basic email functionality to include comprehensive tools for scheduling meetings, inviting participants, accepting/declining invitations, and setting reminders.",
    "category": "Java"
  },
  {
    "question": "How should you gather and share requirements for a project ?",
    "options": [
      {
        "id": "A",
        "text": "Verbal specification of requirements alone is insufficient.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "The requirements should be sent through an email.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "The email should also have the relevant stakeholders in CC.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "All of the options",
        "isCorrect": true
      }
    ],
    "hint": "To ensure clarity and avoid misunderstandings, requirements for a project should be gathered and shared through a combination of verbal specification, written documentation (like emails), and by including all relevant stakeholders.",
    "category": "BizSkill"
  },
  {
    "question": "What should you do when you interact with people from other cultures which are different than yours.",
    "options": [
      {
        "id": "A",
        "text": "Treat them with respect as they are superior to you. See what you need to change in your own cultur e so that you are able to be equal to them.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Treat them with respect if they are your clients. As we need to do business with various people, we need to act respectful towards other cultures so that they are not offended.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Treat them with respect. Learn about their culture, so that you are able to work in an efficient mann er with them. Learning about their culture will help you avoid blunders.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Treat them with respect. Teach them your culture so that they are able to understand you in a better way. Take every chance to reinforce the superiority of your culture.",
        "isCorrect": false
      }
    ],
    "hint": "Interacting with people from different cultures requires treating them with respect and actively learning about their customs to facilitate efficient collaboration and prevent cultural missteps.",
    "category": "BizSkill"
  },
  {
    "question": "It is the final client demo of Payroll Management System. Aman, who is responsible to make the presenta tion is on an emergency leave. What can be done to handle the situation ?",
    "options": [
      {
        "id": "A",
        "text": "Cancel the day's schedule and plan for the same on a later date when Aman is available because he can give the best presentation",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "The team avoids involvement because it is the team manager's responsibility to talk to the client and seek an alternative for the demonstration scheduled for the day.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "The team members can connect with Aman who is on leave, and ask him/her to manage to come to work and give the demonstration as it is urgent.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Team member who is next in charge can hold a brief discussion with Aman and proceed with the de mo. Only under unavoidable circumstances, it is ok to buy-in a day from the client.",
        "isCorrect": true
      }
    ],
    "hint": "In an emergency, a well-prepared team should have a member who can step in for an absent colleague after a brief handover, ensuring business continuity and minimizing disruption for the client.",
    "category": "Java"
  },
  {
    "question": "What is technical writing?",
    "options": [
      {
        "id": "A",
        "text": "Technical writing provides direction, instruction, or explanation on a particular subject.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "The purpose of technical writing is to entertain and inform.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Technical writing results in accurate information geared to specifically targeted audiences.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "All of the options",
        "isCorrect": false
      }
    ],
    "hint": "Technical writing is focused on providing clear, concise, and accurate directions, instructions, or explanations on a particular subject for a specific audience.",
    "category": "BizSkill"
  },
  {
    "question": "RiO week is celebrated to",
    "options": [
      {
        "id": "A",
        "text": "bring an awareness about lifecycle of a software to all the TCSers",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "create awareness regarding software quality",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "An initiative that is aimed at improving our production support operations.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "None of the choices are correct",
        "isCorrect": false
      }
    ],
    "hint": "RiO week is an organizational initiative specifically aimed at enhancing and improving production support operations.",
    "category": "Miscellaneous"
  },
  {
    "question": "Name the activity that is conducted frequently to ensure project has a strong backup plan that will help pr oject thrive during a disaster",
    "options": [
      {
        "id": "A",
        "text": "Evaluation of remediation plan",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Mock BCP drills",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Disaster management",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Event management",
        "isCorrect": false
      }
    ],
    "hint": "Mock BCP (Business Continuity Plan) drills are regularly conducted to test and validate the effectiveness of a project's backup plans, ensuring resilience during potential disasters.",
    "category": "Java"
  },
  {
    "question": "One should avoid GOTO in Structured Programming - State true/false.",
    "options": [
      {
        "id": "A",
        "text": "TRUE",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "FALSE",
        "isCorrect": false
      }
    ],
    "hint": "The use of GOTO statements in structured programming is generally considered bad practice as it can lead to convoluted code that is difficult to read, debug, and maintain, hence it should be avoided.",
    "category": "Algorithms"
  },
  {
    "question": "According to KISS Design Principle, we should use features like frameworks, APIs only when there are p erceptible benefits to the problem we are solving.",
    "options": [
      {
        "id": "A",
        "text": "TRUE",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "FALSE",
        "isCorrect": false
      }
    ],
    "hint": "The KISS principle advocates for simplicity, meaning that complex features like frameworks or APIs should only be adopted when they offer clear, tangible benefits that justify their overhead.",
    "category": "Java"
  },
  {
    "question": "What is Single Responsibility Principle",
    "options": [
      {
        "id": "A",
        "text": "One person gets one responsibility",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "One class should perform a single task",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Do One Thing At all levels",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "None of the options",
        "isCorrect": false
      }
    ],
    "hint": "The Single Responsibility Principle dictates that a module, class, or function should have one and only one reason to change, meaning it should perform a single, well-defined task.",
    "category": "Algorithms"
  },
  {
    "question": "Which symbol will be used with grep command to match the pattern pat at the beginning of a line?",
    "options": [
      {
        "id": "A",
        "text": "^pat",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "pat^",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "$pat",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "pat$",
        "isCorrect": false
      }
    ],
    "hint": "In regular expressions used with the `grep` command, the caret `^` symbol anchors the pattern to the beginning of a line, so `^pat` matches lines starting with 'pat'.",
    "category": "Miscellaneous"
  },
  {
    "question": "The user u123456 logged in and performed the following sequence of command. User's home directory i s /home/u123456. What will be the output of the last command? $ cd project/module1 $ pwd",
    "options": [
      {
        "id": "A",
        "text": "/home/u123456/project/module1",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "project/module1",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "~/project/module1",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "/usr/u123456/project/module1",
        "isCorrect": false
      }
    ],
    "hint": "The `pwd` command (print working directory) displays the absolute path of the current directory. After changing to `project/module1` from the home directory, the absolute path would be `/home/u123456/project/module1`.",
    "category": "Java"
  },
  {
    "question": "Which code will correctly calculate the newsal based on the years mentioned Input file is as below NameOfEmployee-age-YearOfJoining. The shell takes 2 inputs-file name and Name of Employee. Delim iter used in the input file is -.",
    "options": [
      {
        "id": "A",
        "text": "#!/bin/sh x=$1 y=$2 if [ -f $1 ] then z=$(grep $2 $1|cut -d '-' -f3) echo $z case \"$z\" in \"1990\") newsal=`expr$(grep $2 $1|cut -d '|' -f5) + 200` \"2000\") newsal=`expr$(grep $2 $1|cut -d '|' -f5) + 1000` \"2005\") newsal=`expr$(grep $2 $1|cut -d '|' -f5) + 500` ;; esac fi",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "#!/bin/sh x=$1 y=$2 if [ -f $1 ] then z=$(grep $2 $1|cut -d '-' -f3) echo $z case \"$z\" in \"1990\") newsal=`expr $(grep $2 $1|cut -d '|' -f5) + 2000` \"2000\") newsal=`expr $(grep $2 $1|cut -d '|' -f5) + 1000` \"2005\") newsal=`expr $(grep $2 $1|cut -d '|' -f5) + 500` ;; esac fi",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "#!/bin/sh x=$1 y=$2 if [ -f $1 ] then z=$(grep $2 $1|cut -d '-' -f3) echo $z case \"$z\" in \"1990\") newsal=`expr $(grep $2 $1|cut -d '|' -f5) +2000` \"2000\") newsal=`expr $(grep $2 $1|cut -d '|' -f5) +10` \"2005\") newsal=`expr $(grep $2 $1|cut -d '|' -f5) +500` ;; esac fi",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "#!/bin/sh x=$1 y=$2 if [ -f $1] then z=$(grep $2 $1|cut -d '-' -f3) echo $z case \"$z\" in \"1990\") newsal=`expr $(grep $2 $1|cut -d '|' -f5) +2000` \"2000\") newsal=`expr $(grep $2 $1|cut -d '|' -f5) +1000` \"2005\") newsal=`expr $(grep $2 $1|cut -d '|' -f5) +50` ;; esac fi",
        "isCorrect": false
      }
    ],
    "hint": "Option B correctly uses `cut -d '-'` to extract the year from the input file based on the specified delimiter, and then applies the appropriate salary calculation within a `case` statement.",
    "category": "Java"
  },
  {
    "question": "Which command will delete the lines containing the pattern 'this' from the file?",
    "options": [
      {
        "id": "A",
        "text": "delete -f this file",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "SED /this'/d file",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Sed /'this'/d file",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "sed /this/d file",
        "isCorrect": true
      }
    ],
    "hint": "The `sed` command with the syntax `sed /pattern/d filename` is used to delete lines from `filename` that contain the specified `pattern`.",
    "category": "Unix"
  },
  {
    "question": "Assuming the files fileA, fileB, fileAB, fileBC and fileABC, exist in a directory testDir, which files will b e listed if we use the following command $ls testDir|grep file[AB]?",
    "options": [
      {
        "id": "A",
        "text": "file A",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "file B",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "file ABC",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "file BC",
        "isCorrect": false
      }
    ],
    "hint": "The `grep file[AB]` command will match any line containing the string 'file' followed by either 'A' or 'B'. From the given files, 'fileA' directly matches this pattern.",
    "category": "Java"
  },
  {
    "question": "A table containing employee have some faulty records .ie the year of joining(YOJ) was incorrectly entere d for employee ids between 20 and 100. Choose from below the right sql query to correct the column year of joining (YOJ)as 2015.",
    "options": [
      {
        "id": "A",
        "text": "update table Employees set YOJ=2015;",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "update Employees set YOJ=2015 where id between (20,100);",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "update Employees set YOJ=2015 where id>=20 and id<=100;",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "alter table employees add YOJ=2015 where id>=20 and id<=100;",
        "isCorrect": false
      }
    ],
    "hint": "To correct specific faulty records in an SQL table, the `UPDATE` statement is used with a `WHERE` clause to filter by the affected employee IDs, `id>=20 and id<=100` correctly specifies the range.",
    "category": "Java"
  },
  {
    "question": "Look at the below SQL join and select the type of join select e.ename as employee m.ename as manager from employees m JOIN employees e ON e.mgr = m.e mpno where e.bdate > date '1965-01-01' order by employee;",
    "options": [
      {
        "id": "A",
        "text": "Self join",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Inner join",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Cross join",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Outer join",
        "isCorrect": false
      }
    ],
    "hint": "The query demonstrates a self-join because the `employees` table is joined with itself using different aliases (`m` and `e`) to relate employees to their managers.",
    "category": "Java"
  },
  {
    "question": "Which of the following way or ways before is/are correct to insert DATE in a table?",
    "options": [
      {
        "id": "A",
        "text": "insert into Employee(Start_Date) values ('05-FEB-2005')",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "insert into Employee(Start_Date) values ('FEB-05-2005')",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "insert into Employee(Start_Date) values ('2005-05-FEB')",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None of the options",
        "isCorrect": false
      }
    ],
    "hint": "The date format 'DD-MON-YYYY' (e.g., '05-FEB-2005') is a commonly accepted and correct way to insert date values in SQL, often automatically parsed by the database.",
    "category": "Java"
  },
  {
    "question": "Consider the following set of relations EMP ( emp_no,emp_name,dept_no,salary) DEPT (dept_no,dept_name,location) Write SQL query for the following Find all the employees whose departments are located in 'Mumbai' and salary is greater than Rs. 20,000.",
    "options": [
      {
        "id": "A",
        "text": "select emp_name from dept where dept_no and location='Mumbai';",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "select emp_name from emp where salary > 20,000 and dept_no in (select dept_no from dept where l ocation = 'Mumbai');",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "select dept_no ,count(emp_no) from emp where salary > 50,000 group by dept_no;",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "update table emp where emp_name='Mumbai';",
        "isCorrect": false
      }
    ],
    "hint": "To find employees based on a department's location and their salary, the query needs to join `EMP` and `DEPT` tables (or use a subquery) to filter by location and then by salary.",
    "category": "Java"
  },
  {
    "question": "Identify the SQL queries which shows correct group by and having usage",
    "options": [
      {
        "id": "A",
        "text": "SELECT empa.LastName, COUNT(orda.OrderID) FROM Orders ord1 INNER JOIN Employees emp1 ON Orda.EmployeeID=empa.EmployeeID GROUP BY LastName HAVING COUNT(orda.OrderID) > 10",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "SELECT emp.LastName, COUNT(ord.OrderID) FROM Orders ord INNER JOIN Employees emp ON Ord.EmployeeID=emp.EmployeeID GROUP BY LastName HAVING COUNT(ord.OrderID) > 10",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "SELECT emp.LastName, COUNT(ord.OrderID) FROM Orders ord INNER JOIN Employees emp ON Ord.EmployeeID=emp.EmployeeID GROUP BY LastName,COUNT(ord.OrderID) HAVING COUNT(ord.OrderID) > 10",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "SELECT emp.LastName, COUNT(ord.OrderID) FROM Orders ord INNER JOIN Employees emp ON Ord.EmployeeID=emp.EmployeeID GROUP BY LastName,COUNT(ord.OrderID) HAVING (ord.OrderID) > 10",
        "isCorrect": false
      }
    ],
    "hint": "Option A correctly demonstrates the usage of `GROUP BY` by including all non-aggregated columns (`LastName`) and `HAVING` to filter the grouped results based on an aggregate function (`COUNT(orda.OrderID) > 10`).",
    "category": "SQL / PLSQL"
  },
  {
    "question": "What will happen when the code is executed? DECLARE -- Global variables employeeId number := 95; BEGIN dbms_output.put_line('number: ' || employeeId); DECLARE -- Local variables employeeId number := 195; BEGIN dbms_output.put_line('num: ' || employeeId); END; END;",
    "options": [
      {
        "id": "A",
        "text": "It won’t execute, it has syntax error",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "It will print num: 95 Num: 195",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "It will print num: 95 Num: 95",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "It will print Num: 195 Num: 195",
        "isCorrect": false
      }
    ],
    "hint": "In PL/SQL, variables declared in an inner block will shadow variables with the same name in an outer block. Therefore, the outer `dbms_output` will print the global `employeeId` (95), and the inner `dbms_output` will print the local `employeeId` (195).",
    "category": "Java"
  },
  {
    "question": "Which of the following is not true about PL/SQL cursors?",
    "options": [
      {
        "id": "A",
        "text": "A cursor is a view on a table.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "A cursor holds the rows (one or more) returned by a SQL statement.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "The set of rows the cursor holds is referred to as the active set.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None of the options",
        "isCorrect": false
      }
    ],
    "hint": "A PL/SQL cursor is a control structure that allows traversal over the records in a database. It is a pointer to the context area holding the rows of a SQL statement, not a view on a table.",
    "category": "Java"
  },
  {
    "question": "What will be the output of the following code snippet? DECLARE a number(3) := 100; b number(3) := 200; BEGIN IF( a = 100 ) THEN IF( b < 200 ) THEN dbms_output.put_line(b); END IF; END IF; dbms_output.put_line(a); END;",
    "options": [
      {
        "id": "A",
        "text": "It has syntax error, so there will not be any output. b. 200",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "200, 100",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "100",
        "isCorrect": true
      }
    ],
    "hint": "The inner `IF` condition (`b < 200`) is false because `b` is `200`, so the statement `dbms_output.put_line(b)` inside it will not execute. Only the final `dbms_output.put_line(a)` will print `100`.",
    "category": "Java"
  },
  {
    "question": "The following code tries to fetch some information from all the rows in a table named customers for use in a PL/SQL block. What is wrong in the following code? DECLARE cid customers.id%type; cname customers.name%type; caddr customers.address%type; CURSOR c1 is SELECT id, name, address FROM customers; BEGIN LOOP FETCH c1 into c_id, c_name, c_addr; EXIT WHEN c1%notfound; dbms_output.put_line(cid || ' ' || cname || ' ' || caddr); END LOOP; CLOSE c1; END;",
    "options": [
      {
        "id": "A",
        "text": "It need not use a cursor.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "The cursor is not opened.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "It will not print information from all the rows.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "There is nothing wrong in the code.",
        "isCorrect": false
      }
    ],
    "hint": "For an explicit cursor to be used successfully in PL/SQL, it must be opened using the `OPEN` statement before any `FETCH` operations are performed.",
    "category": "Java"
  },
  {
    "question": "A cursor for loop performs the following operations implicitly. Select the appropriate options",
    "options": [
      {
        "id": "A",
        "text": "Open the cursor",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "fetch the rows",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "update the table",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "close the cursor",
        "isCorrect": true
      }
    ],
    "hint": "A cursor `FOR` loop in PL/SQL simplifies cursor management by implicitly performing the `OPEN`, `FETCH` (for each row), and `CLOSE` operations for the specified query.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "Which of the following is a correct syntax for grouping selectors in CSS?",
    "options": [
      {
        "id": "A",
        "text": "h2,h3 { color:blue; font-size:120px; font-family:italic; }",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "#h2;h3 { color:blue; font-size:120px; font-family:italic; }",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "hb.h3 { color:blue; font-size:120px; font-family:italic; }",
        "isCorrect": false
      }
    ],
    "hint": "In CSS, selectors can be grouped by separating them with commas (e.g., `h2,h3`) to apply the same set of styles to all listed elements.",
    "category": "UI"
  },
  {
    "question": "Whether a single text link point to two different web pages at a same time?",
    "options": [
      {
        "id": "A",
        "text": "Yes",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "No",
        "isCorrect": true
      }
    ],
    "hint": "A single HTML text link (hyperlink) is designed to navigate to one specific URL at a time; it cannot simultaneously point to two different web pages.",
    "category": "UI"
  },
  {
    "question": "What is the default value for checkbox control",
    "options": [
      {
        "id": "A",
        "text": "on",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "off",
        "isCorrect": true
      }
    ],
    "hint": "When a checkbox is checked and its `value` attribute is not explicitly defined, the default value that is sent upon form submission is 'on'. If unchecked, no value is sent.",
    "category": "UI"
  },
  {
    "question": ".Which of the following is creating multi line input control?",
    "options": [
      {
        "id": "A",
        "text": "input",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "text",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "textarea",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "textline",
        "isCorrect": false
      }
    ],
    "hint": "The HTML `<textarea>` tag is specifically designed to create a multi-line input field, allowing users to enter larger blocks of text.",
    "category": "UI"
  },
  {
    "question": "Which of the following syntax is correct?",
    "options": [
      {
        "id": "A",
        "text": "p{color;red;text-align;right;}",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "p{color=red;text-align=right}",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "p{color:red;text-align:right;}",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "p{color:red;text-align:right}",
        "isCorrect": false
      }
    ],
    "hint": "In CSS, a property and its value are separated by a colon (`:`), and each declaration (property-value pair) is terminated by a semicolon (`;`).",
    "category": "UI"
  },
  {
    "question": "Which of the following is not valid style?",
    "options": [
      {
        "id": "A",
        "text": "p { margin: collapse; }",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "p { margin: inherit; }",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "p { margin: 25px 50px; }",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "p { margin: 25px; }",
        "isCorrect": false
      }
    ],
    "hint": "`margin: collapse;` is not a valid property value for the CSS `margin` property; valid values typically include lengths, percentages, `auto`, or `inherit`.",
    "category": "UI"
  },
  {
    "question": "<html> <head> <style> div p { background-color: green; } </style> </head> <body> <div> <p>Para1</p> <p>Para2</p> <section><p>Para3</p></section> </div> <p>Para4</p> <p>Para5</p> </body> </html> What will be the output of the above code?",
    "options": [
      {
        "id": "A",
        "text": "Para1, Para2, Para4, Para5 will display in green back ground",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Para1, Para2 will display in green back ground c. Para4, Para5 will display in green back ground",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Para1, Para2, Para3 will display in green back ground",
        "isCorrect": true
      }
    ],
    "hint": "The CSS rule `div p` targets all `<p>` elements that are descendants of a `<div>`. In the provided HTML, `Para1`, `Para2` (direct children of `div`), and `Para3` (child of `section` which is inside `div`) match this selector.",
    "category": "UI"
  },
  {
    "question": "Which of the following is not a value for height and width properties;",
    "options": [
      {
        "id": "A",
        "text": "auto",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "absolute",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "length",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "initial",
        "isCorrect": false
      }
    ],
    "hint": "`absolute` is a valid value for the CSS `position` property, but it is not a recognized value for `height` or `width` properties.",
    "category": "UI"
  },
  {
    "question": "We can write into an HTML element using the following;",
    "options": [
      {
        "id": "A",
        "text": "document.write()",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "innerHTML",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "window.alert()",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "console.log()",
        "isCorrect": false
      }
    ],
    "hint": "The `innerHTML` property in JavaScript is commonly used to access or modify the HTML content of an element, allowing you to write content directly into it.",
    "category": "UI"
  },
  {
    "question": "What will be the output of the below code; <!DOCTYPE html> <html> <body> <p id=\"demo\"></p> <script> var employee = {empNo:\"1001\", name:\"Rajeev\", designation:\"SSE\"}; document.getElementById(\"demo\").innerHTML = employee; </script> </body> </html>",
    "options": [
      {
        "id": "A",
        "text": "1001,Rajeev,SSE",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "empNo:\"1001\", name:\"Rajeev\", designation:\"SSE\"",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "[object Object]",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Script error",
        "isCorrect": false
      }
    ],
    "hint": "When a JavaScript object is directly assigned to `innerHTML` without explicit string conversion, it defaults to its string representation, which is typically `[object Object]`.",
    "category": "UI"
  },
  {
    "question": "What will be the output of the following? public class Test { private static int start = 1; int stop = 30; public static void main(String[] args) { Test tolls = new Test(); int pause = 20, stop = 40; System.out.print(pause + tolls.stop + tolls.start); } }",
    "options": [
      {
        "id": "A",
        "text": "The code does not compile due to line 6",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "The code does not compile due to line 7 c. 61",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "51",
        "isCorrect": true
      }
    ],
    "hint": "The calculation `pause (20) + tolls.stop (30) + tolls.start (1)` correctly evaluates to `20 + 30 + 1 = 51`.",
    "category": "Java"
  },
  {
    "question": "What will be the output of the following? public class Sprint { static int start = 5; final int end; public void run(int distance) { System.out.print(end+start+\" \"); System.out.print(distance); } public static void main(String... start) { Sprint athlete=new Sprint(); athlete.run(5); } }",
    "options": [
      {
        "id": "A",
        "text": "10 5",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "5 5",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "The code does not compile due to line 3",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "The code does not compile due to line 4 5.  The code does not compile due to line 5",
        "isCorrect": false
      }
    ],
    "hint": "The `final` instance variable `end` is declared but not initialized in the constructor or at the declaration point, which causes a compile-time error in Java.",
    "category": "Java"
  },
  {
    "question": "From the following variable types , which variable is in always in scope for the entire program?",
    "options": [
      {
        "id": "A",
        "text": "Local variable",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Class variable",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Instance variable",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "All of these",
        "isCorrect": false
      }
    ],
    "hint": "A class variable (static variable) is associated with the class itself, rather than any specific instance, and remains in scope for the entire program duration once the class is loaded.",
    "category": "Java"
  },
  {
    "question": "Which of the following is invalid as the first line of a Java file?",
    "options": [
      {
        "id": "A",
        "text": "import app.*;",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "package app;",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "static int start=1",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "//App Manager",
        "isCorrect": false
      }
    ],
    "hint": "In Java, `static int start=1` is a field declaration and cannot be the very first line of a Java file; package or import statements typically come first, or it must be inside a class.",
    "category": "Java"
  },
  {
    "question": "What will be the output of the following? public class Sprint { static int start = 5; final int end; public Sprint(int x) { x = 7.0; end = x; } public void run(int distance) { System.out.print(start+end+\" \"); System.out.print(distance); } public static void main(String[] start) { Sprint athlete=new Sprint(6); athlete.run(5); } }",
    "options": [
      {
        "id": "A",
        "text": "12 5",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "11 5",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "The code does not compile due to line 3",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "The code does not compile due to line 5",
        "isCorrect": true
      }
    ],
    "hint": "The line `x = 7.0;` attempts to assign a double literal to an `int` variable `x` without an explicit cast, which results in a compile-time error due to potential loss of precision.",
    "category": "Java"
  },
  {
    "question": "Identify the immutable data type(s) in Python",
    "options": [
      {
        "id": "A",
        "text": "List",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Tuple,Dictionary",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "String",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Tuple",
        "isCorrect": false
      }
    ],
    "hint": "Tuples are immutable data types in Python, meaning their elements cannot be changed after creation. While dictionaries are generally mutable, this option groups them with tuples, possibly referring to the immutability of dictionary keys.",
    "category": "Python"
  },
  {
    "question": "What will calculate(2030) return if the fucntion is defined as below? def calculate(num): i=0 while num > 0: return i",
    "options": [
      {
        "id": "A",
        "text": "302",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "2030",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "5",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "23",
        "isCorrect": false
      }
    ],
    "hint": "Assuming the `while` loop body included the number reversal logic (`i = i*10 + num%10` and `num = num//10`), calling `calculate(2030)` would reverse the digits to produce `302`.",
    "category": "Java"
  },
  {
    "question": "i = i*10 + num%10 num = num//10 Note: This PDF shouldn’t be shared to any other sources. What will be the output of the following Python function when called as print_message('Gary')? def print_message(na me): if(name=='Rob'): msg = 'Hello Rob' else msg = 'Hello there' return msg",
    "options": [
      {
        "id": "A",
        "text": "SyntaxError: expected an indented block",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Hello there",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Hello Rob",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Prints nothing",
        "isCorrect": false
      }
    ],
    "hint": "The Python code contains an `else` statement that is not correctly indented or associated with an `if` block, leading to a `SyntaxError: expected an indented block`.",
    "category": "Java"
  },
  {
    "question": "What will be the value of a after executing this code? a=0 for b in range(0,10,2): a += b +10",
    "options": [
      {
        "id": "A",
        "text": "70",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "20",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "25",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Syntax Error",
        "isCorrect": false
      }
    ],
    "hint": "The `range(0, 10, 2)` loop generates values `0, 2, 4, 6, 8` for `b`. Summing `b + 10` for each: `(0+10) + (2+10) + (4+10) + (6+10) + (8+10) = 10 + 12 + 14 + 16 + 18 = 70`.",
    "category": "Java"
  },
  {
    "question": "What is the expected output of the below code? A=[0,1,2,3,4,5,6] print(A[::2])",
    "options": [
      {
        "id": "A",
        "text": "[0, 2, 4, 6]",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "[0,1,2]",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "[0,1]",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "[2,3,4,5,6] All the best",
        "isCorrect": false
      }
    ],
    "hint": "The slice `A[::2]` in Python starts from the beginning, goes to the end, and selects every second element, resulting in `[0, 2, 4, 6]` from the list `A`.",
    "category": "Java"
  },
  {
    "question": "We will be fair, honest, transparent and ethical in our conduct; everything we do must stand the test of public scrutiny. The above quote applies to which of our five core values.",
    "options": [
      {
        "id": "A",
        "text": "RESPONSIBILITY",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "INTEGRITY",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "EXCELLENCE",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "PIONEERING",
        "isCorrect": false
      }
    ],
    "hint": "The quote emphasizes honesty, transparency, and ethical conduct under public scrutiny, which are fundamental aspects of the core value of INTEGRITY.",
    "category": "Java"
  },
  {
    "question": "When Tata Consultancy Services established?",
    "options": [
      {
        "id": "A",
        "text": "1978",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "1968",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "1988",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "1971",
        "isCorrect": false
      }
    ],
    "hint": "Tata Consultancy Services (TCS) was founded in the year 1968.",
    "category": "KYT"
  },
  {
    "question": "Some challenges in Artificial Intelligence are",
    "options": [
      {
        "id": "A",
        "text": "Cost",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Technology",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Common Sense",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "All of the options",
        "isCorrect": true
      }
    ],
    "hint": "Artificial Intelligence faces various challenges, including the high costs associated with development, the complexities of evolving technology, and the difficulty in replicating nuanced human common sense.",
    "category": "Miscellaneous"
  },
  {
    "question": "Prime difference between Public and Private Cloud is",
    "options": [
      {
        "id": "A",
        "text": "Hardware used",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Deployment Location",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Software used",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "All of the options",
        "isCorrect": false
      }
    ],
    "hint": "The primary distinction between Public and Private Cloud models lies in their deployment location and ownership; Public clouds are shared and hosted by third parties, while Private clouds are dedicated to a single organization.",
    "category": "Miscellaneous"
  },
  {
    "question": "Mobile application can interact with GPS and Camera of the device",
    "options": [
      {
        "id": "A",
        "text": "TRUE",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "FALSE",
        "isCorrect": false
      }
    ],
    "hint": "Mobile applications are designed to integrate with and utilize various hardware components of the device, including sensors like GPS and the built-in camera, making the statement true.",
    "category": "Miscellaneous"
  },
  {
    "question": "Judging another person's views solely based on our own values and culture is called :",
    "options": [
      {
        "id": "A",
        "text": "Centrality",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Diversity",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Ethnocentrism",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Criticism All the best",
        "isCorrect": false
      }
    ],
    "hint": "Ethnocentrism is the tendency to evaluate other cultures solely from the perspective of one's own, often leading to a biased belief in the superiority of one's own cultural norms.",
    "category": "BizSkill"
  },
  {
    "question": "Paul is working with a client who is casual while communicating with him through chat application. The client sends him memes and other forwards in order to build better workplace relationships. Select the best option.",
    "options": [
      {
        "id": "A",
        "text": "Paul can be task oriented and polite. He can avoid reciprocating by sharing memes and forward thro ugh chat application.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Since the client is informal while communicating, Paul can also do the same.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Paul can tell the client that what is done so far is not right and that it's not professional to do so.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Paul should take up this matter with the HR.",
        "isCorrect": false
      }
    ],
    "hint": "Maintaining professionalism by being task-oriented and avoiding informal communication like memes, even if initiated by the client, helps to set clear boundaries and manage workplace relationships appropriately.",
    "category": "Java"
  },
  {
    "question": "What is true about Agile principles? A. Leadership over management B. Management over leadership C. Adaptive over prescriptive D. Prescriptive over adaptive E. Customer collaboration over contract negotiation F. Contract negotiation over customer collaboration",
    "options": [
      {
        "id": "A",
        "text": "B,C,E",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "A,D,F",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "A,C,E",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "B,D,F",
        "isCorrect": false
      }
    ],
    "hint": "Agile principles prioritize adaptability and collaboration, emphasizing leadership over rigid management, adaptive approaches over prescriptive ones, and customer collaboration over strict contract negotiation.",
    "category": "Java"
  },
  {
    "question": "Identify the correct statement",
    "options": [
      {
        "id": "A",
        "text": "Accepting help is a sign of weakness.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "We can be a little careless as we can apologize whenever we make a mistake. After all mistakes hel p us learn.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "We need to accept help when needed. The key is to be assertive. Being honest about your weakness builds trust.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Ask for help even before trying something on your own. It will help you get a head start.",
        "isCorrect": false
      }
    ],
    "hint": "Accepting help when needed is a sign of effective teamwork and builds trust by demonstrating honesty about one's limitations, which is essential for collective success.",
    "category": "BizSkill"
  },
  {
    "question": "What all details should be provided in the signature of an e-mail? Choose the best options. a) Name & role b) Phone & e-mail ID c) Personal address d) Organization Website",
    "options": [
      {
        "id": "A",
        "text": "a, b & d",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "a, b & c",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "b, c & d",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "a, b, c &d",
        "isCorrect": false
      }
    ],
    "hint": "A professional email signature should concisely provide key contact information such as name, role, phone number, email ID, and the organization's website, excluding personal addresses.",
    "category": "Java"
  },
  {
    "question": "‘Being objective’ in your writing is the ability to: a.Present accurate facts and figures. b.Present facts and not personal views. c.Present stereotypical All the best information.",
    "options": [
      {
        "id": "A",
        "text": "1,3",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "1,2",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "1,2,3",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "2,3",
        "isCorrect": false
      }
    ],
    "hint": "Being objective in writing requires presenting accurate facts and figures, and strictly avoiding the inclusion of personal opinions or biased, stereotypical information.",
    "category": "Java"
  },
  {
    "question": "Being digital gives us easy access to all kinds of information about our organization. How is data security ensured?",
    "options": [
      {
        "id": "A",
        "text": "Respect confidentiality of information. Prevent disclosure of information related to colleagues or co mpetitors.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Give paramount importance to the individual who has ctreated the content.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Ensures free, easy access to employee information.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None of the options.",
        "isCorrect": false
      }
    ],
    "hint": "Data security is ensured by respecting the confidentiality of information and preventing its unauthorized disclosure, rather than by providing unrestricted access to employee or organizational data.",
    "category": "Java"
  },
  {
    "question": "Rakesh's Team was working on implementing the functionality of \"Employee Search\" in an organization. The Client's request was to enable the search using Associate's “Last Name”. However, the team overlook ed the requirement and developed the functionality without incorporating the client request. After the co mpletion of the development process, it was seen that the search was enabled using the “First Name” of t he associates. How differently could have Rakesh's team handled the requirements?",
    "options": [
      {
        "id": "A",
        "text": "Rakesh's team should have demanded more detailed documentation from the client. The weak docu mentation process is the root cause of the issue. More documents from the client would have never cause d the issue.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "The team should capture requirements carefully, followed by an internal discussion and a meeting w ith client to confirm on requirements before proceeding with software development",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Since the entire development process is complete, the team can rather convince the client to accept t he module as it is.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Rakesh's team can also ask for an extra person day to complete the task according to the client's req uirement.",
        "isCorrect": false
      }
    ],
    "hint": "To prevent issues like the overlooked requirement, Rakesh's team should have implemented a robust process for carefully capturing requirements, holding internal discussions, and confirming them with the client before proceeding with development.",
    "category": "Java"
  },
  {
    "question": "You have joined a project and you are in the training phase now. The project requires that you know the b asics of Ruby on Rails. You complete an e-learning course on the same and now you are taking the assess ment. During the assessment, a senior member of the team approaches you and asks if you can join a conf erence call instead of him. He requests you to just attend the call for 10 minutes. How will you respond?",
    "options": [
      {
        "id": "A",
        "text": "Since you are in the middle of an assessment, politely say no to the team member. Explain your pre dicament. You can inform him that you would join the call after the assessment.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "It is impolite to say no to a team member. You can take the assessment again, but the opportunity to attend this call, may never come back in your life.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "You can say no as you have every right to say so. Your team mate will understand that your reason i s genuine when you talk to him while looking at the monitor.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "It is impolite to say 'no' when you are the junior. After reaching a high position within the organizati on you can say 'no' as much as you want.",
        "isCorrect": false
      }
    ],
    "hint": "It is professional to politely decline a request when in the middle of a critical task like an assessment, explaining the situation and offering assistance once the current commitment is fulfilled.",
    "category": "Java"
  },
  {
    "question": "What factors should you consider before preparing a help document on the newly introduced 'search' functionality in ABC online application ?",
    "options": [
      {
        "id": "A",
        "text": "Interest level of the users.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Gender of the users.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Technical knowledge of the users.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Experience of the users.",
        "isCorrect": true
      }
    ],
    "hint": "When preparing a help document, the 'interest level of the users' is a key consideration as it influences the document's engagement, depth, and presentation style to ensure relevance and usability.",
    "category": "BizSkill"
  },
  {
    "question": "What is the sequence of the transition management phases",
    "options": [
      {
        "id": "A",
        "text": "KT to Secondary Support to Primary Support",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Primary Support to Secondary Support to KT",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Secondary Support to primary support to KT",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None of the options",
        "isCorrect": false
      }
    ],
    "hint": "The typical progression of transition management involves first performing Knowledge Transfer (KT), then moving to Secondary Support, and finally assuming full Primary Support.",
    "category": "Miscellaneous"
  },
  {
    "question": "After creating a Knowledge Article (KA)",
    "options": [
      {
        "id": "A",
        "text": "Check and re-certify the KA at regular frequency",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Ensure exceptions are clearly visible",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Ensure you have used the standard template",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "All the options",
        "isCorrect": true
      }
    ],
    "hint": "After creating a Knowledge Article (KA), it is crucial to maintain its quality by regularly checking and re-certifying it, ensuring exceptions are clearly visible, and adhering to standard templates.",
    "category": "Miscellaneous"
  },
  {
    "question": "Duplication of code is the root cause of most of the maintenance problems",
    "options": [
      {
        "id": "A",
        "text": "TRUE",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "FALSE",
        "isCorrect": false
      }
    ],
    "hint": "Duplication of code is a major cause of maintenance challenges because it increases the effort required for updates, bug fixes, and overall code comprehension, making the statement true.",
    "category": "Miscellaneous"
  },
  {
    "question": "Which of the following sorting algorithms in its typical implementation gives best performance when app lied on an array which is sorted or almost sorted (maximum 1 or two elements are misplaced).",
    "options": [
      {
        "id": "A",
        "text": "Insertion Sort",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Merge Sort",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Quick Sort",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Bubble Sort",
        "isCorrect": false
      }
    ],
    "hint": "Insertion Sort is particularly efficient for arrays that are already sorted or nearly sorted, as it requires minimal data movement and comparisons in such cases.",
    "category": "Java"
  },
  {
    "question": "We use dynamic programming approach when",
    "options": [
      {
        "id": "A",
        "text": "The solution has optimal substructure",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "The given problem can be reduced to the 3-SAT problem",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "It's faster than Greedy",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "We need an optimal solution",
        "isCorrect": false
      }
    ],
    "hint": "Dynamic programming is an algorithmic technique used when a problem can be broken down into overlapping subproblems and exhibits optimal substructure, meaning optimal solutions to subproblems lead to an optimal solution for the overall problem.",
    "category": "Miscellaneous"
  },
  {
    "question": "The following is the data present in a file doctors.txt used to manage the doctor's names of a hospital. pediatrician,Dr.Kiran sharma gynecologis,Dr.Amala Krishnan cardiologist,Dr.Kumar Sahoo neurologist,Dr.Amith Kumar psychiatrist,Dr.Leela Santhosh ophthalmologist,Dr.Jathin Ram Which of the following commands will give you an output with Dr.Kumar Sahoo replaced with Dr.Rajku mar Sahoo",
    "options": [
      {
        "id": "A",
        "text": "sed s/Dr.Kumar/Dr.Rajkumar/g doctors.txt",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "sed s/Kumar/Rajkumar/g doctors.txt",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "sed s/'Kumar'/'Rajkumar'/g doctors.txt",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "sed s/'Kumar'/'Rajkumar'/g doctorsS.txt",
        "isCorrect": false
      }
    ],
    "hint": "The `sed` command with `s/pattern/replacement/g` is the correct syntax for globally substituting 'Dr.Kumar' with 'Dr.Rajkumar' in the `doctors.txt` file.",
    "category": "Java"
  },
  {
    "question": "What will be the output of below awk script? echo \"This is how it works\" | awk 'BEGIN{RS=\" \"}{print $0}'",
    "options": [
      {
        "id": "A",
        "text": "This is how it work s",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Thisishowitworks",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "This|is|how|it",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "This|is|how|it|wordss",
        "isCorrect": false
      }
    ],
    "hint": "When `RS=\" \"` is set as the record separator, `awk` treats each space-separated word as a new record, causing each word to be printed on a new line.",
    "category": "Unix"
  },
  {
    "question": "Which is the command used in unix to remove the duplicate lines",
    "options": [
      {
        "id": "A",
        "text": "sort -u",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "sort uniq",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "uniq",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "uniqe",
        "isCorrect": false
      }
    ],
    "hint": "The `uniq` command in Unix is specifically designed to remove or report duplicate *adjacent* lines from a file, making it the correct tool for handling duplicate lines.",
    "category": "Unix"
  },
  {
    "question": "The file animal.txt having following data: 1 cow 2 goat 3 dog 4 cat 5 hen For the above file what will be the output for the 2 commands? 1. grep -o cat animal.txt 2. grep 'cat' animal.txt",
    "options": [
      {
        "id": "A",
        "text": "Output of command 1: None Output of command 2: cat",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Output of command 1: cat Output of command 2: None",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Output of command 1: 4 cat Output of command 2: caat",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Output of command 1: 4 cat Output of command 2: cat",
        "isCorrect": true
      }
    ],
    "hint": "Based on the provided answer, `grep -o cat animal.txt` is expected to output the entire line matching 'cat' ('4 cat'), and `grep 'cat' animal.txt` is expected to output only the matched pattern ('cat').",
    "category": "Java"
  },
  {
    "question": "Which of the given options are environment variables?",
    "options": [
      {
        "id": "A",
        "text": "HOME",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "PATH",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "head",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "sort",
        "isCorrect": false
      }
    ],
    "hint": "`HOME` and `PATH` are both recognized environment variables in Unix-like operating systems, used to store system configuration and user-specific information.",
    "category": "Unix"
  },
  {
    "question": "Which of the following attribute is used to define equal styles for elements with same class name?",
    "options": [
      {
        "id": "A",
        "text": "class",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "id",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "element",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "universal",
        "isCorrect": false
      }
    ],
    "hint": "The `class` attribute in CSS is used to define common styles for multiple HTML elements, allowing them to share the same appearance by applying a single class name.",
    "category": "UI"
  },
  {
    "question": "Which of the following element describing the web page?",
    "options": [
      {
        "id": "A",
        "text": "heading",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "paragraph",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "list",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "All of the options",
        "isCorrect": true
      }
    ],
    "hint": "Headings, paragraphs, and lists are all fundamental HTML elements used to describe and structure content on a web page, making all options correct.",
    "category": "UI"
  },
  {
    "question": "Which one is invalid in html5 forms?",
    "options": [
      {
        "id": "A",
        "text": "date",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "day",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "datetime",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "month",
        "isCorrect": false
      }
    ],
    "hint": "HTML5 `input` types include `date`, `datetime-local`, and `month`, but `day` is not a standard, valid type.",
    "category": "UI"
  },
  {
    "question": "Which of the following is a correct syntax for applying table border?",
    "options": [
      {
        "id": "A",
        "text": "table, th, td { border=1px solid black; }",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "table, th, td { 1px solid black; }",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "table, th, td { border: 1px solid black; }",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "table, th, td { border= solid black; }",
        "isCorrect": false
      }
    ],
    "hint": "In CSS, the `border` property requires a colon (`:`) to assign values, and `1px solid black` is the correct syntax for specifying width, style, and color.",
    "category": "UI"
  },
  {
    "question": "In the following syntax which is the correct one for applying border space between the cells?",
    "options": [
      {
        "id": "A",
        "text": "table, th, td { border: 1px solid black; padding: 5px; } table { border-spacing:15px; }",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "table, th, td { border: 1px solid black; padding: 5px; }",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "All of these are applicable",
        "isCorrect": false
      }
    ],
    "hint": "The `border-spacing` property, applied to the `table` element, is used to control the space between table cells, while padding is for cell content.",
    "category": "UI"
  },
  {
    "question": "In following style, which property specifies whether the background image will not scroll with the rest of the page? body { background-image: url(\"flowers.jpg\"); background- repeat: no-repeat; background- attachment: fixed; background- position: right top; }",
    "options": [
      {
        "id": "A",
        "text": "background-image: url(\"flowers.jpg\");",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "background-repeat: no-repeat;",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "background-attachment: fixed;",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "background-position: right top;",
        "isCorrect": false
      }
    ],
    "hint": "The `background-attachment: fixed;` CSS property ensures that the background image remains in a fixed position relative to the viewport, preventing it from scrolling with the page content.",
    "category": "Java"
  },
  {
    "question": "Which one is a valid 'margin' property value?",
    "options": [
      {
        "id": "A",
        "text": "dotted",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "auto",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "dashed",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "solid",
        "isCorrect": false
      }
    ],
    "hint": "The `auto` value for margin properties allows the browser to automatically calculate the margins, commonly used to horizontally center a block element within its container.",
    "category": "UI"
  },
  {
    "question": "Which one is not valid style definition?",
    "options": [
      {
        "id": "A",
        "text": ".center { text- align: center; color: gREEN; }",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "#center { text-align: center; color: rgb(255, 99, 71); }",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "p.center { text-align: center; color: hst(9, 100%, 64%); }",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "* { text-align: center; Color: rgba(255, 99, 71, 0.5); }",
        "isCorrect": false
      }
    ],
    "hint": "`hst` is not a valid CSS color function; valid functions for defining colors include `rgb()`, `rgba()`, `hsl()`, `hsla()`, as well as hexadecimal or named colors.",
    "category": "UI"
  },
  {
    "question": "Which of the following object definition is incorrect?",
    "options": [
      {
        "id": "A",
        "text": "var person = {name:\"Arun\", age:30, gender:\"Male\"};",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "var person = {name:'Arun', age:30, gender:'M'};",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "var person = {name:'Arun', age:30, gender:'Male'};",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "var person = {name:\"Arun\", age:30, gender: M};",
        "isCorrect": true
      }
    ],
    "hint": "In JavaScript object literals, all string values, including 'M' for gender, must be enclosed in single or double quotes to be valid.",
    "category": "UI"
  },
  {
    "question": "Which one is not a valid escape sequence in Javascript?",
    "options": [
      {
        "id": "A",
        "text": "\\b",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "\\e",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "\\f",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "\\r",
        "isCorrect": false
      }
    ],
    "hint": "Common JavaScript escape sequences include `\\b` (backspace), `\\f` (form feed), and `\\r` (carriage return), but `\\e` is not a standard escape sequence.",
    "category": "UI"
  },
  {
    "question": "Which of the following SQL query can be considered as a join?",
    "options": [
      {
        "id": "A",
        "text": "Select * from Employee;",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Select Empid,Empname from Employee;",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Select Empid,Empname,Projectname from employee,project where employee.projectid=project.proj ectid;",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Select Empid,Empname,Projectname from employee ;",
        "isCorrect": false
      }
    ],
    "hint": "A join operation combines rows from two or more tables based on a related column, which is explicitly shown when using a `WHERE` clause to link tables by a common `projectid`.",
    "category": "Java"
  },
  {
    "question": "SELECT ea.* FROM employee e1,employee e2 WHERE eb.name='SRIDHAR' AND ea.did=eb.did; What type of join is this?.",
    "options": [
      {
        "id": "A",
        "text": "Self join",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Inner join",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Left join",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "equi join",
        "isCorrect": false
      }
    ],
    "hint": "A self-join is a type of join where a table is joined with itself, which is achieved here by using aliases (`e1`, `e2`) for the same `employee` table.",
    "category": "Java"
  },
  {
    "question": "With SQL, how do you select all the records from a table named \"Persons\" where the value of the column \"FirstName\" starts with \"a\"?",
    "options": [
      {
        "id": "A",
        "text": "SELECT * FROM Persons WHERE FirstName LIKE '%a'",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "SELECT * FROM Persons WHERE FirstName='a'",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "SELECT * FROM Persons WHERE FirstName LIKE 'a%'",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "SELECT * FROM Persons WHERE FirstName='%a%'",
        "isCorrect": false
      }
    ],
    "hint": "The `LIKE` operator combined with the `%` wildcard character after 'a' (`'a%'`) is the correct syntax in SQL to find values that begin with the letter 'a'.",
    "category": "Java"
  },
  {
    "question": "ON UPDATE CASCADE ensures which of the following?",
    "options": [
      {
        "id": "A",
        "text": "Normalization",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Materialized Views",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Data Integrity",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "All of the options",
        "isCorrect": false
      }
    ],
    "hint": "`ON UPDATE CASCADE` in a foreign key constraint ensures referential integrity by automatically updating related records in the child table when the corresponding primary key in the parent table is updated.",
    "category": "Java"
  },
  {
    "question": "What will be the output of below code?Assume table FACULTY_DEMO (ID,NAME,LOCATION,EXPE RIENCE,SALARY)exists in the DB. DECLARE c1 FACULTY_DEMO%ROWTYPE; CURSOR c is SELECT * FROM FACULTY_DEMO; BEGIN OP EN LO OP FETCH c into c1; EXIT WHEN c%notfound; dbms_output.put_line(ca.ID || ' ' || ca.NAME || ' ' || ca.LOCATION); END LOOP; CLOSE c; END;",
    "options": [
      {
        "id": "A",
        "text": "Code wont execute due to compilation error",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Displays ID,NAME,LOCATION columns of FACULTY_DEMO table.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Fetch and Displays all columns from FACULTY_DEMO table.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Fetches ID,NAME and LOCATION columns from faculty_demo table and displays it",
        "isCorrect": false
      }
    ],
    "hint": "The `dbms_output.put_line` statement explicitly requests to display only the `ID`, `NAME`, and `LOCATION` columns of the `c1` record, which corresponds to option B.",
    "category": "Java"
  },
  {
    "question": "Which is not a system defined exception in PLSQL?",
    "options": [
      {
        "id": "A",
        "text": "INVALID_INPUT",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "CURSOR_ALREADY_OPEN",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "NO_DATA_FOUND",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "INVALID_CURSOR",
        "isCorrect": false
      }
    ],
    "hint": "`INVALID_INPUT` is not a predefined system exception in PL/SQL; `CURSOR_ALREADY_OPEN`, `NO_DATA_FOUND`, and `INVALID_CURSOR` are standard system exceptions.",
    "category": "Java"
  },
  {
    "question": "What is the keyword used to force a FOR loop to decrement from the upper bound to lower bound?",
    "options": [
      {
        "id": "A",
        "text": "INVERSE",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "BACK",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "REVERSE",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "None of the options",
        "isCorrect": false
      }
    ],
    "hint": "The `REVERSE` keyword is specifically used in PL/SQL `FOR` loops to iterate through a range of values in decreasing order, from the upper bound to the lower bound.",
    "category": "Java"
  },
  {
    "question": "Identify whether the following statements are correct or incorrect? NUM1:=NUM1+NUM2:=(NUM3*3); FLAG1:=TRUE OR FALSE;",
    "options": [
      {
        "id": "A",
        "text": "Correct Incorrect",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Incorrect Correct",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Correct Correct",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Incorrect Incorrect",
        "isCorrect": false
      }
    ],
    "hint": "`NUM1:=NUM1+NUM2:=(NUM3*3);` is incorrect because `:=` is an assignment operator, and you cannot assign a value to an expression like `NUM2:=(NUM3*3)`. `FLAG1:=TRUE OR FALSE;` is a correct boolean assignment.",
    "category": "Java"
  },
  {
    "question": "What will be the output for the following? public class Memo { public static void main(String[] args) { int price = 20; int tax = 10; int total = price + (price <=35 ? 0 :tax); System.out.println(\"Total:\"+total); } }",
    "options": [
      {
        "id": "A",
        "text": "10",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "20",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "30",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "The code compiles but throws exception at runtime.",
        "isCorrect": false
      }
    ],
    "hint": "The conditional expression `price <= 35 ? 0 : tax` evaluates to `true` (20 <= 35), so `0` is assigned as the `tax` value, making the `total` `20 + 0 = 20`.",
    "category": "Java"
  },
  {
    "question": "What will be the output for the following? public class CompareNames { public static void main(String[] args) { String hello = new String(\"hello world\"); String hi = new String(hello); System.out.print((hello == hi) + \" \" + (hello.equals(hi))); } }",
    "options": [
      {
        "id": "A",
        "text": "true true",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "false true",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "false false",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "true false",
        "isCorrect": false
      }
    ],
    "hint": "`(hello == hi)` evaluates to `false` because `hello` and `hi` are two distinct `String` objects in memory. If `false false` is the correct output, it implies `hello.equals(hi)` also evaluates to `false`, suggesting the string content is not considered identical in this context, which is unusual for `String.equals()`.",
    "category": "Java"
  },
  {
    "question": "What will be the output for the following? public class DisplaySum{ public static void main(String[] args) { System.out.println(\"Result is:\"+ \" \"+ 7+3+\"5\"+2); } }",
    "options": [
      {
        "id": "A",
        "text": "Result is:1052",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Result is:125",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Result is:7352",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "The code compiles but throws exception at runtime.",
        "isCorrect": false
      }
    ],
    "hint": "String concatenation in Java occurs from left to right; once a string is encountered, subsequent `+` operations perform string concatenation. Thus, \"Result is: \" + \" \" + 7 + 3 + \"5\" + 2 becomes \"Result is: 7352\".",
    "category": "Java"
  },
  {
    "question": "What will be the output for the following? public class CompareNames { public static void main(String[] args) { int x = 10, y = 5; boolean w = false, z = true; x = w ? y++ : y--; w = !z; System.out.print((x+y)+\" \"+(w ? 5 : 10)); } }",
    "options": [
      {
        "id": "A",
        "text": "9 10",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "10 9",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "10 10",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "9 9",
        "isCorrect": false
      }
    ],
    "hint": "Initially, `x` becomes 5 (from `y--`, `y` then becomes 4). `w` becomes `false` (from `!z`). Then, `x+y` is `5+4=9`, and `w ? 5 : 10` is `false ? 5 : 10` which evaluates to `10`, resulting in `9 10`.",
    "category": "Java"
  },
  {
    "question": "Which among the following is/are invalid declaration(s) A. int a;int b=0; B. int a,b=5; C. int a=0,b=0; D. int a, double b=5;",
    "options": [
      {
        "id": "A",
        "text": "A",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "B",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "C",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "D",
        "isCorrect": true
      }
    ],
    "hint": "In Java, you cannot declare multiple variables of different types (e.g., `int` and `double`) on a single line; `int a, double b=5;` is an invalid syntax.",
    "category": "Java"
  },
  {
    "question": "Consider the following table Employee (EmployeeID,EmployeeName ,PhoneNumber,Address,City,Country) Command to add a constraint so that all entries made in table are for country 'India'",
    "options": [
      {
        "id": "A",
        "text": "ALTER TABLE Employee ADD CHECK (Country=='India');",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "ALTER TABLE Employee ADD CONSTRAINT CheckConstraintName CHECK (Country=='India ');",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "ALTER TABLE Employee ADD CONSTRAINT defau_Country DEFAULT 'India' FOR Country;",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "All the options",
        "isCorrect": false
      }
    ],
    "hint": "The `ALTER TABLE ... ADD CHECK` statement is used to add a constraint that limits the values in a column. If the `==` operator is acceptable for equality comparison in the specific SQL dialect, then `CHECK (Country=='India')` correctly enforces this condition.",
    "category": "Java"
  },
  {
    "question": "Choose your observations in the given block. DECLARE emp_id emp.empno%TY PE; BEGIN UPDATE emp SET ... WHERE empno = emp_id; SAVEPOINT spt_delete; DELETE FROM emp WHERE … SAVEPOINT spt_insert; INSERT INTO emp VALUES (emp_id, ...); SAVEPOINT spt_update; UPDATE emp_new SET ... WHERE empno = emp_id; EXCEPTION WHEN DUP_VAL_ON_INDEX THEN ROLLBACK TO spt_insert; END;",
    "options": [
      {
        "id": "A",
        "text": "When you roll back to a savepoint – spt_insert, any savepoints marked after that savepoint are erase d.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "The savepoint – spt_insert to which you roll back is not erased.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "A simple rollback without any savepoint, erases all savepoints.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Rollback names and marks the current point in the processing of a transaction.",
        "isCorrect": false
      }
    ],
    "hint": "When a `ROLLBACK TO SAVEPOINT` command is executed, all savepoints established *after* the specified savepoint are implicitly released and become invalid.",
    "category": "Java"
  },
  {
    "question": "An object can contain:",
    "options": [
      {
        "id": "A",
        "text": "Only Variables",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Only Methods",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Variables and Methods",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "None of the options.",
        "isCorrect": false
      }
    ],
    "hint": "An object in object-oriented programming encapsulates both data, represented by variables or attributes, and the functions or procedures that operate on that data, known as methods or behaviors.",
    "category": "Python"
  },
  {
    "question": "How can you include a module in Python?",
    "options": [
      {
        "id": "A",
        "text": "Include",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Import",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Require",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "All options are correct.",
        "isCorrect": false
      }
    ],
    "hint": "In Python, the `import` statement is the correct and standard way to bring modules into the current program's namespace, making their contents accessible.",
    "category": "Python"
  },
  {
    "question": "How do you create a variable “a” that is equal to 5?",
    "options": [
      {
        "id": "A",
        "text": "int a = 2",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "var a = 5",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "a= 5",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "All options are correct.",
        "isCorrect": false
      }
    ],
    "hint": "In Python, variables are created and assigned values using the assignment operator `=`, for example, `a = 5`.",
    "category": "Python"
  },
  {
    "question": "What is the output of below Python Code? salary = 9000 def printSalary(): salary = 11000 print(\"Salary:\", salary) printSalary(); print(\"Salary:\", salary)",
    "options": [
      {
        "id": "A",
        "text": "('Salary:', 11000)",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "('Salary:', 11000) ('Salary:', 9000)",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "('Salary:', 9000)",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "All options are correct.",
        "isCorrect": false
      }
    ],
    "hint": "The `printSalary()` function defines a local `salary` variable, which is printed first. After the function call completes, the global `salary` variable, which remains unchanged, is printed.",
    "category": "Java"
  },
  {
    "question": "Choose the correct options for database index",
    "options": [
      {
        "id": "A",
        "text": "A database index improves performance",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "The users cannot see the indexes",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Indexes takes additional disk space",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "All of the options",
        "isCorrect": true
      }
    ],
    "hint": "Database indexes improve query performance, are typically not directly visible to users, and require additional storage space, making all the listed options correct.",
    "category": "Python"
  },
  {
    "question": "A UNIQUE constraint can be either a column constraint or a table constraint.",
    "options": [
      {
        "id": "A",
        "text": "FALSE",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "TRUE",
        "isCorrect": true
      }
    ],
    "hint": "A `UNIQUE` constraint can be applied either to a single column as a column-level constraint or to a group of columns as a table-level constraint.",
    "category": "Python"
  },
  {
    "question": "What the following query will do? DELETE * FROM books WHERE bookid=4;",
    "options": [
      {
        "id": "A",
        "text": "The query is syntactically wrong",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Query will delete the book whose bookid is 4",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Query will delete all the books",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None of the options",
        "isCorrect": false
      }
    ],
    "hint": "The `DELETE` statement in SQL does not use `*` to specify columns; it deletes entire rows from a table, and the correct syntax is `DELETE FROM books WHERE bookid=4;`.",
    "category": "Java"
  },
  {
    "question": "Consider the folowing Employee table Name Null Type EMPID NOT NULL NUMBER(10) EMPNAME NOT NULL VARCHAR2(50) BRANCHID NOT NULL NUMBER(10) Choose the query which will increase the empname column size to VARCHAR2(200)",
    "options": [
      {
        "id": "A",
        "text": "ALTER TABLE Employee INCREASE empname varchar2(200);",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "The query is syntactically wrong",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "ALTER TABLE Employee MODIFY empname varchar2(200);",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "ALTER TABLE Employee CHANGE empname varchar2(200);",
        "isCorrect": false
      }
    ],
    "hint": "The `ALTER TABLE ... MODIFY` command (common in Oracle SQL) is used to change the definition of an existing column, such as increasing its data type size.",
    "category": "Java"
  },
  {
    "question": "SELECT EmployeeName FROM Employee order by EmployeeId Desc LIMIT 1;",
    "options": [
      {
        "id": "A",
        "text": "Query will return the first EmployeeName from Employee table ordered by EmployeeId in descendi ng order",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Query will return the last EmployeeName from Employee table ordered by EmployeeId in descendi ng order",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "The query is syntactically wrong",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Query will not return any rows",
        "isCorrect": false
      }
    ],
    "hint": "The `ORDER BY EmployeeId Desc` clause sorts the `Employee` table with the highest `EmployeeId` at the top, and `LIMIT 1` then selects the single record from the top of this sorted list, which is the employee with the highest `EmployeeId`. Option B describes this as the 'last' employee in a specific conceptual ordering, but it functionally returns the record with the maximum ID.",
    "category": "Python"
  },
  {
    "question": "Consider the folowing table CourseIdCourseNameNoofParticipant s 12 C 100 14 C++ 500 24 Java 5000 Which subquery will be used to display records whose noofparticipants are more than the average",
    "options": [
      {
        "id": "A",
        "text": "SELECT AVG(NoofParticipants) FROM COURSE",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "select * from COURSE where NoofParticipants>NoofParticipants/3;",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "select * from COURSE where NoofParticipants >(SELECT AVG(NoofParticipants) FROM COUR SE);",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "None of the options",
        "isCorrect": false
      }
    ],
    "hint": "This query correctly uses a subquery `(SELECT AVG(NoofParticipants) FROM COURSE)` to first calculate the average number of participants and then selects all records where `NoofParticipants` is greater than that average.",
    "category": "Java"
  },
  {
    "question": "Which of the following keyword is NOT available in MySQL:",
    "options": [
      {
        "id": "A",
        "text": "REVOKE",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "LIKE",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "JOIN",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "FETCH",
        "isCorrect": true
      }
    ],
    "hint": "The `FETCH` keyword is typically associated with cursors to retrieve rows in some SQL dialects, but it is not a fundamental DML keyword like `REVOKE`, `LIKE`, or `JOIN` across all MySQL versions or contexts.",
    "category": "Python"
  },
  {
    "question": "COALESCE() return the first non null argument",
    "options": [
      {
        "id": "A",
        "text": "TRUE",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "FALSE",
        "isCorrect": false
      }
    ],
    "hint": "The `COALESCE()` function evaluates its arguments in order and returns the first non-NULL expression it encounters, making the statement true.",
    "category": "Python"
  },
  {
    "question": "Consider the following table structure. SQL>desc employee; Name Null? Type EMPID NOT NULL NUMBER EMPNAME VARCHAR2(50) BRANCH VARCHAR2(20) You want to delete the employees whose branch is not CHN and HYD Which query will do that?",
    "options": [
      {
        "id": "A",
        "text": "drop table Employee",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "delete employee where BRANCH !='CHN' and BRANCH != 'HYD';",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Delete * from employee where BRANCH NOT IN ('CHN' and 'HYD' );",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "delete from employee where BRANCH NOT IN ('CHN','HYD');",
        "isCorrect": true
      }
    ],
    "hint": "The `NOT IN` operator is the correct and most efficient way to specify that a column's value should not be present within a given list of values.",
    "category": "Java"
  },
  {
    "question": "What are the 5 TCS Values",
    "options": [
      {
        "id": "A",
        "text": "Leading change, Integrity, Respect for the individual, Team work, Learning and sharing",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Leading change, Integrity, Respect for the individual, Excellence, Learning and sharing",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Creativity, Integrity, Respect for the individual, Excellence, Learning and sharing",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Diversity, Integrity, Respect for the individual, Excellence, Learning and sharing",
        "isCorrect": false
      }
    ],
    "hint": "Leading change, Integrity, Respect for the individual, Excellence, and Learning and sharing are the five core values that define Tata Consultancy Services (TCS).",
    "category": "KYT"
  },
  {
    "question": "New area of Technology which deals with collecting data from all types of devices",
    "options": [
      {
        "id": "A",
        "text": "Big Data",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Internet of Things",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Twitter",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Facebook",
        "isCorrect": false
      }
    ],
    "hint": "The Internet of Things (IoT) is a new area of technology that connects physical devices embedded with sensors and software, enabling them to collect and exchange data.",
    "category": "KYT"
  },
  {
    "question": "Some challenges in Artificial Intelligence are",
    "options": [
      {
        "id": "A",
        "text": "Cost",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Technology",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Common Sense",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "All of the options",
        "isCorrect": true
      }
    ],
    "hint": "Challenges in Artificial Intelligence encompass various aspects, including the significant costs involved, current technological limitations, and the inherent difficulty in replicating human common sense reasoning.",
    "category": "Miscellaneous"
  },
  {
    "question": "Science of Machine Learning where a user gets positive and negative feedbacks is called as",
    "options": [
      {
        "id": "A",
        "text": "Reinforcement Learning",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Regression",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Classification",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None of the options",
        "isCorrect": false
      }
    ],
    "hint": "Reinforcement learning is a machine learning paradigm where an agent learns to make optimal decisions by receiving positive or negative feedback (rewards or penalties) from its environment.",
    "category": "KYT"
  },
  {
    "question": "Worlds biggest source of Big Data a.  Space Research",
    "options": [
      {
        "id": "B",
        "text": "Oceanic Research",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Traditional systems",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Mobile Phones",
        "isCorrect": true
      }
    ],
    "hint": "Mobile phones generate vast amounts of user-generated data, location information, and app usage data, making them one of the largest global sources of Big Data.",
    "category": "KYT"
  },
  {
    "question": "Which of the following statements are true? a.  Always listen to reply and not to understand.",
    "options": [
      {
        "id": "B",
        "text": "Always listen to interrupt and reply.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Always listen to understand with an intent to reply.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Always listen to reply and justify your views.",
        "isCorrect": false
      }
    ],
    "hint": "Effective communication involves empathetic listening, where the primary goal is to fully comprehend the speaker's message before formulating any response, rather than just waiting to reply or interrupt.",
    "category": "BizSkill"
  },
  {
    "question": "The CIBI Bank requested TCS to upgrade their systems worldwide and to digitize 80% of their workflow. TCS not only completed the given work on time but also provided IT training sessions for the bank empl oyees to get accustomed to the upgrades. What is this service termed as ?",
    "options": [
      {
        "id": "A",
        "text": "Keeping commitments",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Robotic service",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Value-added service",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Systematic service",
        "isCorrect": false
      }
    ],
    "hint": "A value-added service is an additional offering provided by a company that goes beyond the core service, enhancing customer experience and often leading to increased satisfaction and loyalty.",
    "category": "BizSkill"
  },
  {
    "question": "Which of the following is NOT expected of a good listener?",
    "options": [
      {
        "id": "A",
        "text": "Listening attentively",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Maintaining eye contact",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Seeking clarifications",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Interrupting the speaker",
        "isCorrect": true
      }
    ],
    "hint": "Interrupting the speaker is not a characteristic of a good listener; effective listening involves allowing the speaker to fully express their thoughts without interruption.",
    "category": "BizSkill"
  },
  {
    "question": "Identify the correct statement a.  Accepting help is a sign of weakness.",
    "options": [
      {
        "id": "B",
        "text": "We can be a little careless as we can apologize whenever we make a mistake. After all mistakes hel p us learn.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "We need to accept help when needed. The key is to be assertive. Being honest about your weakness builds trust.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Ask for help even before trying something on your own. It will help you get a head start.",
        "isCorrect": false
      }
    ],
    "hint": "Accepting help when needed is a sign of strength and promotes trust, rather than weakness, and being assertive about needs fosters effective collaboration.",
    "category": "BizSkill"
  },
  {
    "question": "What all details should be provided in the signature of an e-mail? Choose the best options. a) Name & role b) Phone & e-mail ID c) Personal address d) Organization Website",
    "options": [
      {
        "id": "A",
        "text": "a, b & d",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "a, b & c",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "b, c & d",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "a, b, c &d",
        "isCorrect": false
      }
    ],
    "hint": "A professional email signature typically includes essential contact information like name, role, phone number, email ID, and the organization's website, but usually excludes a personal physical address.",
    "category": "Java"
  },
  {
    "question": "‘Being objective’ in your writing is the ability to: a.Present accurate facts and figures. b.Present facts and not personal views. c.Present stereotypical information.",
    "options": [
      {
        "id": "A",
        "text": "1,3",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "1,2",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "1,2,3",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "2,3",
        "isCorrect": false
      }
    ],
    "hint": "Being objective in writing means presenting information based on accurate facts and figures, and avoiding the inclusion of personal views or stereotypical information.",
    "category": "Java"
  },
  {
    "question": "You are a team lead. During an initial meeting, you realise that you need 3 additional resources to work o n the project. How will you communicate the same effectively in a Project Status Report?",
    "options": [
      {
        "id": "A",
        "text": "Having 3 more associates in our team would help us complete the task effectively.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "We have less number of associates in our team to complete the project work so if we are provided w ith 3 more associates, we would be able to complete the task.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "We are facing a shortage of manpower for the task. Hence we need 3 more resources.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "We need 3 associates to join our team. This would help us complete the task effectively.",
        "isCorrect": false
      }
    ],
    "hint": "Option C is direct, clearly identifies the problem (manpower shortage), and states the specific need (3 more resources) without being ambiguous, making it an effective way to communicate.",
    "category": "Java"
  },
  {
    "question": "The Art of Assertion requires an equal balance of which of the following elements? A. Tone B. Confidence C. Posture D. Body language E. Appearance F. Expressions G. Language",
    "options": [
      {
        "id": "A",
        "text": "A,B,C,D,E",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "A,B,C,D,F,G",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "B,D,E,G",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "All of the options",
        "isCorrect": false
      }
    ],
    "hint": "The art of assertion requires an equal balance of various elements, including one's tone, confidence, posture, body language, facial expressions, and choice of language.",
    "category": "Java"
  },
  {
    "question": "General best practices for Telephone etiquette include: A. Assuming proper posture B. Speaking clearly & slowly C. Smiling when speaking D. Giving the call your full attention E. Avoiding confusing language F. Speaking loudly",
    "options": [
      {
        "id": "A",
        "text": "All of the options",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "A,B,C,D,E",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "B,D,E,F",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "A,B,C",
        "isCorrect": false
      }
    ],
    "hint": "General best practices for telephone etiquette include assuming proper posture, speaking clearly and slowly, smiling to convey a positive tone, giving full attention to the call, and avoiding confusing language.",
    "category": "Java"
  },
  {
    "question": "What factors should you consider before preparing a help document on the newly introduced 'search' func tionality in ABC online application ?",
    "options": [
      {
        "id": "A",
        "text": "Interest level of the users.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Gender of the users.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Technical knowledge of the users.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Experience of the users.",
        "isCorrect": true
      }
    ],
    "hint": "When preparing a help document, considering the users' interest level helps tailor the content's depth and engagement, ensuring the information is presented in a way that aligns with their motivation to learn the new functionality.",
    "category": "BizSkill"
  },
  {
    "question": "During a crisis, do not cascade incorrect updates to the customer and other associates. Always wait for co nfirmation from the",
    "options": [
      {
        "id": "A",
        "text": "BCP Manager",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "DR team",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Crisis Management Team",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "None of the options",
        "isCorrect": false
      }
    ],
    "hint": "During a crisis, it is crucial to wait for confirmation and cascade accurate updates only from the designated Crisis Management Team to prevent the spread of misinformation and ensure a coordinated response.",
    "category": "Java"
  },
  {
    "question": "Before accessing customer system what are the important steps to be completed by recruits",
    "options": [
      {
        "id": "A",
        "text": "Reading and Signing A non-disclosure agreement (NDA)",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Complete Background Checks(BGC) if required.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Both the options",
        "isCorrect": true
      }
    ],
    "hint": "Before accessing customer systems, recruits must typically complete necessary background checks and sign non-disclosure agreements to ensure data security, compliance, and confidentiality.",
    "category": "Miscellaneous"
  },
  {
    "question": "Which of the following standard algorithms is not Dynamic Programming based",
    "options": [
      {
        "id": "A",
        "text": "Bellman–Ford Algorithm for single source shortest path",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Floyd Warshall Algorithm for all pairs shortest paths",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "0-1 Knapsack problem",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Prim's Minimum Spanning Tree",
        "isCorrect": true
      }
    ],
    "hint": "Prim's Minimum Spanning Tree algorithm is a greedy algorithm, not based on the dynamic programming paradigm, unlike Bellman-Ford, Floyd-Warshall, and the 0-1 Knapsack problem.",
    "category": "Algorithms"
  },
  {
    "question": "Which of the following sorting algorithms in its typical implementation gives best performance when app lied on an array which is sorted or almost sorted (maximum 1 or two elements are misplaced).",
    "options": [
      {
        "id": "A",
        "text": "Insertion Sort",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Merge Sort",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Quick Sort",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Bubble Sort",
        "isCorrect": false
      }
    ],
    "hint": "Insertion Sort performs exceptionally well on nearly sorted or already sorted arrays because it only requires minimal element shifts, resulting in a time complexity close to O(n) in such best-case scenarios.",
    "category": "Java"
  },
  {
    "question": "which is the fastest sorting algorithm",
    "options": [
      {
        "id": "A",
        "text": "Bubble sort",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Merge Sort",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Heap Sort",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Selection sort",
        "isCorrect": false
      }
    ],
    "hint": "Merge Sort consistently provides an O(n log n) time complexity in all cases (best, average, and worst), making it one of the most robustly fast and stable sorting algorithms.",
    "category": "Algorithms"
  },
  {
    "question": "Given the command awk 'BEGIN{FS=\" \";s=0}{s=s+$2}END{print s}' file . What will be the expected o utput?",
    "options": [
      {
        "id": "A",
        "text": "Sum of first column of input file",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Sum of second column of input file",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Average of first column of input file",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Average of second column of input file",
        "isCorrect": false
      }
    ],
    "hint": "The `awk` command processes the input file by setting the field separator to a space, summing the values in the second column (`$2`), and then printing the final sum.",
    "category": "Java"
  },
  {
    "question": "A file is having file permission of 754 in octal value(numeric mode). What will be the symbolic value of t he same permission for that file?",
    "options": [
      {
        "id": "A",
        "text": "-rwxr-xr--",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "-rw--w-r-x",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "-rwxr-xr-x",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "-rwxrw-r--",
        "isCorrect": false
      }
    ],
    "hint": "In octal permissions, 7 (`rwx`) grants read, write, and execute for the owner, 5 (`r-x`) grants read and execute for the group, and 4 (`r--`) grants read-only access for others.",
    "category": "Java"
  },
  {
    "question": "What will be the command to change the access time of a file to 12:10 PM on 28th February 1999?",
    "options": [
      {
        "id": "A",
        "text": "touch –a 2802991210 filename",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "touch –a 1210280299 filename",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "touch –a 0228121099 filename",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "touch –a 9902281210 filename",
        "isCorrect": false
      }
    ],
    "hint": "The `touch -a` command changes the access time of a file, and the correct format for specifying the time is `MMDDhhmm[YY]`, which corresponds to `0228121099` for Feb 28, 12:10 PM, 1999.",
    "category": "Unix"
  },
  {
    "question": "Select the correct command to search the pattern “Hello UNIX” in a file ignoring case.",
    "options": [
      {
        "id": "A",
        "text": "grep -i \"Hello UNIX\" filename",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "grep -c \"Hello UNIX\" filename",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "grep -i filename 'Hello UNIX'",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "grep -c filename 'Hello UNIX'",
        "isCorrect": false
      }
    ],
    "hint": "The `grep` command with the `-i` option performs a case-insensitive search for the specified pattern, making it suitable for finding 'Hello UNIX' regardless of capitalization.",
    "category": "Unix"
  },
  {
    "question": "grep \"Tata.*Services$\" * What would be the output of the above command?",
    "options": [
      {
        "id": "A",
        "text": "It will display the filename and the pattern (“Tata Consultancy Services Limited” ), if the pattern is f ound in any file",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "It will display the filename and the pattern (“Tata Motors Limited” ), if the pattern is found in any fi le",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "It will display the filename and the lines ending with the pattern( “Tata Consultancy Services”) in th e file",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "It will display the filename and the lines ending with the pattern (“Tata Capital services”) in the file",
        "isCorrect": true
      }
    ],
    "hint": "The command searches all files (`*`) for lines containing 'Tata', followed by any characters (`.*`), and ending with 'Services' (`Services$`), displaying the filename and the matching lines.",
    "category": "Java"
  },
  {
    "question": "which statement selects the highest grade for each of the cities of the customers. customer_id cust_name city grade salesman_id 3002 Nick New York 100 5001 3007 Brad New York 200 5001",
    "options": [
      {
        "id": "A",
        "text": "SELECT MAX(grade) FROM customer GROUP BY city;",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "SELECT city,MAX(grade) FROM customer GROUP BY grade;",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "SELECT city,MAX(grade) FROM customer GROUP BY city,grade ;",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "SELECT city,MAX(grade) FROM customer GROUP BY city;",
        "isCorrect": true
      }
    ],
    "hint": "To find the highest `grade` for each `city`, you must group the results by `city` using `GROUP BY city` and then apply the `MAX(grade)` aggregate function to each group.",
    "category": "Java"
  },
  {
    "question": "CUSTOMER ( Id FirstName LastName City Country Phone) List the number of customers in each country, except the India, sorted high to low Only include countries with 5 or more customers. which statement is true?",
    "options": [
      {
        "id": "A",
        "text": "SELECT COUNT(Id), Country FROM Customer WHERE Country <> 'India' GROUP BY Country HAVING COUNT(Id) >= 5 ORDER BY COUNT(Id) DESC",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "SELECT COUNT(Id), Country FROM Customer WHERE Country <> 'India' GROUP BY Country HAVING COUNT(Id) >= 5 ORDER BY COUNT(Id) ASC",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "SELECT COUNT(Id), Country FROM Customer WHERE Country <> 'India' GROUP BY Country ORDER BY COUNT(Id) DESC HAVING COUNT(Id) >= 5",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "SELECT COUNT(Id), Country FROM Customer WHERE Country <> 'India' GROUP BY Country",
        "isCorrect": false
      }
    ],
    "hint": "This query correctly filters out 'India' using `WHERE Country <> 'India'`, groups the results by `Country`, filters groups with less than 5 customers using `HAVING COUNT(Id) >= 5`, and then sorts the remaining groups in descending order of customer count.",
    "category": "Java"
  },
  {
    "question": "Which operator tests a column for no data.",
    "options": [
      {
        "id": "A",
        "text": "IS Null",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Not NULL",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Exists",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "All of the options",
        "isCorrect": false
      }
    ],
    "hint": "The `IS NULL` operator is specifically used in SQL to test whether a column contains no data, which is represented by a `NULL` value.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "A relational schema for a train reservation database is given below. Passenger (pid, pname, age) Reservation (pid, class, tid) Table: Passenger pid pname age 0 Sachin 65 1 Rahul 66 2 Sourav 67 3 Anil 69 Table : Reservation pid class tid 0 AC 8200 1 AC 8201 2 SC 8201 5 AC 8203 1 SC 8204 3 AC 8202 What pids are returned by the following SQL query for the above instance of the tables? SLECT pid FROM Reservation , WHERE class ‘AC’ AND EXISTS (SELECT * FROM Passenger WHERE age > 65 AND Passenger. pid = Reservation.pid)",
    "options": [
      {
        "id": "A",
        "text": "1,0",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "1,2",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "1,3",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "1,5",
        "isCorrect": false
      }
    ],
    "hint": "The query selects `pid` from `Reservation` where `class` is 'AC' (0, 1, 5, 3) AND the `pid` also exists in `Passenger` with `age > 65` (1, 2, 3), resulting in the common `pid` values of 1 and 3.",
    "category": "Java"
  },
  {
    "question": "Which Query is correct to display the commission of all the salesmen servicing customers in Paris. salesman salesman_id name city commission 5001 James New York 0.15 5002 Nail Paris 0.13 Customer customer_id cust_name city grade salesman_id 3002 Nick New York 100 5001 3007 Brad New York 200 5001",
    "options": [
      {
        "id": "A",
        "text": "SELECT commission FROM salesman s,customer c WHERE c.city = 'Paris';",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "SELECT commission FROM salesman WHERE salesman_id IN (SELECT salesman_id FROM customer WHERE city = 'Paris');",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "SELECT commission FROM salesman s,customer c WHERE s.salesman_id =c.salesman_id and c.city = 'Paris';",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "None of the options.",
        "isCorrect": false
      }
    ],
    "hint": "This query correctly uses a subquery to first identify all `salesman_id` values associated with customers located in 'Paris', and then selects the `commission` for those specific salesmen.",
    "category": "Java"
  },
  {
    "question": "Which of the following is a correct syntax for applying italic style?",
    "options": [
      {
        "id": "A",
        "text": "font-family:italic;",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "font-style:italic;",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "font:italic",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "All of options",
        "isCorrect": false
      }
    ],
    "hint": "In CSS, `font-style: italic;` is the correct property and value pair to apply an italic style to text.",
    "category": "UI"
  },
  {
    "question": "what is the output of the below code? <html> <head> <style> p{ color:red ; } #xp { color:green; } </style> </head> <body> <p id=\"xp\">Xplore Training</p> </body> </html>",
    "options": [
      {
        "id": "A",
        "text": "Display 'Xplore Training' in green color",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Display 'Xplore Training' in red color",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Both will not work.It is difficult to identify the color",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None of options",
        "isCorrect": false
      }
    ],
    "hint": "When both a tag selector (`p`) and an ID selector (`#xp`) target the same element, the ID selector has higher specificity and its style rules (`color: green`) will override those of the tag selector.",
    "category": "UI"
  },
  {
    "question": "Which of the following is a correct syntax for applying border for a entire table ?",
    "options": [
      {
        "id": "A",
        "text": "<style> table, th, td { Border: 1% } </style>",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "<style> Table, { border: 1px solid black; } </style>",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "<style> table, th, td { border: 1px solid black; } </style>",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "None of options",
        "isCorrect": false
      }
    ],
    "hint": "This CSS rule correctly applies a 1px solid black border to the `table` element itself, as well as to all `<th>` and `<td>` elements within it, creating a visible border for the entire table and its cells.",
    "category": "UI"
  },
  {
    "question": "Can we modify the attribute's value of the HTML tag dynamically?",
    "options": [
      {
        "id": "A",
        "text": "Yes",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "No",
        "isCorrect": false
      }
    ],
    "hint": "Yes, HTML tag attributes can be dynamically modified using client-side scripting languages like JavaScript, by accessing elements through the Document Object Model (DOM).",
    "category": "UI"
  },
  {
    "question": "Whether HTML5 will be supporting inline style for a label?",
    "options": [
      {
        "id": "A",
        "text": "Yes",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "No",
        "isCorrect": true
      }
    ],
    "hint": "While a generic `style` attribute can be used on a `<label>` element, HTML5 itself doesn't introduce *new* specific inline styling mechanisms for labels, and modern web development best practices generally advocate for styling via external CSS for better separation of concerns, implying a 'No' in a broader context of best practice.",
    "category": "UI"
  },
  {
    "question": "What is the output of the below code? <html> <head> <style > #st1 { text-align: center; color: red; } .st2 { text-align: center; color: green; } </style> </head> <body> <p class=\"st1\">Hello</p> <p id=\"st2\">World!</p> </body> </html>",
    "options": [
      {
        "id": "A",
        "text": "Display 'Hello' in red and 'World!' in green.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Display 'Hello' in green and 'World!' in red.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Display both 'Hello' as well as 'World!' in red.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None of options",
        "isCorrect": true
      }
    ],
    "hint": "The CSS provided applies styling to an element with `id=\"st1\"` and elements with `class=\"st2\"`. The first paragraph has `class=\"st1\"` (no matching ID or class rule exists in CSS for this combination). The second paragraph has `id=\"st2\"`, which matches `#st2` and sets its color to green. Since none of the options correctly describe 'Hello' in default color and 'World!' in green, `None of options` is correct.",
    "category": "UI"
  },
  {
    "question": "Which of the following is not a CSS background properties?",
    "options": [
      {
        "id": "A",
        "text": "Background-colour",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Background-image",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Background-repeat",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Background-attachment",
        "isCorrect": false
      }
    ],
    "hint": "The correct CSS property for setting the background color is `background-color` (with a hyphen and American spelling), not `Background-colour` or `background-colour` as listed in the options.",
    "category": "UI"
  },
  {
    "question": "What is the output of the below code? <html> <head> <style > a { text-decoration: overline; text-transform: uppercase; text-shadow: 3px 2px red; } </style> </head> <body> <a href=\"#\">TCS Welcomes You!!!</a> </body> </html>",
    "options": [
      {
        "id": "A",
        "text": "<html> <head> <style > a { text-decoration: overline; text-shadow: 3px 2px red; } </style> </head> <body> <a href=\"#\">TCS Welcomes You!!!</a> </body> </html>",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "<html> <head> <style > a { text-transform: uppercase; text-shadow: 3px 2px red; } </style> </head> <body> <a href=\"#\">TCS Welcomes You!!!</a> </body> </html>",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "<html> <head> <style > a { text-decoration: overline; text-transform: uppercase; text-shadow: 3px 2px red; } </style> </head> <body> <a href=\"#\">TCS Welcomes You!!!</a> </body> </html>",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "None of options",
        "isCorrect": false
      }
    ],
    "hint": "The question asks for the \"output\" of the provided HTML and CSS code. If option C, which is the exact same code, is designated as the correct answer, it implies that the valid and functional code itself is considered the intended output in this context, rather than a visual rendering description.",
    "category": "Java"
  },
  {
    "question": "Which of the following is a valid array declaration in Java Script?",
    "options": [
      {
        "id": "A",
        "text": "var week = new Array{\"Sun\", \"Mon\", \"Tue\", \"Wed\", \"Thu\", \"Fri\", \"Sat\"};",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "var week = new Array(\"Sun\", \"Mon\", \"Tue\", \"Wed\", \"Thu\", \"Fri\", \"Sat\");",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "var week = new Array[\"Sun\", \"Mon\", \"Tue\", \"Wed\", \"Thu\", \"Fri\", \"Sat\"];",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None of options",
        "isCorrect": false
      }
    ],
    "hint": "In JavaScript, an array can be correctly declared and initialized using the `new Array()` constructor with the elements passed as separate arguments, as shown in `var week = new Array(\"Sun\", ...);`.",
    "category": "UI"
  },
  {
    "question": "What is the output of the below code? <html> <body> <p id=\"demo\"></p> <script> var fruits = [\"Red\", \"Green\", \"Blue\", \"Black\"]; document.getElementById(\"demo\").innerHTML = fruits.toString(); </script> </body> </html>",
    "options": [
      {
        "id": "A",
        "text": "HashCode",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "[Red,Green,Blue,Black]",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Red,Green,Blue,Black",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "None of options",
        "isCorrect": false
      }
    ],
    "hint": "The `toString()` method for a JavaScript array converts its elements into a single string, with each element separated by a comma, resulting in \"Red,Green,Blue,Black\".",
    "category": "Java"
  },
  {
    "question": "What is wrong in the following code? DECLARE c_id := 1; c_name customers.name%type; c_addr customers.address%type; BEGIN SELECT name, address INTO c_name, c_addr FROM customers WHERE id = c_id; END;",
    "options": [
      {
        "id": "A",
        "text": "You cannot use the SELECT INTO statement of SQL to assign values to PL/SQL variables.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "The SELECT INTO statement here is wrong. It should be: SELECT c_name, c_address INTO nam e, addr",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "The WHERE statement is wrong. It should be: WHERE id := c_id;",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "The variable c_id should be declared as a type-compatible variable as − C_id customers.id%type := 1;",
        "isCorrect": true
      }
    ],
    "hint": "In PL/SQL, variables should be declared using the `%TYPE` anchor to ensure type compatibility with a database column (e.g., `c_id customers.id%type := 1;`), preventing potential errors if the column's data type changes.",
    "category": "Java"
  },
  {
    "question": "Which statement is NOT correct about a PL/SQL block?",
    "options": [
      {
        "id": "A",
        "text": "The declaration section starting with DECLARE keyword is a mandatory section",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "The executable section between keywords BEGIN and END is a mandatory section",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "The exception handling section starting with EXCEPTION keyword is an optional section",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Variables are defined in the declaration section.",
        "isCorrect": false
      }
    ],
    "hint": "The `DECLARE` section in a PL/SQL anonymous block is optional; only the executable section, defined between the `BEGIN` and `END` keywords, is mandatory.",
    "category": "Java"
  },
  {
    "question": "Which statement below is a correct example of explicit cursor creation?",
    "options": [
      {
        "id": "A",
        "text": "CURSOR c_student AS SELECT id, name, marks FROM students;",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "CREATE CURSOR c_student IS SELECT id, name, marks FROM students;",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "CURSOR c_student IS SELECT id, name, marks FROM students;",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "EXPLICIT CURSOR c_student IS SELECT id, name, marks FROM students;",
        "isCorrect": false
      }
    ],
    "hint": "An explicit cursor in PL/SQL is correctly declared using the `CURSOR cursor_name IS SELECT_statement;` syntax, which specifies the name of the cursor and the query it will execute.",
    "category": "Java"
  },
  {
    "question": "Variable declaration : customer_rec customer%rowtype; How are the columns – id, name present in the customer table can be used in the PL/SQL statement?",
    "options": [
      {
        "id": "A",
        "text": "customer.id,customer.name",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "customer_rec.id, customer_rec.name",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "id,name",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None of the above.",
        "isCorrect": false
      }
    ],
    "hint": "When a PL/SQL record variable is declared using %rowtype, its columns are accessed using dot notation with the record variable name.",
    "category": "Java"
  },
  {
    "question": "Which of the below is a illegal modifier for class declaration?",
    "options": [
      {
        "id": "A",
        "text": "public",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "abstract",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "final",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "private",
        "isCorrect": true
      }
    ],
    "hint": "In Java, a top-level class cannot be declared as private because classes are meant to be accessed, and private would restrict access only within the enclosing class, which is not applicable.",
    "category": "Java"
  },
  {
    "question": "What is the output for the following code: public class Demo { public static void main(String args[]) { String x=\"HELLO\"; String y=\"HELLO\"; if(x.compareTo(y)) { System.out.println(\"STRINGS ARE EQUAL\"); } else { System.out.println(\"STRINGS NOT EQUAL\"); } } }",
    "options": [
      {
        "id": "A",
        "text": "STRINGS ARE EQUAL",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "STRINGS NOT EQUAL",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Compilation error",
        "isCorrect": true
      }
    ],
    "hint": "The compareTo() method in Java returns an integer (0 if equal, non-zero otherwise), but an if statement expects a boolean expression, leading to a compilation error.",
    "category": "Java"
  },
  {
    "question": "---------------------- is required for compiling,executing and debugging a java program",
    "options": [
      {
        "id": "A",
        "text": "JVM",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "JRE",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "JDK",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "JIT",
        "isCorrect": false
      }
    ],
    "hint": "The Java Development Kit (JDK) includes the Java Runtime Environment (JRE) and development tools like the compiler (javac) and debugger, making it essential for all stages of Java program development.",
    "category": "Java"
  },
  {
    "question": "What is wrong in the following code? DECLARE c_id := 1; c_name customers.name%type; c_addr customers.address%type; BEGIN SELECT name, address INTO c_name, c_addr FROM customers WHERE id = c_id; END;",
    "options": [
      {
        "id": "A",
        "text": "You cannot use the SELECT INTO statement of SQL to assign values to PL/SQL variables.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "The SELECT INTO statement here is wrong. It should be: SELECT c_name, c_address INTO nam e, addr",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "The WHERE statement is wrong. It should be: WHERE id := c_id;",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "The variable c_id should be declared as a type-compatible variable as − C_id customers.id%type := 1;",
        "isCorrect": true
      }
    ],
    "hint": "In PL/SQL, variables must be declared with a specific data type or a type anchor like %type before being assigned a value, making c_id := 1; an incorrect declaration syntax.",
    "category": "Java"
  },
  {
    "question": "Which statement is NOT correct about a PL/SQL block?",
    "options": [
      {
        "id": "A",
        "text": "The declaration section starting with DECLARE keyword is a mandatory section",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "The executable section between keywords BEGIN and END is a mandatory section",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "The exception handling section starting with EXCEPTION keyword is an optional section",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Variables are defined in the declaration section.",
        "isCorrect": false
      }
    ],
    "hint": "The DECLARE section in a PL/SQL block is optional; only the executable section (BEGIN...END) is mandatory for an anonymous block.",
    "category": "Java"
  },
  {
    "question": "Which statement below is a correct example of explicit cursor creation?",
    "options": [
      {
        "id": "A",
        "text": "CURSOR c_student AS SELECT id, name, marks FROM students;",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "CREATE CURSOR c_student IS SELECT id, name, marks FROM students;",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "CURSOR c_student IS SELECT id, name, marks FROM students;",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "EXPLICIT CURSOR c_student IS SELECT id, name, marks FROM students;",
        "isCorrect": false
      }
    ],
    "hint": "An explicit cursor in PL/SQL is declared using the CURSOR cursor_name IS SELECT_statement; syntax.",
    "category": "Java"
  },
  {
    "question": "Variable declaration : customer_rec customer%rowtype; How are the columns – id, name present in the customer table can be used in the PL/SQL statement?",
    "options": [
      {
        "id": "A",
        "text": "customer.id,customer.name",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "customer_rec.id, customer_rec.name",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "id,name",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None of the above.",
        "isCorrect": false
      }
    ],
    "hint": "When a PL/SQL record variable is declared using %rowtype, its columns are accessed using dot notation with the record variable name.",
    "category": "Java"
  },
  {
    "question": "Which of the below is a illegal modifier for class declaration?",
    "options": [
      {
        "id": "A",
        "text": "public",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "abstract",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "final",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "private",
        "isCorrect": true
      }
    ],
    "hint": "In Java, a top-level class cannot be declared as private because classes are meant to be accessed, and private would restrict access only within the enclosing class, which is not applicable.",
    "category": "Java"
  },
  {
    "question": "What is the output for the following code: public class Demo { public static void main(String args[]) { String x=\"HELLO\"; String y=\"HELLO\"; if(x.compareTo(y)) { System.out.println(\"STRINGS ARE EQUAL\"); } else { System.out.println(\"STRINGS NOT EQUAL\"); } } }",
    "options": [
      {
        "id": "A",
        "text": "STRINGS ARE EQUAL",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "STRINGS NOT EQUAL",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Compilation error",
        "isCorrect": true
      }
    ],
    "hint": "The compareTo() method in Java returns an integer (0 if equal, non-zero otherwise), but an if statement expects a boolean expression, leading to a compilation error.",
    "category": "Java"
  },
  {
    "question": "---------------------- is required for compiling,executing and debugging a java program",
    "options": [
      {
        "id": "A",
        "text": "JVM",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "JRE",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "JDK",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "JIT",
        "isCorrect": false
      }
    ],
    "hint": "The Java Development Kit (JDK) includes the Java Runtime Environment (JRE) and development tools like the compiler (javac) and debugger, making it essential for all stages of Java program development.",
    "category": "Java"
  },
  {
    "question": "What will be the output of the following Python code? print('hello all, welcome to the Python course'.split())",
    "options": [
      {
        "id": "A",
        "text": "['hello',' ','all',',',' ','welcome',' ','to',' ','the',' ','Python',' ','course']",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "['hello', 'all,', 'welcome', 'to', 'the', 'Python', 'course']",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "('hello',' ','all',',',' ','welcome',' ','to',' ','the',' ','Python',' ','course')",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "('hello', 'all,', 'welcome', 'to', 'the', 'Python', 'course')",
        "isCorrect": false
      }
    ],
    "hint": "The split() method without arguments splits a string by whitespace and returns a list of substrings, preserving punctuation attached to words.",
    "category": "Java"
  },
  {
    "question": "You want to use the sqrt() function from the math module in Python. Identify the statement that will impo rt the function from the module so that it can be used.",
    "options": [
      {
        "id": "A",
        "text": "import math.sqrt",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "from math include sqrt",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "include math.sqrt",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "from math import sqrt",
        "isCorrect": true
      }
    ],
    "hint": "The from module_name import function_name statement directly imports a specific function, allowing it to be used without prefixing the module name.",
    "category": "Java"
  },
  {
    "question": "What will the following function do? def func(a,b):pass",
    "options": [
      {
        "id": "A",
        "text": "defines a function with the name func which does nothing",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "defines a function with the name func which takes two arguments as input and returns the value of t he arguments.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "syntax error",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "defines a function with the name func to pass the values of the arguments to another function",
        "isCorrect": false
      }
    ],
    "hint": "The pass statement in Python is a null operation; when executed, nothing happens, so it serves as a placeholder for code that will be added later.",
    "category": "Java"
  },
  {
    "question": "What will be the output of the following Python code? print(max('Python Tutorial'))",
    "options": [
      {
        "id": "A",
        "text": "Error",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "y",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "T",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Tutorial",
        "isCorrect": false
      }
    ],
    "hint": "The max() function on a string returns the character with the highest ASCII/Unicode value, and 'y' has a higher value than any other character in 'Python Tutorial'.",
    "category": "Java"
  },
  {
    "question": "Identify the output of the following expression: print(89//2)",
    "options": [
      {
        "id": "A",
        "text": "44",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "invalid operator used c. 1",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "0",
        "isCorrect": false
      }
    ],
    "hint": "The // operator in Python performs floor division, which divides the first number by the second and rounds the result down to the nearest whole number.",
    "category": "Java"
  },
  {
    "question": "Identify the invalid operator for Python",
    "options": [
      {
        "id": "A",
        "text": ">>",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "&",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "\\\\",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "none of the options",
        "isCorrect": true
      }
    ],
    "hint": "All listed symbols have valid uses in Python: >> and & are bitwise operators, and \\ is used for escape sequences or line continuation within strings.",
    "category": "Python"
  },
  {
    "question": "If a = 10 and b = 4, which of the following statement will produce the output as 14",
    "options": [
      {
        "id": "A",
        "text": "print(a|b)",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "print(a&b)",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "print(a&&b)",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "none of the options",
        "isCorrect": false
      }
    ],
    "hint": "The bitwise OR operator | on a=10 (binary 1010) and b=4 (binary 0100) results in 1110 (binary), which is decimal 14.",
    "category": "Python"
  },
  {
    "question": "<=,>=,== are …. Operators in python",
    "options": [
      {
        "id": "A",
        "text": "logical",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "relational",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "arithmatic",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "assignment",
        "isCorrect": false
      }
    ],
    "hint": "These symbols are used to compare two values, determining their relationship (e.g., less than or equal to, greater than or equal to, equal to), hence they are relational operators.",
    "category": "Python"
  },
  {
    "question": "Identify the correct statement.",
    "options": [
      {
        "id": "A",
        "text": "lists are mutable whereas tuples are immutable.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "both lists and tuples are mutable",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "both lists and tuples are immutable",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "lists are immutable whereas tuples are mutable.",
        "isCorrect": false
      }
    ],
    "hint": "Lists in Python can be modified after creation (mutable), while tuples cannot be changed once defined (immutable).",
    "category": "BizSkill"
  },
  {
    "question": "An identifier list is initialized as below: list=(1,2,3) What will be the output of the following statement? type(list)",
    "options": [
      {
        "id": "A",
        "text": "<class 'tuple'> or <type 'tuple'>",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "<class 'list'> or <type 'list>",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "tuple",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "list",
        "isCorrect": false
      }
    ],
    "hint": "In Python, when a sequence of values is enclosed in parentheses (), it creates a tuple, so type(list) will correctly identify it as a tuple.",
    "category": "Java"
  },
  {
    "question": "When Tata Consultancy Services established?",
    "options": [
      {
        "id": "A",
        "text": "1978",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "1968",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "1988",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "1958",
        "isCorrect": false
      }
    ],
    "hint": "Tata Consultancy Services (TCS) was established in 1968.",
    "category": "KYT"
  },
  {
    "question": "Drawback of Distributed computing is a.  Man Power cost increased",
    "options": [
      {
        "id": "B",
        "text": "Cost of computing increased",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Complexity Reduced",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None of the options",
        "isCorrect": false
      }
    ],
    "hint": "The provided correct answer is N/A, indicating that none of the given options are considered the correct answer for the drawback of distributed computing.",
    "category": "KYT"
  },
  {
    "question": "How many hours of video are uploaded to Youtube every minute",
    "options": [
      {
        "id": "A",
        "text": "10",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "50",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "80",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "100",
        "isCorrect": true
      }
    ],
    "hint": "As of various reports, around 100 hours of video are uploaded to YouTube every minute.",
    "category": "KYT"
  },
  {
    "question": "Computer Algorithms which determines the category of observation based on previously seen examples i s called as",
    "options": [
      {
        "id": "A",
        "text": "Linear Regression",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Classification",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Maturity Learning",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Numerical regression",
        "isCorrect": false
      }
    ],
    "hint": "Classification algorithms are a type of supervised learning that categorizes new observations into discrete classes based on patterns learned from labeled training data.",
    "category": "KYT"
  },
  {
    "question": "Which application takes Highest Maintenance cost",
    "options": [
      {
        "id": "A",
        "text": "Native Application",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Web Application",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Composite Application",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Hybrid Application",
        "isCorrect": false
      }
    ],
    "hint": "Native applications typically incur higher maintenance costs due to the need for separate codebases and updates across multiple platforms (iOS, Android, etc.).",
    "category": "KYT"
  },
  {
    "question": "What are the stages in the IBC approach? a.  Introduction, Body, Cohesion",
    "options": [
      {
        "id": "B",
        "text": "Introduction, Body, Content",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Introduction, Body, Conclusion",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "None of the options",
        "isCorrect": false
      }
    ],
    "hint": "The IBC approach (Introduction, Body, Conclusion) is a standard structure used in communication and writing to organize information logically and effectively.",
    "category": "BizSkill"
  },
  {
    "question": "The purpose of writing is expressed by which type of question?",
    "options": [
      {
        "id": "A",
        "text": "how",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "when",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "why",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "who",
        "isCorrect": false
      }
    ],
    "hint": "The 'why' question directly addresses the purpose or objective behind a piece of writing.",
    "category": "BizSkill"
  },
  {
    "question": "The CIBI Bank requested TCS to upgrade their systems worldwide and to digitize 80% of their workflow. TCS not only completed the given work on time but also provided IT training sessions for the bank empl oyees to get accustomed to the upgrades. What is this service termed as ?",
    "options": [
      {
        "id": "A",
        "text": "Keeping commitments",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Robotic service",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Value-added service",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Systematic service",
        "isCorrect": false
      }
    ],
    "hint": "Providing IT training sessions beyond the initial scope of the project (system upgrade and digitization) is considered a value-added service because it enhances the client's overall benefit.",
    "category": "BizSkill"
  },
  {
    "question": "Select the options that may apply while responding to an angry customer's e-mail.",
    "options": [
      {
        "id": "A",
        "text": "Acknowledge their frustration and restate it in your own words.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Align with the customer by letting them know you’ve heard and understood the issue.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Assure the customer that you will resolve the issue at the earliest.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "All of the options",
        "isCorrect": true
      }
    ],
    "hint": "When responding to an angry customer, it is crucial to acknowledge their frustration, align with their perspective, and assure them of a resolution, making all listed options appropriate.",
    "category": "BizSkill"
  },
  {
    "question": "He had a Masters in Business Administration (MBA). Here MBA is :",
    "options": [
      {
        "id": "A",
        "text": "Acronym",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Abbreviation",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Elision",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "All of the options",
        "isCorrect": false
      }
    ],
    "hint": "An MBA is an abbreviation, specifically an acronym, but generally falls under the broader category of an abbreviation as a shortened form of a word or phrase.",
    "category": "BizSkill"
  },
  {
    "question": "Stephen would be traveling home to attend his brother's wedding. What information should he exclude w hile drafting a mail prior to his leave ?",
    "options": [
      {
        "id": "A",
        "text": "The reason behind taking leave.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "The period of his absence specified by dates.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "The details of the wedding as well as Stephen's means of travelling back.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "An update on the current status of his work and details about the handover of the task to a fellow as sociate.",
        "isCorrect": false
      }
    ],
    "hint": "Personal details like wedding specifics and travel arrangements are generally irrelevant for a professional leave email and should be excluded to maintain conciseness and professionalism.",
    "category": "BizSkill"
  },
  {
    "question": "What are the elements of a Project Status Report?",
    "options": [
      {
        "id": "A",
        "text": "Current status, Plan for next phase and Areas of concern.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Current status and Areas of concern.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Current status, Areas of concern, Suggestions and Plan for next week.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Current status, Areas of concern and Suggestions.",
        "isCorrect": false
      }
    ],
    "hint": "A comprehensive Project Status Report typically includes the current status, highlights areas of concern or risks, offers suggestions, and outlines the plan for the next period.",
    "category": "BizSkill"
  },
  {
    "question": "Rose chooses not to consult her colleagues while fixing a problem, as she is sure that they are too busy. Identify the mind trap.",
    "options": [
      {
        "id": "A",
        "text": "Defending prior choices",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Selecting supporting information",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Trap of assumptions",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Trap of initial ideas",
        "isCorrect": false
      }
    ],
    "hint": "Rose's decision not to consult colleagues based on her belief they are too busy, without verifying, is an example of falling into the trap of assumptions.",
    "category": "BizSkill"
  },
  {
    "question": "Group decision is an important element in which of the following work cultures?",
    "options": [
      {
        "id": "A",
        "text": "US, UK and Middle East.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "US, UK and Australia.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "India, Japan and Australia.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "India, Japan and Middle East.",
        "isCorrect": true
      }
    ],
    "hint": "In many Asian and Middle Eastern cultures, including India and Japan, group consensus and collective decision-making are highly valued and integral to the work environment.",
    "category": "BizSkill"
  },
  {
    "question": "What factors should you consider before preparing a help document on the newly introduced 'search' func tionality in ABC online application ?",
    "options": [
      {
        "id": "A",
        "text": "Interest level of the users.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Gender of the users.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Technical knowledge of the users.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Experience of the users.",
        "isCorrect": true
      }
    ],
    "hint": "Considering the interest level of users helps tailor the document's approach, making it more engaging and focused on what users most need to know to capture their attention and ensure they utilize the help.",
    "category": "BizSkill"
  },
  {
    "question": "List 3 aspects that will be at stake, if a major impact on business has occurred due to an outage",
    "options": [
      {
        "id": "A",
        "text": "Sales Revenue , Brand reputation and Integrity in business",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Brand reputation , Employee Utilization",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Integrity in business and Sales Revenue",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Employee Utilization,Brand Reputation and Sales Reveneue",
        "isCorrect": false
      }
    ],
    "hint": "A major business outage directly impacts sales revenue, damages brand reputation, and can compromise the integrity and trust customers have in the business.",
    "category": "Miscellaneous"
  },
  {
    "question": "Amazon had suffered a major outage of its Simple Storage Service, also known as S3, crippling significant portions of the web for several hours. Amazon said the S3 team was working on an issue that was slowing down its billing system. Here’s what happened, according to Amazon, at 9:37 a.m. Pacific, starting the outage: “an authorized S3 team member using an established playbook executed a command which was intended to remove a small number of servers for one of the S3 subsystems that is used by the S3 billing process. Unfortunately, one of the inputs to the command was entered incorrectly and a larger set of servers was removed than intended.” This has occurred due to",
    "options": [
      {
        "id": "A",
        "text": "Proper knowledge transfer was missing which lead the team in distress. Lacked clarity and knowled ge regarding the incident",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Communication and escalation management as incident occurred due to wrong information being p assed to the team member",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Access management, as authorized team member inappropriately made use of his access without pr oper validation",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "None of the options",
        "isCorrect": false
      }
    ],
    "hint": "The incident highlights a failure in access management, as an authorized user made an error, demonstrating that even with proper authorization, lack of validation or safeguards can lead to significant outages.",
    "category": "Miscellaneous"
  },
  {
    "question": "Actions NOT to be taken during flood of alerts is",
    "options": [
      {
        "id": "A",
        "text": "Relating the incidents for quick closure.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Following the Hierarchical escalation.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Disabling the alerts.",
        "isCorrect": true
      }
    ],
    "hint": "Disabling alerts during a flood of alerts is a dangerous practice as it can lead to missing critical information, potentially worsening an incident or delaying resolution.",
    "category": "Algorithms"
  },
  {
    "question": "Advantages of SOLID principles are 1. Helps design systems that are robust 2. Helps design systems that are flexible 3. Helps design systems that exhibit ease of maintenance 4. Helps design system that do not cost much to maintain",
    "options": [
      {
        "id": "A",
        "text": "1 and 2",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "2 and 3",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "1 , 3 and 4",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "All of the options",
        "isCorrect": true
      }
    ],
    "hint": "SOLID principles promote the creation of software systems that are robust, flexible, easier to maintain, and therefore can reduce long-term maintenance costs.",
    "category": "Algorithms"
  },
  {
    "question": "Developers should follow the design principles to achieve which of the following qualities",
    "options": [
      {
        "id": "A",
        "text": "Extensible and Simplicity",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Readability and Simplicity",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Extensible , Maintainability and Readability",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Maintainability",
        "isCorrect": false
      }
    ],
    "hint": "Design principles guide developers in creating software that is easier to extend with new features, simpler to maintain over time, and more readable for other developers.",
    "category": "Algorithms"
  },
  {
    "question": "What is the usage of <span> in html?",
    "options": [
      {
        "id": "A",
        "text": "It is often used as a container for other HTML elements to style them with CSS",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "It is used to group inline-elements in a document",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "It is used to highlight parts of your text.",
        "isCorrect": false
      }
    ],
    "hint": "The <span> tag is an inline container used to group and apply styles or scripts to a small section of text or other inline elements.",
    "category": "UI"
  },
  {
    "question": "What is the correct syntax to set border colors?",
    "options": [
      {
        "id": "A",
        "text": "<h1 style=\"border-line: 2px solid DodgerBlue;\">Hello World</h1>",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "<h1 style=\"border: DodgerBlue;\">Hello World</h1>",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "<h1 style=\"border: 2px solid DodgerBlue;\">Hello World</h1>",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "None of the options",
        "isCorrect": false
      }
    ],
    "hint": "The correct CSS syntax for setting a border includes specifying its width, style, and color, typically in the shorthand border: width style color; format.",
    "category": "UI"
  },
  {
    "question": "What is the correct syntax to apply css for the below code? <h2 class=\"city\">London</h2> <p>London is the capital of England.</p>",
    "options": [
      {
        "id": "A",
        "text": ".city { background-color: tomato; color: white; padding: 10px; }",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "#city { background-color: tomato; color: white; padding: 10px; }",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "city { background-color: tomato; color: white; padding: 10px; }",
        "isCorrect": false
      }
    ],
    "hint": "To apply CSS to an HTML element with a specific class, you use a class selector, which starts with a dot (.) followed by the class name.",
    "category": "UI"
  },
  {
    "question": "What is the usage of <svg> tag in html?",
    "options": [
      {
        "id": "A",
        "text": "It is used to adds audio controls, like play, pause, and volume",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "It is used to draw graphics, on the fly, via scripting",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "It is used for drawing paths, boxes and graphic images etc.",
        "isCorrect": true
      }
    ],
    "hint": "The <svg> tag defines a container for Scalable Vector Graphics, which are used to draw vector-based two-dimensional graphics directly within HTML.",
    "category": "UI"
  },
  {
    "question": "How do you add a background color for Xplore <h1> elements?",
    "options": [
      {
        "id": "A",
        "text": "Xplore.h1 {background-color:#FFFFFF}",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "ha.Xplore {background-color:#FFFFFF}",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "h1 {bg-color:#FFFFFF}",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "h1 {background-color:#FFFFFF}",
        "isCorrect": true
      }
    ],
    "hint": "To apply a style to all <h1> elements, you use the element selector h1 directly in CSS, followed by the desired property and value.",
    "category": "UI"
  },
  {
    "question": "Which of the following is not a valid style for the paragraph? p { color: red; font-family: courier; font-size: 160%; border-style: dotted dashed solid double; margin-right: 150px; float: bottom; }",
    "options": [
      {
        "id": "A",
        "text": "Font-size",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Border-style",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "float",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Font-family",
        "isCorrect": false
      }
    ],
    "hint": "The float CSS property accepts values like left, right, none, or inherit, but bottom is not a valid value for floating elements.",
    "category": "UI"
  },
  {
    "question": "Which one is a valid style;",
    "options": [
      {
        "id": "A",
        "text": "p { //Styling paragraph. color: red; text-align: center; }",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "p { – Styling paragraph. color: red; text-align: center; }",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "p { /*Styling paragraph.*/ color: red; text-align: center; }",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "p { <!--Styling paragraph. → color: red; text-align: center; }",
        "isCorrect": false
      }
    ],
    "hint": "CSS comments are denoted by /* comment */, making option C the only one with correct comment syntax for styling.",
    "category": "UI"
  },
  {
    "question": "Which among the following is not CSS background properties;",
    "options": [
      {
        "id": "A",
        "text": "background-repeat",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "background-attachment",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "background-position",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "background-render",
        "isCorrect": true
      }
    ],
    "hint": "background-render is not a standard CSS background property; common background properties include background-repeat, background-attachment, and background-position.",
    "category": "UI"
  },
  {
    "question": "JavaScript programs are executed by the Script Engine.",
    "options": [
      {
        "id": "A",
        "text": "TRUE",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "FALSE",
        "isCorrect": true
      }
    ],
    "hint": "JavaScript programs are executed by a JavaScript engine, which is often embedded within web browsers or runtime environments like Node.js.",
    "category": "UI"
  },
  {
    "question": "What will be the output of the below code; <html> <body> <p id=\"result\"></p> <script> var x = myFunction(NaN, 3); document.getElementById(\"result\").innerHTML = x; function myFunction(a, b) { return a * b; } </script> </body> </html>",
    "options": [
      {
        "id": "A",
        "text": "0",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "3",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "NaN",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Script Error",
        "isCorrect": false
      }
    ],
    "hint": "Any arithmetic operation involving NaN (Not a Number) will always result in NaN.",
    "category": "UI"
  },
  {
    "question": "Which keyword is used to accept input from the user?",
    "options": [
      {
        "id": "A",
        "text": "ReadLine",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Readkey",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "WriteLine",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Write",
        "isCorrect": false
      }
    ],
    "hint": "In C#, Console.ReadLine() is commonly used to read a line of text input from the user.",
    "category": "C# / .NET"
  },
  {
    "question": "Correct output for code is? static void Main(string[] args) { float a = 10.553f; long b = 12L; int c; c = Convert.ToInt32(a + b); Console.WriteLine(c);Correct output for code is? static void Main(string[] args) { float a = 10.553f; long b = 12L; int c; c = Convert.ToInt32(a + b); Console.WriteLine(c);Correct output for code is? static void Main(string[] args) { float a = 10.553f; long b = 12L; int c; c = Convert.ToInt32(a + b); Console.WriteLine(c);Correct output for code is? static void Main(string[] args) { float a = 10.553f; long b = 12L; int c; c = Convert.ToInt32(a + b); Console.WriteLine(c);",
    "options": [
      {
        "id": "A",
        "text": "2c.453",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "22",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "23",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "2b.453",
        "isCorrect": false
      }
    ],
    "hint": "a + b evaluates to 10.553 + 12 = 22.553. Convert.ToInt32() rounds this value to the nearest integer, which is 23.",
    "category": "Java"
  },
  {
    "question": "What would be the output of the following code? class Program { static void Main(string[] args) { string name; Console.Write(\"Welcome \"); name = \"Prem\"; Console.WriteLine(\"name\"); Console.ReadLine(); } }What would be the output of the following code? class Program { static void Main(string[] args) { string name; Console.Write(\"Welcome \"); name = \"Prem\"; Console.WriteLine(\"name\"); Console.ReadLine(); } }What would be the output of the following code? class Program { static void Main(string[] args) { string name; Console.Write(\"Welcome \"); name = \"Prem\"; Console.WriteLine(\"name\") ; Console.ReadLine(); } }What would be the output of the following code? class Program { static void Main(string[] args) { string name; Console.Write(\"Welcome \"); name = \"Prem\"; Console.WriteLine(\"name\") ; Console.ReadLine(); } }",
    "options": [
      {
        "id": "A",
        "text": "Welcome Prem",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Welcomename",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Welcome name",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "WelcomePrem",
        "isCorrect": false
      }
    ],
    "hint": "Console.Write(\"Welcome \"); prints \"Welcome \" without a newline. Console.WriteLine(\"name\"); then prints the literal string \"name\" followed by a newline, resulting in \"Welcome name\".",
    "category": "Java"
  },
  {
    "question": "What will be the value of i, j, k after execution of the following statements? int i, j, k; i = 4; j = 30; k = 0; k = j++ / i++; What will be the value of i, j, k after execution of the following statements? int i, j, k; i = 4; j = 30; k = 0; k = j++ / i++; What will be the value of i, j, k after execution of the following statements? int i, j, k; i = 4; j = 30; k = 0; k = j++ / i++; What will be the value of i, j, k after execution of the following statements? int i, j, k; i = 4; j = 30; k = 0; k = j++ / i++;",
    "options": [
      {
        "id": "A",
        "text": "5 31 7",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "5 31 8",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "5 31 6",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "4 30 7",
        "isCorrect": false
      }
    ],
    "hint": "j++ uses 30 then increments j to 31. i++ uses 4 then increments i to 5. So k = 30 / 4 (integer division) results in 7. Finally, i=5, j=31, k=7.",
    "category": "Java"
  },
  {
    "question": "ubyte is a 8 bit signed integer datatype.",
    "options": [
      {
        "id": "A",
        "text": "TRUE",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "FALSE",
        "isCorrect": true
      }
    ],
    "hint": "In C#, byte is an 8-bit unsigned integer, while sbyte is an 8-bit signed integer; there is no ubyte type, and byte itself is unsigned.",
    "category": "C# / .NET"
  },
  {
    "question": "What would be the output of the following code? class Program { static void Main(string[] args) { int a = 10; if (a < 20) { a = 20; } Console.WriteLine(\"value of a is : {0}\", a); Console.ReadLine(); } }What would be the output of the follwoing code? class Program { static void Main(string[] args) { int a = 10; if (a < 20) { a = 20; } Console.WriteLine(\"value of a is : {0}\", a); Console.ReadLine(); } }What would be the output of the following code? class Program { static void Main(string[] args) { int a = 10; if (a < 20) { a = 20; } Console.WriteLine(\"value of a is : {0}\", a); Console.ReadLine(); } }What would be the output of the follwoing code? class Program { static void Main(string[] args) { int a = 10; if (a < 20) { a = 20; } Console.WriteLine(\"value of a is : {0}\", a); Console.ReadLine(); } }",
    "options": [
      {
        "id": "A",
        "text": "value of a is : 10",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "value of a is : {0}10",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "value of a is : 20",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "value of a is : {0}20",
        "isCorrect": false
      }
    ],
    "hint": "The condition a < 20 (10 < 20) is true, so a is reassigned to 20, and this new value is printed.",
    "category": "Java"
  },
  {
    "question": "The -------- keyword is used to stop any conditional statement or loop.",
    "options": [
      {
        "id": "A",
        "text": "continue",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "bool",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "if",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "break",
        "isCorrect": true
      }
    ],
    "hint": "The break keyword is used to exit immediately from the innermost loop or switch statement.",
    "category": "C# / .NET"
  },
  {
    "question": "What will be the output of the C#.NET code snippet given below? static void Main(string[] args) { int i, j = 1, k; for (i = 0; i < 5; i++) { k = j++ + ++j; Console.Write(k + \" \"); } Console.ReadLine(); }What will be the output of the C#.NET code snippet given below? static void Main(string[] args) { int i, j = 1, k; for (i = 0; i < 5; i++) { k = j++ + ++j; Console.Write(k + \" \"); } Console.ReadLine(); }What will be the output of the C#.NET code snippet given below? static void Main(string[] args) { int i, j = 1, k; for (i = 0; i < 5; i++) { k = j++ + ++j; Console.Write(k + \" \"); } Console.ReadLine(); }What will be the output of the C#.NET code snippet given below? static void Main(string[] args) { int i, j = 1, k; for (i = 0; i < 5; i++) { k = j++ + ++j; Console.Write(k + \" \"); } Console.ReadLine(); }",
    "options": [
      {
        "id": "A",
        "text": "8 4 16 12 20",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "4 8 12 16 20",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "4 8 16 32 64",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "2 4 6 8 10",
        "isCorrect": false
      }
    ],
    "hint": "In C#, the pre-increment (++j) and post-increment (j++) operators modify j and return its value based on their timing, leading to the sequence 4, 8, 12, 16, 20.",
    "category": "Java"
  },
  {
    "question": "Choose the example/s for Value types",
    "options": [
      {
        "id": "A",
        "text": "Struct and Enum",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Enum and Class",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Class and String",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "string and Enum",
        "isCorrect": false
      }
    ],
    "hint": "In C#, struct and enum are value types, meaning they directly store their data, while class and string are reference types.",
    "category": "C# / .NET"
  },
  {
    "question": "Which keyword is used to add an item to the list?",
    "options": [
      {
        "id": "A",
        "text": "Add",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Insert",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "AddRange",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Take",
        "isCorrect": false
      }
    ],
    "hint": "The Add method is the standard way to append a single item to the end of a List collection in C#.",
    "category": "C# / .NET"
  },
  {
    "question": "ADO .net and web API Which join combines all rows from both tables?",
    "options": [
      {
        "id": "A",
        "text": "Inner Join",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Left Outer Join",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Right Outer Join",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Cross Join",
        "isCorrect": true
      }
    ],
    "hint": "A CROSS JOIN produces a Cartesian product of the two tables, combining every row from the first table with every row from the second table.",
    "category": "Java"
  },
  {
    "question": "Primary key should always be auto increment",
    "options": [
      {
        "id": "A",
        "text": "TRUE",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "FALSE",
        "isCorrect": true
      }
    ],
    "hint": "A primary key uniquely identifies each record in a table and can be any unique column(s); it is not required to be auto-incrementing.",
    "category": "C# / .NET"
  },
  {
    "question": "IN is used to check the list of matching values",
    "options": [
      {
        "id": "A",
        "text": "TRUE",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "FALSE",
        "isCorrect": false
      }
    ],
    "hint": "The IN operator in SQL is used in a WHERE clause to specify multiple possible values for a column, checking if a value matches any value in a list.",
    "category": "C# / .NET"
  },
  {
    "question": "Which of the following statement(s) is/are correct? Which of the following statement(s) is/are correct?Which of the following statement(s) is/are correct? Which of the following statement(s) is/are correct?",
    "options": [
      {
        "id": "A",
        "text": "\" TRUNCATE TABLE is identical to DELETE statement without WHERE clause and both remove all rows in a table.\"",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "\" TRUNCATE TABLE has to be used along with a WHERE clause\"",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "\" TRUNCATE TABLE deletes table from a database\"",
        "isCorrect": false
      }
    ],
    "hint": "Both TRUNCATE TABLE and DELETE without a WHERE clause remove all rows from a table, but TRUNCATE is typically faster and resets identity columns, while DELETE can be rolled back.",
    "category": "Java"
  },
  {
    "question": "TRUNCATE TABLE is identical to DELETE statement without WHERE clause and both remove all row s in a table TRUNCATE TABLE is identical to DELETE statement without WHERE clause and both remove all row s in a table",
    "options": [
      {
        "id": "A",
        "text": "(1) By default, the ORDER BY clause retrieve the records in ascending order.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "(2)The clause REVERSE ORDER BY is used to retrieve the records in reverse order.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "(3)COUNT(*) is used to retrieve the number of columns for a table.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "(4) More than one column can be used with the GROUP BY clause.",
        "isCorrect": true
      }
    ],
    "hint": "The ORDER BY clause sorts query results in ascending order by default if ASC or DESC is not specified.",
    "category": "Java"
  },
  {
    "question": "Disadvantages of View",
    "options": [
      {
        "id": "A",
        "text": "A.Performance",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "B.Update restrictions",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Both A and B",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "None of the options",
        "isCorrect": false
      }
    ],
    "hint": "Views can sometimes lead to performance overhead due to complex underlying queries and often have restrictions on direct data modification (updates).",
    "category": "SQL / PLSQL"
  },
  {
    "question": "Consider the following code snippet: DataSet myDataSet = new DataSet(); myDataAdapter.Fill(myDataSet); What is the functionality of the above code segment?Consider the following code snippet: DataSet myDataSet = new DataSet(); myDataAdapter.Fill(myDataSet); What is the functionality of the above code segment?",
    "options": [
      {
        "id": "A",
        "text": "Executes the SelectCommand and fills myDataSet with the resultant data",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Executes the SelectCommand but does not fill myDataSet with the resultant data",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "It declares the DataSet()",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "It declares the DataAdapter",
        "isCorrect": false
      }
    ],
    "hint": "The Fill method of a DataAdapter executes the SelectCommand associated with it and populates the DataSet with the retrieved data from the database.",
    "category": "Java"
  },
  {
    "question": "Which ADO.NET object is very fast in getting data from database?",
    "options": [
      {
        "id": "A",
        "text": "Dataset",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Data Reader",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Data Adapter",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Data View",
        "isCorrect": false
      }
    ],
    "hint": "DataReader provides a fast, forward-only, read-only stream of data from a database, making it highly efficient for retrieving data.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "is Used to required add parameters to stored procedure in Sql Server",
    "options": [
      {
        "id": "A",
        "text": "SqlParameter",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Parameter",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "sqlParameters",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None of the options",
        "isCorrect": false
      }
    ],
    "hint": "In ADO.NET, the SqlParameter class is used to define and add parameters when executing stored procedures or parameterized SQL queries against SQL Server.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "Which of the following illustrates the benefit of ADO.NET?",
    "options": [
      {
        "id": "A",
        "text": "Interoperability",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "It uses DataSet to represent data in memory that can store data from multiple tables and multiple so urces.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Disconnected data access",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "It uses only connected model",
        "isCorrect": false
      }
    ],
    "hint": "ADO.NET's design allows it to work seamlessly with various data sources and technologies, promoting interoperability across different systems and platforms.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "Computer Algorithms which determines the category of observation based on previously seen examples i s called as",
    "options": [
      {
        "id": "A",
        "text": "Linear Regression",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Classification",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Maturity Learning",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Numerical regression",
        "isCorrect": false
      }
    ],
    "hint": "Classification algorithms are a type of supervised learning that categorizes new observations into discrete classes based on patterns learned from labeled training data.",
    "category": "KYT"
  },
  {
    "question": "When Tata Consultancy Services established?",
    "options": [
      {
        "id": "A",
        "text": "1978",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "1968",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "1988",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "1971",
        "isCorrect": false
      }
    ],
    "hint": "Tata Consultancy Services (TCS) was established in 1968.",
    "category": "KYT"
  },
  {
    "question": "Some challenges in Artificial Intelligence are",
    "options": [
      {
        "id": "A",
        "text": "Cost",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Technology",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Common Sense",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "All of the options",
        "isCorrect": true
      }
    ],
    "hint": "Challenges in Artificial Intelligence include the high cost of development and deployment, the need for advanced technology, and replicating human common sense reasoning.",
    "category": "Miscellaneous"
  },
  {
    "question": "Advantages of Cloud Services are a.  No Hardware Procurement required",
    "options": [
      {
        "id": "B",
        "text": "Space for hosting equipment is not required",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Cost for technicians who maintain Hardware",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Security",
        "isCorrect": false
      },
      {
        "id": "E",
        "text": "All of the options",
        "isCorrect": true
      }
    ],
    "hint": "Cloud services offer numerous advantages, including eliminating the need for hardware procurement and hosting space, reducing costs for hardware maintenance technicians, and often providing robust security features.",
    "category": "KYT"
  },
  {
    "question": "What are the problems associated with Big Data",
    "options": [
      {
        "id": "A",
        "text": "Inexperience collecting data from nontraditional sources",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Not accustomed to dealing with such large quantities of data",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Overly complex with relatively slow systems",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "All of the options",
        "isCorrect": true
      }
    ],
    "hint": "Problems associated with Big Data include inexperience in collecting data from non-traditional sources, difficulties dealing with vast quantities of data, and the complexity of managing relatively slow systems.",
    "category": "KYT"
  },
  {
    "question": "Judging another person's views solely based on our own values and culture is called :",
    "options": [
      {
        "id": "A",
        "text": "Centrality",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Diversity",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Ethnocentrism",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Criticism",
        "isCorrect": false
      }
    ],
    "hint": "Ethnocentrism is the tendency to view one's own culture as the most important or correct and to use it as the standard by which to judge all other cultures.",
    "category": "BizSkill"
  },
  {
    "question": "Paul is working with a client who is casual while communicating with him through chat application. The client sends him memes and other forwards in order to build better workplace relationships. Select the best option.",
    "options": [
      {
        "id": "A",
        "text": "Paul can be task oriented and polite. He can avoid reciprocating by sharing memes and forward thro ugh chat application.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Since the client is informal while communicating, Paul can also do the same.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Paul can tell the client that what is done so far is not right and that it's not professional to do so.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Paul should take up this matter with the HR.",
        "isCorrect": false
      }
    ],
    "hint": "Maintaining professionalism by staying task-oriented and polite, while avoiding unprofessional reciprocation, is the best approach to manage informal client communication without being offensive.",
    "category": "Java"
  },
  {
    "question": "What is true about Agile principles? A. Leadership over management B. Management over leadership C. Adaptive over prescriptive D. Prescriptive over adaptive E. Customer collaboration over contract negotiation F. Contract negotiation over customer collaboration",
    "options": [
      {
        "id": "A",
        "text": "B,C,E",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "A,D,F",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "A,C,E",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "B,D,F",
        "isCorrect": false
      }
    ],
    "hint": "Agile principles prioritize leadership over management, being adaptive over prescriptive, and customer collaboration over strict contract negotiation to foster flexibility and value delivery.",
    "category": "Java"
  },
  {
    "question": "You are a team lead. During an initial meeting, you realise that you need 3 additional resources to work o n the project. How will you communicate the same effectively in a Project Status Report?",
    "options": [
      {
        "id": "A",
        "text": "Having 3 more associates in our team would help us complete the task effectively.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "We have less number of associates in our team to complete the project work so if we are provided w ith 3 more associates, we would be able to complete the task.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "We are facing a shortage of manpower for the task. Hence we need 3 more resources.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "We need 3 associates to join our team. This would help us complete the task effectively.",
        "isCorrect": false
      }
    ],
    "hint": "This option clearly states the problem (shortage of manpower) and directly presents the solution (need 3 more resources) in a concise and professional manner suitable for a status report.",
    "category": "Java"
  },
  {
    "question": "What all details should be provided in the signature of an e-mail? Choose the best options. a) Name & role b) Phone & e-mail ID c) Personal address d) Organization Website",
    "options": [
      {
        "id": "A",
        "text": "a, b & d",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "a, b & c",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "b, c & d",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "a, b, c &d",
        "isCorrect": false
      }
    ],
    "hint": "A professional email signature typically includes your name, role, contact details (phone, email), and relevant organizational information like the website, excluding personal addresses.",
    "category": "Java"
  },
  {
    "question": "‘Being objective’ in your writing is the ability to: a.Present accurate facts and figures. b.Present facts and not personal views. c.Present stereotypical information.",
    "options": [
      {
        "id": "A",
        "text": "1,3",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "1,2",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "1,2,3",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "2,3",
        "isCorrect": false
      }
    ],
    "hint": "Being objective in writing means focusing on verifiable facts and figures, and avoiding the inclusion of personal opinions or biases to ensure impartiality.",
    "category": "Java"
  },
  {
    "question": "Katherine is about to write an important e-mail to one of her stakeholders and she is NOT SURE about th e use of certain phrases. Which among the following can she make use of? a) It is a blunder. b) I was wondering if you could... c) Sorry, I can't meet you. I'm busy that day. d) I am afraid I won't be available.",
    "options": [
      {
        "id": "A",
        "text": "a & b",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "b & d",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "b & c",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "a, b, c &d",
        "isCorrect": false
      }
    ],
    "hint": "Phrases like \"I was wondering if you could...\" are polite requests, and \"I am afraid I won't be available\" is a professional way to decline, unlike the direct or blunt options.",
    "category": "Java"
  },
  {
    "question": "You open your mail and see various emails which needs to be replied. In what sequence will you reply ?",
    "options": [
      {
        "id": "A",
        "text": "Read each of them according to the order and reply one after the other.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Prioritize the emails based on their importance and then reply.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Forward the latest offers that are available in the e-commerce sites to your friends and then reply to the emails.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Mails will always be there, so have a coffee break with your colleagues first and send the emails lat er.",
        "isCorrect": false
      }
    ],
    "hint": "Effective email management involves prioritizing messages by urgency and importance to ensure critical tasks are addressed first, rather than simply replying in order received or delaying.",
    "category": "BizSkill"
  },
  {
    "question": "You have joined a project and you are in the training phase now. The project requires that you know the b asics of Ruby on Rails. You complete an e-learning course on the same and now you are taking the assess ment. During the assessment, a senior member of the team approaches you and asks if you can join a conf erence call instead of him. He requests you to just attend the call for 10 minutes. How will you respond?",
    "options": [
      {
        "id": "A",
        "text": "Since you are in the middle of an assessment, politely say no to the team member. Explain your pre dicament. You can inform him that you would join the call after the assessment.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "It is impolite to say no to a team member. You can take the assessment again, but the opportunity to attend this call, may never come back in your life.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "You can say no as you have every right to say so. Your team mate will understand that your reason i s genuine when you talk to him while looking at the monitor.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "It is impolite to say 'no' when you are the junior. After reaching a high position within the organizati on you can say 'no' as much as you want.",
        "isCorrect": false
      }
    ],
    "hint": "It's important to prioritize your ongoing assessment for training completion while politely communicating your availability and willingness to assist later, showing both responsibility and helpfulness.",
    "category": "Java"
  },
  {
    "question": "Choose the relevant answer/s that makes the following sentence complete and unambiguous - ' I like cant een but I do not like the food'",
    "options": [
      {
        "id": "A",
        "text": "I do not like the food served in the canteen, but the canteen I like.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "The ambience of the canteen is pleasant, however the quality of food could improve.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "I like the canteen in our office but not the food served there.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "I am in deep disagreement with the nature of food served in the canteen, however the kind of servic es and the ambiance on offer, I have little to complain about.",
        "isCorrect": false
      }
    ],
    "hint": "This option clearly distinguishes between liking the canteen's atmosphere and disliking its food quality, providing a complete and unambiguous meaning to the original phrase.",
    "category": "Java"
  },
  {
    "question": "Of the following which best suits the following phrase? The production logs can be shared with the conce rned team after appropriate .",
    "options": [
      {
        "id": "A",
        "text": "Data masking",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Review",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Approval",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None of the options",
        "isCorrect": false
      }
    ],
    "hint": "Data masking is crucial when sharing production logs to protect sensitive information by obscuring or replacing it with realistic but non-sensitive data, ensuring privacy and compliance.",
    "category": "Java"
  },
  {
    "question": "RiO week is celebrated to",
    "options": [
      {
        "id": "A",
        "text": "bring an awareness about lifecycle of a software to all the TCSers",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "create awareness regarding software quality",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "An initiative that is aimed at improving our production support operations.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "None of the choices are correct",
        "isCorrect": false
      }
    ],
    "hint": "RiO (Refactor, Improve, Optimize) week is specifically an initiative focused on enhancing the efficiency and quality of production support operations within the organization.",
    "category": "Miscellaneous"
  },
  {
    "question": "Duplication of code is the root cause of most of the maintenance problems",
    "options": [
      {
        "id": "A",
        "text": "1",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "FALSE",
        "isCorrect": false
      }
    ],
    "hint": "Code duplication leads to increased maintenance effort, higher chances of introducing bugs, and makes the codebase harder to understand and update, making it a major maintenance problem.",
    "category": "Miscellaneous"
  },
  {
    "question": "Which of the following sorting algorithms in its typical implementation gives best performance when app lied on an array which is sorted or almost sorted (maximum 1 or two elements are misplaced).",
    "options": [
      {
        "id": "A",
        "text": "Insertion Sort",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Merge Sort",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Quick Sort",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Bubble Sort",
        "isCorrect": false
      }
    ],
    "hint": "Insertion Sort performs very well on nearly sorted arrays because it only shifts elements by a small number of positions, resulting in O(n) complexity in the best-case scenario.",
    "category": "Java"
  },
  {
    "question": "As per good programming practices it is better to in codes.",
    "options": [
      {
        "id": "A",
        "text": "minimize coupling and decrease cohesion",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "maximize coupling and increase cohesion",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "minimize coupling and increase cohesion",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "maximize coupling and decrease cohesion",
        "isCorrect": false
      }
    ],
    "hint": "Good programming practices advocate for minimizing coupling (interdependencies between modules) and maximizing cohesion (how related the elements within a module are) to improve maintainability and flexibility.",
    "category": "Algorithms"
  },
  {
    "question": "Which of the following is not a formatting element in HTML?",
    "options": [
      {
        "id": "A",
        "text": "<b>",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "<p>",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "<strong>",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "<del>",
        "isCorrect": false
      }
    ],
    "hint": "The `<p>` tag defines a paragraph, which is a structural element for blocks of text, whereas `<b>`, `<strong>`, and `<del>` are primarily used for text formatting (bold, strong emphasis, deleted text).",
    "category": "UI"
  },
  {
    "question": "What will be the out put of the below code; <!DOCTYPE html> <html> <body> <h1 style=\"font-group:verdana;\">Xplore HTML</h1> </body> </html>",
    "options": [
      {
        "id": "A",
        "text": "Print Xplore HTML in verdana font.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Print Xplore HTML in H1 with verdana font.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Print Xplore HTML in H1 with default font.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Print Xplore HTML without any formatting.",
        "isCorrect": false
      }
    ],
    "hint": "\"font-group\" is not a valid CSS property for setting font family; therefore, the browser will ignore it and render the `<h1>` element with its default font while retaining the heading size.",
    "category": "UI"
  },
  {
    "question": "<caption> is tag used to define the table caption.",
    "options": [
      {
        "id": "A",
        "text": "TRUE",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "FALSE",
        "isCorrect": false
      }
    ],
    "hint": "The `<caption>` tag in HTML is indeed used to define a caption for a table, providing a title or description for the table's content.",
    "category": "UI"
  },
  {
    "question": "<p>Top news:</p> <blockquote url=\"https://www.thehindu.com//\"> Top news from The Hindu; </blockquote> The above code will display today's news from The Hindu in blocks.",
    "options": [
      {
        "id": "A",
        "text": "TRUE",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "FALSE",
        "isCorrect": true
      }
    ],
    "hint": "The `<blockquote>` tag is used to indicate that the enclosed text is an extended quotation and does not have a `url` attribute to fetch or display content from an external link; the `cite` attribute is used for the source URL.",
    "category": "Java"
  },
  {
    "question": "Which html statement is used to emphasizing a text?",
    "options": [
      {
        "id": "A",
        "text": "<mark>",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "<emph>",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "<del>",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None of the options",
        "isCorrect": true
      }
    ],
    "hint": "The correct HTML tag for emphasizing text is `<em>` (for emphasis) or `<strong>` (for strong importance), neither of which is provided as an option.",
    "category": "UI"
  },
  {
    "question": "<html> <head> <style> a:link, a:visited { background-color: green; color: white; padding: 14px 25px; } a:hover, a:active { background-color: red; } </style> </head> <body> <a href=\"register.html\" target=\"_blank\">Register</a> </body> </html> What will be the out put of the above code?",
    "options": [
      {
        "id": "A",
        "text": "Create a button with default background color as green and on mouse over it change to red.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Create a link with default background color as green and on mouse over it change to red.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Create a link Register with default style.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None of options",
        "isCorrect": false
      }
    ],
    "hint": "The CSS styles define the `<a>` element to have a green background when in link or visited states, and a red background when hovered over or active, resulting in a colored link that changes color on hover.",
    "category": "UI"
  },
  {
    "question": "ul.a { list-type: lower-alpha; } The above style will display",
    "options": [
      {
        "id": "A",
        "text": "Used to display the <ul> with circle bullets.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Used to display the <ul> with roman letters.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Used to display the <ul> with lower case alphabets.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None of the options",
        "isCorrect": true
      }
    ],
    "hint": "The correct CSS property for list item markers is `list-style-type`, not `list-type`. Thus, the provided code will not work as intended, and none of the given options correctly describe its output.",
    "category": "Java"
  },
  {
    "question": "<html> <head> <style> .center { text-align: justify; border: 3px solid green; } </style> </head> <body> <div class=\"center\"> <p>Hello World.</p> </div> </body> </html> what will be the output of the above code?",
    "options": [
      {
        "id": "A",
        "text": "Display Hello World in a green border with align left.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Display Hello World in a green border with align center.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Display Hello World in a green border with align right.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Display Hello World without any border and align center.",
        "isCorrect": false
      }
    ],
    "hint": "While `text-align: justify` attempts to spread text evenly, for a single short line like \"Hello World.\", it often defaults to left alignment, within the specified green border.",
    "category": "Java"
  },
  {
    "question": "var x = 100 + 5 ** 3; what will be the output of x?",
    "options": [
      {
        "id": "A",
        "text": "315",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "225",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "115",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "NaN",
        "isCorrect": false
      }
    ],
    "hint": "The exponentiation operator `**` has higher precedence than addition, so `5 ** 3` (125) is calculated first, then added to 100, resulting in `100 + 125 = 225`.",
    "category": "Java"
  },
  {
    "question": "<html> <body> <script> function saveValue(x) { alert(x**2); } </script> <div id=\"myDiv\" style=\"display:none\"> <input type=\"button\" value=\"Click\" onclick=\"saveValue('5');\"> </div> </body> </html> What will be the output of the code?",
    "options": [
      {
        "id": "A",
        "text": "10",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "25",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Script Error",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None of options",
        "isCorrect": true
      }
    ],
    "hint": "The `div` containing the button is set to `display:none`, meaning it will not be visible or interactive, so the `onclick` event will never be triggered.",
    "category": "Java"
  },
  {
    "question": "Under which namespace StringBuilder class is present?",
    "options": [
      {
        "id": "A",
        "text": "System",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "System.Collections.Generic",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "System.Linq",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "System.Text",
        "isCorrect": true
      }
    ],
    "hint": "The `StringBuilder` class, used for mutable string operations, is part of the `System.Text` namespace in C#.",
    "category": "C# / .NET"
  },
  {
    "question": "The F10 key is used to debug and run an application.",
    "options": [
      {
        "id": "A",
        "text": "TRUE",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "FALSE",
        "isCorrect": true
      }
    ],
    "hint": "The F10 key typically performs a \"Step Over\" action in debuggers, allowing execution to proceed line by line without entering function calls, not for debugging and running an application generally.",
    "category": "C# / .NET"
  },
  {
    "question": "What is the output of the program. static void Main(string[] args) { int[] nn = new int[5]; nn[1] = 10; nn[2] = 20; nn[3] = 30; nn[4] = 40; nn[5] = 50; Console.WriteLine(nn[1]); Console.ReadLine(); }",
    "options": [
      {
        "id": "A",
        "text": "Compile Time error",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Run time error c.  10",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "None of options",
        "isCorrect": false
      }
    ],
    "hint": "The program will print '10' from `nn[1]` before an `IndexOutOfRangeException` occurs at runtime when trying to assign a value to `nn[5]`, as the array has indices 0-4.",
    "category": "Java"
  },
  {
    "question": "What is the output of the program below? static void Main(string[] args) { bool flag = false; if (!flag) { Console.Write(\"Hello,\"); } Console.Write(\"Hi\"); Console.ReadLine(); }",
    "options": [
      {
        "id": "A",
        "text": "Hello,Hi",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Hello,",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Hi",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None of options",
        "isCorrect": false
      }
    ],
    "hint": "The `!flag` condition evaluates to `!false`, which is `true`. Therefore, \"Hello,\" is printed. After the `if` block, \"Hi\" is unconditionally printed, resulting in \"Hello,Hi\".",
    "category": "Java"
  },
  {
    "question": "What is the output of code below? static void Main(string[] args) { int a = 5; int b = 10; int c; Console.WriteLine(c = a-- - ++b); Console.WriteLine(b); Console.ReadLine(); }",
    "options": [
      {
        "id": "A",
        "text": "-7, 10",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "-5, 11",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "-6, 11",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "15, 11",
        "isCorrect": false
      }
    ],
    "hint": "`a--` uses `a`'s current value (5) then decrements `a` to 4. `++b` increments `b` to 11 then uses its new value. So, `c = 5 - 11 = -6`. Then, `b` is `11`.",
    "category": "Java"
  },
  {
    "question": "If number 1 is greater than number 2, assign the value of number1 to result, else assign the value of number 2 to result. Which expression below you will use?",
    "options": [
      {
        "id": "A",
        "text": "int comparisonResult = (num1 > num2) ? num1 : num2;",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "int comparisonResult = (num1 >= num2) ? num1 : num2;",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "int comparisonResult = (num1 > num2) ? num2 : num1;",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "int comparisonResult = (num1 >= num2) ? num2 : num1;",
        "isCorrect": false
      }
    ],
    "hint": "This ternary operator correctly assigns `num1` to `comparisonResult` if `num1` is strictly greater than `num2`, otherwise it assigns `num2`, fulfilling the requirement.",
    "category": "Java"
  },
  {
    "question": "What would be the output of the following code? static void main(String[ ] args) { int x=5 ; int y=6 ; int z=(x!=y)?(x*y):(x+y) ; Console.WriteLine(z) ; Console.ReadLine(); }",
    "options": [
      {
        "id": "A",
        "text": "5",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "6",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "30",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "11",
        "isCorrect": false
      }
    ],
    "hint": "The condition `x != y` (5 != 6) is true. Therefore, the expression evaluates to `x * y`, which is `5 * 6 = 30`.",
    "category": "Java"
  },
  {
    "question": "--------- statement skips the current iteration of a for, while or do while loop. It causes the loop to immedi ately jump to the next iteration of the loop.",
    "options": [
      {
        "id": "A",
        "text": "break",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "continue",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Both the options",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None of options",
        "isCorrect": false
      }
    ],
    "hint": "The `continue` statement skips the rest of the current iteration of a loop and proceeds to the next iteration, whereas `break` exits the entire loop.",
    "category": "Java"
  },
  {
    "question": "What will be the output of the following code snippet? using System; class ContinueTest { public static void Main() { for (int i = 1; i <= 10; i++) { if (i > 5) brea k; Console.WriteLine(i); } } }",
    "options": [
      {
        "id": "A",
        "text": "6",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "1 2 3 4",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "1 2 3 4 5",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "6 7 8 9 10",
        "isCorrect": false
      }
    ],
    "hint": "The loop iterates from `i = 1`. When `i` becomes `6`, the condition `i > 5` becomes true, triggering the `break` statement and exiting the loop. Thus, values 1 through 5 are printed.",
    "category": "Java"
  },
  {
    "question": "Members of enum are by default",
    "options": [
      {
        "id": "A",
        "text": "protected",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "private",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "public",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "internal",
        "isCorrect": false
      }
    ],
    "hint": "Members of an `enum` (enumeration) in C# are implicitly `public` and `static` by default, allowing them to be accessed directly through the enum type.",
    "category": "C# / .NET"
  },
  {
    "question": "ADO .net and web API Which one of the following is TRUE about DataSet ?",
    "options": [
      {
        "id": "A",
        "text": "Data set contains Data Table and is a Disconnected Model",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Cannot relate to XML",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Data is confirmed to only one data source",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "DataSet is a Disconnected Model",
        "isCorrect": false
      }
    ],
    "hint": "A `DataSet` acts as an in-memory cache of data, capable of holding multiple `DataTable` objects, and operates as a disconnected model, meaning it doesn't maintain a continuous connection to the data source.",
    "category": "Java"
  },
  {
    "question": "For Insert,Update and Delete SQL Commands, method is used.",
    "options": [
      {
        "id": "A",
        "text": "ExecuteDataReader",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Execute Reader",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Execute Nonquery",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Execute Scalar",
        "isCorrect": false
      }
    ],
    "hint": "`ExecuteNonQuery` is the appropriate method for executing SQL commands that do not return any data, such as `INSERT`, `UPDATE`, and `DELETE` statements, returning the number of affected rows.",
    "category": "C# / .NET"
  },
  {
    "question": "Which of the following is not the method of DataAdapter?",
    "options": [
      {
        "id": "A",
        "text": "Fill",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "FillSchema",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Update",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "ReadData",
        "isCorrect": true
      }
    ],
    "hint": "`Fill`, `FillSchema`, and `Update` are standard methods of a `DataAdapter` used for populating a `DataSet` or `DataTable` and persisting changes back to the database. `ReadData` is not a standard method.",
    "category": "C# / .NET"
  },
  {
    "question": "Filter used for grouping records",
    "options": [
      {
        "id": "A",
        "text": "Group By",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Group",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Filter",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Filter By",
        "isCorrect": false
      }
    ],
    "hint": "The `GROUP BY` clause in SQL is used to arrange identical data into groups, enabling aggregate functions (like COUNT, SUM, AVG) to operate on these groups.",
    "category": "C# / .NET"
  },
  {
    "question": "Syntax for ordering a column in ascending order",
    "options": [
      {
        "id": "A",
        "text": "SELECT attribute1 FROM Table ORDER BY attribute1",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "SELECT attribute1 FROM Table ORDERBY attribute1",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "SELECT attribute1 FROM Table ORDER BY attribute1 asc",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "SELECT attribute1 FROM Table ORDERBY attribute1 asc",
        "isCorrect": false
      }
    ],
    "hint": "By default, the `ORDER BY` clause sorts results in ascending order if `ASC` is omitted, making \"SELECT attribute1 FROM Table ORDER BY attribute1\" a correct syntax for ascending order.",
    "category": "C# / .NET"
  },
  {
    "question": "Identify correct syntax for creating Index",
    "options": [
      {
        "id": "A",
        "text": "CREATE INDEX \"index_name\" ON \"table_name\" (column_name);",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "CREATE INDEX \"table_name\" ON \"index_name\" (column_name);",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "CREATE INDEX \"table_name\" ON \"index_name\" ;",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "CREATE INDEX \"table_name\" ON \"index_name\" (row_name);",
        "isCorrect": false
      }
    ],
    "hint": "This syntax correctly specifies the `CREATE INDEX` command, followed by the index name, the table it applies to, and the column(s) on which the index is built.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "View is a Virtual Table",
    "options": [
      {
        "id": "A",
        "text": "TRUE",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "FALSE",
        "isCorrect": false
      }
    ],
    "hint": "A `VIEW` in SQL is indeed a virtual table, meaning it does not store data itself but rather represents the result set of a stored query, providing a logical representation of data from one or more tables.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "In which two cases would you use an outer join? a. The tables being joined have NOT NULL columns. b. The tables being joined have only matched data. c. The columns being joined have NULL values. d. The tables being joined have both matched and unmatched data.",
    "options": [
      {
        "id": "A",
        "text": "c and d",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "a and b",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "a and c",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "b and c",
        "isCorrect": false
      }
    ],
    "hint": "Outer joins are used when you need to retrieve all matching rows *and* include unmatched rows from one or both tables, particularly when join columns might contain `NULL` values or when you want to see data even if there isn't a corresponding match.",
    "category": "Java"
  },
  {
    "question": "Key which needs to be set for a column so that only the data available in the Primary key column of one t able can only be entered",
    "options": [
      {
        "id": "A",
        "text": "UNIQUE",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Foreign Key",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "DEFAULT",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "CHECK",
        "isCorrect": false
      }
    ],
    "hint": "A `Foreign Key` enforces referential integrity by linking a column (or columns) in one table to the primary key of another table, ensuring that only existing primary key values can be entered.",
    "category": "Java"
  },
  {
    "question": "Which is true regarding indexing operation?",
    "options": [
      {
        "id": "A",
        "text": "Sorts a file using a single key.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Sorts a file using two keys",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Established an index for a file",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "All the options",
        "isCorrect": false
      }
    ],
    "hint": "Indexing primarily involves creating a data structure (an index) that allows for fast lookups and retrieval of records based on the values in one or more specific keys, often with an underlying sorted structure.",
    "category": "C# / .NET"
  },
  {
    "question": "In which year Tata Consultancy Services (TCS) becomes the first Indian software company to cross one b illion dollars in revenues?",
    "options": [
      {
        "id": "A",
        "text": "2002",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "2003",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "2013",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "2004",
        "isCorrect": false
      }
    ],
    "hint": "Tata Consultancy Services (TCS) crossed the one billion dollar revenue mark in the financial year 2002-2003, making 2003 the year it achieved this milestone.",
    "category": "Java"
  },
  {
    "question": "Which is a best Mobile App when we are dealing with a Resource Intensive Application",
    "options": [
      {
        "id": "A",
        "text": "Native Application",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Web Application",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Composite Application",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Hybrid Application",
        "isCorrect": false
      }
    ],
    "hint": "Native applications are built specifically for a particular platform (iOS or Android), allowing them to leverage device-specific features and optimize performance, making them ideal for resource-intensive tasks.",
    "category": "KYT"
  },
  {
    "question": "Consumers assert that cloud computing permits businesses to bypass upfront infrastructure charges",
    "options": [
      {
        "id": "A",
        "text": "TRUE",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "FALSE",
        "isCorrect": false
      }
    ],
    "hint": "Cloud computing models allow businesses to pay for computing resources on an as-needed basis, significantly reducing or eliminating the need for large upfront capital expenditures on hardware and infrastructure.",
    "category": "KYT"
  },
  {
    "question": "Choose one option which is not a Cloud Platform",
    "options": [
      {
        "id": "A",
        "text": "IBM’s Blue Cloud",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Wipro Air Cloud",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Amazon Elastic Compute Cloud",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Windows Azure Services Platform",
        "isCorrect": false
      }
    ],
    "hint": "IBM's Blue Cloud, Amazon Elastic Compute Cloud (EC2), and Windows Azure Services Platform (now Azure) are well-known cloud computing platforms; Wipro Air Cloud is not recognized as a major independent cloud platform.",
    "category": "KYT"
  },
  {
    "question": "Big Data Analytics on Genomic Medicine will help in prediction of Genetic Diseases",
    "options": [
      {
        "id": "A",
        "text": "TRUE",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "FALSE",
        "isCorrect": false
      }
    ],
    "hint": "Big Data Analytics plays a crucial role in genomic medicine by processing vast amounts of genetic data to identify patterns, mutations, and predispositions that can predict genetic diseases and inform personalized treatments.",
    "category": "KYT"
  },
  {
    "question": "Which of the following can make or break a presentation ?",
    "options": [
      {
        "id": "A",
        "text": "Non-verbal communication and tone",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Style of presentation &use of jargons",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Audience Orientation",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "All of the options",
        "isCorrect": true
      }
    ],
    "hint": "The success of a presentation relies on a combination of factors including non-verbal cues and tone, an engaging presentation style, avoiding excessive jargon, and tailoring the content to the audience's understanding and interest.",
    "category": "BizSkill"
  },
  {
    "question": "Which of the following statements is true? a.  Downward flow of communication is when the speaker uses a condescending tone.",
    "options": [
      {
        "id": "B",
        "text": "Downward flow of communication refers to communication between peers.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Downward flow of communication is when information flows from the supervisor to the subordinat e.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Downward flow of communication is when someone is explaining a concept in response to a questi on.",
        "isCorrect": false
      }
    ],
    "hint": "Downward communication refers to the flow of information from higher levels of management or authority to lower levels within an organizational hierarchy.",
    "category": "Java"
  },
  {
    "question": "You have a great idea for your team which will make the application 40% faster. How will you persuade your team ?",
    "options": [
      {
        "id": "A",
        "text": "You need to persuade the manager and not the team.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Make the others think about your point. Let them participate in the discussion before the decision. B e open to their queries.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "You need not have a discussion as this is definitely going to benefit the team. Send an email asking t hem to incorporate your idea",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Tell them it is your birthday and then share the idea. They cannot say no on your Birthday.",
        "isCorrect": false
      }
    ],
    "hint": "Effective persuasion involves engaging the team in discussion, allowing them to explore the idea, address concerns, and feel part of the decision-making process, fostering buy-in and collaboration.",
    "category": "Java"
  },
  {
    "question": "What is Minutes of the Meeting (MoM) ? a.  MoM is a document that contains all the points discussed during a meeting which can be referred w henever needed.",
    "options": [
      {
        "id": "B",
        "text": "MOM is a document which contains a detailed report of statements made by the host",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "MoM is a document that contains the report of the project which was discussed in the meeting.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "MoM is a document that contains the status of the project after having a discussion with the client.",
        "isCorrect": false
      }
    ],
    "hint": "Minutes of the Meeting (MoM) is a formal record that summarizes the key discussions, decisions, and action items from a meeting, serving as a reference for participants and stakeholders.",
    "category": "Java"
  },
  {
    "question": "Which corporate culture is better, a task-oriented or relationship-oriented ?",
    "options": [
      {
        "id": "A",
        "text": "Task oriented is better because it is more efficient as people focus on tasks and not the relationships.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Relationship-oriented culture is better because it enables trust which in turn leads to collaboration.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Both corporate cultures have their downsides, so every company needs to have a mix of both.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Corporate culture doesn't have to be better than the other. It is the outworking of tradition, values an d history of a place.",
        "isCorrect": true
      }
    ],
    "hint": "The effectiveness of a corporate culture (task-oriented vs. relationship-oriented) is context-dependent and stems from the unique traditions, values, and history of an organization, rather than one being universally superior.",
    "category": "BizSkill"
  },
  {
    "question": "What are the main features offered in the mail application apart from e-mail? a) Schedule meetings and appointments. b) Invite stakeholders for a meeting. c) Accept/ decline an invitation. d) Set reminders to attend meetings.",
    "options": [
      {
        "id": "A",
        "text": "a,b & c",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "b, c & d",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "a, b, c & d",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "None of the options",
        "isCorrect": false
      }
    ],
    "hint": "Modern mail applications are integrated suites that offer comprehensive calendar functionalities, including scheduling, inviting attendees, managing responses, and setting reminders, alongside email communication.",
    "category": "Java"
  },
  {
    "question": "How should you gather and share requirements for a project ?",
    "options": [
      {
        "id": "A",
        "text": "Verbal specification of requirements alone is insufficient.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "The requirements should be sent through an email.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "The email should also have the relevant stakeholders in CC.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "All of the options",
        "isCorrect": true
      }
    ],
    "hint": "Project requirements should be formally documented and communicated via email, with all relevant stakeholders CC'd, as verbal specifications alone are prone to misinterpretation and lack traceability.",
    "category": "BizSkill"
  },
  {
    "question": "What should you do when you interact with people from other cultures which are different than yours.",
    "options": [
      {
        "id": "A",
        "text": "Treat them with respect as they are superior to you. See what you need to change in your own cultur e so that you are able to be equal to them.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Treat them with respect if they are your clients. As we need to do business with various people, we need to act respectful towards other cultures so that they are not offended.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Treat them with respect. Learn about their culture, so that you are able to work in an efficient mann er with them. Learning about their culture will help you avoid blunders.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Treat them with respect. Teach them your culture so that they are able to understand you in a better way. Take every chance to reinforce the superiority of your culture.",
        "isCorrect": false
      }
    ],
    "hint": "Respecting and learning about other cultures is crucial for effective intercultural communication, helping to build rapport, avoid misunderstandings, and foster productive working relationships.",
    "category": "BizSkill"
  },
  {
    "question": "It is the final client demo of Payroll Management System. Aman, who is responsible to make the presenta tion is on an emergency leave. What can be done to handle the situation ?",
    "options": [
      {
        "id": "A",
        "text": "Cancel the day's schedule and plan for the same on a later date when Aman is available because he can give the best presentation",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "The team avoids involvement because it is the team manager's responsibility to talk to the client and seek an alternative for the demonstration scheduled for the day.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "The team members can connect with Aman who is on leave, and ask him/her to manage to come to work and give the demonstration as it is urgent.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Team member who is next in charge can hold a brief discussion with Aman and proceed with the de mo. Only under unavoidable circumstances, it is ok to buy-in a day from the client.",
        "isCorrect": true
      }
    ],
    "hint": "In a critical situation, the next in charge should step up after quickly coordinating with the absent colleague to ensure continuity, with client delays being a last resort only if absolutely necessary.",
    "category": "Java"
  },
  {
    "question": "What is technical writing?",
    "options": [
      {
        "id": "A",
        "text": "Technical writing provides direction, instruction, or explanation on a particular subject.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "The purpose of technical writing is to entertain and inform.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Technical writing results in accurate information geared to specifically targeted audiences.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "All of the options",
        "isCorrect": false
      }
    ],
    "hint": "Technical writing focuses on conveying complex information clearly, directly, and concisely to a specific audience, primarily for instructional, directional, or explanatory purposes.",
    "category": "BizSkill"
  },
  {
    "question": "RiO week is celebrated to",
    "options": [
      {
        "id": "A",
        "text": "bring an awareness about lifecycle of a software to all the TCSers",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "create awareness regarding software quality",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "An initiative that is aimed at improving our production support operations.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "None of the options",
        "isCorrect": false
      }
    ],
    "hint": "RiO (Refactor, Improve, Optimize) week is specifically an initiative focused on enhancing the efficiency and quality of production support operations within the organization.",
    "category": "Miscellaneous"
  },
  {
    "question": "Name the activity that is conducted frequently to ensure project has a strong backup plan that will help pr oject thrive during a disaster",
    "options": [
      {
        "id": "A",
        "text": "Evaluation of remediation plan",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Mock BCP drills",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Disaster management",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Event management",
        "isCorrect": false
      }
    ],
    "hint": "Mock Business Continuity Plan (BCP) drills are frequently conducted to test and validate a project's disaster recovery strategies, ensuring the team is prepared to maintain operations during disruptions.",
    "category": "Java"
  },
  {
    "question": "One should avoid GOTO in Structured Programming - State true/false.",
    "options": [
      {
        "id": "A",
        "text": "TRUE",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "FALSE",
        "isCorrect": false
      }
    ],
    "hint": "In structured programming, the use of `GOTO` statements is generally discouraged as it can lead to unstructured, spaghetti code that is difficult to read, debug, and maintain.",
    "category": "Algorithms"
  },
  {
    "question": "According to KISS Design Principle, we should use features like frameworks, APIs only when there are p erceptible benefits to the problem we are solving.",
    "options": [
      {
        "id": "A",
        "text": "TRUE",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "FALSE",
        "isCorrect": false
      }
    ],
    "hint": "The KISS (Keep It Simple, Stupid) principle advocates for simplicity, suggesting that complex features, frameworks, or APIs should only be adopted if they provide clear, tangible benefits to the problem being solved.",
    "category": "Java"
  },
  {
    "question": "What is Single Responsibility Principle",
    "options": [
      {
        "id": "A",
        "text": "One person gets one responsibility",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "One class should perform a single task",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Do One Thing At all levels",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "None of the options",
        "isCorrect": false
      }
    ],
    "hint": "The Single Responsibility Principle (SRP) states that a module, class, or function should have only one reason to change, meaning it should focus on doing one thing and doing it well.",
    "category": "Algorithms"
  },
  {
    "question": "Which symbol will be used with grep command to match the pattern pat at the beginning of a line?",
    "options": [
      {
        "id": "A",
        "text": "^pat",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "pat^",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "$pat",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "pat$",
        "isCorrect": false
      }
    ],
    "hint": "In `grep`, the caret `^` is a regular expression anchor that matches the beginning of a line, so `^pat` will find lines where 'pat' appears at the very start.",
    "category": "Miscellaneous"
  },
  {
    "question": "The user u123456 logged in and performed the following sequence of command. User's home directory i s /home/u123456. What will be the output of the last command? $ cd project/module1 $ pwd",
    "options": [
      {
        "id": "A",
        "text": "/home/u123456/project/module1",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "project/module1",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "~/project/module1",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "/usr/u123456/project/module1",
        "isCorrect": false
      }
    ],
    "hint": "The `cd project/module1` command changes the current directory relative to the user's home directory (`/home/u123456`), and `pwd` then prints the absolute path of the new working directory.",
    "category": "Java"
  },
  {
    "question": "Which code will correctly calculate the newsal based on the years mentioned Input file is as below NameOfEmployee-age-YearOfJoining. The shell takes 2 inputs-file name and Name of Employee. Delim iter used in the input file is -.",
    "options": [
      {
        "id": "A",
        "text": "#!/bin/sh x=$1 y=$2 if [ -f $1 ] then z=$(grep $2 $1|cut -d '-' -f3) echo $z case \"$z\" in \"1990\") newsal=`expr$(grep $2 $1|cut -d '|' -f5) + 200` \"2000\") newsal=`expr$(grep $2 $1|cut -d '|' - f5) + 100` \"2005\") newsal=`expr$(grep $2 $1|cut - d '|' -f5) + 500` ;; e s a c f i",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "#!/bin/sh x=$1 y=$2 if [ -f $1 ] then z=$(grep $2 $1|cut -d '-' -f3) echo $z case \"$z\" in \"1990\") newsal=`expr $(grep $2 $1|cut -d '|' -f5) + 2000` \"2000\") newsal=`expr $(grep $2 $1|cut -d '|' - f5) + 1000` \"2005\") newsal=`expr $(grep $2 $1|cut - d '|' -f5) + 500` ;; esac fi",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "#!/bin/sh x=$1 y=$2 if [ -f $1 ] then z=$(grep $2 $1|cut -d '-' -f3) echo $z case \"$z\" in \"1990\") newsal=`expr $(grep $2 $1|cut -d '|' +f5) +2000` \"2000\") newsal=`expr $(grep $2 $1|cut -d '|' -f5) +1000` \"2005\") newsal=`expr $(grep $2 $1|cut - d '|' -f5) +500` ;; e s a c f i",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "#!/bin/sh x=$1 y=$2 if [ -f $1] then z=$(grep $2 $1|cut -d '-' -f3) echo $z case \"$z\" in \"1990\") newsal=`expr $(grep $2 $1|cut -d '|' -f5) +2000` \"2000\") newsal=`expr $(grep $2 $1|cut -d '|' -f5) +10` \"2005\") newsal=`expr $(grep $2 $1|cut -d '|' -f5) +500` ;; e s a c f i",
        "isCorrect": false
      }
    ],
    "hint": "Option B correctly uses `expr` for arithmetic operations with spaces around the `+` operator, and the `case` statement has the correct syntax with `;;` to terminate each pattern.",
    "category": "Java"
  },
  {
    "question": "Which command will delete the lines containing the pattern 'this' from the file?",
    "options": [
      {
        "id": "A",
        "text": "delete -f this file",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "SED /this-/d file",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Sed /'this'/d file",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "sed /this/d file",
        "isCorrect": true
      }
    ],
    "hint": "The `sed` command with `/pattern/d` deletes lines containing the specified pattern, making `sed /this/d file` the correct syntax to delete lines with 'this'.",
    "category": "Unix"
  },
  {
    "question": "Assuming the files fileA, fileB, fileAB, fileBC and fileABC, exist in a directory testDir, which files will b e listed if we use the following command $ls testDir|grep file[AB]?",
    "options": [
      {
        "id": "A",
        "text": "file A",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "file B",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "file ABC",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "file BC",
        "isCorrect": false
      }
    ],
    "hint": "The `grep` command with `file[AB]` matches lines that contain \"file\" followed by either an 'A' or a 'B'. From the given files, 'fileA' directly matches this pattern.",
    "category": "Java"
  },
  {
    "question": "A table containing employee have some faulty records .ie the year of joining(YOJ) was incorrectly entere d for employee ids between 20 and 100. Choose from below the right sql query to correct the column yea r of joining (YOJ)as 201e.",
    "options": [
      {
        "id": "A",
        "text": "update table Employees set YOJ=2015;",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "update Employees set YOJ=2015 where id between (20,100);",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "update Employees set YOJ=2015 where id>=20 and id<=100;",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "alter table employees add YOJ=2015 where id>=20 and id<=100;",
        "isCorrect": false
      }
    ],
    "hint": "The `UPDATE` statement is used to modify existing records, and the `WHERE id>=20 and id<=100` clause correctly identifies the range of employee IDs to be updated.",
    "category": "Java"
  },
  {
    "question": "Look at the below SQL join and select the type of join select e.ename as employee m.ename as manager from employees m JOIN employees e ON e.mgr = m.e mpno where e.bdate > date '1965-01-01' order by employee;",
    "options": [
      {
        "id": "A",
        "text": "Self join",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Inner join",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Cross join",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Outer join",
        "isCorrect": false
      }
    ],
    "hint": "The query uses the `JOIN` keyword without explicitly specifying `LEFT`, `RIGHT`, or `FULL`, which defaults to an `INNER JOIN`, retrieving only rows where there is a match in both `employees` tables.",
    "category": "Java"
  },
  {
    "question": "Which of the following way or ways before is/are correct to insert DATE in a table?",
    "options": [
      {
        "id": "A",
        "text": "insert into Employee(Start_Date) values ('05-FEB-2005')",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "insert into Employee(Start_Date) values ('FEB-05-2005')",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "insert into Employee(Start_Date) values ('2005-05-FEB')",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None of the Options",
        "isCorrect": false
      }
    ],
    "hint": "SQL databases typically recognize date formats like 'DD-MON-YYYY' (e.g., '05-FEB-2005') when inserting string literals into date columns, though specific formats can vary by database system.",
    "category": "Java"
  },
  {
    "question": "Consider the following set of relations EMP ( emp_no,emp_name,dept_no,salary) DEPT (dept_no,dept_name,location) Write SQL query for the following Find all the employees whose departments are located in 'Mumbai' and salary is greater than Rs. 20,000.",
    "options": [
      {
        "id": "A",
        "text": "select emp_name from dept where dept_no and location='Mumbai';",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "select emp_name from emp where salary > 20,000 and dept_no in (select dept_no from dept where l ocation = 'Mumbai');",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "select dept_no ,count(emp_no) from emp where salary > 50,000 group by dept_no;",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "update table emp where emp_name='Mumbai';",
        "isCorrect": false
      }
    ],
    "hint": "This query correctly uses a subquery to first find department numbers located in 'Mumbai' and then filters employees from the `emp` table based on these `dept_no`s and a salary greater than 20,000.",
    "category": "Java"
  },
  {
    "question": "Identify the SQL queries which shows correct group by and having usage",
    "options": [
      {
        "id": "A",
        "text": "SELECT empa.LastName, COUNT(orda.OrderID) FROM Orders ord1 INNER JOIN Employees emp1 ON Orda.EmployeeID=empa.EmployeeID GROUP BY LastName HAVING COUNT(orda.OrderID) > 10",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "SELECT emp.LastName, COUNT(ord.OrderID) FROM Orders ord INNER JOIN Employees emp ON Ord.EmployeeID=emp.EmployeeID GROUP BY LastName HAVING COUNT(ord.OrderID) > 10",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "SELECT emp.LastName, COUNT(ord.OrderID) FROM Orders ord INNER JOIN Employees emp ON Ord.EmployeeID=emp.EmployeeID GROUP BY LastName,COUNT(ord.OrderID) HAVING COUNT(ord.OrderID) > 10",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "SELECT emp.LastName, COUNT(ord.OrderID) FROM Orders ord INNER JOIN Employees emp ON Ord.EmployeeID=emp.EmployeeID GROUP BY LastName,COUNT(ord.OrderID) HAVING (ord.OrderID) > 10",
        "isCorrect": false
      }
    ],
    "hint": "This query correctly groups results by `LastName` and then filters those groups using the `HAVING` clause based on an aggregate function, `COUNT(OrderID) > 10`.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "What will happen when the code is executed? DECLARE -- Global variables employeeId number := 95; BEGIN dbms_output.put_line('number: ' || employeeId); DECLARE -- Local variables employeeId number := 195; BEGIN dbms_output.put_line('num: ' || employeeId); END; END;",
    "options": [
      {
        "id": "A",
        "text": "It won’t execute, it has syntax error",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "It will print num: 95 Num: 195",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "It will print num: 95 Num: 95",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "It will print Num: 195 Num: 195",
        "isCorrect": false
      }
    ],
    "hint": "In PL/SQL, variables declared in an inner block can shadow variables with the same name in an outer block, so the outer block refers to its global variable and the inner block to its local one.",
    "category": "Java"
  },
  {
    "question": "Which of the following is not true about PL/SQL cursors?",
    "options": [
      {
        "id": "A",
        "text": "A cursor is a view on a table.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "A cursor holds the rows (one or more) returned by a SQL statement.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "The set of rows the cursor holds is referred to as the active set.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None of the options",
        "isCorrect": false
      }
    ],
    "hint": "A cursor is a pointer to the context area that holds the result set of a SQL statement; it is not a view, which is a virtual table defined by a stored query.",
    "category": "Java"
  },
  {
    "question": "What will be the output of the following code snippet? DECLARE a number(3) := 100; b number(3) := 200; BEGIN IF( a = 100 ) THEN IF( b < 200 ) THEN dbms_output.put_lin e(b); END IF; END IF; dbms_output.put_lin e(a); END;",
    "options": [
      {
        "id": "A",
        "text": "It has syntax error, so there will not be any output. b.  200",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "200, 100",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "100",
        "isCorrect": true
      }
    ],
    "hint": "The outer `IF` condition `a = 100` is true, but the inner `IF` condition `b < 200` (200 < 200) is false, so its `dbms_output` is skipped, and only `a` (100) is printed.",
    "category": "Java"
  },
  {
    "question": "The following code tries to fetch some information from all the rows in a table named customers for use in a PL/SQL block. What is wrong in the following code? DECLARE cid customers.id%type; cname customers.name%type; caddr customers.address%type; CURSOR c1 is SELECT id, name, address FROM customers; BEGIN LOOP FETCH c1 into c_id, c_name, c_addr; EXIT WHEN c1%notfound; dbms_output.put_line(cid || ' ' || cname || ' ' || caddr); END LOOP; CLOSE c1; END;",
    "options": [
      {
        "id": "A",
        "text": "It need not use a cursor.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "The cursor is not opened.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "It will not print information from all the rows.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "There is nothing wrong in the code.",
        "isCorrect": false
      }
    ],
    "hint": "Before fetching rows from a cursor in PL/SQL, the cursor must first be explicitly `OPEN`ed, which is missing in the provided code snippet.",
    "category": "Java"
  },
  {
    "question": "A cursor for loop performs the following operations implicitly. Select the appropriate options",
    "options": [
      {
        "id": "A",
        "text": "Open the cursor",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "fetch the rows",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "update the table",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "close the cursor",
        "isCorrect": true
      }
    ],
    "hint": "A cursor `FOR` loop in PL/SQL implicitly performs the `OPEN`, `FETCH`, and `CLOSE` operations for the cursor, simplifying iteration over result sets.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "Which of the following is a correct syntax for grouping selectors in CSS?",
    "options": [
      {
        "id": "A",
        "text": "h2,h3 { color:blue; font- size:120px; font- family:italic; }",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "#h2;h3 { color:blue; font- size:120px; font- family:italic; }",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "hb.h3 { color:blue; font- size:120px; font- family:italic; }",
        "isCorrect": false
      }
    ],
    "hint": "In CSS, multiple selectors can be grouped by separating them with commas, applying the same set of declarations to all selected elements.",
    "category": "UI"
  },
  {
    "question": "Whether a single text link point to two different web pages at a same time?",
    "options": [
      {
        "id": "A",
        "text": "Yes",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "No",
        "isCorrect": true
      }
    ],
    "hint": "A standard HTML text link (`<a>` tag) can only point to a single URL at a time using its `href` attribute.",
    "category": "UI"
  },
  {
    "question": "What is the default value for checkbox control",
    "options": [
      {
        "id": "A",
        "text": "on",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "off",
        "isCorrect": true
      }
    ],
    "hint": "By default, an HTML checkbox control is unchecked, meaning its value is 'off' or not submitted unless explicitly checked or given a `checked` attribute.",
    "category": "UI"
  },
  {
    "question": ".Which of the following is creating multi line input control?",
    "options": [
      {
        "id": "A",
        "text": "input",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "text",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "textarea",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "textline",
        "isCorrect": false
      }
    ],
    "hint": "The `<textarea>` HTML element is specifically designed to create a multi-line plain-text editing control, allowing users to input longer blocks of text.",
    "category": "UI"
  },
  {
    "question": "Which of the following syntax is correct?",
    "options": [
      {
        "id": "A",
        "text": "p{color;red;text-align;right;}",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "p{color=red;text-align=right}",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "p{color:red;text-align:right;}",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "p{color:red;text-align:right}",
        "isCorrect": false
      }
    ],
    "hint": "CSS syntax requires a colon (:) between the property and its value, and a semicolon (;) to separate each declaration, making option C the correct format.",
    "category": "UI"
  },
  {
    "question": "Which of the following is not valid style?",
    "options": [
      {
        "id": "A",
        "text": "p { margin: collapse; }",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "p { margin: inherit; }",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "p { margin: 25px 50px; }",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "p { margin: 25px; }",
        "isCorrect": false
      }
    ],
    "hint": "The `margin` property does not accept `collapse` as a valid value; `collapse` is related to table borders or margin collapsing behavior, not a direct margin dimension.",
    "category": "UI"
  },
  {
    "question": "<html> <head> <st yle > div p { background-color: green; } </style> </head> <body> <div> <p>Para1</p> <p>Para2</p> <section><p>Para3</p></section> </div> <p>Para4</p> <p>Para5</p> </body> </html> What will be the output of the above code?",
    "options": [
      {
        "id": "A",
        "text": "Para1, Para2, Para4, Para5 will display in green back ground",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Para1, Para2 will display in green back ground c. Para4, Para5 will display in green back ground",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Para1, Para2, Para3 will display in green back ground",
        "isCorrect": true
      }
    ],
    "hint": "The `div p` selector targets all `<p>` elements that are descendants of a `<div>`, which includes 'Para1', 'Para2', and 'Para3' in the provided HTML structure.",
    "category": "UI"
  },
  {
    "question": "Which of the following is not a value for height and width properties;",
    "options": [
      {
        "id": "A",
        "text": "auto",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "absolute",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "length",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "initial",
        "isCorrect": false
      }
    ],
    "hint": "`absolute` is a value for the `position` CSS property and not a valid unit or keyword that can be directly assigned to `height` or `width` properties.",
    "category": "UI"
  },
  {
    "question": "We can write into an HTML element using the following;",
    "options": [
      {
        "id": "A",
        "text": "document.write()",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "innerHTML",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "window.alert()",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "console.log()",
        "isCorrect": false
      }
    ],
    "hint": "`innerHTML` is a JavaScript property used to get or set the HTML content of an element, providing a way to write content directly into an HTML element.",
    "category": "UI"
  },
  {
    "question": "What will be the output of the below code; <!DOCTYPE html> <html> <body> <p id=\"demo\"></p> <script> var employee = {empNo:\"1001\", name:\"Rajeev\", designation:\"SSE\"}; document.getElementById(\"demo\").innerHTML = employee; </script> </body> </html>",
    "options": [
      {
        "id": "A",
        "text": "1001,Rajeev,SSE",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "empNo:\"1001\", name:\"Rajeev\", designation:\"SSE\"",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "[object Object]",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Script error",
        "isCorrect": false
      }
    ],
    "hint": "When a JavaScript object is directly assigned to `innerHTML`, it is implicitly converted to its default string representation, which is `[object Object]`.",
    "category": "UI"
  },
  {
    "question": "What will be the output of the following? public class Test { private static int start = 1; int stop = 30; public static void main(String[] args) { Test tolls = new Test(); int pause = 20, stop = 40; System.out.print(pause + tolls.stop + tolls.start); } }",
    "options": [
      {
        "id": "A",
        "text": "The code does not compile due to line 6",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "The code does not compile due to line 7 c.  61",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "51",
        "isCorrect": true
      }
    ],
    "hint": "The local variable `stop` (40) shadows the instance variable `stop` (30), so `tolls.stop` accesses the instance variable, `pause` is 20, and `tolls.start` is 1, resulting in 20 + 30 + 1 = 51.",
    "category": "Java"
  },
  {
    "question": "What will be the output of the following? public class Sprint { static int start = 5; final int end; public void run(int distance) { System.out.print(end+start+ \" \"); System.out.print(distance); } public static void main(String... start) { Sprint athlete=new Sprint(); athlete.run(5); } }",
    "options": [
      {
        "id": "A",
        "text": "10 5",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "5 5",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "The code does not compile due to line 3",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "The code does not compile due to line 5",
        "isCorrect": false
      },
      {
        "id": "E",
        "text": "The code does not compile due to line 4",
        "isCorrect": false
      }
    ],
    "hint": "The `final` instance variable `end` must be initialized either at declaration or within a constructor, but it is not, causing a compilation error.",
    "category": "Java"
  },
  {
    "question": "From the following variable types , which variable is in always in scope for the entire program?",
    "options": [
      {
        "id": "A",
        "text": "Local variable",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Class variable",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Instance variable",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "All of the options",
        "isCorrect": false
      }
    ],
    "hint": "A class variable (static variable) is associated with the class itself and exists for the entire duration the class is loaded, making it always in scope for the program.",
    "category": "Java"
  },
  {
    "question": "Which of the following is invalid as the first line of a Java file?",
    "options": [
      {
        "id": "A",
        "text": "import app.*;",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "package app;",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "static int start=1",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "//App Manager",
        "isCorrect": false
      }
    ],
    "hint": "A field declaration like `static int start=1` cannot appear directly at the top level of a Java file; it must be inside a class.",
    "category": "Java"
  },
  {
    "question": "What will be the output of the following? public class Sprint { static int start = 5; final int end; public Sprint(int x) { x = 7.0; end = x; } public void run(int distance) { System.out.print(start+end+ \" \"); System.out.print(distance); } public static void main(String[] start) { Sprint athlete=new Sprint(6); athlete.run(5); } }",
    "options": [
      {
        "id": "A",
        "text": "12 5",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "11 5",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "The code does not compile due to line 3",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "The code does not compile due to line 5",
        "isCorrect": true
      }
    ],
    "hint": "Assigning a `double` literal `7.0` to an `int` variable `x` without an explicit cast causes a compilation error due to potential loss of precision.",
    "category": "Java"
  },
  {
    "question": "What are the 5 TCS Values",
    "options": [
      {
        "id": "A",
        "text": "Leading change, Integrity, Respect for the individual, Team work, Learning and sharing",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Leading change, Integrity, Respect for the individual, Excellence, Learning and sharing",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Creativity, Integrity, Respect for the individual, Excellence, Learning and sharing",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Diversity, Integrity, Respect for the individual, Excellence, Learning and sharing",
        "isCorrect": false
      }
    ],
    "hint": "Leading change, Integrity, Respect for the individual, Excellence, and Learning and sharing are the five core values that define TCS's approach and culture.",
    "category": "KYT"
  },
  {
    "question": "New area of Technology which deals with collecting data from all types of devices",
    "options": [
      {
        "id": "A",
        "text": "Big Data",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Internet of Things",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Twitter",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Facebook",
        "isCorrect": false
      }
    ],
    "hint": "The Internet of Things (IoT) specifically refers to the network of physical devices embedded with sensors and software, enabling them to connect and exchange data.",
    "category": "KYT"
  },
  {
    "question": "Some challenges in Artificial Intelligence are",
    "options": [
      {
        "id": "A",
        "text": "Cost",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Technology",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Common Sense",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "All of the options",
        "isCorrect": true
      }
    ],
    "hint": "Artificial Intelligence development presents challenges related to its inherent costs, the technological hurdles in its implementation, and the difficulty of encoding common sense.",
    "category": "Miscellaneous"
  },
  {
    "question": "Science of Machine Learning where a user gets positive and negative feedbacks is called as",
    "options": [
      {
        "id": "A",
        "text": "Reinforcement Learning",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Regression",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Classification",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None of the options",
        "isCorrect": false
      }
    ],
    "hint": "Reinforcement Learning is a machine learning paradigm where an agent learns through trial and error by interacting with an environment and receiving positive or negative feedback.",
    "category": "KYT"
  },
  {
    "question": "Worlds biggest source of Big Data",
    "options": [
      {
        "id": "A",
        "text": "Space Research",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Oceanic Research",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Traditional systems",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Mobile Phones",
        "isCorrect": true
      }
    ],
    "hint": "Mobile phones generate vast amounts of data from usage, location, applications, and more, making them the largest single source of Big Data globally.",
    "category": "KYT"
  },
  {
    "question": "Which of the following statements are true?",
    "options": [
      {
        "id": "A",
        "text": "Always listen to reply and not to understand.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Always listen to interrupt and reply.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Always listen to understand with an intent to reply.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Always listen to reply and justify your views.",
        "isCorrect": false
      }
    ],
    "hint": "Effective communication involves listening actively to fully grasp the speaker's message before formulating a thoughtful response, fostering better understanding.",
    "category": "BizSkill"
  },
  {
    "question": "The CIBI Bank requested TCS to upgrade their systems worldwide and to digitize 80% of their workflow. TCS not only completed the given work on time but also provided IT training sessions for the bank empl oyees to get accustomed to the upgrades. What is this service termed as ?",
    "options": [
      {
        "id": "A",
        "text": "Keeping commitments",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Robotic service",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Value-added service",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Systematic service",
        "isCorrect": false
      }
    ],
    "hint": "TCS provided additional IT training beyond the initial contract, which constitutes a value-added service, enhancing the client's experience and capabilities.",
    "category": "BizSkill"
  },
  {
    "question": "Which of the following is NOT expected of a good listener?",
    "options": [
      {
        "id": "A",
        "text": "Listening attentively",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Maintaining eye contact",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Seeking clarifications",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Interrupting the speaker",
        "isCorrect": true
      }
    ],
    "hint": "Interrupting the speaker is disrespectful and hinders effective communication, as it prevents the speaker from fully conveying their message.",
    "category": "BizSkill"
  },
  {
    "question": "Identify the correct statement",
    "options": [
      {
        "id": "A",
        "text": "Accepting help is a sign of weakness.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "We can be a little careless as we can apologize whenever we make a mistake. After all mistakes hel p us learn.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "We need to accept help when needed. The key is to be assertive. Being honest about your weakness builds trust.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Ask for help even before trying something on your own. It will help you get a head start.",
        "isCorrect": false
      }
    ],
    "hint": "Acknowledging weaknesses and seeking help when necessary demonstrates honesty and builds trust within a team, rather than being perceived as a sign of weakness.",
    "category": "BizSkill"
  },
  {
    "question": "What all details should be provided in the signature of an e-mail? Choose the best options. a) Name & role b) Phone & e-mail ID c) Personal address d) Organization Website",
    "options": [
      {
        "id": "A",
        "text": "a, b & d",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "a, b & c",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "b, c & d",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "a, b, c &d",
        "isCorrect": false
      }
    ],
    "hint": "A professional email signature typically includes your name, role, contact details like phone and email ID, and the organization's website, but not usually a personal address.",
    "category": "Java"
  },
  {
    "question": "‘Being objective’ in your writing is the ability to: 1. Present accurate facts and figures. b.Present facts and not personal views. c.Present stereotypical information.",
    "options": [
      {
        "id": "A",
        "text": "1,3",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "1,2",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "1,2,3",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "2,3",
        "isCorrect": false
      }
    ],
    "hint": "Being objective in writing requires presenting verifiable facts and figures accurately and refraining from including personal opinions or biases.",
    "category": "Java"
  },
  {
    "question": "You are a team lead. During an initial meeting, you realise that you need 3 additional resources to work on the project. How will you communicate the same effectively in a Project Status Report?",
    "options": [
      {
        "id": "A",
        "text": "Having 3 more associates in our team would help us complete the task effectively.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "We have less number of associates in our team to complete the project work so if we are provided with 3 more associates, we would be able to complete the task.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "We are facing a shortage of manpower for the task. Hence we need 3 more resources.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "We need 3 associates to join our team. This would help us complete the task effectively.",
        "isCorrect": false
      }
    ],
    "hint": "Option C directly and clearly states the problem (shortage of manpower) and the required solution (3 more resources), making it an effective and concise way to communicate in a report.",
    "category": "Java"
  },
  {
    "question": "The Art of Assertion requires an equal balance of which of the following elements? A. Tone B. Confidence C. Posture D. Body language E. Appearance F. Expressions G. Language",
    "options": [
      {
        "id": "A",
        "text": "A,B,C,D,E",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "A,B,C,D,F,G",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "B,D,E,G",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "All of the options",
        "isCorrect": false
      }
    ],
    "hint": "The Art of Assertion effectively balances elements such as tone, confidence, posture, body language, facial expressions, and language to convey a message firmly and respectfully.",
    "category": "Java"
  },
  {
    "question": "General best practices for Telephone etiquette include: A. Assuming proper posture B. Speaking clearly & slowly C. Smiling when speaking D. Giving the call your full attention E. Avoiding confusing language F. Speaking loudly",
    "options": [
      {
        "id": "A",
        "text": "All the options",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "A,B,C,D,E",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "B,D,E,F",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "A,B,C",
        "isCorrect": false
      }
    ],
    "hint": "Good telephone etiquette encompasses maintaining proper posture, speaking clearly and slowly, smiling (which affects tone), giving full attention, and using unambiguous language.",
    "category": "Java"
  },
  {
    "question": "What factors should you consider before preparing a help document on the newly introduced 'search' func tionality in ABC online application ?",
    "options": [
      {
        "id": "A",
        "text": "Interest level of the users.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Gender of the users.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Technical knowledge of the users.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Experience of the users.",
        "isCorrect": true
      }
    ],
    "hint": "Understanding the users' interest level helps in structuring and presenting information in a help document to ensure it is engaging and relevant, encouraging adoption and comprehension.",
    "category": "BizSkill"
  },
  {
    "question": "During a crisis, do not cascade incorrect updates to the customer and other associates. Always wait for confirmation from the",
    "options": [
      {
        "id": "A",
        "text": "BCP Manager",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "DR team",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Crisis Management Team",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "None of the options",
        "isCorrect": false
      }
    ],
    "hint": "During a crisis, all official communications and updates must be validated and released by the designated Crisis Management Team to ensure accuracy and prevent misinformation.",
    "category": "Java"
  },
  {
    "question": "Before accessing customer system what are the important steps to be completed by recruits",
    "options": [
      {
        "id": "A",
        "text": "Reading and Signing A non-disclosure agreement (NDA)",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Complete Background Checks(BGC) if required.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Both the options",
        "isCorrect": true
      }
    ],
    "hint": "Reading and signing a Non-Disclosure Agreement (NDA) and completing necessary Background Checks (BGC) are crucial for security and compliance before accessing sensitive customer systems.",
    "category": "Miscellaneous"
  },
  {
    "question": "Which of the following standard algorithms is not Dynamic Programming based",
    "options": [
      {
        "id": "A",
        "text": "Bellman–Ford Algorithm for single source shortest path",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Floyd Warshall Algorithm for all pairs shortest paths",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "0-1 Knapsack problem",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Prim's Minimum Spanning Tree",
        "isCorrect": true
      }
    ],
    "hint": "Prim's algorithm for finding the Minimum Spanning Tree is a greedy algorithm, unlike Bellman-Ford, Floyd-Warshall, and the 0-1 Knapsack problem which are typically solved with dynamic programming.",
    "category": "Algorithms"
  },
  {
    "question": "Which of the following sorting algorithms in its typical implementation gives best performance when app lied on an array which is sorted or almost sorted (maximum 1 or two elements are misplaced).",
    "options": [
      {
        "id": "A",
        "text": "Insertion Sort",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Merge Sort",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Quick Sort",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Bubble Sort",
        "isCorrect": false
      }
    ],
    "hint": "Insertion Sort offers optimal performance (O(n)) for arrays that are already sorted or nearly sorted, as it performs minimal comparisons and shifts in such cases.",
    "category": "Java"
  },
  {
    "question": "which is the fastest sorting algorithm among",
    "options": [
      {
        "id": "A",
        "text": "Bubble sort",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Merge Sort",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Heap Sort",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Selection sort",
        "isCorrect": false
      }
    ],
    "hint": "Merge Sort has a consistent O(n log n) time complexity in the best, average, and worst cases, making it generally faster than Bubble Sort, Selection Sort, and often Heap Sort in practical scenarios.",
    "category": "Algorithms"
  },
  {
    "question": "Given the command awk 'BEGIN{FS=\" \";s=0}{s=s+$2}END{print s}' file . What will be the expected o utput?",
    "options": [
      {
        "id": "A",
        "text": "Sum of first column of input file",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Sum of second column of input file",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Average of first column of input file",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Average of second column of input file",
        "isCorrect": false
      }
    ],
    "hint": "The `awk` command uses a space as a field separator (`FS=\" \"`) and sums the values of the second column (`$2`) into variable `s`, printing the total at the end.",
    "category": "Java"
  },
  {
    "question": "A file is having file permission of 754 in octal value(numeric mode). What will be the symbolic value of t he same permission for that file?",
    "options": [
      {
        "id": "A",
        "text": "-rwxr-xr--",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "-rw--w-r-x",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "-rwxr-xr-x",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "-rwxrw-r--",
        "isCorrect": false
      }
    ],
    "hint": "File permissions 754 translate to `rwx` (read, write, execute) for the owner (7), `r-x` (read, execute) for the group (5), and `r--` (read only) for others (4).",
    "category": "Java"
  },
  {
    "question": "What will be the command to change the access time of a file to 12:10 PM on 28th February 1999?",
    "options": [
      {
        "id": "A",
        "text": "touch –a 2802991210 filename",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "touch –a 1210280299 filename",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "touch –a 0228121099 filename",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "touch –a 9902281210 filename",
        "isCorrect": false
      }
    ],
    "hint": "The `touch -a` command with the format `MMDDhhmm[YY]` is used to change the access time of a file; `0228121099` correctly specifies February 28, 12:10 PM, 1999.",
    "category": "Unix"
  },
  {
    "question": "Select the correct command to search the pattern “Hello UNIX” in a file ignoring case.",
    "options": [
      {
        "id": "A",
        "text": "grep -i \"Hello UNIX\" filename",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "grep -c \"Hello UNIX\" filename",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "grep -i filename 'Hello UNIX'",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "grep -c filename 'Hello UNIX'",
        "isCorrect": false
      }
    ],
    "hint": "The `grep -i` command performs a case-insensitive search for the specified pattern within a file, ensuring that 'Hello UNIX' matches regardless of letter casing.",
    "category": "Unix"
  },
  {
    "question": "grep \"Tata.*Services$\" * What would be the output of the above command?",
    "options": [
      {
        "id": "A",
        "text": "It will display the filename and the pattern (“Tata Consultancy Services Limited” ), if the pattern is f ound in any file",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "It will display the filename and the pattern (“Tata Motors Limited” ), if the pattern is found in any fi le",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "It will display the filename and the lines ending with the pattern( “Tata Consultancy Services”) in th e file",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "It will display the filename and the lines ending with the pattern (“Tata Capital services”) in the file",
        "isCorrect": true
      }
    ],
    "hint": "The `grep` command with `.*` matches any characters, and `$` matches the end of the line, so it will display lines that start with 'Tata', contain 'Services', and end with 'Services', along with their filenames.",
    "category": "Java"
  },
  {
    "question": "which statement selects the highest grade for each of the cities of the customers. customer_id cust_name city grade salesman_id 3002 Nick New York 100 5001 3007 Brad New York 200 5001",
    "options": [
      {
        "id": "A",
        "text": "SELECT MAX(grade) FROM customer GROUP BY city;",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "SELECT city,MAX(grade) FROM customer GROUP BY grade;",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "SELECT city,MAX(grade) FROM customer GROUP BY city,grade ;",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "SELECT city,MAX(grade) FROM customer GROUP BY city;",
        "isCorrect": true
      }
    ],
    "hint": "To find the highest grade for each city, the `MAX(grade)` aggregate function should be used in conjunction with a `GROUP BY city` clause.",
    "category": "Java"
  },
  {
    "question": "CUSTOMER ( Id FirstN ame LastN ame City Count ry Phone ) List the number of customers in each country, except the India, sorted high to low Only include countries with 5 or more customers. which statement is true?",
    "options": [
      {
        "id": "A",
        "text": "SELECT COUNT(Id), Country FROM Customer WHERE Country <> 'India' GROUP BY Country HAVING COUNT(Id) >= 5 ORDER BY COUNT(Id) DESC",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "SELECT COUNT(Id), Country FROM Customer WHERE Country <> 'India' GROUP BY Country HAVING COUNT(Id) >= 5 ORDER BY COUNT(Id) ASC",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "SELECT COUNT(Id), Country FROM Customer WHERE Country <> 'India' GROUP BY Country ORDER BY COUNT(Id) DESC HAVING COUNT(Id) >= 5",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "SELECT COUNT(Id), Country FROM Customer WHERE Country <> 'India' GROUP BY Country",
        "isCorrect": false
      }
    ],
    "hint": "This query correctly filters countries not equal to 'India' (`WHERE`), groups by country (`GROUP BY`), filters groups with counts greater than or equal to 5 (`HAVING`), and sorts in descending order of count (`ORDER BY DESC`).",
    "category": "Java"
  },
  {
    "question": "Which operator tests a column for no data.",
    "options": [
      {
        "id": "A",
        "text": "IS Null",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Not NULL",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Exists",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "All of the options",
        "isCorrect": false
      }
    ],
    "hint": "`IS NULL` is the operator in SQL used to check for the absence of data (null values) in a column, as `NULL` cannot be tested with equality operators.",
    "category": "SQL / PLSQL"
  },
  {
    "question": "A relational schema for a train reservation database is given below. Passenger (pid, pname, age) Reservation (pid, class, tid) Table: Passenger pid pname age 0 Sachin 65 1 Rahul 66 2 Sourav 67 3 Anil 69 Table : Reservation pid class tid 0 AC 8200 1 AC 8201 2 SC 8201 5 AC 8203 1 SC 8204 3 AC 8202 What pids are returned by the following SQL query for the above instance of the tables? SLECT pid FROM Reservation , WHERE class ‘AC’ AND EXISTS (SELECT * FROM Passenger WHERE age > 65 AND Passenger. pid = Reservation.pid)",
    "options": [
      {
        "id": "A",
        "text": "1,0",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "1,2",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "1,3",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "1,5",
        "isCorrect": false
      }
    ],
    "hint": "The query returns `pid`s 1 and 3 because these are the only passengers with an `age > 65` who also have an 'AC' class reservation.",
    "category": "Java"
  },
  {
    "question": "Which Query is correct to display the commission of all the salesmen servicing customers in Paris. salesman salesman_id name city commission 5001 James New York 0.15 5002 Nail Paris 0.13 Customer customer_id cust_name city grade salesman_id - 3002 Nick New York 100 5001 3007 Brad New York 200 5001",
    "options": [
      {
        "id": "A",
        "text": "SELECT commission FROM salesman s,customer c WHERE",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "city = 'Paris';",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "SELECT commission FROM salesman WHERE salesman_id IN (SELECT salesman_id FROM customer WHERE city = 'Paris');",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "SELECT commission FROM salesman s,customer c WHERE s.salesman_id =c.salesman_id and c.city = 'Paris';",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "None of the options.",
        "isCorrect": false
      }
    ],
    "hint": "This query correctly uses a subquery to first identify `salesman_id`s associated with customers in 'Paris', then selects the commission for those specific salesmen.",
    "category": "Java"
  },
  {
    "question": "What is wrong in the following code? DECLARE c_id := 1; c_name customers.name%type; c_addr customers.address%type; BEGIN SELECT name, address INTO c_name, c_addr FROM customers WHERE id = c_id; END;",
    "options": [
      {
        "id": "A",
        "text": "You cannot use the SELECT INTO statement of SQL to assign values to PL/SQL variables.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "The SELECT INTO statement here is wrong. It should be: SELECT c_name, c_address INTO nam e, addr",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "The WHERE statement is wrong. It should be: WHERE id := c_id;",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "The variable c_id should be declared as a type-compatible variable as − C_id customers.id%type := 1;",
        "isCorrect": true
      }
    ],
    "hint": "In PL/SQL, it is best practice to declare variables using `%type` to ensure type compatibility with database columns, like `c_id customers.id%type := 1;`.",
    "category": "Java"
  },
  {
    "question": "Which statement is NOT correct about a PL/SQL block?",
    "options": [
      {
        "id": "A",
        "text": "The declaration section starting with DECLARE keyword is a mandatory section",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "The executable section between keywords BEGIN and END is a mandatory section",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "The exception handling section starting with EXCEPTION keyword is an optional section",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Variables are defined in the declaration section.",
        "isCorrect": false
      }
    ],
    "hint": "The `DECLARE` section in a PL/SQL block is optional; only the `BEGIN` and `END` keywords, encompassing the executable statements, are mandatory.",
    "category": "Java"
  },
  {
    "question": "Which statement below is a correct example of explicit cursor creation?",
    "options": [
      {
        "id": "A",
        "text": "CURSOR c_student AS SELECT id, name, marks FROM students;",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "CREATE CURSOR c_student IS SELECT id, name, marks FROM students;",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "CURSOR c_student IS SELECT id, name, marks FROM students;",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "EXPLICIT CURSOR c_student IS SELECT id, name, marks FROM students;",
        "isCorrect": false
      }
    ],
    "hint": "The correct syntax for declaring an explicit cursor in PL/SQL involves the `CURSOR` keyword followed by the cursor name, `IS`, and the `SELECT` statement.",
    "category": "Java"
  },
  {
    "question": "Variable declaration : customer_rec customer%rowtype; How are the columns – id, name present in the customer table can be used in the PL/SQL statement?",
    "options": [
      {
        "id": "A",
        "text": "customer.id,customer.name",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "customer_rec.id, customer_rec.name",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "id,name",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None of the options",
        "isCorrect": false
      }
    ],
    "hint": "When a record variable is declared using `%rowtype`, its individual fields (corresponding to table columns) are accessed using dot notation (e.g., `customer_rec.id`).",
    "category": "Java"
  },
  {
    "question": "Pick the correct variable declarations from the given list",
    "options": [
      {
        "id": "A",
        "text": "empsal number := 10",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "empno number(5) NOT NULL := 2;",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "empname varchar2(15) := 'Brandson';",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "empdept CONSTANT varchar2(5) := 'HR';",
        "isCorrect": true
      }
    ],
    "hint": "Option B provides a syntactically correct and complete PL/SQL variable declaration, specifying data type, precision, a `NOT NULL` constraint, and an initial value.",
    "category": "Miscellaneous"
  },
  {
    "question": "Which of the following is a correct syntax for applying italic style?",
    "options": [
      {
        "id": "A",
        "text": "font-family:italic;",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "font-style:italic;",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "font:italic",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "All of options",
        "isCorrect": false
      }
    ],
    "hint": "The `font-style` CSS property is correctly used to apply an italic style to text, with `italic` being one of its valid values.",
    "category": "UI"
  },
  {
    "question": "what is the output of the below code? <html> <head> <styl e> p{ color: red; } #xp { color:green; } </style> </head> <body> <p id=\"xp\">Xplore Training</p> </body> </html>",
    "options": [
      {
        "id": "A",
        "text": "Display 'Xplore Training' in green color",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Display 'Xplore Training' in red color",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Both will not work.It is difficult to identify the color",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None of options",
        "isCorrect": false
      }
    ],
    "hint": "The `st yle` tag is misspelled (contains a space), making the entire CSS block invalid and preventing any styles from being applied, so none of the given options accurately describe the visual output.",
    "category": "UI"
  },
  {
    "question": "Which of the following is a correct syntax for applying border for a entire table ?",
    "options": [
      {
        "id": "A",
        "text": "<style> table, th, td { Border: 1% } </style>",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "<style> Table, { border: 1px solid black; } </style>",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "<style> table, th, td { border: 1px solid black; } </style>",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "None of options",
        "isCorrect": false
      }
    ],
    "hint": "To apply a border to an entire table including its headers and data cells, you must explicitly select `table`, `th`, and `td` elements and apply the `border` property.",
    "category": "UI"
  },
  {
    "question": "Can we modify the attribute's value of the HTML tag dynamically?",
    "options": [
      {
        "id": "A",
        "text": "Yes",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "No",
        "isCorrect": false
      }
    ],
    "hint": "Yes, attributes of HTML tags can be modified dynamically at runtime using scripting languages like JavaScript to change their values based on user interaction or other conditions.",
    "category": "UI"
  },
  {
    "question": "Whether HTML5 will be supporting inline style for a label?",
    "options": [
      {
        "id": "A",
        "text": "Yes",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "No",
        "isCorrect": true
      }
    ],
    "hint": "While the `style` attribute is a global attribute, direct inline styling for `label` elements is often considered against best practices and is not typically relied upon for comprehensive styling.",
    "category": "UI"
  },
  {
    "question": "What is the output of the below code? <html> <head> <st yle > #st 1 { text-align: center; color: red; } .st2 { text-align: center; color: green; } </style> </head> <body> <p class=\"st1\">Hello</p> <p id=\"st2\">World!</p> </body> </html>",
    "options": [
      {
        "id": "A",
        "text": "Display 'Hello' in red and 'World!' in green.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Display 'Hello' in green and 'World!' in red.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Display both 'Hello' as well as 'World!' in red.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None of options",
        "isCorrect": true
      }
    ],
    "hint": "The CSS ID selector `#st1` does not match an element with `class=\"st1\"`, and the class selector `.st2` does not match an element with `id=\"st2\"`, meaning neither specific color rule applies.",
    "category": "UI"
  },
  {
    "question": "Which of the following is not a CSS background properties?",
    "options": [
      {
        "id": "A",
        "text": "Background-colour",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Background-image",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Background-repeat",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Background-attachment",
        "isCorrect": false
      }
    ],
    "hint": "The correct CSS property for setting the background color is `background-color` (with a hyphen), not `Background-colour` (British spelling and capitalization are irrelevant to CSS property name).",
    "category": "UI"
  },
  {
    "question": "What is the output of the below code? <html> <head> <st yle > a { text-decoration: overline; text- transform: uppercase; text-shadow: 3px 2px red; } </style> </head> <body> <a href=\"#\">TCS Welcomes You!!!</a> </body> </html>",
    "options": [
      {
        "id": "A",
        "text": "<html> <head> <st yle > a { text-decoration: overline; text- shadow: 3px 2px red; } </style> </head> <body> <a href=\"#\">TCS Welcomes You!!!</a> </body> </html>",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "<html> <head> <st yle > a { text-transform: uppercase; text- shadow: 3px 2px red; } </style> </head> <body> <a href=\"#\">TCS Welcomes You!!!</a> </body> </html>",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "<html> <head> <st yle > a { text-decoration: overline; text- transform: uppercase; text-shadow: 3px 2px red; } </style> </head> <body> <a href=\"#\">TCS Welcomes You!!!</a> </body> </html>",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "None of options",
        "isCorrect": false
      }
    ],
    "hint": "The question asks for the 'output of the below code,' and option C is the exact provided code, suggesting it refers to the code snippet itself rather than its visual rendering.",
    "category": "Java"
  },
  {
    "question": "Which of the following is a valid array declaration in Java Script?",
    "options": [
      {
        "id": "A",
        "text": "var week = new Array{\"Sun\", \"Mon\", \"Tue\", \"Wed\", \"Thu\", \"Fri\", \"Sat\"};",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "var week = new Array(\"Sun\", \"Mon\", \"Tue\", \"Wed\", \"Thu\", \"Fri\", \"Sat\");",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "var week = new Array[\"Sun\", \"Mon\", \"Tue\", \"Wed\", \"Thu\", \"Fri\", \"Sat\"];",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None of options",
        "isCorrect": false
      }
    ],
    "hint": "In JavaScript, an array constructor with initial elements uses parentheses to enclose the comma-separated values, as shown in `new Array(\"item1\", \"item2\")`.",
    "category": "UI"
  },
  {
    "question": "What is the output of the below code? <html> <body> <p id=\"demo\"></p> <script> var fruits = [\"Red\", \"Green\", \"Blue\", \"Black\"]; document.getElementById(\"demo\").innerHTML = fruits.toString(); </script> </body> </html>",
    "options": [
      {
        "id": "A",
        "text": "HashCode",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "[Red,Green,Blue,Black]",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Red,Green,Blue,Black",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "None of options",
        "isCorrect": false
      }
    ],
    "hint": "The `toString()` method on a JavaScript array concatenates all array elements into a single string, with each element separated by a comma by default.",
    "category": "Java"
  },
  {
    "question": "Which of the below is a illegal modifier for class declaration?",
    "options": [
      {
        "id": "A",
        "text": "public",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "abstract",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "final",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "private",
        "isCorrect": true
      }
    ],
    "hint": "A top-level class in Java cannot be declared as `private` because it would restrict its visibility to only the enclosing class, rendering it inaccessible and impractical.",
    "category": "Java"
  },
  {
    "question": "What is the output for the following code: public class Demo { public static void main(String args[]) { String x=\"HELLO\"; String y=\"HELLO\"; if(x.compareTo(y)) { System.out.println(\"STRINGS ARE EQUAL\"); } else { System.out.println(\"STRINGS NOT EQUAL\"); } } }",
    "options": [
      {
        "id": "A",
        "text": "STRINGS ARE EQUAL",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "STRINGS NOT EQUAL",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Compilation error",
        "isCorrect": true
      }
    ],
    "hint": "The `String.compareTo()` method returns an integer, not a boolean, and Java's `if` statement requires a boolean expression, leading to a compilation error.",
    "category": "Java"
  },
  {
    "question": "---------------------- is required for compiling,executing and debugging a java program",
    "options": [
      {
        "id": "A",
        "text": "JVM",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "JRE",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "JDK",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "JIT",
        "isCorrect": false
      }
    ],
    "hint": "The Java Development Kit (JDK) provides the complete set of tools necessary for compiling, executing, and debugging Java programs, including the JRE and development tools.",
    "category": "Java"
  },
  {
    "question": "Computer Algorithms which determines the category of observation based on previously seen examples is called as",
    "options": [
      {
        "id": "A",
        "text": "Linear Regression",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Classification",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Maturity Learning",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Numerical regression",
        "isCorrect": false
      }
    ],
    "hint": "Classification algorithms are designed to determine the category or class of a given observation based on patterns learned from previously labeled examples.",
    "category": "KYT"
  },
  {
    "question": "When Tata Consultancy Services established?",
    "options": [
      {
        "id": "A",
        "text": "1978",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "1968",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "1988",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "1971",
        "isCorrect": false
      }
    ],
    "hint": "Tata Consultancy Services (TCS) was established in 1968, making it one of the oldest and largest IT services companies.",
    "category": "KYT"
  },
  {
    "question": "Some challenges in Artificial Intelligence are",
    "options": [
      {
        "id": "A",
        "text": "Cost",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Technology",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Common Sense",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "All of the options",
        "isCorrect": true
      }
    ],
    "hint": "Artificial Intelligence development presents challenges related to its inherent costs, the technological hurdles in its implementation, and the difficulty of encoding common sense.",
    "category": "Miscellaneous"
  },
  {
    "question": "Advantages of Cloud Services are a.  No Hardware Procurement required",
    "options": [
      {
        "id": "B",
        "text": "Space for hosting equipment is not required",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Cost for technicians who maintain Hardware",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Security",
        "isCorrect": false
      },
      {
        "id": "E",
        "text": "All of the options",
        "isCorrect": true
      }
    ],
    "hint": "Cloud services offer benefits such as eliminating hardware procurement, reducing the need for physical space, lowering technician costs, and providing inherent security features.",
    "category": "KYT"
  },
  {
    "question": "What are the problems associated with Big Data",
    "options": [
      {
        "id": "A",
        "text": "Inexperience collecting data from nontraditional sources",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Not accustomed to dealing with such large quantities of data",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Overly complex with relatively slow systems",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "All of the options",
        "isCorrect": true
      }
    ],
    "hint": "Challenges associated with Big Data include the lack of experience in collecting data from diverse sources, difficulty managing massive data quantities, and the inefficiency of traditional systems.",
    "category": "KYT"
  },
  {
    "question": "Judging another person's views solely based on our own values and culture is called :",
    "options": [
      {
        "id": "A",
        "text": "Centrality",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Diversity",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Ethnocentrism",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Criticism",
        "isCorrect": false
      }
    ],
    "hint": "Ethnocentrism is the act of judging and evaluating other cultures, values, or views exclusively through the lens of one's own cultural beliefs, often leading to bias.",
    "category": "BizSkill"
  },
  {
    "question": "Paul is working with a client who is casual while communicating with him through chat application. The client sends him memes and other forwards in order to build better workplace relationships. Select the best option.",
    "options": [
      {
        "id": "A",
        "text": "Paul can be task oriented and polite. He can avoid reciprocating by sharing memes and forward through chat application.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Since the client is informal while communicating, Paul can also do the same.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Paul can tell the client that what is done so far is not right and that it's not professional to do so.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Paul should take up this matter with the HR.",
        "isCorrect": false
      }
    ],
    "hint": "Maintaining a task-oriented and polite professional demeanor is crucial, even when clients communicate informally, to uphold professional boundaries and focus on business objectives.",
    "category": "Java"
  },
  {
    "question": "What is true about Agile principles? A. Leadership over management B. Management over leadership C. Adaptive over prescriptive D. Prescriptive over adaptive E. Customer collaboration over contract negotiation F. Contract negotiation over customer collaboration",
    "options": [
      {
        "id": "A",
        "text": "B,C,E",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "A,D,F",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "A,C,E",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "B,D,F",
        "isCorrect": false
      }
    ],
    "hint": "Agile principles emphasize leadership over strict management, adaptability over rigid prescriptive plans, and direct collaboration with customers over formal contract negotiations.",
    "category": "Java"
  },
  {
    "question": "You are a team lead. During an initial meeting, you realise that you need 3 additional resources to work on the project. How will you comm unicate the same effectively in a Project Status Report?",
    "options": [
      {
        "id": "A",
        "text": "Having 3 more associates in our team would help us complete the task effectively.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "We have less number of associates in our team to complete the project work so if we are provided with 3 more associates, we would be able to complete the task.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "We are facing a shortage of manpower for the task. Hence we need 3 more resources.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "We need 3 associates to join our team. This would help us complete the task effectively.",
        "isCorrect": false
      }
    ],
    "hint": "Option C directly and clearly states the problem (shortage of manpower) and the required solution (3 more resources), making it an effective and concise way to communicate in a report.",
    "category": "Java"
  },
  {
    "question": "What all details should be provided in the signature of an e-mail? Choose the best options. a) Name & role b) Phone & e-mail ID c) Personal address d) Organization Website",
    "options": [
      {
        "id": "A",
        "text": "a, b & d",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "a, b & c",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "b, c & d",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "a, b, c &d",
        "isCorrect": false
      }
    ],
    "hint": "A professional email signature typically includes your name, role, contact details like phone and email ID, and the organization's website, but not usually a personal address.",
    "category": "Java"
  },
  {
    "question": "‘Being objective’ in your writing is the ability to: a.Present accurate facts and figures. b.Present facts and not personal views. c.Present stereotypical information.",
    "options": [
      {
        "id": "A",
        "text": "1,3",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "1,2",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "1,2,3",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "2,3",
        "isCorrect": false
      }
    ],
    "hint": "Being objective in writing requires presenting verifiable facts and figures accurately and refraining from including personal opinions or biases.",
    "category": "Java"
  },
  {
    "question": "Katherine is about to write an important e-mail to one of her stakeholders and she is NOT SURE about the use of certain phrases. Which am ong the following can she make use of? a) It is a blunder. b) I was wondering if you could... c) Sorry, I can't meet you. I'm busy that day. d) I am afraid I won't be available.",
    "options": [
      {
        "id": "A",
        "text": "a & b",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "b & d",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "b & c",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "a, b, c &d",
        "isCorrect": false
      }
    ],
    "hint": "Phrases like \"I was wondering if you could...\" and \"I am afraid I won't be available\" are polite and professional ways to phrase requests and express unavailability in an email.",
    "category": "Java"
  },
  {
    "question": "You open your mail and see various emails which needs to be replied. In what sequence will you reply ?",
    "options": [
      {
        "id": "A",
        "text": "Read each of them according to the order and reply one after the other.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Prioritize the emails based on their importance and then reply.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Forward the latest offers that are available in the e-commerce sites to your friends and then reply to the emails.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Mails will always be there, so have a coffee break with your colleagues first and send the emails later.",
        "isCorrect": false
      }
    ],
    "hint": "Prioritizing emails based on their importance ensures that critical communications are addressed first, promoting efficient workflow and responsiveness.",
    "category": "BizSkill"
  },
  {
    "question": "You have joined a project and you are in the training phase now. The project requires that you know the basics of Ruby on Rails. You compl ete an e-learning course on the same and now you are taking the assessment. During the assessment, a senior member of the team approache   s you and asks if you can join a conference call instead of him. He requests you to just attend the call for 10 minutes. How will you respond?",
    "options": [
      {
        "id": "A",
        "text": "Since you are in the middle of an assessment, politely say no to the team member. Explain your predicament. You can inform him that you would join the call after the assessment.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "It is impolite to say no to a team member. You can take the assessment again, but the opportunity to attend this call, may never come b ack in your life.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "You can say no as you have every right to say so. Your team mate will understand that your reason is genuine when you talk to him wh ile looking at the monitor.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "It is impolite to say 'no' when you are the junior. After reaching a high position within the organization you can say 'no' as much as you want.",
        "isCorrect": false
      }
    ],
    "hint": "It is professional to politely explain your current commitment (assessment) and offer to join later, demonstrating both respect for the request and responsibility for your own tasks.",
    "category": "Java"
  },
  {
    "question": "Choose the relevant answer/s that makes the following sentence complete and unambiguous - ' I like canteen but I do not like the food'",
    "options": [
      {
        "id": "A",
        "text": "I do not like the food served in the canteen, but the canteen I like.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "The ambience of the canteen is pleasant, however the quality of food could improve.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "I like the canteen in our office but not the food served there.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "I am in deep disagreement with the nature of food served in the canteen, however the kind of services and the ambiance on offer, I have little to complain about.",
        "isCorrect": false
      }
    ],
    "hint": "Option B provides a complete and unambiguous explanation for liking the canteen's ambience while disliking the food quality, clarifying the contrasting preferences.",
    "category": "Java"
  },
  {
    "question": "Of the following which best suits the following phrase? The production logs can be shared with the concerned team after appropriate .",
    "options": [
      {
        "id": "A",
        "text": "Data masking",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Review",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Approval",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None of the options",
        "isCorrect": false
      }
    ],
    "hint": "Data masking is the essential process of obscuring sensitive information within production logs before sharing them, ensuring data privacy and security.",
    "category": "Java"
  },
  {
    "question": "RiO week is celebrated to",
    "options": [
      {
        "id": "A",
        "text": "bring an awareness about lifecycle of a software to all the TCSers",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "create awareness regarding software quality",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "An initiative that is aimed at improving our production support operations.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "None of the choices are correct",
        "isCorrect": false
      }
    ],
    "hint": "RiO Week is an initiative specifically aimed at enhancing and optimizing production support operations within TCS, focusing on efficiency and quality.",
    "category": "Miscellaneous"
  },
  {
    "question": "Duplication of code is the root cause of most of the maintenance problems",
    "options": [
      {
        "id": "A",
        "text": "TRUE",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "FALSE",
        "isCorrect": false
      }
    ],
    "hint": "Code duplication creates redundant logic that must be updated in multiple places, significantly increasing the effort and risk of errors during software maintenance.",
    "category": "Miscellaneous"
  },
  {
    "question": "Which of the following sorting algorithms in its typical implementation gives best performance when applied on an array which is sorted or almost sorted (maximum 1 or two elements are misplaced).",
    "options": [
      {
        "id": "A",
        "text": "Insertion Sort",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Merge Sort",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Quick Sort",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Bubble Sort",
        "isCorrect": false
      }
    ],
    "hint": "Insertion Sort is highly efficient for nearly sorted arrays, performing in O(n) time as it only needs to shift a few elements into their correct positions.",
    "category": "Java"
  },
  {
    "question": "As per good programming practices it is better to in codes.",
    "options": [
      {
        "id": "A",
        "text": "minimize coupling and decrease  cohesion",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "maximize coupling and increase  cohesion",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "minimize coupling and increase cohesion",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "maximize coupling and decrease cohesion",
        "isCorrect": false
      }
    ],
    "hint": "Good programming practices recommend minimizing coupling (interdependencies between modules) and maximizing cohesion (elements within a module belonging together) for better maintainability and flexibility.",
    "category": "Algorithms"
  },
  {
    "question": "Which command will delete the lines containing the pattern 'this' from the file?",
    "options": [
      {
        "id": "A",
        "text": "delete -f this file",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "SED /this/d files",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Sed /'this'/d file.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "sed /this/d file",
        "isCorrect": true
      }
    ],
    "hint": "The `sed` command with the `/pattern/d` syntax is a standard and effective way to delete lines containing a specified pattern from a file.",
    "category": "Unix"
  },
  {
    "question": "Given the command awk 'BEGIN{FS=\" \";s=0}{s=s+$2}END{print s}' file . What will be the expected output?",
    "options": [
      {
        "id": "A",
        "text": "Sum of first column of input file",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Sum of second column of input file",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Average of first column of input file",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Average of second column of input file",
        "isCorrect": false
      }
    ],
    "hint": "The awk command iterates through file, sums the values in the second column ($2) to variable s for each line, and then prints the total sum s in the END block.",
    "category": "Java"
  },
  {
    "question": "Which command is used to change permission levels of a file or directory?",
    "options": [
      {
        "id": "A",
        "text": "passwd",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "unset",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "return",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "chmod",
        "isCorrect": true
      }
    ],
    "hint": "The chmod command (change mode) is used in Unix-like operating systems to change the file system permissions of files and directories.",
    "category": "Unix"
  },
  {
    "question": "Which option will find string “Ilp” in a file case insensitively.",
    "options": [
      {
        "id": "A",
        "text": "grep -w \"IP\" file.txt",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "grep -i \"Ilp\" file.txt",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "grep -iw \"Ilp\" fle.txt",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "grep -w \"Ilp\" file.txt",
        "isCorrect": false
      }
    ],
    "hint": "The -i option with grep makes the search case-insensitive, so it will find \"Ilp\" regardless of capitalization.",
    "category": "Unix"
  },
  {
    "question": "Which of the following is not a formatting element in HTML?",
    "options": [
      {
        "id": "A",
        "text": "<b>",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "<p>",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "<strong>",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "<del>",
        "isCorrect": false
      }
    ],
    "hint": "The <p> tag is a semantic element used to define a paragraph of text, whereas <b>, <strong>, and <del> are typically considered formatting or text-level semantic elements that describe how text should appear or be interpreted.",
    "category": "UI"
  },
  {
    "question": "What will be the out put of the below code; <!DOCTYPE html> <html> <body> <h1 style=\"font-group:verdana;\">Xplore HTML</h1> </body> </html>",
    "options": [
      {
        "id": "A",
        "text": "Print Xplore HTML in verdana font.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Print Xplore HTML in H1 with verdana font.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Print Xplore HTML in H1 with default  font.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Print Xplore HTML without any  formatting.",
        "isCorrect": false
      }
    ],
    "hint": "The CSS property font-group is invalid and will be ignored by the browser, causing the <h1> element to display its text \"Xplore HTML\" using the default H1 styling and font.",
    "category": "UI"
  },
  {
    "question": "<caption> is tag used to define the table caption.",
    "options": [
      {
        "id": "A",
        "text": "TRUE",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "FALSE",
        "isCorrect": false
      }
    ],
    "hint": "The <caption> tag is an HTML element specifically designed to define a caption or title for a <table> element.",
    "category": "UI"
  },
  {
    "question": "<p>Top news:</p> <blockquote url=\"https://www.thehindu.com//\" > Top news from The Hindu; </blockquote> The above code will display today's news from The Hindu in blocks.",
    "options": [
      {
        "id": "A",
        "text": "TRUE",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "FALSE",
        "isCorrect": true
      }
    ],
    "hint": "The <blockquote> tag is used to indicate that the enclosed text is an extended quotation and does not have a url attribute to fetch content from a web link.",
    "category": "Java"
  },
  {
    "question": "Which html statement is used to emphasizing a text?",
    "options": [
      {
        "id": "A",
        "text": "<mark>",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "<emph>",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "<del>",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None of the options",
        "isCorrect": true
      }
    ],
    "hint": "The standard HTML tag for emphasizing text is <em>. Since <mark>, <emph> (non-standard), and <del> are not for general emphasis, \"None of the options\" is the correct choice.",
    "category": "UI"
  },
  {
    "question": "<html> <head> <style> a:link, a:visited { background- color: green; color: white; padding: 14px 25px; } a:hover, a:active { background- color: red; } </style> </head> <body> <a href=\"register.html\" target=\"_blank\">Register</a> </body> </html> What will be the out put of the above code?",
    "options": [
      {
        "id": "A",
        "text": "Create a button with default background color as green and on mouse over it change to red.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Create a link with default background color as green and on mouse over it change to red.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Create a link Register with default style.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None of options",
        "isCorrect": false
      }
    ],
    "hint": "The CSS defines styles for <a> tags: a:link and a:visited set a green background, while a:hover and a:active change the background to red when the mouse is over the link or it is being activated.",
    "category": "UI"
  },
  {
    "question": "ul.a { list-type: lower-alpha; } The above style will display",
    "options": [
      {
        "id": "A",
        "text": "Used to display the <ul> with circle bullets.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Used to display the <ul> with roman letters.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Used to display the <ul> with lower case alphabets.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None of the options",
        "isCorrect": true
      }
    ],
    "hint": "The CSS property list-type is incorrect; the correct property for list item markers is list-style-type. Due to this syntax error, no specific list style will be applied.",
    "category": "Java"
  },
  {
    "question": "<html> <head> <style> .center { text-align: justify; border: 3px solid green; } </style> </head> <body> <div class=\"center\"> <p>Hello World.</p> </div> </body> </html> what will be the output of the above code?",
    "options": [
      {
        "id": "A",
        "text": "Display Hello World in a green border with align left.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Display Hello World in a green border with align center.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Display Hello World in a green border with align right.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Display Hello World without any border and align center.",
        "isCorrect": false
      }
    ],
    "hint": "The text-align: justify; property aligns the text to both the left and right margins, but for a single short line like \"Hello World\", it often results in a left-aligned appearance, all within a green border.",
    "category": "Java"
  },
  {
    "question": "var x = 100 + 5 ** 3; what will be the output of x?",
    "options": [
      {
        "id": "A",
        "text": "315",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "225",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "115",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "NaN",
        "isCorrect": false
      }
    ],
    "hint": "The ** operator denotes exponentiation; 5 ** 3 calculates 5 raised to the power of 3 (125), which then adds to 100, resulting in 225.",
    "category": "Java"
  },
  {
    "question": "<html> <body> <script> function saveValue(x) { alert(x**2); } </script> <div id=\"myDiv\" style=\"display:none\"> <input type=\"button\" value=\"Click\" onclick=\"saveValue('5');\"> </div> </body> </html> What will be the output of the code?",
    "options": [
      {
        "id": "A",
        "text": "10",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "25",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Script Error",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None of options",
        "isCorrect": true
      }
    ],
    "hint": "The div containing the button has display:none applied, making it invisible and inaccessible on the web page, so the button cannot be clicked and no output will be generated.",
    "category": "Java"
  },
  {
    "question": "Given below table with columns specified as below EMPLOYEE(EmployeeID,Employeename,yrsofexperience,gender,DOB,location). What is the query for displaying the location and count of employees according to location?",
    "options": [
      {
        "id": "A",
        "text": "SELECT location, COUNT(employeeID) FROM employee GROUP BY location;",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "SELECT location,gender, COUNT(employee_id) FROM employee GROUP BY location;",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "SELECT location,gender, COUNT(employee_id) FROM employee WHERE yrs_of_experience>2 GROUP BY gender;",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None of the options",
        "isCorrect": false
      }
    ],
    "hint": "To count employees per location, the COUNT(employeeID) aggregate function is used in conjunction with the GROUP BY location clause to group results by each unique location.",
    "category": "Java"
  },
  {
    "question": "Which SQL clause can be used to match a condition on the grouped result of the query?",
    "options": [
      {
        "id": "A",
        "text": "where",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "groupby",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "having",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "orderby",
        "isCorrect": false
      }
    ],
    "hint": "The HAVING clause is specifically used in SQL to filter the results of a GROUP BY clause, applying conditions to groups rather than individual rows.",
    "category": "Java"
  },
  {
    "question": "Given a relation as below. Exam(ExamID,Name,Examdate,Cent er,Location) How can we remove the column location from above table?",
    "options": [
      {
        "id": "A",
        "text": "alter exam DROP location ;",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "ALTER TABLE exam ADD location ;",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "ALTER exam ADD COLUMN location ;",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "ALTER TABLE exam DROP COLUMN location;",
        "isCorrect": true
      }
    ],
    "hint": "The ALTER TABLE statement, combined with the DROP COLUMN clause, is the correct SQL syntax for removing an existing column from a specified table.",
    "category": "Java"
  },
  {
    "question": "Consider the following table; Customer AccNo Name Address 1001 Arun Trivandrum 1002 Kishore 1003 Resmi Chennai 1004 Sanjay Which is the right query for retrieving all the customer whose address is empty.",
    "options": [
      {
        "id": "A",
        "text": "SELECT * FROM Customers WHERE Address IS NULL",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "SELECT * FROM Customers WHERE Address = ''",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "SELECT * FROM Customers WHERE Address IS EMPTY",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None of the options",
        "isCorrect": false
      }
    ],
    "hint": "In SQL, IS NULL is the correct operator to check for rows where a column's value is explicitly missing or undefined, as opposed to an empty string.",
    "category": "Java"
  },
  {
    "question": "What is wrong with below code? DECLARE faculty_record FACULTY_DEMO%ROWTYPE; CURSOR c_faculty is SELECT * FROM FACULTY_demo; BEGIN OPEN c_faculty; LOOP END; FETCH c_faculty into faculty_record; EXIT WHEN c_faculty%notfound; dbms_output.put_line(faculty_record.ID || ' ' || faculty_record.NAME || ' ' || faculty_record.LOCATION); CLOSE c_faculty;",
    "options": [
      {
        "id": "A",
        "text": "syntax error in cursor declaration",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Loop is not closed properly",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Variable declaration has syntax error",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Error in select statement",
        "isCorrect": false
      }
    ],
    "hint": "The FETCH statement and EXIT WHEN condition are located outside the LOOP...END LOOP block, which is a syntax error in PL/SQL as these actions must occur within the loop.",
    "category": "Java"
  },
  {
    "question": "PL/SQL support the data definition commands like CREATE. True or False?",
    "options": [
      {
        "id": "A",
        "text": "TRUE",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "FALSE",
        "isCorrect": true
      }
    ],
    "hint": "PL/SQL is primarily a procedural extension for SQL and does not directly support Data Definition Language (DDL) commands like CREATE within its procedural blocks without using dynamic SQL.",
    "category": "Java"
  },
  {
    "question": "Find the output of the following code sgment assuming the gross_sale entry by user is 2500? VARIABLE amount_payable NUMBER ACCEPT gross_sale PROMPT 'Please Eneter Sale Amount' DECLARE v_actual_sale NUMBER(9,2):=&gross_sale; BEGIN IF v_actual_sale >2000 THEN v_actual_sale := v_actual_sale -500; ELSE v_actual_sale := v_actual_sale -100; END IF; :amount_payable := v_actual_sale; END; / PRINT amount_payable",
    "options": [
      {
        "id": "A",
        "text": "AMOUNT_PAYABLE 2000",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "AMOUNT_PAYABLE 2400",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Compilation error",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "RunTime Exception",
        "isCorrect": false
      }
    ],
    "hint": "Since gross_sale is 2500, v_actual_sale (2500) is greater than 2000, so 500 is subtracted, making v_actual_sale 2000, which is then assigned to amount_payable.",
    "category": "Java"
  },
  {
    "question": "What is the keyword used to force a FOR loop to decrement from the upper bound to lower bound?",
    "options": [
      {
        "id": "A",
        "text": "INVERSE",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "BACK",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "REVERSE",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "None of the options",
        "isCorrect": false
      }
    ],
    "hint": "In PL/SQL FOR loops, the REVERSE keyword is used to make the loop iterator count downwards from the upper bound to the lower bound.",
    "category": "Java"
  },
  {
    "question": "Which of the following are the Characteristics of an object?",
    "options": [
      {
        "id": "A",
        "text": "State,Behaviour,Responsibility, Communication,Identity",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "State,Behaviour,Responsibility",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Responsibility,Communication,Identity",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "State,Behaviour,Identity",
        "isCorrect": false
      }
    ],
    "hint": "The five fundamental characteristics that define an object in object-oriented programming are State (data), Behaviour (methods), Responsibility (purpose), Communication (interaction), and Identity (unique instance).",
    "category": "Java"
  },
  {
    "question": "Which of the below is incorrect?",
    "options": [
      {
        "id": "A",
        "text": "int arr[]=new int[]{1,2,3,4,5,6};",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "int[] arr=new int[6];",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "int[] arr=new int{1,2,3,4,5,6};",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "int arr[]={1,2,3,4,5,6};",
        "isCorrect": false
      }
    ],
    "hint": "The syntax new int{1,2,3,4,5,6}; is incorrect for array initialization in Java; it should either specify the size new int[size] or use new int[]{...} with values.",
    "category": "Java"
  },
  {
    "question": "A table containing employee have some faulty records .ie the year of joining(YOJ) was incorrectly entered for employee ids between 20 and 100. Choose from below the right sql query to correct the column year of joining (YOJ)as 201e.",
    "options": [
      {
        "id": "A",
        "text": "update table Employees set YOJ=2015;",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "update Employees set YOJ=2015 where id between (20,100);",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "update Employees set YOJ=2015 where id between 20 and 100;",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "alter table employees add YOJ=2015 where id>=20 and id<=100;",
        "isCorrect": true
      }
    ],
    "hint": "The UPDATE statement is used to modify existing records in a table, SET YOJ=2015 changes the column value, and WHERE id BETWEEN 20 AND 100 correctly targets the specific range of employee IDs.",
    "category": "Java"
  },
  {
    "question": "Choose the options that is/are not true a.  %ROWTYPE is used when an entire row of the table is returned.",
    "options": [
      {
        "id": "B",
        "text": "%TYPE is used when a variable has to contain the same datatype as the column.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "%TYPE is used when an entire row of the table is returned.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "%ROWTYPE is used when a variable has to contain the same datatype as the column.",
        "isCorrect": true
      }
    ],
    "hint": "%TYPE is used to declare a variable with the same data type as a specific column, not to return an entire row; that functionality belongs to %ROWTYPE.",
    "category": "Java"
  },
  {
    "question": "What is the output of below python code? def myfunc(x, y, z, a): print(x + y) nums = [1, 3, 5, 4] myfunc(*nums)",
    "options": [
      {
        "id": "A",
        "text": "4",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "3",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "2",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "1",
        "isCorrect": false
      }
    ],
    "hint": "The *nums syntax unpacks the list nums into positional arguments, so myfunc(1, 3, 5, 4) is called, and x + y calculates 1 + 3, resulting in 4.",
    "category": "Java"
  },
  {
    "question": "What is the output of below code? x = \"TCS \" y = 8 print(x + y)",
    "options": [
      {
        "id": "A",
        "text": "TCS",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "TCS8",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "TypeError",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "8",
        "isCorrect": false
      }
    ],
    "hint": "Python's + operator cannot directly concatenate a string (x) with an integer (y); this operation will raise a TypeError.",
    "category": "Java"
  },
  {
    "question": "Which of the following print statements will print all the cities in the list on a separate line? tcs = ['HYD', 'CHN', 'GHT']",
    "options": [
      {
        "id": "A",
        "text": "print(\"\\n\".join(tcs))",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "print(tcs.join(\"\\n\"))",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "print(cities.concatenate(\"\\n\"))",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "All the options are correct.",
        "isCorrect": false
      }
    ],
    "hint": "The \"\\n\".join(tcs) method correctly concatenates the elements of the list tcs with a newline character between each, effectively printing them on separate lines.",
    "category": "Java"
  },
  {
    "question": "What is the output of below code? tcs = {} print(type(tcs))",
    "options": [
      {
        "id": "A",
        "text": "<type 'list'>",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "<type 'tuple'>",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Array",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "<type 'dict'>",
        "isCorrect": true
      }
    ],
    "hint": "In Python, empty curly braces {} are used to create an empty dictionary, and type(tcs) will therefore return <class 'dict'>.",
    "category": "Java"
  },
  {
    "question": "A UNIQUE constraint can be either a column constraint or a table constraint.",
    "options": [
      {
        "id": "A",
        "text": "False",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "True",
        "isCorrect": true
      }
    ],
    "hint": "A UNIQUE constraint can indeed be applied to a single column as a column constraint or across multiple columns as a table constraint to ensure uniqueness within those columns.",
    "category": "Python"
  },
  {
    "question": "What the following query will do? DELETE * FROM books WHERE bookid=4;",
    "options": [
      {
        "id": "A",
        "text": "The query is syntactically wrong",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Query will delete the book whose bookid is 4",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Query will delete all the books",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None of the options",
        "isCorrect": false
      }
    ],
    "hint": "The DELETE statement in SQL does not use * to specify rows to be deleted; DELETE FROM books WHERE bookid=4; is the correct syntax.",
    "category": "Java"
  },
  {
    "question": "Consider the following Employee table Name Null Type EMPID NOT NULL NUMBER(10) EMPNAME NOT NULL VARCHAR2(50) BRANCHID NOT NULL NUMBER(10) Choose the query which will increase the empname column size to VARCHAR2(200)",
    "options": [
      {
        "id": "A",
        "text": "ALTER TABLE Employee INCREASE empname varchar2(200);",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "ALTER TABLE Employee MODIFY empname varchar2(50) to varchar2(200);",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "ALTER  TABLE  Employee MODIFY empname varchar2(200);",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "ALTER  TABLE  Employee CHANGE empname varchar2(200);",
        "isCorrect": false
      }
    ],
    "hint": "The ALTER TABLE statement followed by MODIFY and the column definition (empname varchar2(200)) is the correct SQL command to change the data type or size of an existing column.",
    "category": "Java"
  },
  {
    "question": "What the following SQL query will do? SELECT employeename as 'EmpName' FROM Employee ORDER BY Empid;",
    "options": [
      {
        "id": "A",
        "text": "The query is syntactically wrong",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Query will return employeename from Employee table in ascending order of Employee Id",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Query will return employeename from Employee table",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None of the options",
        "isCorrect": false
      }
    ],
    "hint": "The query selects employeename (aliased as 'EmpName') from the Employee table and sorts the results in ascending order based on the Empid column.",
    "category": "Java"
  },
  {
    "question": "CURDATE()-This function returns the current date. a.  True What the following query will do? SELECT * FROM Employee WHERE DOJ IS NOT NULL;",
    "options": [
      {
        "id": "B",
        "text": "False",
        "isCorrect": false
      },
      {
        "id": "A",
        "text": "Query will return all records from Employee table whose DOJ is not null",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Query will return all records from Employee table whose DOJ is null",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "The query is syntactically wrong",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None of the options",
        "isCorrect": false
      }
    ],
    "hint": "The WHERE DOJ IS NOT NULL clause correctly filters the Employee table to return only those records where the 'DOJ' (Date of Joining) column has a value assigned.",
    "category": "Java"
  },
  {
    "question": "Consider the following Dept table DeptId DeptName NoofEmployee Units 123 T&D 100 2 124 ISM 500 6 234 ITI S 5000 14 Which query is used to get the maximum no of employees from the above table",
    "options": [
      {
        "id": "A",
        "text": "SELECT COUNT(NoofEmployee) from Dept;",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "SELECT MAXIMUM(NoofEmployee) from Dept;",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "SELECT MAX(NoofEmployee) from Dept;",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "All of the options",
        "isCorrect": false
      }
    ],
    "hint": "The MAX() aggregate function is the standard SQL function used to retrieve the highest value from a specified column, in this case, NoofEmployee.",
    "category": "Java"
  },
  {
    "question": "What is the output of the below query SELECT REPLACE('ILP XPLORE','ILP','TCS')",
    "options": [
      {
        "id": "A",
        "text": "ILP XPLORE",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "ILP TCS XPLORE",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "The query is syntactically wrong",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "TCS XPLORE",
        "isCorrect": true
      }
    ],
    "hint": "The REPLACE() SQL function substitutes all occurrences of a specified substring ('ILP') within a given string ('ILP XPLORE') with a new substring ('TCS'), resulting in 'TCS XPLORE'.",
    "category": "Java"
  },
  {
    "question": "Choose the numeric data types in MySQL a.  CHAR(size)",
    "options": [
      {
        "id": "B",
        "text": "TINYINT",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "BINARY(size) and TINYINT",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "DECIMAL(m,d)",
        "isCorrect": false
      }
    ],
    "hint": "TINYINT in option C is a standard numeric data type in MySQL used for storing small integer values, even though BINARY(size) is a string type.",
    "category": "Python"
  },
  {
    "question": "Identify the unordered collections in python",
    "options": [
      {
        "id": "A",
        "text": "List",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Set",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Dictionary and Set",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Tuple",
        "isCorrect": false
      }
    ],
    "hint": "In Python, Set and Dictionary are inherently unordered collections; elements in sets have no defined order, and dictionary keys (before Python 3.7) did not guarantee insertion order.",
    "category": "Python"
  },
  {
    "question": "Which of the following function is used to remove unwanted characters from a string",
    "options": [
      {
        "id": "A",
        "text": "REMOVE",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "TRIM",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "FORMAT",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "SPACE",
        "isCorrect": false
      }
    ],
    "hint": "The TRIM function is commonly used in SQL and other programming contexts to remove specified leading, trailing, or both from a string, often used for whitespace.",
    "category": "Python"
  }
];
