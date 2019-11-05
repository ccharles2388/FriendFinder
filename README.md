# FriendFinder
Friend Finder Full Stack Dating Application
 Friend Finder - Node and Express Servers

### https://friend-finderplus.herokuapp.com/

## Overview:

FriendFinder is a compatibility-based application -- basically a dating app. This full-stack site takes in results from users surveys, then compare theirs answers with those from other users. The app will then display the name and picture of the user with the best overall match.



### Friend Finder Plus Application Features And Screen Shots

1. User goes to https://friend-finderplus.herokuapp.com/ and is displayed a survey. The survey has 10 questions. Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

2. User Is Displayed Friend Finder Plus Application 
![GitHub Logo](/img/ff_1.png)

Format: ![Direct Image Link]https://github.com/ccharles2388/Bamazon/blob/master/img/ff_1.png)
<br>

3. User Answers Questions On Screen Shot  1
![GitHub Logo](/img/ff_2.png)


Format: ![Direct Image Link]https://github.com/ccharles2388/Bamazon/blob/master/img/ff_2.png)
<br>

4. User Answers Questions On Screen Shot  2
![GitHub Logo](/img/ff_3.png)

Format: ![Direct Image Link]https://github.com/ccharles2388/Bamazon/blob/master/img/ff_3.png)
<br>

5. User Answers Questions On Screen Shot  3
![GitHub Logo](/img/ff_4.png)


Format: ![Direct Image Link]https://github.com/ccharles2388/Bamazon/blob/master/img/ff_4.png)
<br>




### Main File Structure Overview

1. The `server.js` file  requires the basic npm packages : `express`, `body-parser` and `path`.

2. The `htmlRoutes.js` file includes two routes in the routing folder which resides under the app folder:

   * A GET Route to `/survey` displays the survey page.
   * A default, catch-all route that leads to `home.html` also displays on the home page.

3. The `apiRoutes.js` file also contain two routes in the routing folder which resides under the app folder:

   * A GET route with the url `/api/friends`displays on the main home page. This also displays a JSON of all possible friends.
   * A POST routes `/api/friends`, handles incoming survey results. This route is also  used to handle the compatibility logic.

4. Application data is saved inside of `app/data/friends.js` as an array of objects. Each of these objects follows the format below:

```json
{
  "name":"Ahmed",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
}
```

5. Determination of  the user's most compatible friend is done by the following logic method:

   * Converts each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
   * When that is done, a comparasion of  the difference between current user's scores against those from other users, question by question.  Differences are added up  to calculate the `totalDifference`.
     * Example:
       * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
       * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
       * Total Difference: **2 + 1 + 2 =** **_5_**
   * Absolute values of the differences are observed. In Other Terms: no negative solutions! App calculates both `5-3` and `3-5` as `2`, and so on.
   * The closest match will be the user with the least amount of difference.

6. Once computed you've found the current user's most compatible friend, the results are displayed as a modal pop-up.
   * The modal displays both the name and picture of the closest match.

---

## Built with:

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - High-level programming language
- [Node.js](https://nodejs.org/en/) - Open-source run-time environment that executes JS code outside of a browser
- [JSON](http://www.json.org) - Data format
- [MySQL](https://www.mysql.com) - Database
- [MAMP](https://www.mamp.info/en/) - Access to local PHP server and MYSQL server
- [Visual Studio Code](https://code.visualstudio.com/) - source code editor developed by Microsoft

#### npm packages used:

- [express](https://www.npmjs.com/package/express) - A collection of common interactive command line user interfaces
- [mysql](https://www.npmjs.com/package/dotenv) - Node.js driver for MySQL ( For Future Expanded Database Usage)
- [path](https://www.npmjs.com/package/path) - Utilities for working with file and directory paths
- [morgan](https://www.npmjs.com/package/morgan) - HTTP request logger middleware for node.js ( For Future Time Tracing)
- [body-parser](https://www.npmjs.com/package/body-parser) - Node.js body parsing middleware


#### API Information And Accessibility:

API Friends List In JSON Tree ( Accessed From Home Page)
![GitHub Logo](/img/ff_jsontree.png)


Format: ![Direct Image Link]https://github.com/ccharles2388/Bamazon/blob/master/img/ff_jsontree.png)
<br>

-------------------------------------------------------------------------------------------------------------------------

### Author

* Curtis Charles