const excerpts = [
    // 1 - To The Lighthouse by Virgina Woolf
    {
        title: "To The Lighthouse",
        author: "Virginia Woolf",
        text: "'Yes, of course, if it`s fine tomorrow,' said Mrs. Ramsay. 'But you`ll have to be up with the lark,' she added. To her son these words conveyed an extraordinary joy, as if it were settled, the expedition were bound to take place, and the wonder to which he had looked forward, for years and years it seemed, was, after a night`s darkness and a day`s sail, within touch. Since he belonged, even at the age of six, to that great clan which cannot keep this feeling separate from that, but must let future prospects, with their joys and sorrows, cloud what is actually at hand, since to such people even in earliest childhood any turn in the wheel of sensation has the power to crystallise and transfix the moment upon which its gloom or radiance rests, James Ramsay, sitting on the floor cutting out pictures from the illustrated catalogue of the Army and Navy stores, endowed the picture of a refrigerator, as his mother spoke, with heavenly bliss. It was fringed with joy. The wheelbarrow, the lawnmower, the sound of poplar trees, leaves whitening before rain, rooks cawing, brooms knocking, dresses rustling—all these were so coloured and distinguished in his mind that he had already his private code, his secret language, though he appeared the image of stark and uncompromising severity, with his high forehead and his fierce blue eyes, impeccably candid and pure, frowning slightly at the sight of human frailty, so that his mother, watching him guide his scissors neatly round the refrigerator, imagined him all red and ermine on the Bench or directing a stern and momentous enterprise in some crisis of public affairs."
    },

    // 2 - Jane Eyre by Charlotte Bronte
    {
        title: "Jane Eyre",
        author: "Charlotte Brontë",
        text: "John Reed was a schoolboy of fourteen years old; four years older than I, for I was but ten; large and stout for his age, with a dingy and unwholesome skin; thick lineaments in a spacious visage, heavy limbs and large extremities. He gorged himself habitually at table, which made him bilious, and gave him a dim and bleared eye with flabby cheeks. He ought now to have been at school; but his mamma had taken him home for a month or two, 'on account of his delicate health.' Mr. Miles, the master, affirmed that he would do very well if he had fewer cakes and sweetmeats sent him from home; but the mother's heart turned from an opinion so harsh, and inclined rather to the more refined idea that John's sallowness was owing to over-application, and, perhaps, to pining after home. John had not much affection for his mother and sisters, and an antipathy to me. He bullied and punished me; not two or three times in the week, nor once or twice in a day, but continually: every nerve I had feared him, and every morsel of flesh on my bones shrank when he came near. There were moments when I was bewildered by the terror he inspired, because I had no appeal whatever against either his menaces or his inflictions; the servants did not like to offend their young master by taking my part against him, and Mrs. Reed was blind and deaf on the subject: she never saw him strike or heard him abuse me, though he did both now and then in her very presence; more frequently, however, behind her back. Habitually obedient to John, I came up to his chair: he spent some three minutes in thrusting out his tongue at me as far as he could without damaging the roots: I knew he would soon strike, and while dreading the blow, I mused on the disgusting and ugly appearance of him who would presently deal it. I wonder if he read that notion in my face; for, all at once, without speaking, he struck suddenly and strongly. I tottered, and on regaining my equilibrium retired back a step or two from his chair."
    },
    
    // 3 - Oliver Twist by Charles Dickens
    {
        title: "Oliver Twist",
        author: "Charles Dickens",
        text: "The room in which the boys were fed was a large stone hall, with a copper at one end; out of which the master, dressed in an apron for the purpose, and assisted by one or two women, ladled the gruel at mealtimes. Of this festive composition the boys had one porringer and no more – except on occasions of public rejoicing when he had two ounces and a quarter of bread besides. The bowls never wanted washing. The boys polished them with their spoons again till they shone again; and when they had performed this operation (which never took very long, the spoons being nearly as large as the bowls), they would sit staring at the copper, with such eager eyes, as if they could have devoured the very bricks of which it was composed; employing themselves meanwhile, in sucking their fingers most assiduously, with the view of catching up any stray splashes of gruel that might have been cast thereon. Boys have generally excellent appetites. Oliver Twist and his companions suffered the tortures of slow starvation for three months. At last they got so voracious and wild with hunger, that one boy who was tall for his age, hinted darkly to his companions that unless he had another basin of gruel, he was afraid he might some night happen to eat the boy sleeping next to him, who happened to be a weakly youth of tender age. He had a wild, hungry eye and they implicitly believed him. A council was held; lots were cast for who should walk up to the master after supper that evening and ask for more; and it fell to Oliver Twist. The evening arrived; the boys took their places. The master, in his cook's uniform, stationed himself at the copper; his pauper assistants ranged themselves beside him; the gruel was served out; and a long grace was said over short commons. The gruel disappeared; the boys whispered to each other and winked at Oliver; while his next neighbours nudged him. Child as he was, he was desperate with hunger, and reckless with misery. He rose from the table; and advancing to the master, basin and spoon in hand, said, somewhat alarmed at his own temerity,- 'Please, sir, I want some more.'"
    },
    
    // 4 - Lord of The Flies by William Golding
    {
        title: "Lord of The Flies",
        author: "William Golding",
        text: "Strange things happened at midday. The glittering sea rose up, moved apart in planes of blatant impossibility; the coral reef and the few stunted palms that clung to the more elevated parts would float up into the sky, would quiver, be plucked apart, run like raindrops on a wire or be repeated as in an odd succession of mirrors. Sometimes land loomed where there was no land and flicked out like a bubble as the children watched. Piggy discounted all this learnedly as a 'mirage'; and since no boy could reach even the reef over the stretch of water where the snapping sharks waited, they grew accustomed to these mysteries and ignored them, just as they ignored the miraculous, throbbing stars. At midday the illusions merged into the sky and there the sun gazed down like an angry eye. Then, at the end of the afternoon; the mirage subsided and the horizon became level and blue and clipped as the sun declined. That was another time of comparative coolness but menaced by the coming of the dark. When the sun sank, darkness dropped on the island like an extinguisher and soon the shelters were full of restlessness, under the remote stars. Nevertheless, the northern European tradition of work, play, and food right through the day, made it possible for them to adjust themselves wholly to this new rhythm. The littlun Percival had early crawled into a shelter and stayed there for two days, talking, singing, and crying, till they thought him batty and were faintly amused. Ever since then he had been peaked, red-eyed, and miserable; a littiun who played little and cried often. The smaller boys were known now by the generic title of 'littluns'. The decrease in size, from Ralph down, was gradual; and though there was a dubious region inhabited by Simon and Robert and Maurice, nevertheless no one had any difficulty in recognizing biguns at one end and littluns at the other. The undoubted littluns, those aged about six, led a quite distinct, and at the same time intense, life of their own."
    },
    
   // 5 - 1984 by George Orwell
   {
        title: "1984",
        author: "George Orwell",
        text: "It was a bright cold day in April, and the clocks were striking thirteen. Winston Smith, his chin nuzzled into his breast in an effort to escape the vile wind, slipped quickly through the glass doors of Victory Mansions, though not quickly enough to prevent a swirl of gritty dust from entering along with him. The hallway smelt of boiled cabbage and old rag mats. At one end of it a coloured poster, too large for indoor display, had been tacked to the wall. It depicted simply an enormous face, more than a metre wide: the face of a man of about forty-five, with a heavy black moustache and ruggedly handsome features. Winston made for the stairs. It was no use trying the lift. Even at the best of times it was seldom working, and at present the electric current was cut off during daylight hours. It was part of the economy drive in preparation for Hate Week. The flat was seven flights up, and Winston, who was thirty-nine and had a varicose ulcer above his right ankle, went slowly, resting several times on the way. On each landing, opposite the lift-shaft, the poster with the enormous face gazed from the wall. It was one of those pictures which are so contrived that the eyes follow you about when you move. BIG BROTHER IS WATCHING YOU, the caption beneath it ran. Inside the flat a fruity voice was reading out a list of figures which had something to do with the production of pig-iron. The voice came from an oblong metal plaque like a dulled mirror which formed part of the surface of the right-hand wall. Winston turned a switch and the voice sank somewhat, though the words were still distinguishable. The instrument (the telescreen, it was called) could be dimmed, but there was no way of shutting it off completely. He moved over to the window: a smallish, frail figure, the meagreness of his body merely emphasized by the blue overalls which were the uniform of the party. His hair was very fair, his face naturally sanguine, his skin roughened by coarse soap and blunt razor blades and the cold of the winter that had just ended. Outside, even through the shut window-pane, the world looked cold."
    },

    // 6 - The Great Gatsby by F. Scott Fitzgerald
   {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        text: "I began to like New York, the racy, adventurous feel of it at night and the satisfaction that the constant flicker of men and women and machines gives to the restless eye. I liked to walk up Fifth Avenue and pick out romantic women from the crowd and imagine that in a few minutes I was going to enter into their lives, and no one would ever know or disapprove. Sometimes, in my mind, I followed them to their apartments on the corners of hidden streets, and they turned and smiled back at me before they faded through a door into warm darkness. At the enchanted metropolitan twilight I felt a haunting loneliness sometimes, and felt it in others—poor young clerks who loitered in front of windows waiting until it was time for a solitary restaurant dinner—young clerks in the dusk, wasting the most poignant moments of night and life. Again at eight o'clock, when the dark lanes of the Forties were five deep with throbbing taxi cabs, bound for the theatre district, I felt a sinking in my heart. Forms leaned together in the taxis as they waited, and voices sang, and there was laughter from unheard jokes, and lighted cigarettes outlined unintelligible gestures inside. Imagining that I, too, was hurrying toward gayety and sharing their intimate excitement, I wished them well. For a while I lost sight of Jordan Baker, and then in midsummer I found her again. At first I was flattered to go places with her because she was a golf champion and every one knew her name. Then it was something more. I wasn't actually in love, but I felt a sort of tender curiosity. The bored haughty face that she turned to the world concealed something—most affectations conceal something eventually, even though they don't in the beginning—and one day I found what it was. When we were on a house-party together up in Warwick, she left a borrowed car out in the rain with the top down, and then lied about it—and suddenly I remembered the story about her that had eluded me that night at Daisy's. At her first big golf tournament there was a row that nearly reached the newspapers—a suggestion that she had moved her ball from a bad lie in the semi-final round. The thing approached the proportions of a scandal—then died away. A caddy retracted his statement and the only other witness admitted that he might have been mistaken. The incident and the name had remained together in my mind."
    },

    // 7 - To Kill A Mockingbird by Harper Lee
   { 
        title: "To Kill A Mockingbird",
        author: "Harper Lee",
        text: "Maycomb was an old town, but it was a tired old town when I first knew it. In rainy weather the streets turned to red slop; grass grew on the sidewalks, the courthouse sagged in the square. Somehow, it was hotter then: a black dog suffered on a summer's day; bony mules hitched to Hoover carts flicked flies in the sweltering shade of the live oaks on the square. Men's stiff collars wilted by nine in the morning. Ladies bathed before noon, after their three-o'clock naps, and by nightfall were like soft teacakes with frostings of sweat and sweet talcum. People moved slowly then. They ambled across the square, shuffled in and out of the stores around it, took their time about everything. A day was twenty-four hours long but seemed longer. There was no hurry, for there was nowhere to go, nothing to buy and no money to buy it with, nothing to see outside the boundaries of Maycomb County. But it was a time of vague optimism for some of the people: Maycomb County had recently been told that it had nothing to fear but fear itself. We lived on the main residential street in town--Atticus, Jem and I, plus Calpurnia our cook. Jem and I found our father satisfactory: he played with us, read to us, and treated us with courteous detachment. Calpurnia was something else again. She was all angles and bones; she was nearsighted; she squinted; her hand was wide as a bed slat and twice as hard. She was always ordering me out of the kitchen, asking me why I couldn't behave as well as Jem when she knew he was older, and calling me home when I wasn't ready to come. Our battles were epic and one-sided. Calpurnia always won, mainly because Atticus always took her side. She had been with us ever since Jem was born, and I had felt her tyrannical presence as long as I could remember. Our mother died when I was two, so I never felt her absence. She was a Graham from Montgomery; Atticus met her when he was first elected to the state legislature. He was middle-aged then, she was fifteen years his junior. Jem was the product of their first year of marriage; four years later I was born, and two years later our mother died from a sudden heart attack. They said it ran in her family. I did not miss her, but I think Jem did. He remembered her clearly, and sometimes in the middle of a game he would sigh at length, then go off and play by himself behind the car-house. When he was like that, I knew better than to bother him."
    },

    // 8 - Frankenstein by Mary Shelley
   {
        title: "Frankenstein",
        author: "Mary Shelley",
        text: "It was on a dreary night of November, that I beheld the accomplishment of my toils. With an anxiety that almost amounted to agony, I collected the instruments of life around me, that I might infuse a spark of being into the lifeless thing that lay at my feet. It was already one in the morning; the rain pattered dismally against the panes, and my candle was nearly burnt out, when, by the glimmer of the half-extinguished light, I saw the dull yellow eye of the creature open; it breathed hard, and a convulsive motion agitated its limbs. How can I describe my emotions at this catastrophe, or how delineate the wretch whom with such infinite pains and care I had endeavoured to form? His limbs were in proportion, and I had selected his features as beautiful. Beautiful!—Great God! His yellow skin scarcely covered the work of muscles and arteries beneath; his hair was of a lustrous black, and flowing; his teeth of a pearly whiteness; but these luxuriances only formed a more horrid contrast with his watery eyes, that seemed almost of the same colour as the dun white sockets in which they were set, his shrivelled complexion, and straight black lips. The different accidents of life are not so changeable as the feelings of human nature. I had worked hard for nearly two years, for the sole purpose of infusing life into an inanimate body. For this I had deprived myself of rest and health. I had desired it with an ardour that far exceeded moderation; but now that I had finished, the beauty of the dream vanished, and breathless horror and disgust filled my heart. Unable to endure the aspect of the being I had created, I rushed out of the room, and continued a long time traversing my bed-chamber, unable to compose my mind to sleep. At length lassitude succeeded to the tumult I had before endured; and I threw myself on the bed in my clothes, endeavouring to seek a few moments of forgetfulness. But it was in vain: I slept indeed, but I was disturbed by the wildest dreams. I thought I saw Elizabeth, in the bloom of health, walking in the streets of Ingolstadt. Delighted and surprised, I embraced her; but as I imprinted the first kiss on her lips, they became livid with the hue of death; her features appeared to change, and I thought that I held the corpse of my dead mother in my arms; a shroud enveloped her form, and I saw the grave-worms crawling in the folds of the flannel."
    },

    // 9 - Alice's Adventures in Wonderland By Lewis Caroll
   {
        title: "Alice's Adventures in Wonderland ",
        author: "Lewis Caroll",
        text: "Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, "and what is the use of a book," thought Alice, "without pictures or conversations?" So she was considering in her own mind (as well as she could, for the hot day made her feel very sleepy and stupid) whether the pleasure of making a daisy-chain would be worth the trouble of getting up and picking the daisies, when suddenly a White Rabbit with pink eyes ran close by her. There was nothing so very remarkable in that; nor did Alice think it so very much out of the way to hear the Rabbit say to itself, "Oh dear! Oh dear! I shall be too late!" (when she thought it over afterwards, it occurred to her that she ought to have wondered at this, but at the time it all seemed quite natural); but when the Rabbit actually took a watch out of its waistcoat-pocket, and looked at it, and then hurried on, Alice started to her feet, for it flashed across her mind that she had never before seen a rabbit with either a waistcoat-pocket, or a watch to take out of it, and burning with curiosity, she ran across the field after it, and was just in time to see it pop down a large rabbit-hole under the hedge. In another moment down went Alice after it, never once considering how in the world she was to get out again. The rabbit-hole went straight on like a tunnel for some way, and then dipped suddenly down, so suddenly that Alice had not a moment to think about stopping herself before she found herself falling down what seemed to be a very deep well. Either the well was very deep, or she fell very slowly, for she had plenty of time as she went down to look about her, and to wonder what was going to happen next. First, she tried to look down and make out what she was coming to, but it was too dark to see anything; then she looked at the sides of the well, and noticed that they were filled with cupboards and book-shelves: here and there she saw maps and pictures hung upon pegs. She took down a jar from one of the shelves as she passed; it was labelled "ORANGE MARMALADE," but to her great disappointment it was empty: she did not like to drop the jar for fear of killing somebody underneath, so managed to put it into one of the cupboards as she fell past it."
    },

    // 10 -
   {
        title: "",
        author: "",
        text: ""
    },

    // 11 -
   {
        title: "",
        author: "",
        text: ""
    },

    // 12 -
   {
        title: "",
        author: "",
        text: ""
    },

    // 13 -
   {
        title: "",
        author: "",
        text: ""
    },

    // 14 -
   {
        title: "",
        author: "",
        text: ""
    },

    // 15 -
   {
        title: "",
        author: "",
        text: ""
    },
    
];

