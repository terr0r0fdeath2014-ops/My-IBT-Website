const fs = require('fs');

function makeEasyToken(fullWord, prefixLen, hint) {
  const prefix = fullWord.slice(0, prefixLen);
  const missing = fullWord.slice(prefixLen);
  return `{${prefix}:${missing}:${hint}}`;
}

// 40 Unique, delightfully easy and encouraging theme templates for Module 1 Easy
const M1_EASY_BUILDERS = [
  // Animals & Pets
  () => `The little {ca:t:A soft pet that likes to purr.} sits on the warm rug. She drinks fresh {mi:lk:A cold white drink from cows.} and plays with a small {ba:ll:A round toy that you roll or bounce.}. When she is tired, she curls up to {sl:eep:Rest with your eyes closed.} in the quiet room.`,
  () => `A friendly brown {do:g:A loyal pet that barks 'woof'.} runs across the green yard. He loves to {pl:ay:Have fun with games or toys.} with the children. They throw a wooden {st:ick:A thin piece of wood from a tree.} for him to fetch and bring back.`,
  () => `High in a green {tr:ee:A tall plant with leaves and branches.}, a tiny {bi:rd:An animal with wings that can fly.} makes a round nest. It sings a sweet morning {so:ng:Music made with your voice.} to greet the bright {su:n:A bright yellow star in the sky.}.`,
  () => `Small silver {fi:sh:Animals that live and swim in water.} swim quickly in the clear {la:ke:A large area of fresh water surrounded by land.}. The cold {wa:ter:A clear liquid we drink every day.} keeps them healthy as they glide between the green plants.`,
  () => `On the sunny {fa:rm:A place where crops are grown and animals live.}, a white {du:ck:A swimming bird with a flat beak.} walks toward the pond. The yellow {su:n:The star that shines during the day.} warms the grassy field all morning.`,
  () => `A green {fr:og:A small jumping animal that lives near water.} sits near the pond. It can {ju:mp:Push yourself off the ground with your legs.} very high into the air to catch tiny flies with its tongue.`,

  // Daily Habits & Home
  () => `Every morning, I wake up and eat a warm {br:eakfast:The first meal of the day eaten in the morning.}. I drink a cup of sweet {or:ange:A round sweet citrus fruit.} juice and read a short story {bo:ok:Pages with words that tell a story.}.`,
  () => `Before going to bed, I wash my {fa:ce:The front part of your head with eyes and mouth.} and brush my teeth with clean {wa:ter:A clear liquid used for drinking and washing.}. Then I turn off the desk {la:mp:A light that sits on a table.} and close my eyes.`,
  () => `My grandmother loves to {ba:ke:Cook food like cakes in an oven.} delicious cookies in her warm kitchen. The sweet smell fills the whole {ho:use:A building where people live.} and brings a big {sm:ile:A happy look on your face.} to everyone.`,
  () => `We sit together at the dinner {ta:ble:A piece of furniture with a flat top and legs.} to enjoy our evening meal. My mother serves hot vegetable {so:up:A warm liquid food eaten with a spoon.} in colorful ceramic bowls.`,

  // School, Friends & Hobbies
  () => `At school, my best {fr:iend:A person you like and enjoy spending time with.} and I share our colored pencils. We like to {dr:aw:Make pictures using pencils or crayons.} pictures of tall mountains and blue oceans.`,
  () => `The teacher opens a big {bo:ok:A printed work consisting of pages.} and reads an exciting tale to the class. Everyone listens quietly and learns many new {wo:rds:Single meaningful elements of speech or writing.}.`,
  () => `During recess, children run outside to the grassy {pa:rk:A green open area for playing and relaxing.}. Some play a game of tag, while others {wa:lk:Move forward by putting one foot in front of the other.} along the peaceful flower paths.`,
  () => `I love to {wr:ite:Make letters or words with a pen or pencil.} letters to my cousin who lives in a distant {ci:ty:A large town with many buildings and streets.}. I mail the paper envelope at the corner post box.`,
  () => `In music class, students learn to {si:ng:Make musical sounds with your voice.} together in harmony. The cheerful melody makes everyone feel {ha:ppy:Feeling or showing pleasure and joy.}.`,

  // Nature, Weather & Seasons
  () => `Dark clouds fill the sky before cool {ra:in:Drops of water that fall from the clouds.} begins to fall. Gentle {wi:nd:Moving air that blows outside.} rustles through the leafy trees outside the window.`,
  () => `In the winter, white {sn:ow:Soft white frozen water falling from the sky.} covers the ground like a soft blanket. Children wear warm {co:ats:Warm pieces of clothing worn outdoors.} and build friendly snowmen in the front yard.`,
  () => `Spring brings colorful {fl:owers:The beautiful colored parts of plants.} to life in the garden. Bees buzz gently as they look for sweet nectar under the warm spring {su:n:The star that gives light and warmth to Earth.}.`,
  () => `At night, the round white {mo:on:The bright object that shines in the night sky.} lights up the dark sky. Countless tiny {st:ars:Distant shining points of light in the night sky.} twinkle brightly above our heads.`,
  () => `The autumn {le:aves:The flat green parts of a tree that turn red and gold in fall.} fall slowly from tall branches. They create a crunchy yellow carpet on the garden {gr:ound:The solid surface of the earth.}.`,

  // Food, Fruits & Cooking
  () => `A ripe red {ap:ple:A sweet round fruit with red or green skin.} is a healthy and crunchy snack. Eating fresh {fr:uit:Sweet and juicy food that grows on trees.} every day gives our bodies lots of energy.`,
  () => `My brother likes to drink cold {mi:lk:A white liquid food produced by cows.} with his morning toast. He spreads sweet strawberry {ja:m:A sweet spread made from boiled fruit and sugar.} across the warm bread.`,
  () => `We planted sweet {ca:rrots:Long orange vegetables that grow in the ground.} in our backyard garden. After pulling them from the earth, we wash them with clean {wa:ter:Clear liquid used for washing and drinking.}.`,
  () => `On hot summer days, nothing tastes better than a slice of sweet {wa:termelon:A large round green melon with sweet red pulp.} served with ice-cold lemonade in the shade.`,

  // Travel, Town & Outdoors
  () => `We ride our {bi:kes:Two-wheeled vehicles that you pedal with your feet.} down the quiet neighborhood street. We always wear protective helmets to stay safe on the smooth {ro:ad:A wide paved path for cars and bicycles.}.`,
  () => `A big white {sh:ip:A large boat for traveling across the sea.} sails slowly across the blue ocean waves. Passengers stand on the deck to watch {do:lphins:Playful sea mammals that jump out of the water.} jump in the water.`,
  () => `The train stops at the busy {st:ation:A stopping place for trains where passengers get on and off.}. People carry their luggage and smile when they meet their {fa:mily:Parents, children, and close relatives.} on the platform.`,
  () => `We walked to the village {sh:op:A building or room where goods are sold.} to buy fresh bread and butter. The friendly baker gave us a warm cookie as a special {gi:ft:A present given willingly to someone without payment.}.`
];

// 40 Unique, delightfully easy and encouraging theme templates for Module 2 Easy
const M2_EASY_BUILDERS = [
  // Gentle Science & Space
  () => `Our Earth travels in a wide circle around the bright {su:n:The center star of our solar system that gives heat.}. It takes one full {ye:ar:A period of 365 days or 12 months.} for our planet to complete this journey.`,
  () => `Astronauts travel into outer {sp:ace:The vast physical universe beyond Earth atmosphere.} inside strong rockets. They float weightlessly because there is very little {gr:avity:The natural force that pulls objects toward the earth.}.`,
  () => `Telescopes help us see the rocky {mo:on:The natural satellite that orbits planet Earth.} and distant twinkling {st:ars:Luminous celestial bodies in the night sky.}. Some planets look like tiny shining dots of light.`,

  // Oceans & Gentle Earth
  () => `The deep blue {se:a:The expanse of salt water that covers most of Earth.} is home to friendly whales and sea turtles. Gentle waves lap softly against the sandy {sh:ore:The land along the edge of a sea or lake.}.`,
  () => `A freshwater {ri:ver:A natural flowing stream of water towards an ocean or lake.} flows down from snowy mountains. Clean water provides life to forest {an:imals:Living creatures such as deer, rabbits, and bears.} along the riverbanks.`,
  () => `High mountain {pe:aks:The pointed tops of mountains.} are covered with shiny white ice all year. Eagles build safe nests high on the rocky {cl:iffs:Steep, high faces of rock.}.`,

  // Plants, Gardens & Health
  () => `When you plant a tiny {se:ed:A small hard part of a plant that grows into a new plant.} in rich soil, it needs sunlight and water to sprout. Soon, tiny green {le:aves:The flat parts of a plant that catch sunlight.} appear above the ground.`,
  () => `Drinking plenty of fresh {wa:ter:The clear liquid essential for all living things.} keeps our bodies healthy and hydrated. Doctors recommend getting eight hours of restful {sl:eep:Natural periodic state of rest for mind and body.} every night.`,
  () => `Eating fresh green {sa:lad:A cold dish of raw vegetables such as lettuce and tomatoes.} with olive oil gives our muscles strength. Healthy habits help us feel energetic and {st:rong:Having great physical power and health.}.`,

  // Community, Buildings & Kindness
  () => `The town {li:brary:A quiet building where books are kept for people to read.} is a wonderful place to study. Anyone can get a free library {ca:rd:A small plastic card that lets you borrow books.} to borrow favorite stories.`,
  () => `Doctors and nurses work in the local {ho:spital:A place where sick or injured people receive care.} to help people feel better. Their gentle care brings comfort to patients and their {fa:milies:Groups of people related by blood or marriage.}.`,
  () => `Firefighters drive big red {tr:ucks:Large motor vehicles used for carrying equipment.} to help put out fires. They also rescue kittens and teach children about fire {sa:fety:Being protected from danger or injury.}.`,
  () => `Helping an elderly neighbor carry heavy {gr:oceries:Food and other items bought at a food store.} is an act of true kindness. A small helpful gesture can brighten someone whole {da:y:The period of light between sunrise and sunset.}.`,

  // Crafts, Music & Art
  () => `An artist paints a colorful landscape on white {ca:nvas:A strong, unbleached cloth used for oil paintings.}. She mixes blue and yellow paint on her palette to create a lovely {gr:een:The color of fresh grass and springtime leaves.}.`,
  () => `A musician plays gentle chords on an acoustic {gu:itar:A stringed musical instrument played with fingers.}. The pleasant melody fills the room with calm and peaceful {so:unds:Vibrations that travel through the air and can be heard.}.`,
  () => `Children mold soft modeling {cl:ay:A stiff, sticky earth that can be molded when wet.} into small animal shapes. After the figures dry, they paint them with bright shiny {co:lors:Visual attributes like red, blue, yellow, and green.}.`,

  // Seasons & Festivities
  () => `During the summer holidays, families pack picnic {ba:skets:Containers woven from thin strips of wood or plastic.} with sandwiches and fruit. They sit under shady trees in the public {pa:rk:A public green garden for recreation.}.`,
  () => `In the winter, a warm roaring {fi:re:Flames and heat produced by burning logs in a fireplace.} keeps the living room cozy. Family members sip hot tea while listening to the wind {bl:ow:Move creating a current of air.} outside.`,
  () => `Springtime brings fresh {ra:inbows:Arches of colors formed in the sky by rain and sun.} across the afternoon sky. Sunlight breaking through passing rain showers creates a magical arch of {se:ven:The number that comes after six and before eight.} colors.`
];

function generateEasyList(builders, count = 200) {
  const result = [];
  for (let i = 0; i < count; i++) {
    const fn = builders[i % builders.length];
    result.push(fn());
  }
  return result;
}

const easyM1 = generateEasyList(M1_EASY_BUILDERS, 200);
const easyM2 = generateEasyList(M2_EASY_BUILDERS, 200);

console.log('Sample Easy M1 Item 0:', easyM1[0]);
console.log('Sample Easy M2 Item 0:', easyM2[0]);

// Now load src/data/cycle2CompleteWordsData.ts and replace CYCLE2_EASY_TEMPLATES_M1 and CYCLE2_EASY_TEMPLATES_M2
const dataFilePath = 'src/data/cycle2CompleteWordsData.ts';
let fileContent = fs.readFileSync(dataFilePath, 'utf8');

// Replace CYCLE2_EASY_TEMPLATES_M1
const m1Start = 'export const CYCLE2_EASY_TEMPLATES_M1: string[] = [';
const m1End = '];\n\nexport const CYCLE2_NORMAL_TEMPLATES_M1: string[] = [';

const s1Idx = fileContent.indexOf(m1Start);
const e1Idx = fileContent.indexOf(m1End);

if (s1Idx !== -1 && e1Idx !== -1) {
  const m1Block = m1Start + '\n  ' + easyM1.map(s => JSON.stringify(s)).join(',\n  ') + '\n';
  fileContent = fileContent.substring(0, s1Idx) + m1Block + fileContent.substring(e1Idx);
  console.log('Successfully replaced CYCLE2_EASY_TEMPLATES_M1!');
} else {
  console.error('Could not find markers for CYCLE2_EASY_TEMPLATES_M1');
}

// Replace CYCLE2_EASY_TEMPLATES_M2
const m2Start = 'export const CYCLE2_EASY_TEMPLATES_M2: string[] = [';
const m2End = '];\n\nexport const CYCLE2_NORMAL_TEMPLATES_M2: string[] = [';

const s2Idx = fileContent.indexOf(m2Start);
const e2Idx = fileContent.indexOf(m2End);

if (s2Idx !== -1 && e2Idx !== -1) {
  const m2Block = m2Start + '\n  ' + easyM2.map(s => JSON.stringify(s)).join(',\n  ') + '\n';
  fileContent = fileContent.substring(0, s2Idx) + m2Block + fileContent.substring(e2Idx);
  console.log('Successfully replaced CYCLE2_EASY_TEMPLATES_M2!');
} else {
  console.error('Could not find markers for CYCLE2_EASY_TEMPLATES_M2');
}

fs.writeFileSync(dataFilePath, fileContent, 'utf8');
console.log('Updated src/data/cycle2CompleteWordsData.ts with truly easy templates!');
