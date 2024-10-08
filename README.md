# **Type Library** 



<br>

![GitHub last commit](https://img.shields.io/github/last-commit/k-nadia/project-2?color=red&style=for-the-badge)
![GitHub contributors](https://img.shields.io/github/contributors/k-nadia/project-2?color=orange&style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/k-nadia/project-2?color=yellow&style=for-the-badge)
![GitHub top language](https://img.shields.io/github/languages/top/k-nadia/project-2?color=green&style=for-the-badge)


<hr>

# **Introduction**
<br>
Portfolio Project 2 - Code Institute Full Stack Development Diploma
<br><br>
Type Library is an interactive front-end site which serves the purpose of helping users improve their typing speed (WPM) and accuracy, using a unique approach to learning.
<br><br>
Traditional online typing tests often rely on paragraphs consisting of randomly generated words which do not form sentences or hold any kind of meaning. This approach tests ones typing skills but can be a rather dull exercise for the user and does little to engage their mind with the actual content they are typing. 
<br><br>
The 'Type Library' application aims to solve this problem by incorporating excerpts from well-known classic and cult novels, to make type practice more engaging and enriching. 
<br><br>
Our approach transforms typing from an often monotonous practice into one that engages users with meaningful and beautifully written text, providing context and narrative that enhances their motivation and enjoyment. This approach not only helps improve typing speed and accuracy but also introduces users to valuable literature, potentially sparking interest in new books and authors. 
<br><br>
Typing excerpts from well-crafted prose can aid in developing a deeper understanding of language, rhythm, and structure, making the practice not just a test of skill but an opportunity for literary appreciation and learning. 
<br><br>

Deployed website can be be found here: [Type Library](https://k-nadia.github.io/project-2/index.html)
<br><br>

<p align="center">
<img src ="assets/images/testing/AmIResponsive.JPG" width="auto" height="auto" alt="AmIResponsive placeholder image showing the following viewports: desktop, laptop, tablet, mobile">
</p>


# Table of Contents

- [Design](#design)
	- [Colours](#colours)
    - [Typography](#typography)
- [UX / UI](#UX/UI)
	- [User Stories](#user-stories)
	- [Wireframes](#wireframes)
- [Features](#features)
	- [Navigation](#navigation)
- [Testing](#testing)
    - [Javascript Linter Tool](#javascript-linter-tool)
    - [HTML W3C Validator](#html-w3c-validator)
    - [CSS Jigsaw Validator](#css-jigsaw-validator)
    - [Google Chrome Lighthouse Tool](#google-chrome-lighthouse-tool)
    - [Unfixed Bugs](#unfixed-bugs)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)
	- [Languages Used](#languages-used)
	- [Frameworks, Libraries & Programs Used ](frameworks-libraries-and-programs-used)
- [Credits](#credits)
	- [Content Sources](#content-sources)
  - [Content Generators](#content-generators)
  - [Image Sources](#images-sources)
  - [Special Thanks](#special-thanks)

    

<br>


<hr>

## **DESIGN**

### **Colours**


The chosen colour palette for the Type Library website is a perfect fit for its literary theme, blending classic tones with accessibility considerations to enhance the user experience. The palette consists of six colours:

**#635042:**
<br>
The rich brown colour evokes the look of aged, leather-bound books, lending a vintage feel that resonates with the literary theme. It is used for the content box border to emphasize the main test area, while maintaining an air of sophistication.

**#CA9A76:**
<br>
A warm, light brown shade, this colour is reminiscent of old, well-worn paper or wooden bookshelves. It adds a natural tone that makes the site feel inviting, akin to a library or study room. Used within the logo and the reset button background colour.

**#F5F3C4:** 
<br>
This soft, pale yellow colour was the first colour I selected for the palette due to its similarity to the yellowing pages of an antique book. It creates a warm and gentle background that is easy on the eyes, while also evoking the nostalgic feeling of reading a classic novel. Used for the test area background colour.

**#2B2B2B:**
<br>
This dark grey was incorporated due to its ability to provide high contrast without the harshness of pure black. It ensures readability while keeping the overall aesthetic softer and more in line with the vintage theme. Used for the logo title heading.

**#000000:** 
<br>
Pure black was chosen for the highest contrast elements (all of the text within the test area), ensuring maximum legibility and accessibility for all users, including those with visual impairments. 

**#FFFFFF:**
<br>
The white colour offers simplicity and high contrast, serving as a clean background that allows other colours and text to stand out sharply. It keeps the design modern and uncluttered, balancing the vintage tones with a contemporary feel. White was used as the webpage background colour.

Collectively these colours create an inviting and accessible environment for users to practice their typing but also immerse them in the experience of interacting with classic literary content.

![ColorPalette](assets/images/design/color-palette.png)

### **Typography**

All fonts used throughout the application were sourced from [Google Fonts](https://fonts.google.com/).
<br>
- EB Garamond
- Used for: body
- I chose to use this serif font throughout the website because it closely resembles the typefaces commonly used in printed books, evoking a sense of nostalgia and authenticity that aligns perfectly with the literary theme of the platform. By incorporating EB Garamond, users can enjoy an immersive typing experience that mirrors the feel of reading classic literature, helping to create a deeper connection to the text they are typing. Its readability and classic aesthetics not only enhance the visual appeal of the website but also honor the literary tradition, making it a fitting choice for a site dedicated to showcasing the beauty of classic prose.
<br><br>
![EBGaramondFontCredit](assets/images/typography/eb-garamond.JPG)
<br><br>
![EBGaramondFontSample](assets/images/typography/eb-garamond-sample.JPG)
<hr>

## **UX / UI**

### **User Stories**

As a user:

- I want to choose the duration of the typing test (30 seconds, 1 minute, etc.) so that I can customize my experience based on my available time or focus level.

- I want the game to generate a random excerpt from a literary novel so that I can enjoy engaging content while practicing my typing skills.

- I want to receive my results immediately after completing the typing test to gain instant feedback on my performance and track my progress.

- I want to see my words per minute (WPM) score on the results page so that I can evaluate the speed of my typing.

- I want to see my accuracy percentage on the results page to understand how well I typed the provided excerpt without errors.

- I want to view the total number of words typed so that I can measure my productivity during the test.

- I want to know the total number of errors made so that I can identify areas for improvement in my typing skills.

- I want the ability to retry the test after viewing my results so that I can practice and improve my typing speed and accuracy.

- I want to see the book title and the author of the excerpt I typed so that I can discover new literature and potentially find my next read.


As a developer: 

- I want to access a README file so that I can understand the scope and purpose of the project and locate essential information regarding the website
- I want to access deployment information so I can follow step-by-step instructions on how to deploy the project


### **Wireframes**

<br>

![MobileWireframes](./assets/images/wireframes/wireframe-mobile.png)
![TabletWireframes](./assets/images/wireframes/wireframe-tablet.png)
![DesktopWireframes](./assets/images/wireframes/wireframe-desktop.png)
<hr>

## **FEATURES**

### **Logo**

The logo for "Type Library" perfectly encapsulates the essence of the online typing test. The image of an open book with a quill resting on a page instantly evokes a sense of nostalgia and is designed to tie together the two elements of Type Library: typing and literature. The book symbolizes the classic literary excerpts users will be typing, while the quill, traditionally used for writing, represents the act of typing. This combination seamlessly blends the past and present, show-casing the link between traditional reading and modern-day typing. The logo is not only visually appealing but also strategically designed to enhance user experience by creating a sense of familiarity and excitement for the literary journey that awaits. 

The simple, iconic imagery used in the logo is easily recognisable and understandable across different cultures and languages. The clean lines and contrasting colors ensure that the logo is legible even at smaller sizes, making it suitable for use on various platforms. This visual clarity contributes to a positive user experience by creating a welcoming and engaging atmosphere. 

![LogoScreenshot](assets/images/features/logo-screenshot.png)

### **Main Test Area**

The main typing test area features the following elements:
- Countdown timer
- Typing text content
- Text input box

The countdown timer features a timer icon (from [Favicon.io](https://favicon.io/)) and a one minute countdown timer. Once the begins typing in the text area box, the timer will start to countdown from 01:00 in one second increments until it reaches 00:00 and stops, signalling the end of the typing text. If the user clicks the 'Try Again' reset button, the countdown timer will reset back to 01:00.

The typing text content was designed to echo Type Library's literary theme and have an aesthetic similar to the yellowing pages of an old classic book. As the user types, a blinking cursor assists them to keep track of their position and the text letters turn either green or red depending on whether the user's input text matches that of the typing text. There are 20 different novel excerpts which are able to be randomly selected for the user to type, the full list of novels can be found [here](#content-sources).

The selection of novel excerpts were all carefully chosen from the classic literature genre and selected due to their vivid descriptive style prose which is much more user-friendly to type than a long dialogue conversation between characters which contain shorter sentances and lots of additional punctuation marks that may disrupt the users typing flow.

The typing text utilises a scrollbar which reveals more of the paragraph text to the user, when they reach the second to last line of the text. Once the user presses the reset button, the scrollbar returns to it's default 'up' position.

The text input box was created using the 'textarea' html to ensure a working input box with multiple lines for text. I purposely only wanted to display two lines of the user's typed text, as opposed to the entirety of it, to encourage users to focus on the novel excerpt paragraph instead of being distracted by looking at the words they had typed. Focus on the content to be typed is essential to the touch-typing skill, which aims to connect the letters seen on screen with muscle memory to instruct the fingers where each letter is located on the keyboard. 

*Below - screenshot of main test area.
![MainTestArea](assets/images/features/main-test-area.png)


### **Book Title Alert**

Once the user has completed the typing test and the timer has reached 00:00, an alert appears on screen informing the user of the novel title and author relating to the excerpt they have just written. This feature was a small but important addition to the project as it aligns with the purpose of the project to introduce users to classic literature as well as helping them to improve their typing skills.

When the user clicks 'x' to close the alert, the results calculation function is then triggered.

![BookTitleAlertPopUp](assets/images/features/book-alert.png)

### **Typing Test Results**

After the user closes the book title alert, the test results are displayed below the 'textarea' element. 

Breakdown of results:

- WPM - 'Words per minute' are calculated based on net WPM which is the most widely used method for calculating typing speed.
 Typing speed calculation consider 'words' to be any 5 characters and net WPM accounts for the number of correct words typed in a minute. When applied to our typing text for example: if a user types 200 correct characters in one minute, this figure is divided by 5 to get a result of 40 WPM.

 The formula below from [Speed Typing Online](https://www.speedtypingonline.com/) illustrates the calculation used for detertmining net WPM typing speed.
<br>
![NetWPMCalculationFormula](assets/images/features/net-wpm-calculation-formula.png)

- Accuracy - The user's accuracy percentage score is calculated by using the following formula: (total correct characters typed) ÷ (total keystrokes) × 100.

For instance, if a user types 100 total keystrokes and a total of 80 characters are correct, their accuracy result would be 80%.

- Errors - The error scores equates to the user's total amount of incorrect characters typed. 

- Total Words Typed - This result also follows the typing speed convention of counting words as any 5 characters. Therefore is a user types 250 characters in total (correct and incorrect), then their total words typed result would be 50.

*Below - screenshot of Type Library completed typing test, showing user results.*

![TypingTestResults](assets/images/features/test-results.JPG)

### **Reset Button**

The reset button, labelled 'Try Again', triggers the following actions when clicked by the user: 

- Reset timer back to 01:00
- Replace the excerpt paragraph displayed on screen with a different randomly selected excerpt
- Set the typingText cursor back to the beginning of the text paragraph
- Clear the textarea input box of all typed content
- Reset all results metrics back to zero values
- Reset scrollbar back to default 'up' position

![ResetButton](assets/images/features/reset-button.JPG)

### **Features to Implement in the Future**

Additional features I would like to implement to this project would be:
- Easy/Moderate/Difficult levels of difficulty the user can choose from, with increasingly complex writing styles from which to type.
- 'Dark' mode, where user can change the test display theme to a high-contrast dark mode interface.
- Option to select a specific genre of novel to type i.e. classic literature, sci-fi, dystopian, memoir, romance etc.
- Multiple text size options for users to select, to increase accessibility.
- Addition test duration options (e.g. 30 seconds, 2 minutes etc.) so users can select a duration based on their preference.
<hr>

## **TESTING**

### **General Site Testing**
| Element                                   | Action (if applicable)                         | Expected Outcome                                   | Result |
|:-----------------------------------------:|:----------------------------------------------:|:--------------------------------------------------:|:------:|
| Content box                               | Load web page                                  | A randomly selected paragraph from the 'excerpts' array is displayed | Pass |
| Content box                               | Scroll mouse while cursor is over the contents box | Text content scrolls to display the complete paragraph | Pass |
| Content box                               | Type letter in input box (that matches excerpt character and position) | Letter turns green (correct) | Pass |
| Content box                               | Type letter in input box (that does not match excerpt character and position) | Letter turns red (incorrect) | Pass |
| Content box                               | Click 'Try Again' Button                      | Excerpt font color returns to original black color | Pass |
| Content box                               | Click 'Try Again' Button                      | The randomly selected paragraph is replaced with a different randomly selected paragraph from the 'excerpts' array | Pass |
| Content scrollbar                         | Scroll up or down                       | Typing text paragraph moves up or down according to scroll direction  | Pass   |
| Content scrollbar                         | Type to end of the second to last line of text visible in the typing text paragraph                       | Scroll bar automatically moves the text upwards so the next line to be typed are visible to user | Pass   |
| Content scrollbar                         | Click 'Try Again' button                       | Scroll bar automatically moves back to top of text | Pass   |
| Countdown timer                           | Load web page                                  | Static timer displays 01:00                                | Pass |
| Typing text cursor                        | Load web page                                  | Blinking cursor is displayed on left hand side of the first character within the typing text paragraph                                | Pass |
| Typing text cursor                        | Type in input box                                  | For each character the user types, the blinking cursor moves right one character to correspond with user's typing position                               | Pass |
| Countdown timer                           | Press any key while cursor is activated within the input box | Timer begins to countdown from 01:00 to 00:00 in one second increments| Pass |
| Countdown timer                           | N/A                                            | Countdown stops once 00:00 is reached              | Pass   |
| Countdown timer                           | Click 'Try Again' Button                        | Countdown resets to 01:00                          | Pass   |
| Text input box                            | Load web page                                  | Placeholder text is displayed within text input box| Pass |
| Text input box                            | Click on input box                             | Placeholder text disappears and blinking cursor appears| Pass |
| Text input box                            | Type in input box                              | All text user types is displayed within text input box| Pass |
| Text input box                            | Press any keys while cursor is activated within the input box  | All typed text appears within the input box   | Pass   |
| Text input box                            | Click 'Try Again' Button                        | All typed text within the input box is cleared and the placeholder text reappears    | Pass   |
| Text input box                            | Input box loses focus (empty)                  | Placeholder text reappears                              | Pass |
| Try Again Button                          | Click 'Try Again' Button                       | Triggers the following actions: load new excerpt paragraph, reset timer to 01:00, clear text input box     | Pass   |
| Results Scores                         | Load web page                      | All results (WPM, accuracy, errors, total words typed) display zero values   | Pass   |
| Results Scores                      | Countdown timer reaches 00:00                       | All results (WPM, accuracy, errors, total words typed) display results scores based on the users typing performance during the past minute   | Pass   |
| Results Scores (WPM)                        | Countdown timer reaches 00:00                       | Displays the user's word per minute typing speed (based on correctly typed words only)   | Pass   |
| Results Scores (Accuracy)                     | Countdown timer reaches 00:00                       | Displays the user's typing accuracy % | Pass   |
| Results Scores (Errors)                        | Countdown timer reaches 00:00                       | Displays the user's total amount of typing errors  | Pass   |
| Results Scores (Total Words Typed)                        | Countdown timer reaches 00:00                       | Displays the user's total amount of words typed within time limit | Pass   |
| Results                         | Click 'Try Again' Button                        | All results (WPM, accuracy, errors, total words typed) reset to zero values   | Pass   |

<br>
The site was checked and is working seamlessly and without errors or problems in multiple browsers: Chrome, Firefox, Microsoft Edge IE and Safari.
<br><br>
Extensive testing was conducted using Google Chrome Developer Tools, within the Google Chrome browser.
<br><br>

The following simulated mobile devices were tested using the Chrome Developer Tools device mode to emulate user experience on a wide range of devices:
- Galaxy Note II/III/S5 (360px x 640px)
- Galaxy S5 (360 x 640px)
- Galaxy S8 (360px x 740px)
- Galaxy 9+ (320px x 658px)
- Galaxy Tab S4 (712px x 1138px)
- Galazy Z Fold 5 (344px x 882px)
- Samsung Galaxy S8+ (360px 740px)
- Samsung Galaxy S20 Ultra (412px x 915px)
- Samsung Galaxy A51/71 (412px x 914px)
- Nokia N9 (480px x 854px)
- Pixel 3 (393px x 786px)
- Pixel 4 (353px x 745px)
- Pixel 7 (412px x 915px)
- iPhone SE (375px x 667px)
- iPhone XR (414px x 896px)
- iPhone 12 Pro (390px x 844px)
- iPhone 14 Pro Max (430px x 932px)
- iPhone 5/SE (320px x 578px)
- iPhone 6/7/8 (375px x 667px)
- iPhone 6/7/8 Plus (414px x 736px)
- iPhone X (375px x 812px)
- iPad (768px x 1024px)
- iPad Pro (1024px x 1366px)
- iPad Mini (768px x 1024px)
- iPad Air (820px x 1180px)
- Asus Zenbook Fold (853px x 1280px)

### **Troubleshooting**



### **Issue 1**

When developing the loadRandomExcerpt function, I noticed that upon running the function the console did not randomly select and log one of the text paragraphs within 'const = excerpt', which would be the anticipated result. The 'excerpt' variable was contained within a separate js file called excerpts.js.

I realised that the error was likely caused because I was previewing the site on a temporary host rather than the fully deployed site and that this may cause the preview difficulty because the code was located in a separate file. In order to rectify this, I temporarily moved the 'excerpt' variable code inside of the script.js file. This fixed the issue and the console logged the correct content - a random text parapgrah selected from the excerpts variable.

*Below - console error message.*

![Issue1Screenshot](./assets/images/testing/issue1-1.png)
<br>

*Below - excerpts variable code, moved temporarily into script.js file.*

![Issue1Screenshot](./assets/images/testing/issue1-2.png)
<br>

*Below - console running correctly with expected outcome, once issue was resolved.*

![Issue1Screenshot](./assets/images/testing/issue1-3.png)

### **Issue 2**

After amending the loadRandomExcerpt code to trigger a paragraph from the excerpts variable to be displayed on the site (rather than just the console.log) the expected result was not produced and the excerpt text failed to appear on the browser. I determined error must likely be caused by an issue with retrieving elements from the "typing-text" class, because I had used document.getElementsByClass("typing-text") to fetch the correct elements from the DOM. Upon further Googling and investigation, I found a query on Stack Overflow which related to a user having similar problems when using '.getElementByClassName()'. Answers to the query suggested .getElementsByClassName() method returns a live HTML collection of elements, whereas .querySelector() returns a single static NodeList object. As my aim was to retrieve a single element from an array (instead of a collection) of elements, it made sense that the .getElementsByClassName() would not be producing the desired result. Upon replacing .getElementsByClassName() with .querySelector(), the code worked correctly without issue.

*Below - original code that was not functioning correctly.*

![Issue2Screenshot](./assets/images/testing/issue2.png)

### **Issue 3**

Once I tested my countdown timer I found that the timer countdown was resetting every time a key was pressed on the keyboard, causing the typing text timer countdown to continuously reset itself as the user typed. I fixed this by adding the 'once' option to the code and setting it to 'true'. This ensured that the event listener would only be triggered by the first key stroke from the user and not by subsequent key strokes.

*Below - browser screenshot taken when errors occurred.*

![Issue3Screenshot](./assets/images/testing/issue3-1.png)

*Below - code not functioning correctly.*

![Issue3Screenshot](./assets/images/testing/issue3-2.png)

*Below - amended code which produced correct output.*

![Issue3Screenshot](./assets/images/testing/issue3-3.png)

### **Issue 4**

During the site development I can across a bug which was causing the input form to fail to display across the whole width of the content box, as was the expected outcome. I determined that this was being caused by a mismatched element type across html, css and javascript. The "typing-input" element was declared as a class in HTML and CSS, however in Javascript it was an id. Once I amended the html and css code to match the id type of "typing-input", the issue was resolved.

*Below - incorrect display which alerted me to locate and fix the bug.*

![Issue4Screenshot](./assets/images/testing/issue4-1.png)

*Below - display after bug had been fixed.*

![Issue4Screenshot](./assets/images/testing/issue4-2.png)

### **Issue 5**

While testing my site, I discovered that once the user completed the typing text, pressed the 'Try Again' button and proceeded to start typing again, the timer failed to start the countdown. After lots of investigating I found that I had to remove and then subsequently add the 'keydown' event listener which triggers startKeyDown function. After this functionality was added, it caused the startKeyDown function to fully reset properly and return to its original function state which in turn caused the timer problem to disappear.


*Below - startOnKeyDown function code.*

![Issue5Screenshot](./assets/images/testing/issue5-1.png)

*Below - event listener actions added to fix the bug.*

![Issue5Screenshot](./assets/images/testing/issue5-2.png)

### **Issue 6**

During testing I found a bug which was causing the excerpt paragraph scrollbar to not return to 'top' position once the user had clicked the reset button. The bug was causing a negative user experience because once the user clicked the reset button, they then had to manually scroll to the top of the excerpt paragraph (in the event that during their previous test they had typed a large enough amount to cause the scrollbar to scroll down).

In order to fix the bug, I added additional code to the resetTest function which would trigger the scrollbar to return to the top once the test was reset.

*Below - screenshot of test taken after clicking reset button, which shows the typingText element scrollbar has not returned to 'top' position.*

![Issue6Screenshot](./assets/images/testing/issue6-1.JPG)

*Below - code added to resetTest function to fix the bug.*

![Issue6Screenshot](./assets/images/testing/issue6-2.JPG)


### **Javascript Linter Tool**

No errors found within script.js file when passed through ESLint Javascript Linter.

### **HTML W3C Validator**

No errors found within index.html file when passed through W3C Markup Validator.

### **CSS Jigsaw Validator**

No errors found within style.css file when passed through W3C CSS Jigsaw Validator.

### **Google Chrome Lighthouse Tool**

Google Chrome Dev Tools Lighthouse Testing Results:

<b>Mobile Site</b>
<br><br>
![LighthouseTestMobile](./assets/images/testing/mobile-lighthouse-testing-results.png)

<b>Desktop Site</b>
<br><br>
![LighthouseTestDesktop](./assets/images/testing/desktop-lighthouse-testing-results.png)


### **Unfixed Bugs**

To my knowledge there are no unfixed bugs.

<hr>

## **DEPLOYMENT**

This website was deployed to GitHub Pages.

### **Deployment Steps**

Deploy this project using the following steps:
1. Open the respository at [PP2 Github](https://github.com/k-nadia/project-2).
2. Navigate to the 'Settings' tab.
3. Within the 'Code & Automation' section, select 'Pages'
4. Under the 'Branch' section, select 'main' from the drop-down menu.
5. Click on 'save'.
6. Reload the page after a few minutes and the live deployment link will be displayed at the top of the page.

### **Forking Steps**

Fork this project using the following steps:
1. Open the respository at [PP2 Github](https://github.com/k-nadia/project-2).
2. Select the 'Fork' button near the top of the page.
3. After a few minutes the newly forked repository will be created under your GitHub account.

### **Cloning Steps**

Clone this project using the following steps:
1. Open the respository at [PP2 Github](https://github.com/k-nadia/project-2).
2. Select the green 'Code' button near the top of the page.
3. Choose from one of the 3 cloning options: HTTPS, SSH, GitHub CLI.
4. Click on the clipboard icon to copy the URL.
5. Open a new GitPod terminal.
6. Type 'git clone' and paste in the URL copied earlier.
7. Press enter to complete the cloning process. 

<hr>

## **TECHNOLOGIES USED**

### **Languages Used**
- ![JavaScript](https://img.shields.io/badge/javascript-grey?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
-	![HTML5](https://img.shields.io/badge/html5-grey?style=for-the-badge&logo=html5&logoColor=E34F26)
- ![CSS3](https://img.shields.io/badge/css3-grey?style=for-the-badge&logo=css3&logoColor=1572B6)

 ## **Frameworks, Libraries & Programs Used**

- [![Git](https://img.shields.io/badge/GitHub-grey?logo=github&logoColor=181717)](https://github.com)- GitHub is a web-based platform for version control using Git, enabling collaborative software development and hosting of code repositories. GitHub connects to GitPod and Heroku. 

- [![Gitpod](https://img.shields.io/badge/Gitpod-grey?logo=gitpod&logoColor=FFAE33)](https://gitpod.io) – Connected to GitHub, GitPod hosted the coding space, allowing the project to be built and then committed to the GitHub repository. Used for version control. 

- [![Diffchecker](https://img.shields.io/badge/Diffchecker-grey?logo=diffchecker&logoColor=white)](https://www.diffchecker.com/text-compare/) - Diffchecker is a text comparison tool used to highlight the differences between two blocks of text, facilitating comparison and analysis. Update my code against old code for validation.

- [![ESLint](https://img.shields.io/badge/ESLint-grey?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)
ESLint is a Javascript linter tool used to identify and fix problems within Javascript code.

- [![W3C CSS Validator](https://img.shields.io/badge/W3C_CSS_Validator-grey?logo=css3&logoColor=white)](https://jigsaw.w3.org/css-validator/) - The W3C CSS Validator is a tool used to check the validity and syntax of CSS code, ensuring compliance with web standards set by the World Wide Web Consortium (W3C). Import my CSS for validation.

- [![W3C Markup Validator](https://img.shields.io/badge/W3C_Markup_Validator-grey?logo=html5&logoColor=white)](https://validator.w3.org/#validate_by_input) - The W3C Markup Validator is a tool used to check the validity and syntax of HTML code, ensuring compliance with web standards set by the World Wide Web Consortium (W3C). Import my html for validation.

- [![Lighthouse](https://img.shields.io/badge/Lighthouse-grey?logo=google-chrome&logoColor=red)](https://developer.chrome.com/docs/lighthouse) - An open-source tool used for auditing web page quality, including performance, accessibility, SEO, and cross-browser testing. Check for validation.

- ![Canva](https://img.shields.io/badge/Canva-grey.svg?style=for-the-badge&logo=Canva&logoColor=white) - A graphic design platform that provides online design and visual communication tools.

<hr>

## **CREDITS**

### **Content Sources**

Starting steps from the Code Institute's Love Maths walkthrough project/lesson.
<br>
Code Institute website link - [Click here](https://codeinstitute.net)<br> 

Excerpts from the following novels were used for the typing text:
- To The Lighthouse by Virgina Woolf
- Jane Eyre by Charlotte Bronte
- Oliver Twist by Charles Dickens
- A Little Princess by Frances Hodgson Burnett
- Lord of The Flies by William Golding
- 1984 by George Orwell
- The Great Gatsby by F. Scott Fitzgerald
- To Kill A Mockingbird by Harper Lee
- Frankenstein by Mary Shelley
- Alice's Adventures in Wonderland By Lewis Caroll
- The Picture of Dorian Grey By Oscar Wilde
- Les Miserables by Victor Hugo
- Moby Dick by Herman 
- Dracula by Bram Stoker
- Great Expectations by Charles Dickens
- Little Women by Louisa May Alcott
- Crime & Punishment Fyodor Dostoyevsky
- The Handmaid's Tale by Margaret Atwood
- Vanity Fair by William Makepeace Thackeray
- The Secret Garden by Frances Hodgson Burnett


All other text content was written by myself.

### **Content Generators**
-  [![Favicon.io](https://img.shields.io/badge/Favicon.io-grey?)](https://favicon.io/) - A favicon.ico icon tool used to generate or download favicon icons in all required sizes. Favicon.io was used to generate favicon.ico file from the Kennet logo JPEG image.

- [![Coolors Color Palette](https://img.shields.io/badge/Coolors%20Color%20Palette-grey?)](https://coolors.co/) - Coolors.co is a online colour palette generator used to visualise and create colour schemes. In this project Coolors was used to pick colours from the Kennet logo and site photo and create a colour palette that reflected the Kennet Shopping ethos and target audience.

- [![Google Fonts](https://img.shields.io/badge/Google_Fonts-grey?logo=google-fonts&logoColor=white)](https://fonts.google.com/) - Google Fonts is a library of free, open-source fonts available to enhance web design. Google Fonts was used to import all fonts used in the project.

- [![Font Awesome](https://img.shields.io/badge/Font%20Awesome-grey?)](https://fontawesome.com/) - Font Awesome is an icon library and toolkit. Font Awesome was used to source all icons used in this project.

### **Information Resources**
- [W3Schools](https://www.w3schools.com/)
- [Stack Overflow](https://stackoverflow.com/)

### **Image Credits**

*Image Usage - Site Favicon*
<br>
*Favicon generated using the following graphics from Twitter Twemoji:*
<br>
*Graphics Title: 1f4da.svg*
<br>
*Graphics Author: [Copyright 2020 Twitter, Inc and other contributors](https://github.com/twitter/twemoji)*
<br>
*Graphics Source: [Twemoji Github](https://github.com/twitter/twemoji/blob/master/assets/svg/1f4da.svg)*
<br>
*Graphics License: [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)*
<br>
![ThumbnailFavicon](./assets/images/thumbnails/favicon-thumbnail.png)
<br>

*Image Usage - Site Logo*
<br>
*Logo created using Canva tools*
<br>
*Graphic source - Canva*
<br>
*Canva website link - [Click Here](https://www.canva.com/)*
<br>
![ThumbnailLogo](./assets/images/thumbnails/thumbnail-logo.png)
<br>

### **Special Thanks**
Special thanks to my mentor Diego Pupato for your guidance and support throughout this project.