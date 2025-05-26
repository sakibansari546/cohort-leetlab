info: [object Object]
{
title: 'Longest Palindromic Substring',
description: 'Given a string s, find the longest contiguous substring that is a palindrome. A palindrome reads the same backward as forward. Return any one longest palindrome found.',
difficulty: 'MEDIUM',
tags: [ 'string ', 'expand-aroun' ],
examples: [
{
input: 'babad',
output: 'bab',
explanation: '“bab” (or “aba”) is the longest palindromic substring.'
},
{
input: 'cbbd',
output: 'bb',
explanation: '“bb” is the longest palindromic substring.'
},
{
input: 'a',
output: 'a',
explanation: 'Single character is a palindrome.'
},
{
input: 'forgeeksskeegfor',
output: 'geeksskeeg',
explanation: '“geeksskeeg” spans the middle.'
}
],
constraints: '1 ≤ s.length ≤ 10^3, s consists of printable ASCII characters.',
hints: [
'Expand around each center (odd and even lengths) and keep track of the best.',
'You can do it in O(n^2) time by checking all centers.',
'Dynamic programming with dp[i][j] = true if s[i..j] is palindrome also works.'
],
testcases: [
{ input: 'racecar', output: 'racecar' },
{ input: 'abacdfgdcaba', output: 'aba' },
{ input: 'abacdedcaba', output: 'abacdedcaba' },
{ input: 'noon', output: 'noon' },
{ input: 'banana', output: 'anana' }
],
codeSnippets: {
JAVASCRIPT: 'function longestPalindrome(s) {\n' +
' // TODO: implement expand-around-center approach\n' +
' return "";\n' +
'}\n' +
'\n' +
'// I/O handling\n' +
"const fs = require('fs');\n" +
"const s = fs.readFileSync(0, 'utf-8').trim();\n" +
'console.log(longestPalindrome(s));',
PYTHON: 'import sys\n' +
'\n' +
'def longest_palindrome(s):\n' +
' # TODO: implement expand-around-center approach\n' +
' return ""\n' +
'\n' +
's = sys.stdin.read().strip()\n' +
'print(longest_palindrome(s))',
JAVA: 'import java.util._;\n' +
'import java.util.Scanner;\n' +
'\n' +
'public class Main {\n' +
' public static String longestPalindrome(String s) {\n' +
' // TODO: implement expand-around-center approach\n' +
' return "";\n' +
' }\n' +
' public static void main(String[] args) {\n' +
' Scanner sc = new Scanner(System.in);\n' +
' String s = sc.nextLine();\n' +
' System.out.println(longestPalindrome(s));\n' +
' }\n' +
'}',
C: '#include <stdio.h>\n' +
'#include <string.h>\n' +
'\n' +
'char_ longestPalindrome(char* s) {\n' +
' // TODO: implement expand-around-center approach\n' +
' return "";\n' +
'}\n' +
'int main() {\n' +
' static char buf[1005];\n' +
' if (!fgets(buf, sizeof(buf), stdin)) return 0;\n' +
`    buf[strcspn(buf, "\\n")] = '\\0';\n` +
' printf("%s", longestPalindrome(buf));\n' +
' return 0;\n' +
'}',
'C++': '#include <bits/stdc++.h>\n' +
'using namespace std;\n' +
'string longestPalindrome(string s) {\n' +
' // TODO: implement expand-around-center approach\n' +
' return "";\n' +
'}\n' +
'int main(){\n' +
' string s;\n' +
' getline(cin, s);\n' +
' cout << longestPalindrome(s);\n' +
' return 0;\n' +
'}'
},
referenceSolutions: {
JAVASCRIPT: '// Read input\n' +
"const fs = require('fs');\n" +
"const s = fs.readFileSync(0, 'utf8').trim();\n" +
'\n' +
'// Expand-around-center helper\n' +
'function expand(s, left, right) {\n' +
' while (left >= 0 && right < s.length && s[left] === s[right]) {\n' +
' left--;\n' +
' right++;\n' +
' }\n' +
' return [left + 1, right - 1];\n' +
'}\n' +
'\n' +
'// Main function\n' +
'function longestPalindrome(s) {\n' +
' if (s.length < 2) return s;\n' +
' let start = 0, end = 0;\n' +
'\n' +
' for (let i = 0; i < s.length; i++) {\n' +
' // odd-length center\n' +
' let [l1, r1] = expand(s, i, i);\n' +
' if (r1 - l1 > end - start) {\n' +
' start = l1; end = r1;\n' +
' }\n' +
' // even-length center\n' +
' let [l2, r2] = expand(s, i, i + 1);\n' +
' if (r2 - l2 > end - start) {\n' +
' start = l2; end = r2;\n' +
' }\n' +
' }\n' +
'\n' +
' return s.slice(start, end + 1);\n' +
'}\n' +
'\n' +
'// Run and print\n' +
'console.log(longestPalindrome(s));\n',
PYTHON: 'import sys\n' +
'\n' +
'def longest_palindrome(s):\n' +
' def expand(l, r):\n' +
' while l >= 0 and r < len(s) and s[l] == s[r]:\n' +
' l -= 1; r += 1\n' +
' return l + 1, r - 1\n' +
' start, end = 0, 0\n' +
' for i in range(len(s)):\n' +
' l1, r1 = expand(i, i)\n' +
' l2, r2 = expand(i, i + 1)\n' +
' if r1 - l1 > end - start:\n' +
' start, end = l1, r1\n' +
' if r2 - l2 > end - start:\n' +
' start, end = l2, r2\n' +
' return s[start:end+1]\n' +
'\n' +
's = sys.stdin.read().strip()\n' +
'print(longest_palindrome(s))',
JAVA: 'import java.util.Scanner;\n' +
'\n' +
'public class Main {\n' +
' // expand-around-center helper\n' +
' private static int[] expand(String s, int left, int right) {\n' +
' while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {\n' +
' left--;\n' +
' right++;\n' +
' }\n' +
' return new int[] { left + 1, right - 1 };\n' +
' }\n' +
'\n' +
' public static String longestPalindrome(String s) {\n' +
' if (s.length() < 2) return s;\n' +
' int start = 0, end = 0;\n' +
'\n' +
' for (int i = 0; i < s.length(); i++) {\n' +
' // odd-length center\n' +
' int[] r1 = expand(s, i, i);\n' +
' if (r1[1] - r1[0] > end - start) {\n' +
' start = r1[0];\n' +
' end = r1[1];\n' +
' }\n' +
' // even-length center\n' +
' int[] r2 = expand(s, i, i + 1);\n' +
' if (r2[1] - r2[0] > end - start) {\n' +
' start = r2[0];\n' +
' end = r2[1];\n' +
' }\n' +
' }\n' +
'\n' +
' return s.substring(start, end + 1);\n' +
' }\n' +
'\n' +
' public static void main(String[] args) {\n' +
' Scanner sc = new Scanner(System.in);\n' +
' String input = sc.nextLine().trim();\n' +
' sc.close();\n' +
' System.out.println(longestPalindrome(input));\n' +
' }\n' +
'}\n',
C: '#include <stdio.h>\n' +
'#include <string.h>\n' +
'#include <stdlib.h>\n' +
'\n' +
'char* longestPalindrome(char* s) {\n' +
' int n = strlen(s);\n' +
' int start = 0, end = 0;\n' +
' for (int i = 0; i < n; i++) {\n' +
' int l = i, r = i;\n' +
' while (l >= 0 && r < n && s[l] == s[r]) { l--; r++; }\n' +
' if (r - l - 1 > end - start) { start = l + 1; end = r - 1; }\n' +
' l = i; r = i + 1;\n' +
' while (l >= 0 && r < n && s[l] == s[r]) { l--; r++; }\n' +
' if (r - l - 1 > end - start) { start = l + 1; end = r - 1; }\n' +
' }\n' +
' int len = end - start + 1;\n' +
' char* res = malloc(len + 1);\n' +
' strncpy(res, s + start, len);\n' +
" res[len] = '\\0';\n" +
' return res;\n' +
'}\n' +
'int main() {\n' +
' char buf[1005];\n' +
' if (!fgets(buf, sizeof(buf), stdin)) return 0;\n' +
`    buf[strcspn(buf, "\\n")] = '\\0';\n` +
' char\* ans = longestPalindrome(buf);\n' +
' printf("%s", ans);\n' +
' free(ans);\n' +
' return 0;\n' +
'}',
'C++': '#include <bits/stdc++.h>\n' +
'using namespace std;\n' +
'string longestPalindrome(string s) {\n' +
' int n = s.size(), start = 0, end = 0;\n' +
' auto expand = [&](int l, int r) {\n' +
' while (l >= 0 && r < n && s[l] == s[r]) { l--; r++; }\n' +
' return pair<int,int>(l + 1, r - 1);\n' +
' };\n' +
' for (int i = 0; i < n; i++) {\n' +
' auto [l1, r1] = expand(i, i);\n' +
' auto [l2, r2] = expand(i, i + 1);\n' +
' if (r1 - l1 > end - start) { start = l1; end = r1; }\n' +
' if (r2 - l2 > end - start) { start = l2; end = r2; }\n' +
' }\n' +
' return s.substr(start, end - start + 1);\n' +
'}\n' +
'int main() {\n' +
' string s;\n' +
' getline(cin, s);\n' +
' cout << longestPalindrome(s);\n' +
' return 0;\n' +
'}'
},
company: 'Generic',
isDemo: false
}
Language JAVASCRIPT is Id 63
Result ---------------- {
stdout: 'racecar\n',
time: '0.049',
memory: 19132,
stderr: null,
token: '5f68b260-ca2f-41cb-970c-8de9893850d4',
compile_output: null,
message: null,
status: { id: 3, description: 'Accepted' }
}
Result ---------------- {
stdout: 'aba\n',
time: '0.051',
memory: 20260,
stderr: null,
token: 'afb314e6-c90b-4b4a-b5c8-dfbe3f535143',
compile_output: null,
message: null,
status: { id: 3, description: 'Accepted' }
}
Result ---------------- {
stdout: 'abacdedcaba\n',
time: '0.028',
memory: 6932,
stderr: null,
token: 'deb22de4-b013-48f8-9c62-385bca0e5129',
compile_output: null,
message: null,
status: { id: 3, description: 'Accepted' }
}
Result ---------------- {
stdout: 'noon\n',
time: '0.031',
memory: 7028,
stderr: null,
token: '2eabba27-53fd-4c1f-bfd8-185844dc716a',
compile_output: null,
message: null,
status: { id: 3, description: 'Accepted' }
}
Result ---------------- {
stdout: 'anana\n',
time: '0.037',
memory: 7772,
stderr: null,
token: '521f7b19-1226-4f2d-9bac-643d5a1acfcc',
compile_output: null,
message: null,
status: { id: 3, description: 'Accepted' }
}
Language PYTHON is Id 71
Result ---------------- {
stdout: 'racecar\n',
time: '0.024',
memory: 7040,
stderr: null,
token: '9124ffb8-e58c-47fa-b9bd-8fd7e83bcb24',
compile_output: null,
message: null,
status: { id: 3, description: 'Accepted' }
}
Result ---------------- {
stdout: 'aba\n',
time: '0.013',
memory: 3288,
stderr: null,
token: '4a8e1f50-9b4b-4892-b062-ddd5fcec8a34',
compile_output: null,
message: null,
status: { id: 3, description: 'Accepted' }
}
Result ---------------- {
stdout: 'abacdedcaba\n',
time: '0.014',
memory: 3288,
stderr: null,
token: '1e4d03a6-2c5a-4aa0-9ff7-bd823c39b622',
compile_output: null,
message: null,
status: { id: 3, description: 'Accepted' }
}
Result ---------------- {
stdout: 'noon\n',
time: '0.018',
memory: 3292,
stderr: null,
token: 'd2515490-237b-4e48-a676-a01d83949d4c',
compile_output: null,
message: null,
status: { id: 3, description: 'Accepted' }
}
Result ---------------- {
stdout: 'anana\n',
time: '0.012',
memory: 3344,
stderr: null,
token: 'a1d31ca9-2f6d-4ca8-b229-2392d8261ec4',
compile_output: null,
message: null,
status: { id: 3, description: 'Accepted' }
}
Language JAVA is Id 62
Result ---------------- {
stdout: 'racecar\n',
time: '0.171',
memory: 26184,
stderr: null,
token: '5bfa8271-2ce3-4194-a252-fd078103cbb1',
compile_output: null,
message: null,
status: { id: 3, description: 'Accepted' }
}
Result ---------------- {
stdout: 'aba\n',
time: '0.172',
memory: 25624,
stderr: null,
token: '39e2be6e-5110-4844-a7c9-01644160a103',
compile_output: null,
message: null,
status: { id: 3, description: 'Accepted' }
}
Result ---------------- {
stdout: 'abacdedcaba\n',
time: '0.153',
memory: 13752,
stderr: null,
token: '1c8b80d9-71f4-48ab-86eb-f51196128dcd',
compile_output: null,
message: null,
status: { id: 3, description: 'Accepted' }
}
Result ---------------- {
stdout: 'noon\n',
time: '0.138',
memory: 20744,
stderr: null,
token: '726ed3b1-2e8e-40a5-a152-83d6960a9462',
compile_output: null,
message: null,
status: { id: 3, description: 'Accepted' }
}
Result ---------------- {
stdout: 'anana\n',
time: '0.174',
memory: 15120,
stderr: null,
token: '32a5aee5-5787-49da-aff4-ac13abb98391',
compile_output: null,
message: null,
status: { id: 3, description: 'Accepted' }
}
Language C is Id 50
Result ---------------- {
stdout: 'racecar',
time: '0.002',
memory: 1100,
stderr: null,
token: '3a5316b3-0e33-4c56-8e82-9ac48d8e8310',
compile_output: null,
message: null,
status: { id: 3, description: 'Accepted' }
}
Result ---------------- {
stdout: 'aba',
time: '0.003',
memory: 1116,
stderr: null,
token: '30b5bcdb-ba4e-4ea2-ac97-68cfd6bf109d',
compile_output: null,
message: null,
status: { id: 3, description: 'Accepted' }
}
Result ---------------- {
stdout: 'abacdedcaba',
time: '0.003',
memory: 1188,
stderr: null,
token: '2466865a-6601-44ee-9a12-40009a72a593',
compile_output: null,
message: null,
status: { id: 3, description: 'Accepted' }
}
Result ---------------- {
stdout: 'noon',
time: '0.002',
memory: 2004,
stderr: null,
token: 'f117d445-f51c-4379-abba-903ff58fb37b',
compile_output: null,
message: null,
status: { id: 3, description: 'Accepted' }
}
Result ---------------- {
stdout: 'anana',
time: '0.002',
memory: 13624,
stderr: null,
token: '45d14d5d-af61-4985-9ae2-94b2bcb609f5',
compile_output: null,
message: null,
status: { id: 3, description: 'Accepted' }
}
Language C++ is Id 54
error: Error - AxiosError: Request failed with status code 400

{
"statusCode": 500,
"data": {
"error": {
"message": "Request failed with status code 400",
"name": "AxiosError",
"stack": "AxiosError: Request failed with status code 400\n at settle (file:///C:/Users/HP/Desktop/coding/projects/cohort-leetcode-clone/backend/node_modules/axios/lib/core/settle.js:19:12)\n at IncomingMessage.handleStreamEnd (file:///C:/Users/HP/Desktop/coding/projects/cohort-leetcode-clone/backend/node_modules/axios/lib/adapters/http.js:599:11)\n at IncomingMessage.emit (node:events:536:35)\n at endReadableNT (node:internal/streams/readable:1698:12)\n at process.processTicksAndRejections (node:internal/process/task_queues:90:21)\n at Axios.request (file:///C:/Users/HP/Desktop/coding/projects/cohort-leetcode-clone/backend/node_modules/axios/lib/core/Axios.js:45:41)\n at process.processTicksAndRejections (node:internal/process/task_queues:105:5)\n at async pollBatchResults (file:///C:/Users/HP/Desktop/coding/projects/cohort-leetcode-clone/backend/src/app/utils/judge0.js:48:22)\n at async file:///C:/Users/HP/Desktop/coding/projects/cohort-leetcode-clone/backend/src/app/routes/problem/controller.js:81:23",
"config": {
"transitional": {
"silentJSONParsing": true,
"forcedJSONParsing": true,
"clarifyTimeoutError": false
},
"adapter": [
"xhr",
"http",
"fetch"
],
"transformRequest": [
null
],
"transformResponse": [
null
],
"timeout": 0,
"xsrfCookieName": "XSRF-TOKEN",
"xsrfHeaderName": "X-XSRF-TOKEN",
"maxContentLength": -1,
"maxBodyLength": -1,
"env": {},
"headers": {
"Accept": "application/json",
"Authorization": "Bearer sk_live_JHKM0T23jLxfmfyWx2LttxWGkiveBIpg",
"User-Agent": "axios/1.9.0",
"Accept-Encoding": "gzip, compress, deflate, br"
},
"baseURL": "http://localhost:2358",
"withCredentials": true,
"params": {
"tokens": "57cc0bb4-f3b1-4a9b-902c-1913a6c7f3a0,2df9df5d-85ec-4c62-bdba-148377779716,eebfe1b4-25c7-4357-b6a1-eeb48b104634,d970b38c-f683-403f-9383-355bf2b9ed95,0ba5bff4-8802-4ed0-99dc-60124124057f",
"base64_encoded": false
},
"method": "get",
"url": "/submissions/batch",
"allowAbsoluteUrls": true
},
"code": "ERR_BAD_REQUEST",
"status": 400
}
},
"message": "Request failed with status code 400",
"success": false
}

createProblemHandler = AsyncHandler(async (req, res) => {
// Get all data
// Check user admin or not
// Go through each refrence solution for defferent language

    const {
      title,
      description,
      difficulty,
      tags,
      examples,
      constraints,
      hints,
      editorial,
      testcases,
      codeSnippets,
      referenceSolutions,
      company,
      isDemo,
    } = handleZodError(this.validateParseData(createProblemSchema, req.body));

    console.log(req.body);

    const user = await prisma.user.findUnique({
      where: {
        id: req.userId,
      },
      select: {
        role: true,
      },
    });

    if (!user || user.role !== "ADMIN") {
      throw new ApiError(400, "Access denied");
    }

    for (const [language, solutionCode] of Object.entries(referenceSolutions)) {
      const languageId = getJudge0LangaugeId(language);

      if (!languageId) {
        throw new ApiError(400, `Language ${language} is not supported`);
      }

      console.log(`Language ${language} is Id ${languageId}`);

      const submissions = testcases.map(({ input, output }) => {
        return {
          source_code: solutionCode,
          language_id: languageId,
          stdin: input,
          expected_output: output,
        };
      });

      const submissionsResult = await submitBatch(submissions);

      const tokens = submissionsResult.map((res) => res.token);

      const results = await pollBatchResults(tokens);

      for (let i = 0; i < results.length; i++) {
        const result = results[i];
        console.log("Result ---------------- ", result);

        if (result.status.id !== 3) {
          throw new ApiError(
            400,
            `Testcase ${i + 1} failed for language ${language}`
          );
        }
      }
    }

    const newProblem = await prisma.problem.create({
      data: {
        title,
        description,
        difficulty,
        tags,
        examples,
        constraints,
        hints,
        editorial,
        testcases,
        codeSnippets,
        referenceSolutions,
        userId: req.userId,
        company,
        isDemo,
      },
    });
    if (!newProblem)
      throw new ApiError(
        403,
        "New Problem creation failed: Unable to save problem to the database"
      );

    res
      .status(200)
      .json(
        new ApiResponse(200, "Problem Created successfully", { newProblem })
      );

});
