const typingText = document.querySelector(".typing-text p");

function loadRandomExcerpt() {
    //Generate pseudo random integer to allow us select a book excerpt at random
    let randomIndex = Math.floor(Math.random() * excerpts.length);
    //Split string into substrings - spans containing each character, contained inside p tag
    excerpts[randomIndex].split("").forEach(span => {
        let spanContent = `<span>${span}</span>`;
        typingText.innerHTML += spanContent;
    });
}

//Sets the timer countdown increments of one second
function startTimer(duration, display) {
    let timer = duration,
        minutes, seconds;
    const interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
        //Stop the countdown once the timer hits 00:00
        if (--timer < 0) {
            clearInterval(interval);
            display.textContent = "00:00";
        }
    }, 1000);
}

//Activates countdown to start when user presses a keyboard key
document.addEventListener('keypress', function () {
    const countdownTime = 60; // 60 seconds
    const display = document.querySelector('#timer');
    startTimer(countdownTime, display);
    // Ensure the event listener is only triggered once
}, {
    once: true
});

function checkTyping() {

}

function calculateWPM() {

}

function resetGame() {

}

const excerpts = [
    //To The Lighthouse by Virgina Woolf
    "'Yes, of course, if it`s fine tomorrow,' said Mrs. Ramsay. 'But you`ll have to be up with the lark,' she added. To her son these words conveyed an extraordinary joy, as if it were settled, the expedition were bound to take place, and the wonder to which he had looked forward, for years and years it seemed, was, after a night`s darkness and a day`s sail, within touch. Since he belonged, even at the age of six, to that great clan which cannot keep this feeling separate from that, but must let future prospects, with their joys and sorrows, cloud what is actually at hand, since to such people even in earliest childhood any turn in the wheel of sensation has the power to crystallise and transfix the moment upon which its gloom or radiance rests, James Ramsay, sitting on the floor cutting out pictures from the illustrated catalogue of the Army and Navy stores, endowed the picture of a refrigerator, as his mother spoke, with heavenly bliss. It was fringed with joy. The wheelbarrow, the lawnmower, the sound of poplar trees, leaves whitening before rain, rooks cawing, brooms knocking, dresses rustling—all these were so coloured and distinguished in his mind that he had already his private code, his secret language, though he appeared the image of stark and uncompromising severity, with his high forehead and his fierce blue eyes, impeccably candid and pure, frowning slightly at the sight of human frailty, so that his mother, watching him guide his scissors neatly round the refrigerator, imagined him all red and ermine on the Bench or directing a stern and momentous enterprise in some crisis of public affairs.",
    //Jane Eyre by Charlotte Bronte
    "John Reed was a schoolboy of fourteen years old; four years older than I, for I was but ten; large and stout for his age, with a dingy and unwholesome skin; thick lineaments in a spacious visage, heavy limbs and large extremities. He gorged himself habitually at table, which made him bilious, and gave him a dim and bleared eye with flabby cheeks. He ought now to have been at school; but his mamma had taken him home for a month or two, 'on account of his delicate health.' Mr. Miles, the master, affirmed that he would do very well if he had fewer cakes and sweetmeats sent him from home; but the mother's heart turned from an opinion so harsh, and inclined rather to the more refined idea that John's sallowness was owing to over-application, and, perhaps, to pining after home. John had not much affection for his mother and sisters, and an antipathy to me. He bullied and punished me; not two or three times in the week, nor once or twice in a day, but continually: every nerve I had feared him, and every morsel of flesh on my bones shrank when he came near. There were moments when I was bewildered by the terror he inspired, because I had no appeal whatever against either his menaces or his inflictions; the servants did not like to offend their young master by taking my part against him, and Mrs. Reed was blind and deaf on the subject: she never saw him strike or heard him abuse me, though he did both now and then in her very presence; more frequently, however, behind her back. Habitually obedient to John, I came up to his chair: he spent some three minutes in thrusting out his tongue at me as far as he could without damaging the roots: I knew he would soon strike, and while dreading the blow, I mused on the disgusting and ugly appearance of him who would presently deal it. I wonder if he read that notion in my face; for, all at once, without speaking, he struck suddenly and strongly. I tottered, and on regaining my equilibrium retired back a step or two from his chair.",
    //Oliver Twist by Charles Dickens
    "The room in which the boys were fed was a large stone hall, with a copper at one end; out of which the master, dressed in an apron for the purpose, and assisted by one or two women, ladled the gruel at mealtimes. Of this festive composition the boys had one porringer and no more – except on occasions of public rejoicing when he had two ounces and a quarter of bread besides. The bowls never wanted washing. The boys polished them with their spoons again till they shone again; and when they had performed this operation (which never took very long, the spoons being nearly as large as the bowls), they would sit staring at the copper, with such eager eyes, as if they could have devoured the very bricks of which it was composed; employing themselves meanwhile, in sucking their fingers most assiduously, with the view of catching up any stray splashes of gruel that might have been cast thereon. Boys have generally excellent appetites. Oliver Twist and his companions suffered the tortures of slow starvation for three months. At last they got so voracious and wild with hunger, that one boy who was tall for his age, hinted darkly to his companions that unless he had another basin of gruel, he was afraid he might some night happen to eat the boy sleeping next to him, who happened to be a weakly youth of tender age. He had a wild, hungry eye and they implicitly believed him. A council was held; lots were cast for who should walk up to the master after supper that evening and ask for more; and it fell to Oliver Twist. The evening arrived; the boys took their places. The master, in his cook's uniform, stationed himself at the copper; his pauper assistants ranged themselves beside him; the gruel was served out; and a long grace was said over short commons. The gruel disappeared; the boys whispered to each other and winked at Oliver; while his next neighbours nudged him. Child as he was, he was desperate with hunger, and reckless with misery. He rose from the table; and advancing to the master, basin and spoon in hand, said, somewhat alarmed at his own temerity,- 'Please, sir, I want some more.'",
    //Lord of The Flies by William Golding
    "Strange things happened at midday. The glittering sea rose up, moved apart in planes of blatant impossibility; the coral reef and the few stunted palms that clung to the more elevated parts would float up into the sky, would quiver, be plucked apart, run like raindrops on a wire or be repeated as in an odd succession of mirrors. Sometimes land loomed where there was no land and flicked out like a bubble as the children watched. Piggy discounted all this learnedly as a 'mirage'; and since no boy could reach even the reef over the stretch of water where the snapping sharks waited, they grew accustomed to these mysteries and ignored them, just as they ignored the miraculous, throbbing stars. At midday the illusions merged into the sky and there the sun gazed down like an angry eye. Then, at the end of the afternoon; the mirage subsided and the horizon became level and blue and clipped as the sun declined. That was another time of comparative coolness but menaced by the coming of the dark. When the sun sank, darkness dropped on the island like an extinguisher and soon the shelters were full of restlessness, under the remote stars. Nevertheless, the northern European tradition of work, play, and food right through the day, made it possible for them to adjust themselves wholly to this new rhythm. The littlun Percival had early crawled into a shelter and stayed there for two days, talking, singing, and crying, till they thought him batty and were faintly amused. Ever since then he had been peaked, red-eyed, and miserable; a littiun who played little and cried often",
    //1984 by George Orwell
    "It was a bright cold day in April, and the clocks were striking thirteen. Winston Smith, his chin nuzzled into his breast in an effort to escape the vile wind, slipped quickly through the glass doors of Victory Mansions, though not quickly enough to prevent a swirl of gritty dust from entering along with him. The hallway smelt of boiled cabbage and old rag mats. At one end of it a coloured poster, too large for indoor display, had been tacked to the wall. It depicted simply an enormous face, more than a metre wide: the face of a man of about forty-five, with a heavy black moustache and ruggedly handsome features. Winston made for the stairs. It was no use trying the lift. Even at the best of times it was seldom working, and at present the electric current was cut off during daylight hours. It was part of the economy drive in preparation for Hate Week. The flat was seven flights up, and Winston, who was thirty-nine and had a varicose ulcer above his right ankle, went slowly, resting several times on the way. On each landing, opposite the lift-shaft, the poster with the enormous face gazed from the wall. It was one of those pictures which are so contrived that the eyes follow you about when you move. BIG BROTHER IS WATCHING YOU, the caption beneath it ran. Inside the flat a fruity voice was reading out a list of figures which had something to do with the production of pig-iron. The voice came from an oblong metal plaque like a dulled mirror which formed part of the surface of the right-hand wall. Winston turned a switch and the voice sank somewhat, though the words were still distinguishable. The instrument (the telescreen, it was called) could be dimmed, but there was no way of shutting it off completely. He moved over to the window: a smallish, frail figure, the meagreness of his body merely emphasized by the blue overalls which were the uniform of the party. His hair was very fair, his face naturally sanguine, his skin roughened by coarse soap and blunt razor blades and the cold of the winter that had just ended. Outside, even through the shut window-pane, the world looked cold.",
];



loadRandomExcerpt();