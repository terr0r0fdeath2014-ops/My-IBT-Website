
import { NORMAL_TEMPLATES_200 } from './normal_templates_flat';
import { HARD_TEMPLATES_200 } from './hard_templates_flat';
import { ADVANCED_TEMPLATES_200 } from './advanced_templates_flat';
import { EASY_TEMPLATES_M2_200 } from './easy_templates_m2_flat';
import { NORMAL_TEMPLATES_M2_200 } from './normal_templates_m2_flat';
import { HARD_TEMPLATES_M2_200 } from './hard_templates_m2_flat';
import { ADVANCED_TEMPLATES_M2_200 } from './advanced_templates_m2_flat';
import { EASY_ACADEMIC_PASSAGES_M1, NORMAL_ACADEMIC_PASSAGES_M1, HARD_ACADEMIC_PASSAGES_M1, ADVANCED_ACADEMIC_PASSAGES_M1 } from './academic_passage_extended';
import { EASY_ACADEMIC_PASSAGES_M2, NORMAL_ACADEMIC_PASSAGES_M2, HARD_ACADEMIC_PASSAGES_M2, ADVANCED_ACADEMIC_PASSAGES_M2 } from './academic_passage_m2';
import { EASY_DAILY_LIFE_M2, NORMAL_DAILY_LIFE_M2, HARD_DAILY_LIFE_M2, ADVANCED_DAILY_LIFE_M2 } from './daily_life_m2';
import { EASY_TERMINOLOGY_M1, EASY_TERMINOLOGY_M2 } from './easy_terminology';
import { COMPLETE_WORDS_EASY_M2 } from './complete_words_m2';
import { expandPassageToFullIBTLength } from './examContent';
export { 
  NORMAL_TEMPLATES_200, 
  HARD_TEMPLATES_200, 
  ADVANCED_TEMPLATES_200,
  EASY_TEMPLATES_M2_200,
  NORMAL_TEMPLATES_M2_200,
  HARD_TEMPLATES_M2_200,
  ADVANCED_TEMPLATES_M2_200
};

export const EASY_TEMPLATES_200: string[] = [
  "The {su:n:The star around which the earth orbits.} is a {st:ar:A fixed luminous point in the night sky.}. It {gi:ves:Provide someone with something.} us {li:ght:The natural agent that stimulates sight.} and {he:at:The quality of being hot.}.",
  "When it {ra:ins:Water falling in drops from vapor.}, {wa:ter:A colorless, transparent liquid.} falls from the sky. This helps {pl:ants:Living organisms like flowers.} in the {so:il:The upper layer of earth.} to {gr:ow:Undergo natural development.}.",
  "A {fo:rest:A large area covered chiefly with trees.} has many tall {tr:ees:Woody perennial plants.}. They are made of {wo:od:The hard fibrous material forming trunks.} and have {gr:een:The color of growing grass.} {le:aves:Plural of leaf; green structures of plants.}.",
  "The {se:a:The expanse of salt water.} is {de:ep:Extending far down from the surface.} and {bl:ue:The color of the sky.}. Many small {fi:sh:A limbless cold-blooded vertebrate.} {sw:im:Propel oneself through water.} in the cold water.",
  "A {bi:rd:A feathered animal with wings.} can {fl:y:Move through the air.} high in the blue {sk:y:The region of the atmosphere.} on a cozy {ne:st:A structure made by a bird to lay eggs.} tree {br:anch:A part of a tree growing out from the trunk.}.",
  "Strong {wi:nd:The perceptible natural movement of the air.} can {bl:ow:Move creating an air current.} on {co:ld:Of or at a low temperature.} winter {da:ys:Plural of day.}. It makes the air feel very {co:ol:Fairly cold; not warm.}.",
  "At {ni:ght:The period of darkness.} the {da:rk:With little or no light.} sky has a bright {mo:on:The natural satellite of the earth.}. It is time to {sl:eep:A condition of body and mind resting.} in your {be:d:A piece of furniture for sleep.}.",
  "The {ea:rth:The planet on which we live.} is made of {la:nd:The part of the earth's surface not water.} and water. A {ha:rd:Solid, firm, and rigid.} {ro:ck:The solid mineral material.} can be found on a high {hi:ll:A naturally raised area of land.}.",
  "A {fi:re:Combustion or burning.} is very {ho:t:Having a high temperature.}. We {bu:rn:Be consumed by fire.} dry wood and black {co:al:A black mineral substance used as fuel.} to stay {wa:rm:At a comfortable temperature.}.",
  "A cute {do:g:A common four-legged domestic animal.} and a small {ca:t:A small domesticated carnivorous mammal.} like to {pl:ay:Engage in activity for enjoyment.}. They {ru:n:Move at a speed faster than a walk.} in the green {ya:rd:A piece of ground next to a house.}.",
  "When you {re:ad:Look at and comprehend written characters.} a {bo:ok:A written or printed work with pages.} look at each {wo:rd:A single distinct meaningful element of speech.}. Turn the {pa:ge:One side of a sheet of paper.} to {le:arn:Gain or acquire knowledge.}.",
  "Healthy {fo:od:Any nutritious substance eaten.} is {go:od:To be desired or approved of.} to {ea:t:Put food into the mouth and swallow it.}. It gives your {bo:dy:The physical structure of a person.} new {li:fe:The condition that distinguishes organisms.}.",
  "Put a small {se:ed:The unit of reproduction of a plant.} into the dark {di:rt:Soil, earth, or land.}. Add a little water, and a green {pl:an:t:A living organism like a flower.} will {gr:ow:Increase in size.} very {fa:st:At high speed.}.",
  "Many modern {ca:rs:Road vehicles with four wheels.} can {dr:ive:Operate and control a vehicle.} on the paved {ro:ad:A wide way for vehicles.}. They move {qu:ickly:At a fast rate.} to the next {to:wn:An urban area smaller than a city.}.",
  "Winter is a very cold {se:ason:Each of the four divisions of the year.}. White {sn:ow:Frozen water vapor in crystals.} and hard {ic:e:Frozen water.} cover the ground. We wear a warm {co:at:An outer piece of clothing.} to keep our body {wa:rm:Comfortably hot.}.",
  "A heavy gray {cl:oud:A visible mass of condensed water vapor.} in the sky brings cold {ra:in:Moisture falling in separate drops.}. It makes the ground very {we:t:Covered or saturated with water.} and creates a deep {pu:ddle:A small pool of liquid.} near the old {ga:te:A hinged barrier.}.",
  "We {li:ve:Have one's home in a particular place.} with our happy {fa:mily:A group of parents and children.} in a big {ho:use:A building for human habitation.}. Our cozy {ho:me:The place where one lives permanently.} is near a beautiful green {pa:rk:A large public garden.}.",
  "A large wooden {sh:ip:A large boat for transporting goods.} can {sa:il:Travel in a boat.} across the wide {oc:ean:A very large expanse of sea.}. Strong {wi:nd:The natural movement of air.} pushes it toward the safe {po:rt:A town or city with a harbor.} on the coast.",
  "At our primary {sc:hool:An institution for educating children.} we meet our kind {fr:iends:People whom one knows and likes.}. Dedicated teachers {te:ach:Impart knowledge to.} us, and we {le:arn:Gain or acquire knowledge.} many interesting {fa:cts:Plural of fact.}.",
  "A long natural {ri:ver:A large natural stream of water.} has cool {wa:ter:A colorless, transparent liquid.} that flows down. It can fill a large {la:ke:A body of water surrounded by land.} where we like to {sw:im:Propel oneself through water.} during hot summer {da:ys:Plural of day.}.",
  "Our bright {ye:llow:The color of lemons.} school {bu:s:A large motor vehicle carrying passengers.} arrives early. The {dr:iver:A person who drives a vehicle.} smiles at all the {ki:ds:Informal term for children.} who step {in:side:Within a room or building.}.",
  "A kind {ma:n:An adult human male.} and his young {so:n:A person's male child.} walk to the local {sh:op:A building where goods are sold.}. They buy a ripe yellow {ba:nana:A long curved fruit.} and three red {ap:ples:Plural of apple.} to eat.",
  "The busy {fa:rmer:A person who manages a farm.} works in the wide {fi:eld:An area of open land.}. He feeds a fat black {co:w:A fully grown female animal of cattle.} and a fluffy white {sh:eep:A domesticated ruminant animal with wool.} near the grassy {ba:rn:A large farm building.}.",
  "My mother loves to {ba:ke:Cook food by dry heat.} a sweet apple {pi:e:A baked dish of fruit.} in the hot {ov:en:An enclosed compartment for cooking.}. The delicious {sm:ell:Scent or aroma.} fills the whole {ro:om:A space in a building.}.",
  "We like to {si:ng:Make musical sounds with the voice.} a happy {so:ng:A short poem or set of words set to music.} together. My sister plays the {ha:nd:The end part of a person's arm.} drums, and my brother plays a small {fl:ute:A woodwind instrument.} to make beautiful {tu:nes:Plural of tune.}.",
  "A paper {ki:te:A light frame flown in the wind.} flies high in the {wi:nd:The movement of air.}. We hold the long {st:ring:A thin length of cord.} and run across the grassy {hi:ll:A naturally raised area of land.} under the warm {su:n:The star that warms the earth.}.",
  "The fat pink {pi:g:An omnivorous domesticated hoofed mammal.} rolls in the cool {mu:d:Wet, soft earth.}. A loud {du:ck:A waterbird with webbed feet.} swims in the farm {po:nd:A small body of still water.} to look for small {bu:gs:Plural of bug.}.",
  "We set up a cozy {te:nt:A portable shelter of canvas.} near the pine trees. We build a bright {ca:mpfire:An open-air fire in a camp.} using dry branches and {lo:gs:Plural of log.}. It is exciting to sleep under the {st:ars:Plural of star.} in the dark {fo:rest:A large area covered with trees.}.",
  "The wooden {cl:ock:An instrument for measuring time.} hanging on the wall has two black {ha:nds:Plural of hand.}. It tells us the exact {ti:me:The indefinite continued progress of existence.} of day. It makes a soft ticking {so:und:Vibrations traveling through the air.} every single {se:cond:The basic unit of time.}.",
  "I use a small {br:ush:An implement with bristles.} to paint a colorful {pi:cture:A painting, drawing, or photograph.} of a red {ro:se:A sweet-smelling flower.}. I paint it on white {pa:per:Material manufactured in thin sheets.} to give to my dear {mo:ther:A female parent.}.",
  "A busy yellow {be:e:A stinging winged insect.} flies to a colorful {fl:ower:The seed-bearing part of a plant.} to drink sweet {ju:ice:The liquid obtained from plants.}. It helps other plants to make new {se:eds:Plural of seed.} in the sunny {ga:rden:A piece of ground for growing flowers.}.",
  "During freezing winter we put on warm wool {so:cks:Plural of sock.} on our cold {fe:et:Plural of foot.}. We wear heavy {bo:ots:Sturdy items of footwear.} to walk on the white {sn:ow:Frozen water vapor.} in the quiet {st:reet:A public road in a town.}.",
  "The fishing {bo:at:A small vessel for traveling on water.} sails on the blue water. The brave {fi:sherman:A person who catches fish.} throws a strong {ne:t:A meshed fabric.} to catch a school of silver {fi:sh:Plural of fish.} near the sandy {sh:ore:The land along the edge of a sea.}.",
  "A friendly {po:stman:A person who delivers mail.} brings a white {le:tter:A written message.} to our front door. He puts it in the metal {ma:ilbox:A box into which mail is delivered.} with a happy {sm:ile:A pleased expression.} on his face every {mo:rning:The early part of the day.}.",
  "A little green {fr:og:A tailless amphibian.} sits on a wet lily {pa:d:A floating leaf of a water lily.} in the pond. It can jump very {hi:gh:At or to a great distance upward.} to catch a flying {bu:g:A small insect.} with its long, sticky {to:ngue:The fleshy muscular organ in the mouth.}.",
  "We mix white {fl:our:Powder made by grinding grain.}, sweet {su:gar:A sweet substance used to sweeten food and drinks.}, and fresh yeast in a large {bo:wl:A round, deep dish.}. We bake the soft dough to make warm {br:ead:Food made of flour, water, and yeast.} that tastes delicious with sweet yellow {bu:tter:A pale yellow fatty substance made from cream.} spread on top.",
  "The children build a tall sand {ca:stle:A model of a castle built out of sand.} on the wide beach. They use a plastic {bu:cket:A cylindrical container.} and a small toy {sh:ovel:A tool with a broad blade.} to scoop dry sand near the rolling sea {wa:ves:Plural of wave.} during their summer {tr:ip:A journey or excursion.}.",
  "A fast brown {ho:rse:A large plant-eating mammal.} runs across the grassy {fie:ld:An area of open land.}. It has a beautiful long {ta:il:The hindmost part of an animal.} and can jump over the low wooden {fe:nce:A barrier enclosing an area.} to eat sweet green grass under the shade of a tall {tr:ee:A large woody plant.}.",
  "In our backyard garden we plant a small red {to:mato:A glossy red edible fruit.} and a crisp green {cu:cumber:A long green-skinned fruit.}. We pull out any bad grass or {we:ed:A wild plant growing where it is not wanted.} and water the {so:il:The top layer of earth in which plants grow.} every afternoon to keep the plants {he:althy:In a good physical state.}.",
  "The {qu:iet:Making little or no noise.} local {li:brary:A building containing collections of books.} has many long shelves of books. We can borrow a historical {st:ory:An account of imaginary or real events.} to read. We must speak in a very soft {vo:ice:The sound produced in a person's larynx.} so we do not disturb the other people who are reading {th:ere:In or at that place.}.",
  "A small gray {mo:use:A tiny rodent.} runs quickly across the clean kitchen {fl:oor:The lower surface of a room.}. It looks for a small piece of yellow {ch:eese:A food made from milk curds.} that fell near the wooden trash {ca:n:A container for waste.} under the table {le:g:A support for furniture.}.",
  "The bright {la:mp:A device for giving light.} on the side desk helps me read my school papers. It shines on my wooden {de:sk:A piece of furniture for reading or writing.} and keeps my bedroom warm and bright. I write my homework with a sharp black {pe:n:An instrument for writing with ink.} in a new paper {no:tebook:A book with blank pages for writing.} before I go to {be:d:A piece of furniture for sleeping.}.",
  "A pretty red {ap:ple:A round fruit with red or green skin.} grows on the leafy tree branch. It gets plenty of bright {su:nlight:Light from the sun.} and fresh air. Soon, it will be ripe and sweet enough to {pi:ck:Take hold of and remove.} and eat with a glass of cold milk after {sc:hool:An institution for educating children.} ends at three {o'clock:Used as a modifier in telling time.}.",
  "The old grandfather clock has a large gold {pe:ndulum:A weight hung from a fixed point so that it can swing freely.} that swings back and forth. It makes a steady ticking {so:und:Vibrations traveling through the air.} to mark the hours. At twelve o'clock, a tiny wooden {bi:rd:A feathered creature.} pops out of a small window and sings a sweet {tu:ne:A melody.} to welcome the afternoon {su:n:The star that warms the earth.}.",
  "A shiny silver {ai:rplane:A powered flying vehicle with fixed wings.} flies incredibly high in the clear blue sky. It leaves a long white {tr:ail:A mark or a path left by something.} of water vapor behind. The passengers look out of the tiny window and see the soft white {cl:ouds:Plural of cloud.} below like fields of fluffy {co:tton:A soft white fibrous substance.} under the warm sun {be:ams:Plural of beam; rays of light.}.",
  "The clever young {st:udent:A person who is studying.} learns how to solve a difficult math question on the big {bo:ard:A flat surface for writing.} in the classroom. She writes the correct numbers with white {ch:alk:A soft white limestone used for writing.} and explains the solution to the teacher and her {cl:assmates:Plural of classmate.} with a confident {sm:ile:A pleased expression.}.",
  "We sit around the big round dining {ta:ble:A piece of furniture with a flat top.} to eat our evening meal. My mother serves hot chicken soup in ceramic {bo:wls:Plural of bowl.} and places fresh wheat bread on a clean {pl:ate:A flat dish from which food is eaten.}. We use a silver fork and a metal spoon to eat our dinner {sl:owly:At a slow speed.} while we share stories about our {da:y:The 24-hour period.}.",
  "A beautiful orange and black {bu:tterfly:An insect with broad colorful wings.} lands gently on a sweet-smelling pink rose. It has two long, thin {an:tennae:Plural of antenna.} that wiggle in the gentle breeze. It drinks sweet nectar from the soft flower {pe:tals:Plural of petal.} and then flies away into the warm air of the grassy {ga:rden:A piece of ground for growing flowers.} near the wooden {fe:nce:A barrier enclosing an area.}.",
  "The brave little boy rides his new blue {bi:cycle:A vehicle with two wheels.} down the smooth paved path. He wears a protective black {he:lmet:A hard hat worn to protect the head.} on his head to stay safe. His father walks close beside him and helps him keep his {ba:balance:An even distribution of weight.} on the two rubber tires until they reach the edge of the public {pa:rk:A large public garden.} near their house {ga:te:A hinged barrier.}.",
  "A playful young {pu:ppy:A young dog.} chases a soft yellow tennis {ba:ll:A round object used in games.} across the wide grassy lawn. It wags its short furry {ta:il:The hindmost part of an animal.} with excitement. It catches the ball in its warm mouth and runs back to its happy {ow:ner:A person who owns something.} to play the fun game of fetch again under the shade of a leafy {tr:ee:A woody plant.} branch.",
  "The busy {fa:rmer:A person who manages a farm.} drives a loud green tractor to plow the soil in his large {fi:eld:An area of open land.}. He plants rows of sweet corn and yellow wheat in the dark {ea:rth:The soil or land.}. He hopes for some warm rain and bright sunshine to help his green crops {gr:ow:Increase in size.} before the cold autumn {se:ason:A division of the year.} arrives.",
  "We wear warm woolen {mi:ttens:Plural of mitten; covers for hands.} on our cold hands when we walk to the school bus stop in the freezing {wi:nter:The coldest season of the year.}. The snow falls in soft white flakes and covers the ground like a thick white {bl:anket:A large piece of fabric.}. We love to see the beautiful landscape on our daily {wa:y:A path, road, or street.} to get our high {gr:ades:Plural of grade.} in school.",
  "The professional tech {ex:pert:A person with special skill or knowledge.} uses a small metal {sc:rewdriver:A tool for turning screws.} to open the plastic case of our broken {co:mputer:An electronic machine used for working and playing.}. He checks the thin wires and shiny green microchips to find the bad {pa:rt:A piece of something.}. He works carefully in his quiet repair shop to make the computer fast and reliable again for our school {ho:mework:Schoolwork done at home.} and daily online research projects.",
  "A majestic red-tailed {ha:wk:A large bird of prey.} circles incredibly high in the clear blue sky, {se:arching:Looking for something.} for little field mice in the grassy {va:lley:A low area of land between hills.}. It has powerful wings and sharp yellow eyes that can spot tiny movements from a great {di:stance:The length of space between two points.}. It flies down extremely fast to catch its prey and carries it back to its high nest on a steep {cl:iff:A steep high face of rock.} edge.",
  "We visit the local natural history {mu:seum:A building in which objects of interest are stored.} to see an amazing exhibition of ancient dinosaur fossils discovered in our state. We see the massive skull of a Triceratops and the giant fossilized {bo:nes:Plural of bone.} of a Brachiosaurus. We learn how these giant creatures lived and walked the earth millions of {ye:ars:Plural of year.} ago before they became extinct after a sudden asteroid {im:pact:The action of one object coming forcibly into contact with another.} in the ancient {pa:st:The time before the present.}.",
  "We wear a pair of strong leather {hi:king:The activity of going for long walks.} boots to protect our feet when we hike the steep and rocky path up the high hill. The path is muddy, steep, and covered in slippery tree roots, but our boots provide excellent traction and {su:pport:Bearing the weight of something.}. We carry fresh water and sweet energy snacks to enjoy when we reach the beautiful windy {su:mmit:The highest point of a hill.} to watch the beautiful {vi:ew:The sight of a landscape.} of our peaceful {va:lley:A low area of land.} below.",
  "The professional graphic designer uses a digital drawing {ta:blet:A flat input device for drawing.} to create colorful illustrations for a new children's {bo:ok:A written or printed work consisting of pages.} or story. She draws friendly forest animals, beautiful fairy castles, and giant flying dragons with a pressure-sensitive digital {pe:n:An instrument for drawing.}. She loves to see her artwork printed in books for children to enjoy reading with their parents in the evening {ho:urs:Plural of hour.} before they go to {sl:eep:A condition of resting.} peacefully.",
  "We use a clean electric {ju:icer:An appliance for extracting juice.} to extract fresh juice from three ripe oranges and half a yellow lemon. The fresh juice is cold, sweet, and filled with healthy vitamin C that keeps our body strong and {fi:t:In good health.}. We drink the healthy beverage with our breakfast before we walk to school with our heavy backpacks filled with interesting school {bo:oks:Plural of book.} and paper {no:tebooks:Plural of notebook.} to learn new {su:bjects:Plural of subject.}.",
  "We use a soft cotton {cl:oth:A piece of woven fabric.} and a gentle {cl:eanser:A substance used for cleaning the skin.} to wash our face and remove dirt and oil before we go to sleep. It is important to care for our skin to keep it {he:althy:In good physical condition.}, smooth, and free of blemishes. We rinse our face with lukewarm water and dry it with a clean {to:wel:A piece of cloth used for drying.} in our bathroom every night at nine o'clock before we get into our cozy bed for a deep {sl:umber:A sleep.} that lasts all night long.",
  "The local fire station has two large red trucks with loud sirens and flashing lights. When there is a dangerous fire, the brave firefighters get dressed in their heavy protective coats in less than a {mi:nute:A unit of time equal to 60 seconds.}. They drive incredibly fast through the busy city streets to save people and put out the hot flames using a long water {ho:se:A flexible tube.} connected to a metal hydrant on the {st:reet:A public road.} corner near our {sc:hool:An institution for educating children.} {bu:ilding:A structure with a roof and walls.}.",
  "We use a sharp pair of metal {sc:issors:An instrument used for cutting paper.} to cut colorful {pa:per:Material in thin sheets used for writing or drawing on.} shapes for our art project in class. We cut out bright red hearts, green trees, and yellow {st:ars:Luminous points in the night sky.} to paste onto a large piece of poster board. We use a stick of white glue to stick the shapes neatly and write our names at the bottom with a black ink marker so the teacher can display our artwork on the classroom {wa:ll:A continuous vertical brick structure.} for all the parents to see {th:ere:In or at that place.}",
  "The professional {de:ntist:A doctor who takes care of teeth.} uses a small {mi:rror:A polished surface that shows an image.} to check our {te:eth:Hard parts in the mouth used for chewing.} and ensure they are clean, healthy, and free of cavities. She uses a gentle tool to clean off any plaque and advises us to {br:ush:Clean teeth with a bristled tool.} our teeth twice a day with fluoride toothpaste. She also tells us to floss daily and eat less sweet candy to protect our white tooth enamel and maintain a beautiful, healthy {sm:ile:A pleased expression on the face.} that we can show to our friends every day at our school class.",
  "The busy {ba:ker:A person who makes and sells bread and cakes.} wakes up at four o'clock in the morning to start baking fresh bread, sweet croissants, and delicious blueberry muffins for his neighborhood bakery shop. He mixes high-quality {flo:ur:A powder obtained by grinding grain, used to make bread.}, fresh yeast, warm water, and a pinch of white salt in a giant metal bowl. He kneads the soft {do:ugh:A thick mixture of flour and liquid used for baking.} carefully before placing it in the warm {ov:en:An enclosed compartment used for heating and baking food.} to bake until the crust is golden brown and fills the street with a mouth-watering {sm:ell:A pleasant scent or aroma.} that makes everyone want to stop and buy a tasty snack for their morning breakfast.",
  "We visit the local public {li:brary:A building where books are kept for people to read or borrow.} once a week to {bo:rrow:Take and use something that you will return later.} interesting books and search for facts on the computer for our school research projects. The library is a very {qu:iet:Making very little or no noise.} place with comfortable chairs and long rows of wooden bookshelves. We can sit and read {st:ories:Tales of imaginary or real people and events.} about brave explorers, distant planets, or ancient civilizations. We must always remember to {re:turn:Give or send something back to its place.} our books on time so other children can enjoy reading them as well during their school holidays or weekend spare time at home.",
  "The yellow school bus stops at the corner of our street every {mor:ning:The early part of the day.} at half past seven to take us to our elementary school. We find a seat next to our best {fri:end:A person you know well and like.} and talk about our favorite games or the homework we completed last night. The friendly bus {dri:ver:A person who operates a vehicle.} watches the road carefully and obeys all the traffic lights to keep us safe. We arrive at the school yard on time, ready to greet our teacher and start our morning lessons in the clean {cl:assroom:A room in which a class of students is taught.} with our other {cl:assmates:Plural of classmate.} near the big board.",
  "The majestic white {sw:an:A large waterbird with a long neck.} swims gracefully across the calm surface of the quiet {la:ke:A large body of water surrounded by land.} in the middle of the city park. It wiggles its long elegant neck and dips its head underwater to find tiny plants and small insects to eat. A mother and her little child sit on a wooden bench nearby and toss small pieces of {br:ead:A common food made from flour and baked.} into the water for the swan to catch. The swan swims closer and makes a soft sound, showing its appreciation for the delicious treats they share on this warm and sunny {af:ternoon:The part of the day between noon and evening.} in the green {pa:rk:A public green area used for recreation.}.",
  "The experienced {bu:ilder:A person who builds or repairs houses.} uses a blue measuring tape to measure the height of the wooden door frame in our new living room. He uses a heavy {ha:mmer:A tool used for hitting nails.} to drive iron nails into the strong wooden beams and a sharp saw to cut the lumber to the correct size. He works very hard to ensure the {ho:use:A building for human habitation.} is strong, safe, and well-insulated against the cold winter winds. Soon, our {fa:mily:A group of parents and their children.} will be able to move in and enjoy our new home with a big {ba:ckyard:A grassy area behind a house.} for our dog to run and play safely with all our neighborhood kids.",
  "The expert {tai:lor:A person who makes or alters clothes.} uses a silver {nee:dle:A thin metal tool used for sewing.} and strong black thread to sew a beautiful dress for a special party. She measures the {fab:ric:Cloth used for making clothes.} carefully with a flexible tape measure and cuts it with a sharp pair of shears. She works with great precision to make sure every seam is perfect and the dress fits beautifully. She adds two shiny plastic {but:tons:Small round objects used to fasten clothes.} on the sleeves and a zipper at the back to complete her masterpiece, which her happy customer will wear with a proud {smi:le:A happy facial expression.} on her face this weekend during the celebratory event in the grand hall.",
  "A tiny green {ca:terpillar:A worm-like larva of a butterfly or moth.} crawls slowly along the stem of a leafy rose bush in our backyard garden. It eats a small hole in a green leaf to fill its hungry belly and gain strength. In a few days, it will spin a hard protective shell called a {co:coon:A silky cover that caterpillars make to protect themselves.} around its body and rest inside for a couple of weeks. When it finally wakes up, it will emerge as a beautiful colorful {bu:tterfly:An insect with large, often brightly colored wings.} with broad {wi:ngs:The parts of a bird or insect used for flying.} that can fly high in the air to find sweet {flo:wers:The colored parts of a plant that smell nice.} under the bright summer sunlight that warms the earth.",
  "The clever young {de:tective:A person whose job is to investigate crimes.} uses a large magnifying glass to look for {cl:ues:A piece of evidence or information.} on the dusty floor of the old empty cabin. He finds a small silver {ke:y:A piece of metal shaped to fit a lock.} hidden under a loose wooden board near the stone fireplace. He wonders if the key will open the mysterious heavy chest in the corner of the room. He writes down all his interesting findings in a small leather pocket notebook so he can solve the secret mystery before the sun sets and the dark night covers the lonely forest {ar:ound:On every side of.} the quiet wooden {ho:use:A building for human habitation.}.",
  "We use a powerful plastic {va:cuum:A device that cleans floors by suction.} cleaner to remove dust and dog hair from the {ca:rpet:A thick fabric cover for a floor.} in our living room. It makes a loud buzzing sound, but it cleans the floor very quickly. We empty the dust bag into the large trash can in the {ki:tchen:A room where food is cooked.}. Then we spray a sweet lavender mist in the air to make the room smell fresh and clean before our special {gu:ests:People invited to a social event or home.} arrive for a delicious {di:nner:The main meal of the day eaten in the evening.} party at our house this evening at seven o'clock after they finish their daily work at the local office.",
  "The young {st:udent:A person who is studying at a school or college.} uses a digital tablet to search for interesting facts about the ancient Egyptian pyramids for his history {re:port:A factual account.}. He reads articles and looks at colorful pictures of the giant sphinx and the pharaohs. He takes neat notes on his paper to share with his teacher and his classmates. He is very proud of his hard work and hopes to get an excellent grade from his teacher on his project next Monday morning in the history {cl:ass:A group of students.} when he presents his {fi:ndings:Plural of finding; discoveries.} to the whole {sc:hool:An institution for educating children.}.",
  "We use a clean metal {to:aster:An electrical appliance for toasting bread.} to toast two slices of fresh wheat bread for our {br:eakfast:The first meal of the day.} in the morning. When the toast is ready, the toaster pops the warm slices up automatically with a soft sound. We spread sweet strawberry jam and creamy peanut butter on the warm bread to make a delicious and healthy sandwich. We drink a tall glass of cold orange juice to complete our breakfast before we grab our heavy school backpacks and walk quickly to the bus stop on our {wa:y:A path or street.} to catch the yellow {bu:s:A large motor vehicle carrying passengers.} with our kind {fr:iends:Plural of friend.}.",
  "We wear a pair of thick rubber {ra:inboots:Waterproof boots for wet weather.} to keep our {fe:et:Plural of foot.} dry when we walk to school on a wet and rainy morning. The paved street has many deep water puddles, but our high boots prevent the cold water from soaking our socks. We carry a large {um:brella:A device used for protection from rain or sun.} to shield our school bag and warm clothes from the falling rain. We walk carefully on the sidewalk so we do not slip on the wet leaves that have fallen from the tall maple trees onto the cold ground in our quiet {to:wn:An urban area smaller than a city.} near the primary {sc:hool:An institution for educating children.} yard.",
  "A clever little {ha:mster:A small rodent with a short tail and large cheek pouches.} runs quickly on its metal exercise {wh:eel:A circular object that revolves on an axle.} inside its wire {ca:ge:A structure for confining animals.} in our living room. It wiggles its pink nose and fills its cheeks with sweet sunflower seeds to eat later in its cozy nest. It is a very clean and playful pet that is easy to care for and brings a lot of joy to our family. We give it fresh water and clean its cage once a week to keep it healthy and happy in our warm and cozy {ho:me:The place where one lives permanently.} near the quiet public {pa:rk:A large public garden.} in the busy city center.",
  "We visit the local maritime {mu:seum:An institution for preserving and exhibiting objects of historical, scientific, or artistic interest.} to see a historical exhibition about ancient sailing {sh:ips:Plural of ship.} that crossed the wide {oc:ean:A very large expanse of sea.} hundreds of years ago. We see detailed models of the massive wooden ships, old paper maps used by early sailors, and heavy metal compasses used for navigation. We learn how the sailors braved the strong winds and giant waves to discover new lands across the sea. It is a very educational experience that teaches us a lot about history and geography on a cold {sa:turday:The day of the week after Friday.} afternoon with our dear {pa:rents:Plural of parent.} in the city.",
  "The young girl uses a wooden {ea:sel:A frame for supporting an artist's canvas.} to hold her canvas while she {pa:ints:Applies paint to a surface.} a beautiful {pi:cture:A painting or drawing.} of a high mountain. She uses a wooden palette of bright colors and different soft brushes to paint the snowy peaks and the green pine trees. She is very passionate about her art and hopes to exhibit her artwork in a local gallery someday. Her teacher always praises her creativity and encourages her to continue practicing her painting skills to become a professional artist in the future when she grows {up:To a later period in life.} and completes her high {sc:hool:An institution for educating children.} education.",
  "A small gray {sq:uirrel:A small rodent with a bushy tail.} gathers ripe {ac:orns:Plural of acorn; the fruit of the oak tree.} from the ground and carries them in its mouth to store inside a hollow tree branch. It works tirelessly all day long to prepare for the cold winter when food is hard to find in the forest. It has a fluffy tail that helps it keep its balance when it jumps from tree to tree. We love to watch it play in our backyard garden and climb up the tall oak tree near our wooden fence during the warm autumn {da:ys:Plural of day.} before the first winter {sn:ow:Frozen water vapor.} covers the cold {ea:rth:The ground or soil.}.",
  "The young boy uses a small metal {tr:owel:A small hand tool with a flat, pointed blade.} to dig a {ho:le:An opening in or through a surface.} in the rich dark soil of our backyard garden. He plants a tiny green {se:ed:A flowering plant's unit of reproduction.} of a sunflower and covers it gently with dirt. He uses a small watering can to water the soil every afternoon so the seed can sprout and grow. He watches the plant daily, hoping it will grow tall and blossom into a beautiful yellow flower with many seeds for the birds to eat during the autumn days when the weather gets {co:ld:Of or at a low temperature.} in our quiet {to:wn:An urban area smaller than a city.}.",
  "The professional {me:chanic:A skilled worker who repairs machines.} uses a heavy metal {wr:ench:A tool used for gripping and turning nuts or bolts.} to loosen a rusty bolt on the engine of our family car in his garage. He checks the oil level, tests the car battery, and ensures all the rubber tires are filled with the correct amount of air to keep us safe on the road. He works very quickly and efficiently to repair the car so we can drive to the countryside for our weekend picnic. We thank him for his excellent service and pay him with a shiny silver bank {ca:rd:A plastic card used for payment.} before we drive {aw:ay:To another place.} to our happy {ho:me:The place where one lives permanently.}.",
  "A little {ho:neybee:A stinging winged insect that collects nectar.} wiggles its wings and flies from one bright red {fl:ower:The reproductive part of a plant.} to another in our beautiful backyard garden. It collects sweet {ne:ctar:A sugary fluid produced by flowers.} and yellow pollen to carry back to its busy hive on the tall apple tree branch. In the hive, the bees work together as a team to make delicious sweet honey that we love to eat with our warm toast. The honeybee is a very important insect that helps our garden flowers grow and thrive during the warm days of the sunny {su:mmer:The warmest season of the year.} when the sky is clear and {bl:ue:The color of the sky.}.",
  "We use a clean glass {pi:tcher:A container for liquids with a handle and a lip.} to make a cool and refreshing drink of sweet {le:monade:A drink made from lemon juice, sugar, and water.} on a hot summer afternoon. We squeeze the fresh {ju:ice:The liquid obtained from fruit or vegetables.} of four yellow lemons, add three cups of cold water, and mix in a cup of sweet sugar. We add some ice cubes to make the beverage freezing cold and delicious to drink while we sit under the shade of our giant oak tree in the backyard garden. It is the perfect way to cool down and enjoy a lazy weekend with our happy family {at:In or at a position.} our cozy home in the quiet {su:burb:An outlying district of a city.}.",
  "The young girl uses a pair of shiny metal ice {sk:ates:Plural of skate; a boot with a blade or wheels for gliding.} to glide smoothly across the frozen surface of the public outdoor rink in the city park. She wears a thick woolen {sc:arf:A length of fabric worn around the neck or head.} around her neck and a warm pink {ha:t:A shaped covering for the head.} to protect her ears from the freezing winter wind. She practices her turns and spins carefully, laughing when she loses her balance and falls onto the soft snow near the wooden fence. She enjoys the winter sport very much and wants to stay until the lights turn on at six {o'clock:Used in telling time.} in the evening {ho:urs:Plural of hour.}.",
  "A beautiful green {hu:mmingbird:A small bird with a long slender bill.} hovers near the colorful trumpet vine in our garden, wiggling its tiny {wi:ngs:Plural of wing; a limb used for flying.} so fast that they look like a blur. It dips its long, slender beak into the sweet flowers to drink the sugary nectar that gives it the energy to fly all day long. It is the smallest bird in our state and has a iridescent throat that shines like a jewel in the bright morning sunlight. We feel very lucky to watch this amazing little creature from our kitchen window during our breakfast {ti:me:The progress of existence.} every single morning {in:Expressing the situation of something.} the warm season of {sp:ring:The season after winter.}.",
  "The professional {ca:rpenter:A person who builds or repairs wooden structures.} uses a sharp {ch:isel:A tool with a shaped cutting edge.} to carve a beautiful pattern on the edge of a new wooden dining {ta:ble:A piece of furniture with a flat top.}. He works in his noisy workshop filled with the pleasant smell of cut pine and oak sawdust. He uses a sheet of sandpaper to make the wood surface perfectly smooth and applies a coat of shiny varnish to protect the table from scratches and stains. He is very proud of his handiwork and hopes the table will last for many generations in a happy family {ho:use:A building for human habitation.} in our quiet country {to:wn:An urban area smaller than a city.}.",
  "We go to the local farmers {ma:rket:A public place where goods are sold.} every Saturday morning to buy fresh organic {fr:uits:Plural of fruit; the sweet and fleshy product of a tree or other plant.}, vegetables, and homemade baked goods from the local farmers. We fill our large canvas bags with sweet red strawberries, green spinach, yellow squash, and fresh farm eggs. We also buy a jar of sweet clover honey and a loaf of warm sourdough bread from a friendly baker who smiles at us. It is a wonderful way to support our community and get healthy food for our weekly meals at {ho:me:The place where one lives permanently.} with our dear {pa:rents:Plural of parent.} and little {si:ster:A female sibling.}.",
  "The clever young girl uses a digital {ca:mera:A device for recording visual images.} to take high-quality {ph:otographs:Plural of photograph; a picture made using a camera.} of the colorful autumn leaves on the tall maple trees in the park. She captures the beautiful shades of red, orange, and yellow as the leaves fall gently onto the grass. She wants to print her best pictures and make a colorful collage for her school art project on Monday morning. Her teacher always praises her artistic eye and encourages her to continue exploring the world through her camera lens to discover new {be:auty:A combination of qualities that pleases the sight.} in the natural world {ar:ound:On every side of.} her peaceful suburban {ho:me:The place where one lives permanently.}.",
  "A proud mother {bi:rd:A warm-blooded egg-laying vertebrate.} sits patiently on her {ne:st:A structure made by a bird for laying eggs.} of twigs and soft feathers, warming her four tiny blue {eg:gs:Plural of egg; an oval or round object laid by a female bird.}. The nest is hidden safely among the thick green leaves of a tall pear tree in our backyard garden, protected from the cold wind and hungry cats. In a few days, the eggs will hatch, and four hungry little chicks will emerge, chirping loudly for food. The mother and father birds will fly back and forth all day to find small worms and insects to feed their growing family in the warm {ga:rden:A piece of ground for growing flowers.} near our cozy wooden {ho:use:A building for human habitation.}.",
  "We wear our protective life {ja:ckets:Plural of jacket; a garment for the upper body.} when we step onto the wooden deck of the small sailing {bo:at:A small vessel propelled on water.} at the harbor. The captain checks the wind direction and unfurls the large white {sa:il:A piece of fabric used to propel a boat.} to catch the steady breeze across the wide lake. The boat glides smoothly over the gentle waves, leaving a trail of white foam in the deep blue water behind us. We enjoy the fresh air and watch the white seagulls fly overhead, searching for small fish near the water surface on this beautiful summer day {wi:th:Accompanied by.} our happy family and best {fr:iends:Plural of friend.} from school.",
  "The skilled {ar:tist:A person who practices any of the various creative arts.} uses a box of colorful soft {pa:stels:Plural of pastel; a crayon-like stick of ground pigment.} to draw a realistic portrait of a furry white rabbit on a sheet of textured gray paper. He blends the colors gently with his fingers to create the soft texture of the rabbit's fur and uses a white pastel to add a bright shine to its round black eyes. He is very detailed in his work and spends many hours in his quiet art studio to make the portrait look alive. He hopes to win first prize in the annual community art competition held {at:In or at a position.} the local library next {mo:nth:A division of the year.} in our quiet suburban {to:wn:An urban area smaller than a city.}.",
  "A small gray field {mo:use:A small rodent with a pointed snout and a long thin tail.} builds a warm {ne:st:A structure or place made or chosen by a bird or other animal for laying eggs or giving birth to young.} of shredded paper and dry grass inside a cardboard box in the corner of our dry basement. It crawls out quietly at night to look for tiny {fo:od:Any nutritious substance that people or animals eat or drink.} crumbs on the kitchen floor after everyone has gone to sleep. It has to be very careful to avoid our big black cat, who loves to hunt mice in the dark. The little mouse is quick and silent, wiggling its long whiskers as it searches for a tasty bite of yellow cheese or sweet bread {to:Expressing motion in the direction of.} carry back to its cozy nest before the morning sun {ri:ses:Goes up.} in the east.",
  "The professional {ph:otographer:A person who takes photographs.} carries a heavy tripod and two digital {ca:meras:Plural of camera; a device for recording visual images.} to the top of the high hill to photograph the beautiful sunset over the city. He waits patiently for the sun to sink below the horizon, painting the sky in breathtaking shades of pink, purple, and orange. He adjusts the camera settings to capture the warm light reflecting off the glass windows of the tall city buildings in the distance. It is a spectacular sight that he will share on his popular travel blog for people to enjoy all {ov:er:Extending upward from.} the world on their computer {sc:reens:Plural of screen.} at {ho:me:The place where one lives permanently.}.",
  "We use a colorful plastic watering can to water our indoor potted {pl:ants:Living things that grow in the ground, often with leaves and flowers.} every Sunday morning to keep them {he:althy:In good physical or mental condition.} and green. We have a small cactus on the desk, a leafy fern on the bookshelf, and a blooming pink orchid on the windowsill that gets plenty of bright morning {su:nlight:The light that comes from the sun.}. We make sure not to give them too much water so their roots do not rot in the dark soil. Taking care of our plants is a relaxing hobby that makes our bedroom feel lively and fresh during the cold winter months when we stay {in:side:Within a room or building.} our warm and comfortable family {ho:use:A building for human habitation.}.",
  "The clever young boy uses a plastic {co:mpass:An instrument showing direction.} and a paper {ma:p:A diagrammatic representation of an area.} to find his way during the weekend scout hiking trip in the state park. He leads his team of scouts along the narrow dirt {pa:th:A track or way formed by the treading of people.}, checking the compass needle to ensure they are walking in the correct northern direction toward the {ca:mpsite:A place used for camping.}. They walk past tall pine trees, cross a small wooden bridge over a bubbling stream, and climb a steep rocky hill before they reach the campsite where they will pitch their green tents and build a warm campfire to cook their dinner under the bright {st:ars:Plural of star.} in the dark sky.",
  "The busy {lib:rarian:A person who works in a library.} works at the front desk of our quiet neighborhood library, {hel:ping:Assisting someone.} people find books and checking out their selections using a digital barcode scanner. She organizes the returned books on the metal carts and returns them to their correct places on the tall wooden bookshelves so they are easy to find. She also coordinates the weekly story hour for the local toddlers, reading funny stories and singing songs with them in the colorful children's section of the library. She loves her job because she gets to share her passion for reading with the whole {co:mmunity:A group of people living in the same place.} and meet many friendly {pe:ople:Plural of person.} every {da:y:The 24-hour period.}",
  "We use a pair of protective plastic {go:ggles:Protective spectacles.} and a long metal {sn:orkel:A tube for a swimmer to breathe while underwater.} when we swim in the clear water of the swimming pool during our {sum:mer:The warmest season of the year.} holiday. The goggles allow us to see underwater clearly without the chlorine hurting our eyes, and the snorkel helps us breathe easily while we float on the surface of the blue water. We love to dive to the bottom of the pool to retrieve shiny red rings and practice our swimming strokes with our friends. It is a very fun and active way to spend our summer days when the weather is extremely hot outside in our {to:wn:An urban area smaller than a city.} near the public {pa:rk:A large public garden.} pool.",
  "The professional {gar:dener:A person who cultivates a garden.} uses a pair of sharp pruning shears to trim the dead branches of the sweet-smelling rose bushes in the public botanical garden. He works hard in the early morning to make sure the {flow:ers:The part of a plant that blossoms.} are healthy, beautifully arranged, and free of harmful insects. He also plants new colorful flowerbeds of purple lavender and yellow marigolds to attract busy bees and beautiful butterflies that help pollinate the plants. He enjoys working outdoors in nature and takes great pride in maintaining a peaceful and beautiful green space for the city residents to visit and enjoy with their {fam:ily:A group of parents and children.} on sunny {da:ys:Plural of day.} in {su:mmer:The warmest season of the year.}.",
  "The young boy uses a small metal trowel to dig a shallow trench in the rich black soil of our {veg:etable:A plant or part of a plant used as food.} {gar:den:A piece of ground for growing flowers or vegetables.}. He plants six small organic seeds of a green bean plant and covers them gently with the dark earth. He uses a plastic {wa:tering:Supplying with water.} can to water the soil every afternoon so the seeds can germinate and grow into strong green vines that climb up the wooden trellis. He is very excited to watch his plants grow and looks forward to picking fresh green beans for our family dinner during the late summer days when the weather is warm in our quiet {to:wn:An urban area smaller than a city.} near the country {si:de:The land of a rural area.}.",
  "We visit the local science {mu:seum:A place to see old or interesting things.} to see an exciting interactive exhibition about electricity, space exploration, and robotic technology. We can touch a plasma globe to see purple light follow our fingers, look at a real model of the Apollo lunar lander, and watch a smart robotic arm build a small toy car. We {le:arn:Gain knowledge or a skill.} how scientists use technology to solve complex global problems and explore distant planets in our solar system. It is a very inspiring visit that makes us want to study science and engineering when we grow up and attend university {in:Expressing the situation of something.} the future years of {ou:r:Belonging to us.} young {li:ves:Plural of life.}. ",
  "The professional {che:f:A professional cook.} uses a sharp stainless steel knife to chop fresh {veg:etables:Plants or parts of plants used as food.} on a heavy wooden cutting board in his busy restaurant {kit:chen:A room where food is prepared and cooked.}. He chops red onions, orange carrots, green celery, and ripe red tomatoes to make a delicious and healthy vegetable soup for the evening guests. He heats a large metal pot on the stove, adds a splash of golden olive oil, and sautés the vegetables until they are soft and fragrant. He adds fresh herbs, water, and a pinch of salt to create a perfect soup that is warm, nutritious, and loved by everyone in our local {to:wn:An urban area smaller than a city.} near the scenic {ri:ver:A large natural stream of water.}",
  "The professional {ar:chitect:A person who designs buildings.} sits at her clean drawing table to {des:ign:To plan and make drawings of something.} a modern school building for our town. She draws detailed blueprints using a long ruler and a sharp pencil, planning the exact locations of the classrooms, the library, and the large gym. She wants to make the school safe, energy-efficient, and filled with natural light from large glass windows. She works very hard to complete the drawings before the construction workers start building the foundation next spring {ye:ar:The period of 365 days.} in our quiet suburban {co:mmunity:A group of people living in the same place.} near the primary {sc:hool:An institution for educating children.} playground.",
  "We wear our warm {win:ter:The coldest season of the year.} {ja:ckets:Plural of jacket.} and comfortable leather boots when we walk through the deep snow to the frozen lake in the city park. The air is freezing cold, and our breath looks like white clouds in the morning light. We meet our friends to play a fun game of ice hockey on the thick ice, laughing and sliding as we chase the black rubber puck across the rink. We stay warm by moving quickly and drinking hot chocolate from a metal thermos during our break at twelve o'clock {no:on:The middle of the day.} before we walk back to our warm {ho:use:A building for human habitation.} on the quiet {st:reet:A public road.}.",
  "The skilled auto {me:chanic:A person who repairs machinery.} uses a digital diagnostic tool to find the problem with our family car's {en:gine:A machine that converts fuel into mechanical energy.}. He discovers that a small rubber hose is cracked and needs to be {rep:laced:Put something back in its previous place.} immediately to prevent the engine from overheating on the road. He uses a metal wrench to remove the damaged hose and installs a brand new one from his parts room. He also checks the fluid levels, tests the brakes, and ensures the tires are safe before handing us the keys with a friendly smile in his busy garage {sh:op:A place where things are repaired.} near the main highway {ro:ad:A wide way.}.",
  "A beautiful blue {ja:y:A bird of the crow family.} lands on our wooden bird feeder, wiggling its {fe:athers:The covering of a bird.} and making a loud chirping sound to warn other birds. It picks a large sunflower seed with its sharp black beak and flies back to the branch of the tall pine tree in our yard. We love to watch the colorful birds from our dining room window while we eat our breakfast in the morning. We keep a small bird guide book on the table to help us identify all the different species that visit our garden during the warm days of {sp:ring:The season after winter.} when the flowers blossom and {ea:rth:The planet on which we live.} feels green and {beau:tiful:Having qualities that give great pleasure.}.",
  "We visit the local public {aq:uarium:A building containing fish and other water creatures.} to see a colorful exhibition of tropical {fis:h:A limbless cold-blooded vertebrate.}, green sea turtles, and majestic manta rays from the coral reefs. We walk through a giant glass tunnel while sharks and schools of silver fish swim gracefully above our heads in the deep blue saltwater. We learn how marine biologists protect endangered sea creatures and preserve the delicate balance of the ocean ecosystems. It is a very exciting and educational trip that teaches us a lot about marine life and inspires us to protect our natural world and the beautiful blue {se:a:The expanse of salt water.} during our summer {va:cation:A holiday.} with our family {cl:ub:An association of people.}.",
  "We wear a pair of comfortable {sn:eakers:Plural of sneaker; sports shoes.} and light cotton clothes when we walk to the sports complex to play a friendly game of {ten:nis:A game played with rackets and a ball.} with our classmates. The outdoor courts are clean and well-maintained, with green nets and white lines painted on the smooth blue surface. We practice our serves and volleys carefully, trying to hit the yellow tennis ball over the net and keep it inside the lines. We enjoy the healthy physical exercise and drink fresh water from our bottles to stay hydrated during our match under the warm summer {su:n:The star that warms the earth.} in our beautiful country {to:wn:An urban area smaller than a city.} near the public {pa:rk:A large public garden.} complex.",
  "The professional digital {il:lustrator:A person who draws pictures for books.} uses a modern computer and a graphic tablet to create beautiful characters for a new animated movie. She draws a brave young hero, a friendly mechanical robot, and a clever flying squirrel with a pressure-sensitive digital pen. She works in her cozy home studio, surrounded by colorful artwork and interesting design books that inspire her creativity. She spends many hours refining the details and colors to make the characters look alive and expressive on the digital screen for children to enjoy watching in the local {th:eater:A building where movies are shown.} with their loving {fa:milies:Plural of family.} next {ye:ar:The period of 365 days.} during the winter {ho:lidays:Plural of holiday.}.",
  "We use a clean electric {bl:ender:An electrical appliance for puréeing or mixing.} to mix a healthy and delicious green {smo:othie:A thick beverage made from fruit and sometimes vegetables.} for our afternoon snack after our school lessons. We put a cup of fresh spinach, one ripe yellow banana, a handful of sweet strawberries, and a glass of cold almond milk into the plastic pitcher. We secure the lid tightly and press the button to blend the ingredients until they are perfectly smooth and creamy. We pour the refreshing beverage into tall glass cups and drink it with a paper straw in our cozy {kit:chen:A room where food is prepared and cooked.} before we start doing our daily homework {sh:eet:A piece of paper.} near the window at our wooden study {de:sk:A piece of furniture.}",
  "We use a soft organic {lo:tion:A liquid preparation applied to the skin.} to moisturize our hands and face after we take a warm bath in our clean {bat:hroom:A room containing a toilet and sink and typically also a bathtub or shower.}. The lotion has a pleasant scent of lavender and sweet almond oil that makes our skin feel extremely soft, healthy, and smooth. We also brush our teeth with a soft toothbrush and minty toothpaste to keep our mouth fresh and our smile bright. We put on our comfortable cotton pajamas and climb into our cozy bed, ready to fall into a peaceful sleep that will give our body rest until the morning {su:n:The star that warms the earth.} rises in the east {sk:y:The region of the atmosphere.} at six {o'clo:ck:Used in telling time.}",
  "The busy local post {of:fice:A room or building where postal business is conducted.} has three service counters and a large sorting room filled with letters and packages for our community. The friendly {pos:tal:Relating to the post office or mail service.} workers weigh the packages carefully, calculate the correct postage, and print shipping labels for the customers who stand in line. They work very hard to ensure that every letter and package is delivered safely and on time to its destination. We buy a sheet of colorful stamps and mail a handwritten birthday card to our grandmother who lives in a distant city across our beautiful country {to:day:On the present day.} during our school {br:eak:A pause or interval.} in the warm {af:ternoon:The time from noon to evening.}.",
  "We use a sharp metal penknife to {sha:rpen:To make something keen or pointed.} our {sk:etching:Making a rough drawing or outline.} pencils before we start our weekly art class in the school studio. The teacher shows us how to draw a {re:alistic:Representing things in a way that is true to life.} still life of a basket of fruit and a glass bottle on a wooden table. We use our graphite pencils to create realistic {sha:dows:Dark areas or shapes produced by an object blocking light.} and highlights on the white drawing paper, working quietly and focused on our art. We learn how to observe the light source and use different shading techniques to make our {dr:awings:Pictures or diagrams made with a pencil, pen, or crayon rather than paint.} look three-dimensional and professional on the display board in our school corridor for all visitors to see.",
  "The {exp:ert:A person who is very knowledgeable about or skilled in a particular area.} pediatric {pe:diatrician:A medical practitioner specializing in children.} uses a small stethoscope to listen to our heartbeat and check our lungs during our annual medical checkup at the clinic. He is very gentle and friendly, asking us how we feel and if we have any health questions about our diet or sleep. He measures our height and weight carefully, noting them in our digital health file, and advises us to eat plenty of fresh vegetables and exercise daily. He also checks our ears, throat, and reflexes to ensure we are growing healthy, strong, and active in our daily {li:fe:The condition that distinguishes organisms.} at school and {ho:me:The place where one lives permanently.} with our happy {fa:mily:A group of parents and children.}.",
  "The professional pastry {ch:ef:A professional cook.} works in the warm kitchen of a popular French {bak:ery:A place where bread and cakes are made or sold.}, creating delicious chocolate eclairs, fruit tarts, and custom wedding cakes. She uses a large stand mixer to whip fresh cream, sweet sugar, and egg whites into a fluffy meringue. She decorates the {pas:tries:Small cakes or sweet baked items.} with fresh raspberries, grated chocolate, and gold leaf, making them look like beautiful works of art in the display case. Customers line up outside the shop every morning, drawn by the delicious aroma of baking butter and sweet vanilla that drifts down the paved street in our {to:wn:An urban area smaller than a city.} near the old historical {ca:stle:A large fortified building.}.",
  "We go to the local {bo:tanical:Relating to plants.} {gar:den:A piece of ground for growing flowers or vegetables.} once a month to learn about different plant species, exotic flowers, and ancient trees from all over the world. The garden has a giant glass greenhouse that maintains a warm tropical climate, allowing beautiful orchids, tall palm trees, and colorful carnivorous plants to thrive. We walk along the stone paths, taking notes and taking photographs for our science project about plant adaptations in different environments. It is a very relaxing and educational place that shows us the incredible diversity and beauty of nature on our {ear:th:The planet on which we live.} and inspires us to {pro:tect:To keep safe from harm or injury.} it for the future {gen:erations:Plural of generation; people born around the same time.}.",
  "The {yel:low:Having the color of ripe lemons.} {sch:ool:An institution for educating children.} bus stops near our house every morning at exactly ten minutes to eight to transport us to our primary school. We greet the friendly bus {dri:ver:A person who drives a vehicle.} and sit next to our classmates, talking about our favorite science experiments and the spelling test we have today. The bus is equipped with comfortable seats and safety belts, and the driver drives very carefully through the suburban streets to ensure we arrive safely at the school yard. We walk into our {cla:ssroom:A room where a class of students is taught.}, ready to unpack our bags and start our daily lessons with a happy smile on our faces at our wooden desks near the {wa:ll:A continuous vertical structure.}.",
  "A beautiful white {sw:an:A large water bird with a long flexible neck.} builds a cozy {ne:st:A structure or place made by a bird for laying eggs and rearing young.} of dry reeds and soft grass on a small island in the middle of the city park lake. It lays five large white eggs and sits on them patiently to keep them warm and protected from the cold wind and curious animals. Its partner swims nearby, watching the shore carefully and hissed softly if anyone gets too close to their nesting site. Soon, five fluffy gray cygnets will hatch and swim gracefully behind their proud parents in the calm water of the lake during the warm summer {da:ys:Plural of day.} when the park is full of happy {pe:ople:Plural of person.} enjoying the beautiful {su:nlight:Light from the sun.}.",
  "The experienced civil {en:gineer:A person who designs public works.} uses a digital tablet to inspect the steel structure of the new {bri:dge:A structure carrying a road or path over an obstacle.} being built across our wide river. He checks the blueprints carefully to ensure that the concrete pillars and steel cables are installed correctly and can support the weight of heavy trucks and cars. He collaborates with the construction crew to resolve any safety issues and keep the project on schedule for the grand opening next month. The new bridge will reduce traffic congestion and connect our quiet suburban town to the busy city center across the blue {wa:ter:A colorless, transparent liquid.} of our beautiful scenic {ri:ver:A large natural stream of water.} near the old country {ro:ad:A wide way.}.",
  "The professional custom {se:amstress:A woman who sews, especially professionally.} uses a modern sewing {mac:hine:An apparatus using mechanical power.} to sew a beautiful silk gown for a local theater production. She measures the actor carefully, cuts the delicate fabric with a pair of sharp shears, and pins the pieces together before sewing the seams with great precision. She adds intricate lace details on the collar and a series of shiny pearl buttons down the back to make the costume look historical and authentic. The actor is very pleased with the dress and thanks her for her incredible skill and hard work which will shine under the bright stage {li:ghts:Plural of light.} during the opening night {sh:ow:A theatrical presentation.} in the grand {th:eater:A building where plays are performed.}.",
  "A tiny green {cat:erpillar:The larva of a butterfly or moth.} crawls slowly along the stem of a blooming rose bush in our backyard {gar:den:A piece of ground for growing flowers or vegetables.}, searching for fresh green leaves to eat. It wiggles its segmented body and chews a small neat hole in a leaf, eating quietly under the warm afternoon sun. In a few days, it will attach itself to a sturdy branch, shed its skin, and form a hard green chrysalis to begin its amazing transformation. Inside the chrysalis, it will grow wings and emerge as a beautiful monarch butterfly that will fly high in the air to visit the sweet summer {fl:owers:Plural of flower.} in our garden near the wooden {fe:nce:A barrier enclosing an area.} behind our green {la:wn:An area of short-cut grass.}.",
  "The clever young {det:ective:A person whose job is to investigate crimes.} uses a pocket {fl:ashlight:A small portable electric lamp.} to search for {cl:ues:Pieces of evidence or information used in the detection of a crime or solving a mystery.} in the dark and dusty corners of the old abandoned warehouse. He notices a set of fresh muddy footprints leading toward a locked wooden door at the back of the building. He uses a small magnifying glass to examine the dirt on the floor and finds a small piece of blue fabric torn from a jacket. He writes down all these important clues in his leather notebook, determined to solve the mysterious disappearance before the morning sun rises and the police officers arrive to help him with the investigation at the crime scene in the quiet {to:wn:An urban area smaller than a city.} near our primary {sc:hool:An institution for educating children.}",
  "We use a powerful {el:ectric:Powered by electricity.} {va:cuum:An electrical appliance that cleans floors.} cleaner to clean the thick carpet in our living room and remove any dust, dirt, and pet dander. The vacuum has a long flexible hose and different brush attachments that allow us to clean hard-to-reach corners under the sofa and bookshelf. We work quickly and efficiently, listening to our favorite upbeat music to make the chore fun and engaging. Once we finish cleaning, we empty the dust container into the trash can and spray a sweet lemon air freshener to make our home smell clean, fresh, and welcoming for our weekend {vi:sitors:Plural of visitor.} who will arrive at five {cl:ock:Used in telling time.} in the evening for a delicious dinner {pa:rty:A social gathering.}.",
  "The young history {st:udent:A person who is studying.} uses a digital tablet to search for interesting facts about the construction of the {an:cient:Belonging to the distant past.} Great Wall of China for her class presentation. She reads articles, watches educational videos, and looks at detailed maps showing the path of the massive stone wall across the mountains. She takes notes in her notebook and prepares a {co:lorful:Full of color.} slideshow with pictures of the watchtowers and the beautiful landscape. She is very excited to share her knowledge with her teacher and her classmates during their social studies lesson on Wednesday morning in the school {li:brary:A building containing collections of books.} near the main entrance of our modern {sc:hool:An institution for educating children.} building.",
  "We use a clean electric {to:aster:An electrical appliance for toasting bread.} to toast two thick slices of homemade whole wheat bread for our healthy breakfast. When the toast is ready, it pops up automatically with a soft sound, smelling warm, fresh, and absolutely {de:licious:Highly pleasant to the taste.}. We use a butter knife to spread sweet orange marmalade and creamy almond butter on the warm slices. We enjoy our breakfast with a cup of hot chamomile tea and a fresh green apple, which gives us plenty of energy to start our daily activities at school and play with our friends during our recess time {in:Expressing the situation of something.} the sunny school yard {wi:th:Accompanied by.} our kind and caring {te:achers:Plural of teacher.}.",
  "We wear a pair of high {ru:bber:A tough, elastic substance.} {ra:inboots:Plural of rainboot; boots worn to keep feet dry.} to keep our feet completely dry when we walk to the neighborhood park on a very rainy autumn afternoon. The sky is dark and gray, and the rain falls in heavy drops, creating large puddles of water on the paved paths. We carry a large blue {um:brella:A device for protection from rain or sun.} to shield our clothes and our backpacks from the wet weather. We enjoy walking in the rain, watching the ripples in the puddles and listening to the soft sound of water splashing against our boots as we walk carefully along the sidewalk near our {ho:use:A building for human habitation.} in our quiet suburban {to:wn:An urban area smaller than a city.}.",
  "A {cl:ever:Quick to learn and understand.} little {ha:mster:A small rodent.} runs incredibly fast on its metal exercise wheel inside its wire cage in our warm living room. It wiggles its tiny pink nose, blinks its shiny black eyes, and stuffs its cheeks with sweet sunflower seeds to carry back to its {co:zy:Giving a feeling of comfort, warmth, and relaxation.} nest. It is a very clean, quiet, and playful pet that brings a lot of happiness and entertainment to our family. We enjoy watching its funny antics, feeding it fresh vegetables, and cleaning its cage every Saturday morning to keep it healthy, happy, and active in our cozy {ho:me:The place where one lives permanently.} near the quiet suburban {st:reet:A public road.}.",
  "We visit the local maritime {mu:seum:A building in which objects of interest are stored.} to see a {hi:storical:Connected with history.} exhibition about ancient wooden sailing ships that crossed the Atlantic Ocean hundreds of years ago. We see scale models of the massive ships, antique brass compasses used for navigation, and old hand-drawn maps used by early explorers. We learn how the brave sailors navigated by the stars, endured fierce storms, and managed their food and water during their long journeys across the sea. It is a fascinating visit that teaches us a lot about history and geography on a cold winter afternoon with our dear {pa:rents:Plural of parent.} in the city {ce:nter:The middle point of an area.} near the old harbor {do:cks:Plural of dock.}.",
  "The young girl uses a {wo:oden:Made of wood.} {ea:sel:A frame for holding an artist's work.} to hold her large canvas while she paints a beautiful landscape of a snow-capped mountain. She mixes bright colors on her wooden palette and uses different brushes to paint the blue sky, the white peaks, and the green pine trees. She spends many hours refining the details, trying to capture the warm light of the setting sun reflecting off the snow. She is very passionate about art and hopes to showcase her paintings in a local gallery someday when she grows up and becomes a professional {ar:tist:A person who paints, writes, or plays music.} in our quiet suburban {to:wn:An urban area smaller than a city.} near the scenic {la:ke:A body of water.}.",
  "A small gray {sq:uirrel:A small rodent with a bushy tail.} gathers ripe acorns from the ground and carries them in its mouth to store inside a hollow tree trunk. It works tirelessly all day long to prepare for the cold winter when food is scarce in the forest. It has a {fl:uffy:Covered with soft light hairs or feathers.} tail that helps it keep its balance when it jumps from branch to branch on the tall oak trees. We love to watch it play in our backyard and climb up the {wo:oden:Made of wood.} fence near our garden during the warm autumn days before the first winter snow covers the ground with a thick white blanket of frozen water {va:por:Gaseous state of a substance.} under the cold {sk:y:The region of the atmosphere.}.",
  "The young boy uses a small {me:tal:A solid material that is typically hard.} {tr:owel:A small handheld tool with a flat blade.} to dig a deep hole in the rich dark soil of our backyard vegetable garden. He plants a tiny green seed of a red tomato plant and covers it gently with the moist earth. He uses a {pl:astic:A synthetic material that can be molded.} watering can to water the soil every afternoon so the seed can sprout and grow into a strong plant. He watches the garden daily, hoping it will grow tall and produce sweet tomatoes for our family salad during the warm summer days when the weather is sunny in our quiet country {to:wn:An urban area smaller than a city.} near the old historical {fa:rm:An area of land used for growing crops.} house.",
  "The professional auto {me:chanic:A person who repairs machinery.} uses a heavy {me:tal:A solid material that is typically hard.} wrench to loosen a {ru:sty:Covered with rust.} bolt on the engine of our family car in his garage. He checks the oil level, tests the car battery, and ensures all the rubber tires are filled with the correct amount of air to keep us safe on the road. He works very quickly and efficiently to repair the car so we can drive to the countryside for our weekend picnic. We thank him for his excellent service and pay him with a shiny {si:lver:A precious, shiny, whitish-grey metal.} bank card before we drive back to our happy home in our quiet suburban neighborhood near the primary {sc:hool:An institution for educating children.}.",
  "A little {ho:neybee:A bee that produces honey.} wiggles its wings and flies from one bright red flower to another in our {be:autiful:Pleasing to the senses.} backyard garden, collecting sweet nectar and yellow pollen to carry back to its busy hive. In the hive, the bees work together as a team to make delicious sweet honey that we love to eat with our warm toast. The honeybee is a very important insect that helps our garden flowers grow and thrive during the warm days of the sunny summer when the sky is clear and blue. We make sure to plant plenty of sweet flowers to support the busy bees in their daily {wo:rk:Activity involving physical effort.} and protect them from harmful chemicals that can hurt our local {en:vironment:The natural world.} near our cozy {ho:me:The place where one lives permanently.}.",
  "We use a clean glass pitcher to make a cool and {re:freshing:Making one feel less tired or hot.} drink of sweet lemonade on a hot summer afternoon in our cozy kitchen. We squeeze the fresh juice of four yellow lemons, add three cups of cold water, and mix in a cup of sweet sugar. We add some ice cubes to make the beverage freezing cold and {de:licious:Highly pleasant to the taste.} to drink while we sit under the shade of our giant oak tree in the backyard garden. It is the perfect way to cool down and enjoy a lazy weekend with our happy family at our cozy home in the quiet suburb near the busy city {ce:nter:The middle point of an area.} on a warm {sa:turday:The day of the week after Friday.} after our weekly {sh:opping:The action of buying goods from shops.} trip.",
  "The young girl uses a pair of {sh:iny:Reflecting light, typically brightly.} metal ice skates to glide smoothly across the frozen surface of the public outdoor rink in the city park. She wears a thick woolen scarf around her neck and a warm pink hat to protect her ears from the {fr:eezing:Extremely cold.} winter wind. She practices her turns and spins carefully, laughing when she loses her balance and falls onto the soft snow near the wooden fence. She enjoys the winter sport very much and wants to stay until the lights turn on at six o'clock in the evening when the park gets quiet and the stars begin to shine brightly in the dark winter {sk:y:The region of the atmosphere.} above our peaceful suburban {to:wn:An urban area smaller than a city.} near the snowy {hi:lls:Plural of hill.}.",
  "A beautiful green {hu:mmingbird:A small bird with rapidly vibrating wings.} hovers near the {co:lorful:Full of color.} trumpet vine in our garden, wiggling its tiny wings so fast that they look like a blur. It dips its long, {sl:ender:Thin and graceful.} beak into the sweet flowers to drink the sugary nectar that gives it the energy to fly all day long. It is the smallest bird in our state and has an iridescent throat that shines like a jewel in the bright morning sunlight. We feel very lucky to watch this amazing little creature from our kitchen window during our breakfast time every single morning in the warm season of spring when the weather is perfect and the garden feels full of life and color near our quiet wooden {ho:use:A building for human habitation.} in our peaceful country {si:de:The land of a rural area.}.",
  "The professional {ca:rpenter:A person who builds or repairs wooden structures.} uses a sharp chisel to carve a {be:autiful:Pleasing to the senses.} pattern on the edge of a new {wo:oden:Made of wood.} dining table. He works in his noisy workshop filled with the pleasant smell of cut pine and oak sawdust. He uses a sheet of sandpaper to make the wood surface perfectly smooth and applies a coat of shiny varnish to protect the table from scratches and stains. He is very proud of his handiwork and hopes the table will last for many generations in a happy family house in our quiet country town near the scenic river where he has lived for many years with his loving wife and three young {ki:ds:Plural of kid; children.} who attend the local primary {sc:hool:An institution for educating children.}.",
  "We go to the local farmers {ma:rket:A public place where goods are bought and sold.} every Saturday morning to buy fresh {or:ganic:Produced without chemical fertilizers.} fruits, vegetables, and homemade baked goods from the local farmers. We fill our large canvas bags with sweet red strawberries, green spinach, yellow squash, and fresh farm eggs. We also buy a jar of sweet clover honey and a loaf of warm sourdough bread from a friendly baker who smiles at us. It is a wonderful way to support our community and get healthy food for our weekly meals at home with our dear parents and little sister who loves to help us cook {de:licious:Highly pleasant to the taste.} dinners in our kitchen on the weekend days when we have plenty of {sp:are:Not being used.} time to relax {to:gether:With each other.} as a family.",
  "The clever young girl uses a {di:gital:Relating to or using computer technology.} camera to take high-quality photographs of the {co:lorful:Full of color.} autumn leaves on the tall maple trees in the park. She captures the {be:autiful:Pleasing to the senses.} shades of red, orange, and yellow as the leaves fall gently onto the grass. She wants to print her best pictures and make a colorful collage for her school art project on Monday morning. Her teacher always praises her artistic eye and encourages her to continue exploring the world through her camera lens to discover new beauty in the natural world around her peaceful suburban home near the scenic lake where she loves to walk with her friendly dog every afternoon after she finishes her daily school {ho:mework:Schoolwork done at home.} on her wooden {de:sk:A piece of furniture.}.",
  "A proud mother bird sits {pa:tiently:In a way that shows patience.} on her nest of twigs and soft feathers, warming her four tiny blue eggs. The nest is {hi:dden:Kept out of sight.} safely among the thick green leaves of a tall pear tree in our backyard garden, protected from the cold wind and hungry cats. In a few days, the eggs will hatch, and four {hu:ngry:Feeling a need or desire for food.} little chicks will emerge, chirping loudly for food. The mother and father birds will fly back and forth all day to find small worms and insects to feed their growing family in the warm garden near our cozy wooden house where we live with our parents who love to watch the birds from our large kitchen window during our morning breakfast {ti:me:The progress of existence.} on sunny summer {da:ys:Plural of day.}.",
  "We wear our {pr:otective:Designed to protect.} life jackets when we step onto the wooden deck of the small {sa:iling:Traveling in a boat with sails.} boat at the harbor. The captain checks the wind direction and unfurls the large white sail to catch the steady breeze across the wide lake. The boat glides {sm:oothly:With an even, uninterrupted motion.} over the gentle waves, leaving a trail of white foam in the deep blue water behind us. We enjoy the fresh air and watch the white seagulls fly overhead, searching for small fish near the water surface on this beautiful summer day with our happy family and best friends from school who love to go on exciting outdoor adventures with us during our long summer holidays when the weather is warm and the sky is {cl:ear:Free of clouds.} near our lakeside cabin {sh:ore:The land along the edge of a body of water.}.",
  "The {sk:illed:Having or showing the knowledge, ability, or training to perform a task well.} artist uses a box of {co:lorful:Full of color.} soft pastels to draw a {re:alistic:Representing things in a way that is accurate and true to life.} portrait of a furry white rabbit on a sheet of textured gray paper. He blends the colors gently with his fingers to create the soft texture of the rabbit's fur and uses a white pastel to add a bright shine to its round black eyes. He is very detailed in his work and spends many hours in his quiet art studio to make the portrait look alive. He hopes to win first prize in the annual community art competition held at the local library next month in our quiet suburban town near the scenic river where many artists live and create their {be:autiful:Pleasing to the senses.} works of art to share with the whole world on their digital websites or social media {pa:ges:Plural of page.}.",
  "A small gray field mouse builds a warm nest of shredded paper and dry grass inside a {ca:rdboard:A stiff material made from paper pulp.} box in the corner of our dry basement. It crawls out {qu:ietly:Making little or no noise.} at night to look for tiny food crumbs on the kitchen floor after everyone has gone to sleep. It has to be very careful to avoid our big black cat, who loves to hunt mice in the dark. The little mouse is quick and silent, wiggling its long whiskers as it searches for a tasty bite of yellow cheese or sweet bread to carry back to its cozy nest before the morning sun rises in the east and our family wakes up to start a busy new day of school lessons and household chores in our {co:mfortable:Providing physical ease.} family {ho:use:A building for human habitation.} near the quiet suburban {st:reet:A public road.}.",
  "The professional {ph:otographer:A person who takes photographs.} carries a heavy tripod and two digital cameras to the top of the high hill to photograph the {be:autiful:Pleasing to the senses.} sunset over the city. He waits patiently for the sun to sink below the horizon, painting the sky in {br:eathtaking:Extremely impressive or beautiful.} shades of pink, purple, and orange. He adjusts the camera settings to capture the warm light reflecting off the glass windows of the tall city buildings in the distance. It is a {sp:ectacular:Visually striking.} sight that he will share on his popular travel blog for people to enjoy all over the world on their computer screens at home while they relax in their favorite chairs after a long day of hard work or school study in their quiet rooms near the busy city center in our beautiful {st:ate:A nation or territory.}.",
  "We use a {co:lorful:Full of color.} {pl:astic:A synthetic material that can be molded.} watering can to water our indoor potted plants every Sunday morning to keep them {he:althy:Good for one's health.} and green. We have a small cactus on the desk, a leafy fern on the bookshelf, and a blooming pink orchid on the windowsill that gets plenty of bright morning sunlight. We make sure not to give them too much water so their roots do not rot in the dark soil. Taking care of our plants is a relaxing hobby that makes our bedroom feel lively and fresh during the cold winter months when we stay inside our warm and comfortable family house, listening to the wind and watching the snow fall slowly outside our window on the frozen ground near the public {pa:rk:A large public garden.} down our quiet suburban {st:reet:A public road.}.",
  "The clever young boy uses a plastic {co:mpass:An instrument for finding direction.} and a paper map to find his way during the weekend scout {hi:king:The activity of walking long distances in the countryside.} trip in the state park. He leads his team of scouts along the narrow dirt path, checking the compass needle to ensure they are walking in the correct northern direction toward the {ca:mpsite:A place for camping.} They walk past tall pine trees, cross a small wooden bridge over a bubbling stream, and climb a steep rocky hill before they reach the campsite where they will pitch their green tents and build a warm {ca:mpfire:An outdoor fire.} to cook their dinner under the bright stars in the dark sky, sharing funny stories and singing campfire songs together with their scout leader with great enthusiasm and joy during their winter outdoor adventure in the peaceful mountain forest {va:lley:A low area of land between hills.}.",
  "The busy {li:brarian:A person who works in a library.} works at the front desk of our quiet neighborhood library, helping people find books and checking out their selections using a {di:gital:Relating to or using computer technology.} barcode scanner. She organizes the returned books on the metal carts and returns them to their correct places on the tall wooden bookshelves so they are easy to find. She also coordinates the weekly story hour for the local toddlers, reading funny stories and singing songs with them in the {co:lorful:Full of color.} children's section of the library. She loves her job because she gets to share her passion for reading with the whole community and meet many {fr:iendly:Kind and pleasant.} people every day, including the students who come to study after school {ho:urs:Plural of hour.} to prepare for their exams in the quiet reading room at the back of the library building near our house.",
  "We use a pair of protective plastic {go:ggles:Eyewear to protect the eyes.} and a long metal {sn:orkel:A tube for breathing underwater.} when we swim in the clear {wa:ter:A transparent liquid.} of the swimming pool during our summer holiday. The goggles allow us to see underwater clearly without the chlorine hurting our eyes, and the snorkel helps us breathe easily while we float on the surface of the blue water. We love to dive to the bottom of the pool to retrieve shiny red rings and practice our swimming strokes with our friends. It is a very fun and active way to spend our summer days when the weather is extremely hot outside in our town near the public park pool where we can splash around and stay cool {wi:th:Accompanied by.} our family and best school friends who love water games and outdoor sports during their summer {va:cation:A period of leisure.}",
  "The professional {ga:rdener:A person who tends a garden.} uses a pair of sharp pruning {she:ars:A cutting tool with two blades.} to trim the dead branches of the sweet-smelling rose bushes in the public botanical garden. He works hard in the early morning to make sure the flowers are healthy, beautifully arranged, and free of harmful insects. He also plants new colorful flowerbeds of purple lavender and yellow marigolds to attract busy bees and beautiful butterflies that help pollinate the plants. He enjoys working outdoors in nature and takes great pride in maintaining a peaceful and beautiful green space for the city residents to visit and enjoy with their family on sunny days in summer when the weather is warm and the air is filled {wi:th:Accompanied by.} the sweet fragrance of blooming flowers of all kinds {in:Located inside.} the beautiful park {ga:rden:An area for growing plants.}",
  "The young {bo:y:A male child.} uses a small metal {tro:wel:A small hand tool for digging.} to dig a shallow {tre:nch:A long, narrow ditch.} in the rich black soil of our vegetable garden. He plants six small organic seeds of a green bean plant and covers them gently with the dark earth. He uses a plastic watering can to water the soil every afternoon so the seeds can germinate and grow into strong green vines that climb up the wooden trellis. He is very excited to watch his plants grow and looks forward to picking fresh green beans for our family dinner during the late summer days when the weather is warm in our quiet town near the countryside where we can see fields of green crops and farm animals {gr:azing:Eating grass in a field.} peacefully under the bright sun near the old red barn house {wi:th:Used to indicate accompaniment.} our dear grandparents.",
  "We visit the local {sci:ence:The study of the natural world.} {mu:seum:A building for displaying objects.} to see an exciting interactive exhibition about electricity, space exploration, and robotic technology. We can touch a plasma globe to see purple light follow our fingers, look at a real model of the Apollo lunar lander, and watch a smart robotic arm build a small toy car. We learn how scientists use technology to solve complex global problems and explore distant planets in our solar system. It is a very inspiring visit that makes us want to study science and engineering when we grow up and attend university in the future years of our young lives, hoping to make the world a better place {wi:th:Accompanied by.} our creative ideas and scientific discoveries that can help protect our environment {an:d:Connects words or ideas.} preserve our natural resources on this beautiful {ea:rth:Our home planet.}",
  "The professional {ch:ef:A skilled cook.} uses a sharp stainless steel {kn:ife:A tool for cutting.} to chop fresh vegetables on a heavy wooden cutting board in his busy restaurant kitchen. He chops red onions, orange carrots, green celery, and ripe red tomatoes to make a delicious and healthy vegetable soup for the evening guests. He heats a large metal pot on the stove, adds a splash of golden olive oil, and sautés the vegetables until they are soft and fragrant. He adds fresh herbs, water, and a pinch of salt to create a perfect soup that is warm, nutritious, and loved by everyone in our local town near the scenic river where many tourists come to dine and enjoy the beautiful views of the valley {wi:th:Accompanied by.} their family and friends during their weekend trips to the country {si:de:A rural region.} in the beautiful season of {au:tumn:The season of falling leaves.}",
  "The professional astrophysicist uses a powerful telescope to observe a distant galaxy cluster in the deep night sky. He analyzes the light spectrum of the stars, measures the distance of the planets, and searches for any signs of water or atmosphere that could support life in other solar systems. He records his calculations on his computer and writes detailed reports to share with other scientists around the world. He is very passionate about astronomy and hopes to make a major astronomical discovery that will help us understand the origins of the universe and the evolution of cosmic structures {in:Expressing the situation of something.} the future years of {ou:r:Belonging to us.} exploration of space with new digital technologies {an:d:Used to connect words.} powerful advanced space telescopes placed {on:Physically in contact with a surface.} orbit around the {ea:rth:The planet on which we live.}.",
  "We wear our protective heavy ski {ge:ar:Equipment for an activity.} and helmets when we ride the chairlift to the top of the steep snowy mountain. The air is freezing and windy, and the mountains are covered in a thick blanket of pristine white snow that shines in the winter sun. We glide down the slopes carefully, practicing our turns and controlled stops on the fresh powder, laughing when we occasionally lose our balance and slide into the soft snow near the pine trees. We enjoy the thrilling winter sport very much and spend the whole day skiing with our classmates and our experienced instructor who teaches us how to navigate the steep terrain {sa:fely:Without danger.} and avoid any hidden obstacles or icy patches on our {wa:y:A route or path.} down to the cozy ski lodge where we can relax and drink hot {te:a:A hot beverage.} before we go {ho:me:One's place of residence.}",
  "The expert marine {bi:ologist:A scientist who studies living organisms.} uses a digital underwater camera to photograph the diverse sea creatures living on the coral reefs of the tropical island. She swims carefully near the seafloor, observing colorful parrotfish, slow-moving sea turtles, and tiny seahorses hiding in the seaweed. She is studying the impact of climate change and ocean acidification on the marine ecosystem, taking water samples to analyze the salinity and temperature levels in her research lab. She wants to raise public awareness about the importance of protecting our oceans and preserving the delicate coral reefs for future generations of sea life {th:at:Referring to something previously mentioned.} are threatened by pollution and overfishing in the deep {bl:ue:The color of the sky or sea.} water of the vast {oc:ean:A large body of saltwater.} near our coast {li:ne:A boundary where land meets sea.}",
  "A majestic bald {ea:gle:A large bird of prey.} circles high in the sky above the deep river valley, utilizing the warm air currents to glide effortlessly without flapping its broad wings. It has powerful talons, a sharp yellow beak, and incredible eyesight that can spot a small fish swimming near the water surface from a great distance. It dives down with amazing speed, splashes into the cold river water, and catches a silver salmon to carry back to its massive nest on the branch of a tall pine tree on the steep cliff. We watch this spectacular bird of prey through our binoculars, amazed by its grace, strength, and wild beauty {th:at:Referring to something previously mentioned.} represents the untamed nature of our state's beautiful mountain wilderness {ar:ound:Surrounding something.} the quiet lakeside cabins where we spend our summer {va:cations:Periods of leisure or travel.} with our loving {fa:mily:A group of related people.}",
  "We visit the local {pl:anetarium:A theatre for showing stars and planets.} to see a spectacular 3D presentation about the formation of our solar system, the life cycle of stars, and the search for black holes in distant galaxies. We sit in comfortable reclining chairs under a giant domed screen that projects realistic images of the night sky, constellations, and the colorful gas clouds of nebulae. We learn how gravity pulls dust and gas together to form new planets and how astronomers use radio telescopes to listen to signals from deep space. It is a mind-blowing experience that sparks our curiosity about the universe and makes us want to learn more about astrophysics and space exploration in {ou:r:Possessive pronoun for 'we'.} science classes at school when our new semester {st:arts:Begins to happen.} in the autumn month of {se:ptember:The ninth month.} with our best {fr:iends:People one knows and likes.}",
  "We wear a pair of comfortable running {sh:oes:Footwear for running.} and lightweight activewear when we participate in the annual community charity run in the city park. The weather is perfect, with a cool morning breeze and bright sunshine that warms the green trees and paved pathways of the park. We run alongside hundreds of other participants of all ages, cheering each other on and pushing ourselves to complete the five-kilometer course to raise money for our local children's hospital. It is a wonderful feeling to cross the finish line, receive a shiny participation medal, and celebrate our athletic achievement with our happy family and friends who came to support {us:Pronoun for the speakers and others.} and enjoy the lively community event under the clear blue {sk:y:The atmosphere above Earth.} of our beautiful hometown near the scenic {ri:ver:A natural flowing watercourse.} valley {on:In contact with a surface.} Sunday morning.",
  "The professional landscape {ar:chitect:A person who designs outdoor spaces.} sits at his computer, using advanced 3D design software to plan a new public park for our growing suburban community. He designs a layout that includes paved walking paths, a wooden bridge over a scenic stream, a children's playground with safe rubber flooring, and beautiful flowerbeds planted with native lavender and sunflowers. He also plans the placement of solar-powered streetlights and recycling bins to make the park eco-friendly, sustainable, and accessible to everyone. He collaborates with the city council to ensure the design meets the community's needs and budget, creating a beautiful green space where people can relax and play {wi:th:Accompanied by.} their children during their weekend leisure hours in the warm season of {su:mmer:The warmest season.} when the trees are full of green leaves {an:d:Connects words or ideas.} the weather is perfect for outdoor {ac:tivities:Things people do for fun.}",
  "We use a clean electric {ju:icer:A device for extracting juice.} to extract fresh and {nu:tritious:Full of nourishment.} juice from four ripe organic oranges, two crisp green apples, and a small piece of spicy ginger for our morning beverage. The juicer separates the sweet liquid from the fibrous pulp quickly, filling the glass pitcher with a bright orange drink that is packed with healthy vitamins and minerals to boost our immune system. We pour the refreshing juice into tall glass cups, add a few ice cubes, and enjoy it with our toasted whole wheat bread and farm-fresh eggs in our sunny kitchen. It is the best and most delicious way to start our busy day of school lessons and outdoor sports with our active classmates {at:Indicates location or time.} our school yard during our recess break at half past ten {in:Inside or within.} the morning before our math exam {st:arts:Begins to happen.} on Tuesday afternoon.",
  "We use a soft cotton {to:wel:A piece of absorbent fabric.} and a gentle foaming {cle:anser:A substance that cleans.} to wash our face, remove any dirt, oil, and sweat after our intensive afternoon soccer practice with the school team. It is essential to maintain a daily skincare routine to keep our skin clean, hydrated, and healthy, preventing any irritation or blemishes caused by sweat and dust from the sports field. We rinse our face thoroughly with lukewarm water, apply a lightweight moisturizing lotion with a pleasant lavender scent, and dry ourselves with a clean towel in our bathroom. Taking care of our body is an important part of our overall health and wellness, helping us feel fresh, confident, and ready for a peaceful night's {sl:eep:A state of natural rest.} in our cozy bed after we finish our daily {ho:mework:School tasks done at home.} and read our favorite book before {ni:ght:The time of darkness.} falls.",
  "The busy regional post {of:fice:A place where business is done.} is a hub of {ac:tivity:The state of being active.} on Monday morning, with postal workers sorting thousands of letters, magazines, and cardboard packages for delivery to homes and businesses across our county. The front service counter is staffed by three friendly clerks who help customers purchase postage stamps, mail international packages, and renew their passport applications. They use digital scales and barcode scanners to process each shipment quickly and securely, ensuring that every item is tracked and delivered to the correct address on time. We mail a special hand-painted greeting card and a small birthday gift to our dear aunt who lives in a distant state, thanking the clerk for her helpful and polite {se:rvice:Help or assistance.} before we walk back to our primary school building near the local {li:brary:A place with books to borrow.} to attend our afternoon English literature {cl:ass:A group of students taught together.} with our classmates.",
  "We use a sharp {po:cketknife:A small folding knife.} to carefully {wh:ittle:To carve wood with a knife.} a small piece of soft pine {wo:od:The fibrous material from trees.} into the shape of a miniature sailing boat during our weekend outdoor camping trip with our scout troop. Our experienced scout master shows us how to hold the wood safely and cut away from our body to avoid any painful cuts or accidents while using the sharp blade. We work patiently under the shade of a tall pine tree, carving the hull, the mast, and the tiny details of the cabin until our wooden boat is perfectly shaped and ready for its first test voyage. We launch our handmade boat in the calm water of a small bubbling stream near our campsite, watching it float gracefully over the gentle ripples under the warm afternoon {su:nlight:Natural light from the sun.} that filters through the thick green forest canopy {ar:ound:Surrounding something.} our tents.",
  "The dedicated family {do:ctor:A medical professional.} uses a digital blood pressure {mo:nitor:A device for observing something.} and a {ste:thoscope:A medical instrument for listening.} to perform a comprehensive physical examination on our grandfather during his regular checkup at the medical center. She listens to his heartbeat, checks his lung capacity, and reviews his daily exercise routine and diet to ensure his cardiovascular system is functioning healthy and strong. She is very patient and kind, explaining the results of his blood tests in simple terms and adjusting his daily vitamins to help him maintain his energy levels and active lifestyle. Our grandfather thanks her for her excellent medical care and expertise, which helps him stay in great physical health so he can continue playing tennis with us on sunny {sa:turday:The sixth day of the week.} mornings in the public park near our happy suburban {ho:me:One's place of residence.} and school.",
  "The professional pastry {ch:ef:A skilled cook.} in the grand hotel kitchen uses a copper {po:t:A deep, round container.} to boil sweet heavy cream and dark Swiss chocolate to make a rich ganache for a three-tiered chocolate mousse cake. He whips the egg whites and sugar in a large metal bowl to create a glossy meringue that he gently folds into the chocolate batter before baking the layers to perfection. He assembles the cake with layers of fresh raspberries and smooth chocolate cream, decorating the top with elegant chocolate curls and a dust of cocoa powder. The finished dessert is a stunning masterpiece that will be served at the central banquet hall during the high-society anniversary celebration this weekend, impressing all the guests with its exquisite design and rich, heavenly {ta:ste:The flavor of food.} that melts in their mouth {sl:owly:At a gradual pace.} during the festive evening {di:nner:The main evening meal.} event.",
  "We explore the giant tropical {gre:enhouse:A glass building for growing plants.} in the city's botanical {ga:rden:An area for growing plants.}, amazed by the lush vegetation, colorful exotic orchids, and towering palm trees that grow under the warm and humid glass dome. The greenhouse simulates a tropical rainforest environment, allowing plants from South America, Africa, and Asia to grow and bloom throughout the cold winter months. We walk along the winding stone paths, listening to the soothing sound of a small artificial waterfall and watching colorful butterflies flutter around the sweet-smelling flowers. We take detailed notes and capture photographs of the unique plant leaf structures for our science presentation about biodiversity and conservation, which we will share with our teacher and classmates in our biology {cl:ass:A group of students taught together.} next Thursday morning at nine {o'clock:Used to specify the hour.} in our primary {sc:hool:A place for education.}",
  "The yellow school {bu:s:A large motor vehicle.} is equipped with a modern GPS {na:vigation:The process of planning a route.} system and flashing safety {li:ghts:Devices producing illumination.} to transport students safely from their suburban neighborhoods to the elementary school. Every morning at exactly a quarter past seven, the friendly bus driver pulls up to our street corner, greets us with a warm smile, and reminds us to buckle our seatbelts before he starts driving. We find our seat next to our classmates and talk about our science projects, our favorite video games, and the exciting field trip we have planned for the weekend. The bus rides smoothly through the streets, navigating the morning traffic carefully to ensure we arrive at the school yard on time for our first lesson of the day, which begins with a cheerful greeting from our teacher in our clean {cl:assroom:A room for teaching students.} near the big writing {bo:ard:A flat panel for writing.}",
  "A beautiful white {sw:an:A large water bird.} swims gracefully near the grassy {ba:nk:The land alongside a river or lake.} of the quiet lake in the central city park, wiggling its long neck and dipping its yellow beak underwater to feed on aquatic plants. It has soft white feathers, a powerful black mask around its eyes, and a proud posture that attracts many visitors who stop to photograph the elegant bird from the wooden walking path. A mother and her little child sit on a bench near the water, throwing small pieces of healthy grain for the swan and its five fluffy gray cygnets that swim closely behind their mother. The swan family enjoys the quiet afternoon in the park, peaceful and safe from any disturbances under the shade of a large weeping willow tree whose branches touch the calm surface of the blue {wa:ter:A transparent liquid.} of the scenic public {la:ke:A large body of water.} in our peaceful suburban {to:wn:A populated area smaller than a city.}",
  "The experienced structural {en:gineer:A person who designs structures.} uses a digital {ta:blet:A flat portable computer.} to review the structural load {cal:culations:Mathematical determinations.} of the new concrete pillars being installed for the high-speed railway bridge across our wide valley. He checks the reinforcement steel bars and the quality of the concrete mix carefully to ensure that the bridge can withstand the heavy weight and high vibrations of the modern trains that will travel at high speeds. He coordinates with the construction manager and the site supervisors to ensure that every safety standard is met and the project is completed before the winter weather begins. The new railway bridge will connect our quiet agricultural town to the capital city, reducing travel times and boosting our local economy by facilitating the transport of goods and passengers across our beautiful {st:ate:A political division of a country.} in a fast and eco-friendly {wa:y:A method or route.} of transit.",
  "The skilled theater costume {de:signer:A person who plans the look of something.} uses a modern sewing {ma:chine:A device with moving parts.} to sew an intricate historical {go:wn:A long elegant dress.} of blue velvet and silver lace for the lead actress in the upcoming Shakespearean play. She works in her busy workshop, surrounded by rolls of colorful fabrics, spools of shiny thread, and sketches of costumes from different historical eras. She measures the actress carefully, cuts the fabric with sharp dressmaker shears, and fits the bodice to ensure maximum comfort and mobility for the actress on the stage. She adds three rows of small hand-sewn pearl buttons on the cuffs and an elegant matching cape that will flow gracefully behind the actress when she performs her dramatic soliloquies under the bright spotlights of the main auditorium during the opening night {sh:ow:A public performance.} in the grand community {th:eater:A place for performances.}",
  "A tiny green {ca:terpillar:The larva of a butterfly or moth.} crawls slowly along the woody {st:em:The main body of a plant.} of a blooming rose bush in our backyard garden, wiggling its segmented body as it searches for a fresh green leaf to eat. It eats tirelessly all day long, chewing a neat round hole in a leaf to fill its hungry belly and store energy for its upcoming transformation. In a few days, it will attach itself to a sturdy branch, shed its skin, and spin a hard protective cocoon around its body where it will rest for two weeks. When it finally wakes up, it will emerge as a beautiful monarch butterfly with broad orange and black wings, flying high in the air to pollinate the sweet flowers in our garden under the warm summer {su:nlight:Natural light from the sun.} that warms our green {la:wn:An area of mown grass.} near the wooden {fe:nce:A barrier made of posts and wire.}",
  "The clever young {de:tective:A person who investigates crimes.} uses a pocket {fla:shlight:A portable light.} to search for {cl:ues:Pieces of evidence.} on the dusty wooden floor of the old abandoned cabin in the middle of the dark pine forest. He discovers a small silver key hidden under a loose floorboard near the stone fireplace, which might open the locked metal chest he found in the corner of the room. He uses a small magnifying glass to examine the key's unique pattern and the dust around it, writing down all his observations in a small leather-bound notebook. He is determined to solve the mysterious disappearance before the morning sun rises and the local police officers arrive to help him with the search in the quiet woods around the lonely wooden cabin near our peaceful country {to:wn:A populated area smaller than a city.} school {cl:ub:A group joined for an activity.} building.",
  "We use a powerful electric {va:cuum:A cleaning machine.} {cle:aner:A substance or device that cleans.} to thoroughly {cl:ean:To remove dirt from.} the thick woolen carpet in our living room and remove any accumulated dust, dirt, and pet hair after our busy week. The vacuum has a long flexible hose and various specialized brush attachments that allow us to clean hard-to-reach areas under the heavy sofa, the bookshelves, and the side tables. We work quickly and efficiently, listening to our favorite upbeat music on the radio to make the household chore fun, enjoyable, and engaging for our family. Once we finish vacuuming, we empty the dust container into the kitchen trash can and spray a sweet lavender air freshener to make our home smell fresh, clean, and welcoming for our weekend guests who will arrive at six o'clock in the evening for a delicious dinner party at our house in our quiet suburban {to:wn:A populated area smaller than a city.} near the public {pa:rk:A public green space.}",
  "The {yo:ung:Not old.} history student uses a digital tablet to search for interesting historical {fa:cts:Pieces of information.} about the construction of the ancient Great Wall of China for her upcoming class presentation. She reads articles, watches educational documentaries, and looks at detailed maps showing the path of the massive stone wall across the mountains of northern China. She takes notes in her notebook and prepares a colorful slideshow with pictures of the high watchtowers and the beautiful landscape to share with her classmates during their social studies lesson on Wednesday morning. She is very proud of her research and hopes to get an excellent grade from her teacher on her project next week in the school library where she spends most of her spare study hours after her daily lessons {at:In or at a position.} our modern elementary {sc:hool:An institution for educating children.} in our quiet country {si:de:The land of a rural area.}.",
  "We use a {cl:ean:Free from dirt or pollution.} electric toaster to toast two thick slices of homemade whole wheat bread for our {he:althy:In good health.} breakfast in our cozy kitchen before school begins. When the toast is ready, it pops up automatically with a soft sound, smelling warm, fresh, and absolutely delicious. We use a butter knife to spread sweet orange marmalade and creamy almond butter on the warm slices, making a perfect sandwich that gives us plenty of energy for our morning activities. We enjoy our breakfast with a glass of cold milk and a fresh green apple, which keeps us strong, healthy, and focused on our studies during our math and science lessons in the classroom with our kind and caring teacher who always helps us learn new things {in:Expressing the situation of something.} our modern elementary {sc:hool:An institution for educating children.} building near our happy {ho:me:The place where one lives permanently.}.",
  "We wear a pair of high rubber rainboots to keep our feet completely {dr:y:Free from moisture.} when we walk to the neighborhood park on a very {ra:iny:Having a lot of rain.} autumn afternoon with our best friends from school. The sky is dark and gray, and the rain falls in heavy drops, creating large puddles of water on the paved pathways of the park. We carry a large blue umbrella to shield our clothes and our backpacks from the wet weather, walking carefully so we do not slip on the wet leaves on the sidewalk. We enjoy walking in the rain, watching the ripples in the puddles and listening to the soft sound of water splashing against our boots as we make our way back to our warm and cozy house in our quiet suburban town near the primary school yard {on:Physically in contact with a surface.} our daily {st:reet:A public road.} walk after the last {cl:ass:A group of students.} ends.",
  "A clever {li:ttle:Small in size.} hamster runs incredibly {fa:st:Moving or capable of moving at high speed.} on its metal exercise wheel inside its wire cage in our warm living room, keeping itself active and healthy during the day. It wiggles its tiny pink nose, blinks its shiny black eyes, and stuffs its cheeks with {sw:eet:Having the pleasant taste of sugar.} sunflower seeds and dry grains to carry back to its cozy nest under the shredded paper. It is a very clean, quiet, and playful pet that brings a lot of happiness and entertainment to our family, especially when it climbs the bars of its cage or digs in the clean cedar shavings. We enjoy watching its funny antics, feeding it fresh pieces of carrots, and cleaning its cage every Saturday morning to keep it healthy, happy, and active in our cozy home near the quiet suburban street in our peaceful {to:wn:An urban area smaller than a city.} near the public {pa:rk:A large public garden.}.",
  "We visit the {lo:cal:Relating to a particular area.} maritime museum to see a historical exhibition about ancient wooden sailing {sh:ips:Large boats for traveling on water.} that crossed the Atlantic Ocean hundreds of years ago during the Age of Discovery. We see detailed scale models of the massive ships, antique brass compasses used for navigation, and old hand-drawn maps used by early explorers to chart the unknown waters. We learn how the brave sailors navigated by the stars, endured fierce storms, and managed their food and water during their long journeys across the sea. It is a fascinating visit that teaches us a lot about history and geography on a cold winter afternoon with our parents in the city center near the old harbor docks where we can see the modern ships parked {in:Expressing the situation of something.} the deep water near the blue {se:a:The expanse of salt water.} under the cloudy winter {sk:y:The region of the atmosphere.}.",
  "The young girl uses a wooden easel to hold her large canvas while she {pa:ints:Applies color to a surface.} a beautiful landscape of a snow-capped mountain in her quiet art room. She mixes bright colors on her wooden palette and uses different brushes to paint the blue sky, the white peaks, and the green pine trees in the valley. She spends many hours refining the details, trying to capture the warm light of the setting sun reflecting off the snow to make her painting look realistic. She is very passionate about art and hopes to showcase her paintings in a local gallery someday when she grows up and becomes a professional artist in our quiet suburban town near the scenic lake where she loves to walk with her friendly dog and paint beautiful {pi:ctures:Plural of picture; paintings.} of nature during her spare weekend {ho:urs:Plural of hour.} under the bright {su:n:The star around which the earth orbits.} in the blue {sk:y:The region of the atmosphere.}.",
  "A {sm:all:Of a limited size.} gray squirrel gathers ripe acorns from the {gr:ound:The solid surface of the earth.} and carries them in its mouth to store inside a hollow tree trunk in the forest. It works tirelessly all day long to prepare for the cold winter when food is scarce and the ground is frozen. It has a fluffy tail that helps it keep its balance when it jumps from branch to branch on the tall oak trees in our backyard. We love to watch it play and climb up the wooden fence near our garden during the warm autumn days before the first winter snow covers the ground with a thick white blanket of frozen water vapor, making the forest look like a beautiful winter wonderland under the cold gray sky near our cozy country home {in:Expressing the situation of something.} the peaceful mountain {va:lley:A low area of land between hills.} near our primary {sc:hool:An institution for educating children.}.",
  "The young boy uses a small metal trowel to dig a deep hole in the rich dark soil of our backyard vegetable garden in the spring. He {pl:ants:Puts a seed or plant into the ground.} a tiny green {se:ed:A small hard part of a plant from which a new plant grows.} of a red tomato plant, covers it gently with the moist earth, and pats it down with his hands. He uses a plastic watering can to water the soil every afternoon so the seed can sprout and grow into a strong plant with yellow flowers. He watches the garden daily, hoping it will grow tall and produce sweet tomatoes for our family salad during the warm summer days when the weather is sunny and perfect for gardening in our quiet country town near the old historical farm house where our grandparents live and grow organic vegetables {fo:r:With the object or purpose of.} our family {to:Expressing motion in the direction of.} eat during our holiday {vi:sits:Plural of visit.}.",
  "The professional auto mechanic uses a heavy metal wrench to loosen a rusty bolt on the engine of our family {ca:r:A road vehicle, typically with four wheels.} in his garage. He checks the oil level, tests the car battery, and ensures all the rubber tires are filled with the correct amount of air to keep us {sa:fe:Protected from danger or harm.} on the road. He works very quickly and efficiently to repair the car so we can drive to the countryside for our weekend picnic. We thank him for his excellent service and pay him with a shiny silver bank card before we drive back to our happy home in our quiet suburban neighborhood near the primary school where we attend our daily classes and play with our best friends in the school yard during our recess time {on:Physically in contact with a surface.} sunny days in the warm season {of:Expressing the relationship between a part and a whole.} beautiful summer {an:d:Used to connect words.} spring.",
  "A little honeybee wiggles its wings and flies from one bright red flower to another in our beautiful backyard garden, collecting {sw:eet:Having the pleasant taste of sugar.} nectar and yellow pollen to carry back to its busy hive on the tall apple tree. In the hive, the bees work together as a team to make delicious sweet honey that we love to eat with our warm toast. The honeybee is a very important insect that helps our garden flowers grow and thrive during the warm days of the sunny summer when the sky is clear and blue. We make sure to plant plenty of sweet flowers to support the busy bees in their daily work and protect them from harmful chemicals that can hurt our local environment near our cozy home in the quiet suburb near our school {bu:ilding:A structure with a roof and walls.} where we learn about nature {an:d:Used to connect words.} science with our friendly {cl:assmates:Plural of classmate.} every single {da:y:The 24-hour period.}.",
  "We use a clean glass pitcher to make a {co:ol:Of a low temperature.} and refreshing drink of sweet lemonade on a hot summer afternoon in our cozy kitchen with our sister. We squeeze the fresh juice of four yellow lemons, add three cups of cold water, and mix in a cup of sweet sugar. We add some ice cubes to make the beverage freezing cold and delicious to drink while we sit under the shade of our giant oak tree in the backyard garden. It is the perfect way to cool down and enjoy a lazy weekend with our happy family at our cozy home in the quiet suburb near the busy city center on a warm Saturday after our weekly shopping trip where we buy fresh ingredients for our family dinners in our favorite local shops {ne:ar:At or to a short distance away.} the central public park {wi:th:Accompanied by.} our dear parents who always take care {of:Expressing the relationship between a part and a whole.} our healthy {di:et:The kinds of food that a person habitually eats.}.",
  "The young girl uses a pair of shiny metal ice {sk:ates:Devices for gliding on ice or a surface.} to glide smoothly across the frozen surface of the public outdoor rink in the city {pa:rk:A large public garden.} She wears a thick woolen scarf around her neck and a warm pink hat to protect her ears from the freezing winter wind. She practices her turns and spins carefully, laughing when she loses her balance and falls onto the soft snow near the wooden fence. She enjoys the winter sport very much and wants to stay until the lights turn on at six o'clock in the evening when the park gets quiet and the stars begin to shine brightly in the dark winter sky above our peaceful suburban town near the snowy hills where we love to sled and play with our classmates after our homework is completed on our wooden desks {at:In or at a position.} our warm home during our winter {sc:hool:An institution for educating children.} winter holidays {wi:th:Accompanied by.} our family.",
  "A beautiful green humming {bi:rd:A warm-blooded egg-laying vertebrate.} hovers near the colorful trumpet vine in our garden, wiggling its tiny wings so {fa:st:Moving or capable of moving at high speed.} that they look like a blur in the morning air. It dips its long, slender beak into the sweet flowers to drink the sugary nectar that gives it the energy to fly all day long. It is the smallest bird in our state and has an iridescent throat that shines like a jewel in the bright morning sunlight. We feel very lucky to watch this amazing little creature from our kitchen window during our breakfast time every single morning in the warm season of spring when the weather is perfect and the garden feels full of life and color near our quiet wooden house in our peaceful country side where we live with our family and our playful dog who loves to run around the green lawn under the shade {of:Expressing the relationship between a part and a whole.} our tall oak tree near the {ga:rden:A piece of ground for growing flowers.} wooden gate near the main {ro:ad:A wide way.}.",
  "The professional carpenter uses a sharp chisel to carve a beautiful pattern on the edge of a new wooden dining {ta:ble:A piece of furniture with a flat top.} in his busy workshop. He works in his noisy workshop filled with the pleasant smell of cut pine and oak sawdust, using a variety of hand tools to shape the wood. He uses a sheet of sandpaper to make the wood surface perfectly smooth and applies a coat of shiny varnish to protect the table from scratches and stains. He is very proud of his handiwork and hopes the table will last for many generations in a happy family house in our quiet country town near the scenic river where he has lived for many years with his loving wife and three young kids who attend the local primary school where they learn how to read, write, and play sports with their classmates {in:Expressing the situation of something.} the green playground near the main entrance {of:Expressing the relationship between a part and a whole.} the school building {on:Physically in contact with a surface.} sunny {da:ys:Plural of day.}.",
  "We go to the local farmers {ma:rket:A public place where goods are bought and sold.} every Saturday morning to buy fresh {or:ganic:Produced without chemical fertilizers, pesticides, or other artificial agents.} fruits, vegetables, and homemade baked goods from the local farmers who live near our town. We fill our large canvas bags with sweet red strawberries, green spinach, yellow squash, and fresh farm eggs that are {he:althy:In good physical or mental condition.} for our body. We also buy a jar of sweet clover honey and a loaf of warm sourdough bread from a friendly baker who always smiles at us and greets us with a warm hello. It is a wonderful way to support our {co:mmunity:A group of people living in the same place or having a particular characteristic in common.} and get healthy food for our weekly meals at home with our dear parents and little sister who loves to help us cook delicious dinners in our {ki:tchen:A room or area where food is prepared and cooked.} on the weekend days when we have plenty of spare time to relax together as a happy family in our cozy house in our quiet suburban neighborhood near the local primary school.",
  "The clever young girl uses a digital camera to {ta:ke:To perform an action.} high-quality photographs of the colorful autumn leaves on the tall maple trees in the {pa:rk:A large public garden.} near our house. She captures the beautiful shades of red, orange, and yellow as the leaves fall gently onto the grass, creating a colorful carpet on the ground. She wants to print her best pictures and make a colorful collage for her school art project on Monday morning in her art class. Her teacher always praises her artistic eye and encourages her to continue exploring the world through her camera lens to discover new beauty in the natural world around her peaceful suburban home near the scenic lake where she loves to walk with her friendly dog and take photos after she finishes her homework {on:Physically in contact with a surface.} her wooden desk in her quiet room {at:In or at a position.} five o'clock in the warm {af:ternoon:The time from noon to evening.}.",
  "A proud mother bird sits patiently on her nest of twigs and soft feathers, warming her four tiny blue {eg:gs:Oval or round bodies laid by female birds.} during the cool spring days in our garden. The nest is hidden safely among the thick green leaves of a tall pear tree in our backyard garden, protected from the cold wind and hungry cats. In a few days, the eggs will hatch, and four hungry little chicks will emerge, chirping loudly for food to fill their tiny bellies. The mother and father birds will fly back and forth all day to find small worms and insects to feed their growing family in the warm garden near our cozy wooden house where we live with our parents who love to watch the birds from our large kitchen window during our morning breakfast time on sunny summer days {wi:th:Accompanied by.} our family and friends who visit {us:Used by a speaker to refer to himself or herself.} during our school summer holidays {in:Expressing the situation of something.} the month of {ju:ly:The seventh month of the year.}.",
  "We wear our protective life jackets when we step onto the wooden deck of the small sailing {bo:at:A small vessel propelled by oars, sail, or engine.} at the harbor near the yacht club. The captain checks the wind direction and unfurls the large white sail to catch the steady breeze across the wide lake that lies between the mountains. The boat glides smoothly over the gentle waves, leaving a trail of white foam in the deep blue {wa:ter:A clear liquid, without color or taste.} behind us as we speed toward the other side. We enjoy the fresh air and watch the white seagulls fly overhead, searching for small fish near the water surface on this beautiful summer day with our happy family and best friends from school who love to go on exciting outdoor adventures with us during our long summer holidays when the weather is warm and the sky is clear, blue, and beautiful {wi:thout:Not accompanied by.} any dark clouds in the sky {ne:ar:At or to a short distance away.} our lakeside holiday cabin on the sandy {sh:ore:The land along the edge of a body of water.}.",
  "The skilled artist uses a box of colorful soft pastels to {dr:aw:To produce a picture or diagram.} a realistic portrait of a furry white rabbit on a sheet of textured gray paper in his studio. He blends the {co:lors:The property of an object that depends on the light it reflects.} gently with his fingers to create the soft texture of the rabbit's fur and uses a white pastel to add a bright shine to its round black eyes. He is very detailed in his work and spends many hours in his quiet art studio to make the portrait look alive and beautiful. He hopes to win first prize in the annual community art competition held at the local library next month in our quiet suburban town near the scenic river where many artists live and create their beautiful works of art to share with the whole world on their digital websites or social media pages that are visited by thousands of art lovers {ev:ery:Reflecting all members of a group.} day during their spare hours {at:In or at a position.} their home computers or mobile {sc:reens:Plural of screen; displays.}.",
  "A small gray field {mo:use:A small rodent.} builds a warm {ne:st:A structure built by a bird for laying eggs.} of shredded paper and dry grass inside a cardboard box in the corner of our dry basement under the stairs. It crawls out quietly at night to look for tiny food crumbs on the kitchen floor after everyone has gone to sleep and the house is quiet. It has to be very careful to avoid our big black cat, who loves to hunt mice in the dark and sits near the kitchen door. The little mouse is quick and silent, wiggling its long whiskers as it searches for a tasty bite of yellow cheese or sweet bread to carry back to its cozy nest before the morning sun rises in the east and our family wakes up to start a busy new day of school lessons and household chores in our comfortable family house near the quiet suburban street where we live {wi:th:Accompanied by.} our parents and our pet cat {th:at:Used to identify a specific thing.} sleeps on the sofa all day {lo:ng:Lasting a great distance or time.}.",
  "The professional photographer carries a heavy tripod and two digital cameras to the top of the high hill to photograph the beautiful {su:nset:The time in the evening when the sun disappears.} over the city center. He waits patiently for the {su:n:The star around which the earth orbits.} to sink below the horizon, painting the sky in breathtaking shades of pink, purple, and orange that reflect off the clouds. He adjusts the camera settings to capture the warm light reflecting off the glass windows of the tall city buildings in the distance where the streetlights are beginning to turn on. It is a spectacular sight that he will share on his popular travel blog for people to enjoy all over the world on their computer screens at home while they relax in their favorite chairs after a long day of hard work or school study in their quiet rooms near the busy city center in our beautiful state {th:at:Used to identify a specific thing.} is known for its beautiful landscapes {an:d:Used to connect words.} scenic views of the mountain {va:lleys:Plural of valley; low areas between hills.}.",
  "We use a colorful plastic watering can to water our indoor potted {pl:ants:Living organisms that absorb water.} every Sunday morning to keep them healthy, green, and beautiful in our bedroom. We have a small cactus on the desk, a leafy fern on the bookshelf, and a blooming pink orchid on the windowsill that gets plenty of bright morning sunlight. We make sure not to give them too much {wa:ter:A clear liquid, without color or taste.} so their roots do not rot in the dark soil inside the ceramic pots. Taking care of our plants is a relaxing hobby that makes our bedroom feel lively and fresh during the cold winter months when we stay inside our warm and comfortable family house, listening to the wind and watching the snow fall slowly outside our window on the frozen ground near the public park down our quiet suburban street where we live with our family {an:d:Used to connect words.} our small black dog who loves {to:Expressing motion in the direction of.} sleep near the fireplace in the living {ro:om:A space in a building.}.",
  "The clever young boy uses a plastic compass and a paper {ma:p:A diagrammatic representation of an area.} to find his way during the weekend scout hiking trip in the state park near the mountains. He leads his team of scouts along the narrow dirt path, checking the compass needle to ensure they are walking in the correct northern direction toward the campsite. They walk past tall pine trees, cross a small wooden bridge over a bubbling stream, and climb a steep rocky hill before they reach the campsite where they will pitch their green tents and build a warm campfire to cook their dinner under the bright stars in the dark sky, sharing funny stories and singing campfire songs together with their scout leader with great enthusiasm and joy during their winter outdoor adventure in the peaceful mountain forest valley where they can experience the beauty of nature first {ha:nd:The end part of a person's arm.} and learn valuable survival skills {th:at:Used to identify a specific thing.} will help them in their future {li:ves:Plural of life.} as active and responsible young {pe:ople:Plural of person.}.",
  "The busy librarian works at the front desk of our quiet neighborhood library, helping people find {bo:oks:Written or printed works.} and checking out their selections using a digital barcode scanner. She organizes the returned books on the metal carts and returns them to their correct places on the tall wooden bookshelves so they are easy to find for the {re:aders:People who read.} She also coordinates the weekly story hour for the local toddlers, reading funny stories and singing songs with them in the colorful children's section of the library near the main entrance. She loves her job because she gets to share her passion for reading with the whole community and meet many friendly people every day, including the students who come to study after school hours to prepare for their exams in the quiet reading room at the back of the library building near our house {wi:th:Accompanied by.} their study groups and friends {fr:om:Expressing the point in space where something starts.} our primary school classes who love {to:Expressing motion in the direction of.} read.",
  "We use a pair of protective plastic goggles and a long metal snorkel when we {sw:im:To move through water.} in the clear water of the swimming {po:ol:A basin for water activities.} during our summer holiday. The goggles allow us to see underwater clearly without the chlorine hurting our eyes, and the snorkel helps us breathe easily while we float on the surface of the blue water. We love to dive to the bottom of the pool to retrieve shiny red rings and practice our swimming strokes with our friends in the afternoon. It is a very fun and active way to spend our summer days when the weather is extremely hot outside in our town near the public park pool where we can splash around and stay cool with our family and best school friends who love water games and outdoor sports during their summer vacation {th:at:Used to identify a specific thing.} lasts for two months in the warm {se:ason:Each of the four divisions of the year.} of summer when the sky is clear {an:d:Used to connect words.} blue.",
  "The professional {gar:dener:A person who works with and tends a garden.} uses a pair of sharp pruning shears to trim the dead branches of the sweet-smelling rose {bu:shes:A dense woody plant, smaller than a tree.} in the public botanical garden near the river. He works hard in the early morning to make sure the {flo:wers:The blooming parts of plants.} are healthy, beautifully arranged, and free of harmful {in:sects:Small creatures with six legs, like bees or butterflies.} that can damage the plants. He also plants new colorful flowerbeds of purple lavender and yellow marigolds to attract busy bees and beautiful butterflies that help pollinate the plants. He enjoys working outdoors in {na:ture:The natural world around us, without humans.} and takes great pride in maintaining a peaceful and beautiful green space for the city residents to visit and enjoy with their family on sunny days in summer when the weather is warm and the air is filled with the sweet fragrance of blooming flowers of all kinds in the beautiful park garden that is located in the center of our quiet town near the old bridge and the public school.",
  "The young boy uses a small metal {tr:owel:A small tool for digging.} to dig a shallow trench in the rich black soil of our vegetable garden behind our house. He plants six small organic {se:eds:Small parts of a plant from which new plants grow.} of a green bean plant and covers them gently with the dark earth, patting it down to make it firm. He uses a plastic watering can to {wa:ter:To pour liquid over plants to help them grow.} the soil every afternoon so the seeds can germinate and grow into strong green {vi:nes:Plants with long stems that climb or spread.} that climb up the wooden trellis. He is very excited to watch his plants grow and looks forward to picking fresh green beans for our family dinner during the late summer days when the weather is warm in our quiet town near the countryside where we can see fields of green crops and farm animals grazing peacefully under the bright sun near the old red barn house with our dear grandparents who love to teach us about {fa:rming:The activity or business of growing crops and raising animals.} and gardening during our winter holiday visits to their country home near the beautiful scenic valley.",
  "We visit the local science {mu:seum:A building where objects of historical, scientific, artistic, or cultural interest are stored and exhibited.} to see an exciting interactive exhibition about electricity, space exploration, and robotic technology in our city. We can touch a plasma globe to see purple light follow our fingers, look at a real model of the Apollo lunar lander, and watch a smart robotic arm build a small toy car. We {le:arn:Gain or acquire knowledge of or skill in (something) by study, experience, or being taught.} how scientists use technology to solve complex global problems and explore distant planets in our solar system. It is a very inspiring visit that makes us want to study science and engineering when we grow up and attend university in the future years of our young lives, hoping to make the world a better place with our creative ideas and scientific discoveries that can help protect our environment and preserve our natural resources on this beautiful earth {th:at:Used to identify a specific thing.} is our only home in the vast universe {wi:thout:Not accompanied by.} any other habitable planet nearby {at:In or at a position.} the present time.",
  "The professional chef uses a {sh:arp:Having a thin edge or point.} stainless steel knife to chop fresh vegetables on a {he:avy:Of great weight.} wooden cutting board in his busy restaurant kitchen near the river. He chops red onions, orange carrots, green celery, and ripe red tomatoes to make a delicious and healthy vegetable soup for the evening guests who arrive at six o'clock. He heats a large metal pot on the stove, adds a splash of golden olive oil, and sautés the vegetables until they are soft and fragrant. He adds fresh herbs, water, and a pinch of salt to create a perfect soup that is warm, nutritious, and loved by everyone in our local town near the scenic river where many tourists come to dine and enjoy the beautiful views of the valley with their family and friends during their weekend trips to the countryside in the beautiful season of autumn when the leaves are turning red, orange, and yellow {on:Physically in contact with a surface.} the tall trees near the river bank {wi:th:Accompanied by.} our dear family members and best {fr:iends:Plural of friend.}"
];

export function convertRawPassageToTemplate(text: string): string {
  if (!text || typeof text !== 'string') return text || '';
  if (text.includes('{') && text.includes('}')) {
    return text;
  }
  const COMMON_STOP_WORDS = new Set([
    'about', 'above', 'across', 'after', 'again', 'against', 'almost', 'along', 'already', 'also', 'although', 'always', 'among', 'another', 'answer', 'around', 'because', 'before', 'behind', 'between', 'beyond', 'both', 'bring', 'could', 'course', 'during', 'each', 'early', 'either', 'enough', 'even', 'every', 'first', 'found', 'from', 'great', 'group', 'however', 'inside', 'into', 'itself', 'just', 'large', 'later', 'light', 'like', 'little', 'made', 'make', 'many', 'more', 'most', 'much', 'must', 'never', 'number', 'often', 'other', 'others', 'overall', 'people', 'place', 'point', 'right', 'same', 'second', 'several', 'should', 'since', 'small', 'some', 'still', 'such', 'their', 'them', 'themselves', 'then', 'there', 'these', 'they', 'things', 'think', 'this', 'those', 'though', 'through', 'today', 'together', 'under', 'until', 'upon', 'using', 'very', 'water', 'well', 'where', 'which', 'while', 'white', 'within', 'without', 'would', 'years'
  ]);

  const wordRegex = /\b([a-zA-Z]{5,})\b/g;
  let matches: { word: string; index: number; length: number }[] = [];
  let match;
  
  while ((match = wordRegex.exec(text)) !== null) {
    const word = match[1];
    if (!COMMON_STOP_WORDS.has(word.toLowerCase())) {
      matches.push({ word, index: match.index, length: word.length });
    }
  }

  if (matches.length === 0) return text;
  
  const targetCount = Math.min(12, Math.max(6, Math.floor(matches.length / 2)));
  const step = matches.length / targetCount;
  const selectedIndices = new Set<number>();
  
  for (let i = 0; i < targetCount; i++) {
    const idx = Math.floor(i * step);
    if (idx < matches.length) {
      selectedIndices.add(idx);
    }
  }

  const selectedMatches = matches.filter((_, i) => selectedIndices.has(i));
  
  let result = '';
  let lastIdx = 0;
  
  for (const item of selectedMatches) {
    result += text.substring(lastIdx, item.index);
    const word = item.word;
    const splitPoint = Math.min(2, Math.floor(word.length / 2));
    const prefix = word.substring(0, splitPoint);
    const missing = word.substring(splitPoint);
    const hint = `Complete the academic word starting with '${prefix}'`;
    result += `{${prefix}:${missing}:${hint}}`;
    lastIdx = item.index + word.length;
  }
  result += text.substring(lastIdx);
  return result;
}

export function parseEasyTemplate(template: string) {
  if (!template || typeof template !== 'string') return [];
  if (!template.includes('{') || !template.includes('}')) {
    template = convertRawPassageToTemplate(template);
  }

  const parts: any[] = [];
  const regex = /\{([a-zA-Z]+):([a-zA-Z]+):([^}]+)\}/g;
  let lastIndex = 0;
  let match;
  let inputId = 0;
  
  while ((match = regex.exec(template)) !== null) {
    const textBefore = template.substring(lastIndex, match.index);
    if (textBefore) {
      parts.push({ type: 'text', content: textBefore });
    }
    
    const prefix = match[1];
    const missing = match[2];
    const hint = match[3];
    const full = prefix + missing;
    
    parts.push({
      type: 'input',
      id: inputId++,
      prefix: prefix,
      full: full,
      missing: missing,
      hint: hint
    });
    
    lastIndex = regex.lastIndex;
  }
  
  const textAfter = template.substring(lastIndex);
  if (textAfter) {
    parts.push({ type: 'text', content: textAfter });
  }

  if (parts.filter(p => p.type === 'input').length === 0 && template.length > 0) {
    const fallback = convertRawPassageToTemplate(template);
    if (fallback !== template) {
      return parseEasyTemplate(fallback);
    }
  }
  
  return parts;
}

export const COMPLETE_THE_WORDS_CONTENT: any = {
  "Easy": {
    1: [
      // Exercise 1
      [
        { type: 'text', content: "The " },
        { type: 'input', id: 0, prefix: 'su', full: 'sun', missing: 'n', hint: 'The star around which the earth orbits.' },
        { type: 'text', content: " is a " },
        { type: 'input', id: 1, prefix: 'st', full: 'star', missing: 'ar', hint: 'A fixed luminous point in the night sky.' },
        { type: 'text', content: ". It " },
        { type: 'input', id: 2, prefix: 'gi', full: 'gives', missing: 'ves', hint: 'Provide someone with something.' },
        { type: 'text', content: " us " },
        { type: 'input', id: 3, prefix: 'li', full: 'light', missing: 'ght', hint: 'The natural agent that stimulates sight and makes things visible.' },
        { type: 'text', content: " and " },
        { type: 'input', id: 4, prefix: 'he', full: 'heat', missing: 'at', hint: 'The quality of being hot; high temperature.' },
        { type: 'text', content: "." }
      ],
      // Exercise 2
      [
        { type: 'text', content: "When it " },
        { type: 'input', id: 0, prefix: 'ra', full: 'rains', missing: 'ins', hint: 'Water falling in drops from vapor in the atmosphere.' },
        { type: 'text', content: ", " },
        { type: 'input', id: 1, prefix: 'wa', full: 'water', missing: 'ter', hint: 'A colorless, transparent, odorless liquid.' },
        { type: 'text', content: " falls from the sky. This helps " },
        { type: 'input', id: 2, prefix: 'pl', full: 'plants', missing: 'ants', hint: 'Living organisms like trees, flowers, or grass.' },
        { type: 'text', content: " in the " },
        { type: 'input', id: 3, prefix: 'so', full: 'soil', missing: 'il', hint: 'The upper layer of earth in which plants grow.' },
        { type: 'text', content: " to " },
        { type: 'input', id: 4, prefix: 'gr', full: 'grow', missing: 'ow', hint: 'Undergo natural development by increasing in size.' },
        { type: 'text', content: "." }
      ],
      // Exercise 3
      [
        { type: 'text', content: "A " },
        { type: 'input', id: 0, prefix: 'fo', full: 'forest', missing: 'rest', hint: 'A large area covered chiefly with trees and undergrowth.' },
        { type: 'text', content: " has many tall " },
        { type: 'input', id: 1, prefix: 'tr', full: 'trees', missing: 'ees', hint: 'Woody perennial plants.' },
        { type: 'text', content: ". They are made of " },
        { type: 'input', id: 2, prefix: 'wo', full: 'wood', missing: 'od', hint: 'The hard fibrous material forming the main substance of the trunk of a tree.' },
        { type: 'text', content: " and have " },
        { type: 'input', id: 3, prefix: 'gr', full: 'green', missing: 'een', hint: 'The color of growing grass or leaves.' },
        { type: 'text', content: " " },
        { type: 'input', id: 4, prefix: 'le', full: 'leaf', missing: 'af', hint: 'A flattened structure of a higher plant, typically green.' },
        { type: 'text', content: " covers." }
      ],
      // Exercise 4
      [
        { type: 'text', content: "The " },
        { type: 'input', id: 0, prefix: 'se', full: 'sea', missing: 'a', hint: 'The expanse of salt water that covers most of the earth\'s surface.' },
        { type: 'text', content: " is " },
        { type: 'input', id: 1, prefix: 'de', full: 'deep', missing: 'ep', hint: 'Extending far down from the top or surface.' },
        { type: 'text', content: " and " },
        { type: 'input', id: 2, prefix: 'bl', full: 'blue', missing: 'ue', hint: 'The color of the sky on a clear day.' },
        { type: 'text', content: ". Many small " },
        { type: 'input', id: 3, prefix: 'fi', full: 'fish', missing: 'sh', hint: 'A limbless cold-blooded vertebrate animal living wholly in water.' },
        { type: 'text', content: " " },
        { type: 'input', id: 4, prefix: 'sw', full: 'swim', missing: 'im', hint: 'Propel oneself through water using limbs or fins.' },
        { type: 'text', content: " in the cold water." }
      ],
      // Exercise 5
      [
        { type: 'text', content: "A " },
        { type: 'input', id: 0, prefix: 'bi', full: 'bird', missing: 'rd', hint: 'A feathered animal with wings.' },
        { type: 'text', content: " can " },
        { type: 'input', id: 1, prefix: 'fl', full: 'fly', missing: 'y', hint: 'Move through the air using wings.' },
        { type: 'text', content: " high in the blue " },
        { type: 'input', id: 2, prefix: 'sk', full: 'sky', missing: 'y', hint: 'The region of the atmosphere visible from earth.' },
        { type: 'text', content: ". It builds a cozy " },
        { type: 'input', id: 3, prefix: 'ne', full: 'nest', missing: 'st', hint: 'A structure made by a bird to lay eggs.' },
        { type: 'text', content: " on a " },
        { type: 'input', id: 4, prefix: 'tr', full: 'tree', missing: 'ee', hint: 'A tall plant with a wooden trunk and branches.' },
        { type: 'text', content: " branch." }
      ],
      // Exercise 6
      [
        { type: 'text', content: "Strong " },
        { type: 'input', id: 0, prefix: 'wi', full: 'wind', missing: 'nd', hint: 'The perceptible natural movement of the air.' },
        { type: 'text', content: " can " },
        { type: 'input', id: 1, prefix: 'bl', full: 'blow', missing: 'ow', hint: '(Of wind) move creating an air current.' },
        { type: 'text', content: " on " },
        { type: 'input', id: 2, prefix: 'co', full: 'cold', missing: 'ld', hint: 'Of or at a low temperature.' },
        { type: 'text', content: " " },
        { type: 'input', id: 3, prefix: 'da', full: 'days', missing: 'ys', hint: 'Plural of day; 24-hour periods.' },
        { type: 'text', content: ". It makes the air feel very " },
        { type: 'input', id: 4, prefix: 'co', full: 'cool', missing: 'ol', hint: 'Fairly cold; not warm.' },
        { type: 'text', content: "." }
      ],
      // Exercise 7
      [
        { type: 'text', content: "At " },
        { type: 'input', id: 0, prefix: 'ni', full: 'night', missing: 'ght', hint: 'The period of darkness in each twenty-four hours.' },
        { type: 'text', content: ", the " },
        { type: 'input', id: 1, prefix: 'da', full: 'dark', missing: 'rk', hint: 'With little or no light.' },
        { type: 'text', content: " sky has a bright " },
        { type: 'input', id: 2, prefix: 'mo', full: 'moon', missing: 'on', hint: 'The natural satellite of the earth.' },
        { type: 'text', content: ". It is time to " },
        { type: 'input', id: 3, prefix: 'sl', full: 'sleep', missing: 'eep', hint: 'A condition of body and mind which typically recurs for several hours every night.' },
        { type: 'text', content: " in your " },
        { type: 'input', id: 4, prefix: 'be', full: 'bed', missing: 'd', hint: 'A piece of furniture for sleep or rest.' },
        { type: 'text', content: "." }
      ],
      // Exercise 8
      [
        { type: 'text', content: "The " },
        { type: 'input', id: 0, prefix: 'ea', full: 'earth', missing: 'rth', hint: 'The planet on which we live.' },
        { type: 'text', content: " is made of " },
        { type: 'input', id: 1, prefix: 'la', full: 'land', missing: 'nd', hint: 'The part of the earth\'s surface that is not covered by water.' },
        { type: 'text', content: " and water. A " },
        { type: 'input', id: 2, prefix: 'ha', full: 'hard', missing: 'rd', hint: 'Solid, firm, and rigid; not easily broken.' },
        { type: 'text', content: " " },
        { type: 'input', id: 3, prefix: 'ro', full: 'rock', missing: 'ck', hint: 'The solid mineral material forming part of the surface of the earth.' },
        { type: 'text', content: " can be found on a high " },
        { type: 'input', id: 4, prefix: 'hi', full: 'hill', missing: 'll', hint: 'A naturally raised area of land, not as high as a mountain.' },
        { type: 'text', content: "." }
      ],
      // Exercise 9
      [
        { type: 'text', content: "A " },
        { type: 'input', id: 0, prefix: 'fi', full: 'fire', missing: 're', hint: 'Combustion or burning, in which substances combine with oxygen.' },
        { type: 'text', content: " is very " },
        { type: 'input', id: 1, prefix: 'ho', full: 'hot', missing: 't', hint: 'Having a high temperature.' },
        { type: 'text', content: ". We " },
        { type: 'input', id: 2, prefix: 'bu', full: 'burn', missing: 'rn', hint: 'Be consumed by fire.' },
        { type: 'text', content: " dry " },
        { type: 'input', id: 3, prefix: 'wo', full: 'wood', missing: 'od', hint: 'The hard fibrous material forming the main substance of the trunk of a tree.' },
        { type: 'text', content: " and black " },
        { type: 'input', id: 4, prefix: 'co', full: 'coal', missing: 'al', hint: 'A black mineral substance used as fuel.' },
        { type: 'text', content: " to stay warm." }
      ],
      // Exercise 10
      [
        { type: 'text', content: "A " },
        { type: 'input', id: 0, prefix: 'do', full: 'dog', missing: 'g', hint: 'A common four-legged domestic animal.' },
        { type: 'text', content: " and a " },
        { type: 'input', id: 1, prefix: 'ca', full: 'cat', missing: 't', hint: 'A small domesticated carnivorous mammal.' },
        { type: 'text', content: " like to " },
        { type: 'input', id: 2, prefix: 'pl', full: 'play', missing: 'ay', hint: 'Engage in activity for enjoyment.' },
        { type: 'text', content: ". They " },
        { type: 'input', id: 3, prefix: 'ru', full: 'run', missing: 'n', hint: 'Move at a speed faster than a walk.' },
        { type: 'text', content: " in the green " },
        { type: 'input', id: 4, prefix: 'ya', full: 'yard', missing: 'rd', hint: 'A piece of ground next to a house.' },
        { type: 'text', content: " and feel safe." }
      ],
      // Exercise 11
      [
        { type: 'text', content: "When you " },
        { type: 'input', id: 0, prefix: 're', full: 'read', missing: 'ad', hint: 'Look at and comprehend the meaning of written characters.' },
        { type: 'text', content: " a " },
        { type: 'input', id: 1, prefix: 'bo', full: 'book', missing: 'ok', hint: 'A written or printed work consisting of pages.' },
        { type: 'text', content: ", look at each " },
        { type: 'input', id: 2, prefix: 'wo', full: 'word', missing: 'rd', hint: 'A single distinct meaningful element of speech or writing.' },
        { type: 'text', content: ". Turn the " },
        { type: 'input', id: 3, prefix: 'pa', full: 'page', missing: 'ge', hint: 'One side of a sheet of paper in a book.' },
        { type: 'text', content: " to " },
        { type: 'input', id: 4, prefix: 'le', full: 'learn', missing: 'arn', hint: 'Gain or acquire knowledge of or skill in.' },
        { type: 'text', content: " something new." }
      ],
      // Exercise 12
      [
        { type: 'text', content: "Healthy " },
        { type: 'input', id: 0, prefix: 'fo', full: 'food', missing: 'od', hint: 'Any nutritious substance that people or animals eat.' },
        { type: 'text', content: " is " },
        { type: 'input', id: 1, prefix: 'go', full: 'good', missing: 'od', hint: 'To be desired or approved of; of high quality.' },
        { type: 'text', content: " to " },
        { type: 'input', id: 2, prefix: 'ea', full: 'eat', missing: 't', hint: 'Put food into the mouth and chew and swallow it.' },
        { type: 'text', content: ". It gives your " },
        { type: 'input', id: 3, prefix: 'bo', full: 'body', missing: 'dy', hint: 'The physical structure of a person or animal.' },
        { type: 'text', content: " energy and health." }
      ],
      // Exercise 13
      [
        { type: 'text', content: "Put a " },
        { type: 'input', id: 0, prefix: 'se', full: 'seed', missing: 'ed', hint: 'The unit of reproduction of a flowering plant.' },
        { type: 'text', content: " into the dark " },
        { type: 'input', id: 1, prefix: 'di', full: 'dirt', missing: 'rt', hint: 'Soil, earth, or land.' },
        { type: 'text', content: ". Add a little water, and a " },
        { type: 'input', id: 2, prefix: 'pl', full: 'plant', missing: 'ant', hint: 'A living organism like a flower or tree.' },
        { type: 'text', content: " will " },
        { type: 'input', id: 3, prefix: 'gr', full: 'grow', missing: 'ow', hint: 'Increase in size or undergo natural development.' },
        { type: 'text', content: "." }
      ],
      // Exercise 14
      [
        { type: 'text', content: "Many " },
        { type: 'input', id: 0, prefix: 'ca', full: 'cars', missing: 'rs', hint: 'Road vehicles with four wheels, powered by an engine.' },
        { type: 'text', content: " " },
        { type: 'input', id: 1, prefix: 'dr', full: 'drive', missing: 'ive', hint: 'Operate and control the direction and speed of a motor vehicle.' },
        { type: 'text', content: " on the paved " },
        { type: 'input', id: 2, prefix: 'ro', full: 'road', missing: 'ad', hint: 'A wide way, typically with a paved surface, for vehicles.' },
        { type: 'text', content: ". They travel " },
        { type: 'input', id: 3, prefix: 'fa', full: 'fast', missing: 'st', hint: 'Moving or capable of moving at high speed.' },
        { type: 'text', content: " from town to town." }
      ],
      // Exercise 15
      [
        { type: 'input', id: 0, prefix: 'Wi', full: 'Winter', missing: 'nter', hint: 'The coldest season of the year.' },
        { type: 'text', content: " is a very " },
        { type: 'input', id: 1, prefix: 'co', full: 'cold', missing: 'ld', hint: 'At or of a low temperature.' },
        { type: 'text', content: " season. White " },
        { type: 'input', id: 2, prefix: 'sn', full: 'snow', missing: 'ow', hint: 'Atmospheric water vapor frozen into ice crystals.' },
        { type: 'text', content: " and hard " },
        { type: 'input', id: 3, prefix: 'ic', full: 'ice', missing: 'e', hint: 'Frozen water.' },
        { type: 'text', content: " cover the ground." }
      ],
      // Exercise 16
      [
        { type: 'text', content: "A " },
        { type: 'input', id: 0, prefix: 'gr', full: 'gray', missing: 'ay', hint: 'Of a color intermediate between black and white.' },
        { type: 'text', content: " " },
        { type: 'input', id: 1, prefix: 'cl', full: 'cloud', missing: 'oud', hint: 'A visible mass of condensed water vapor floating in the atmosphere.' },
        { type: 'text', content: " in the sky brings " },
        { type: 'input', id: 2, prefix: 'ra', full: 'rain', missing: 'in', hint: 'Moisture condensed from the atmosphere that falls in separate drops.' },
        { type: 'text', content: ". It makes the ground " },
        { type: 'input', id: 3, prefix: 'we', full: 'wet', missing: 't', hint: 'Covered or saturated with water or another liquid.' },
        { type: 'text', content: "." }
      ],
      // Exercise 17
      [
        { type: 'text', content: "We " },
        { type: 'input', id: 0, prefix: 'li', full: 'live', missing: 've', hint: 'Remain alive or have one\'s home in a particular place.' },
        { type: 'text', content: " with our " },
        { type: 'input', id: 1, prefix: 'fa', full: 'family', missing: 'mily', hint: 'A group of parents and children living together.' },
        { type: 'text', content: " in a nice " },
        { type: 'input', id: 2, prefix: 'ho', full: 'house', missing: 'use', hint: 'A building for human habitation.' },
        { type: 'text', content: ". A happy " },
        { type: 'input', id: 3, prefix: 'ho', full: 'home', missing: 'me', hint: 'The place where one lives permanently.' },
        { type: 'text', content: " is full of love." }
      ],
      // Exercise 18
      [
        { type: 'text', content: "A large " },
        { type: 'input', id: 0, prefix: 'sh', full: 'ship', missing: 'ip', hint: 'A large boat for transporting people or goods by sea.' },
        { type: 'text', content: " can " },
        { type: 'input', id: 1, prefix: 'sa', full: 'sail', missing: 'il', hint: 'Travel in a boat with sails, especially for sport or recreation.' },
        { type: 'text', content: " across the " },
        { type: 'input', id: 2, prefix: 'oc', full: 'ocean', missing: 'ean', hint: 'A very large expanse of sea.' },
        { type: 'text', content: ". The " },
        { type: 'input', id: 3, prefix: 'wi', full: 'wind', missing: 'nd', hint: 'The natural movement of air.' },
        { type: 'text', content: " pushes it to the port." }
      ],
      // Exercise 19
      [
        { type: 'text', content: "At " },
        { type: 'input', id: 0, prefix: 'sc', full: 'school', missing: 'hool', hint: 'An institution for educating children.' },
        { type: 'text', content: ", we meet our " },
        { type: 'input', id: 1, prefix: 'fr', full: 'friends', missing: 'iends', hint: 'People whom one knows and with whom one has a bond of mutual affection.' },
        { type: 'text', content: ". Teachers " },
        { type: 'input', id: 2, prefix: 'te', full: 'teach', missing: 'ach', hint: 'Impart knowledge to or instruct someone.' },
        { type: 'text', content: " us, and we " },
        { type: 'input', id: 3, prefix: 'le', full: 'learn', missing: 'arn', hint: 'Gain or acquire knowledge of or skill in.' },
        { type: 'text', content: " new things." }
      ],
      // Exercise 20
      [
        { type: 'text', content: "A " },
        { type: 'input', id: 0, prefix: 'ri', full: 'river', missing: 'ver', hint: 'A large natural stream of water flowing in a channel.' },
        { type: 'text', content: " has fresh " },
        { type: 'input', id: 1, prefix: 'wa', full: 'water', missing: 'ter', hint: 'A colorless, transparent liquid.' },
        { type: 'text', content: " that flows down. It can fill a large " },
        { type: 'input', id: 2, prefix: 'la', full: 'lake', missing: 'ke', hint: 'A large body of water surrounded by land.' },
        { type: 'text', content: " where we can " },
        { type: 'input', id: 3, prefix: 'sw', full: 'swim', missing: 'im', hint: 'Propel oneself through water.' },
        { type: 'text', content: "." }
      ]
    ],
    2: COMPLETE_WORDS_EASY_M2,
    3: [
      // Exercise 1: 3 Passages
      [
        [
          { type: 'text', content: "The envelope of gases surrounding the earth, known as the " },
          { type: 'input', id: 0, prefix: 'at', full: 'atmosphere', missing: 'mosphere', hint: 'The envelope of gases surrounding the earth.' },
          { type: 'text', content: ", is " },
          { type: 'input', id: 1, prefix: 'cr', full: 'crucial', missing: 'ucial', hint: 'Decisive or critical, especially in the success or failure of something.' },
          { type: 'text', content: " for " },
          { type: 'input', id: 2, prefix: 'su', full: 'supporting', missing: 'pporting', hint: 'Bearing the weight of or providing assistance to.' },
          { type: 'text', content: " human " },
          { type: 'input', id: 3, prefix: 'li', full: 'life', missing: 'fe', hint: 'The condition that distinguishes animals and plants from inorganic matter.' },
          { type: 'text', content: " on our " },
          { type: 'input', id: 4, prefix: 'pl', full: 'planet', missing: 'anet', hint: 'A celestial body moving in an elliptical orbit round a star.' },
          { type: 'text', content: "." }
        ],
        [
          { type: 'text', content: "Green " },
          { type: 'input', id: 0, prefix: 'pl', full: 'plants', missing: 'ants', hint: 'Living organisms of the vegetable kingdom.' },
          { type: 'text', content: " " },
          { type: 'input', id: 1, prefix: 'pr', full: 'produce', missing: 'oduce', hint: 'Make or manufacture from components or raw materials.' },
          { type: 'text', content: " fresh " },
          { type: 'input', id: 2, prefix: 'ox', full: 'oxygen', missing: 'ygen', hint: 'A colorless, odorless reactive gas.' },
          { type: 'text', content: " through the natural process of " },
          { type: 'input', id: 3, prefix: 'ph', full: 'photosynthesis', missing: 'otosynthesis', hint: 'The process by which green plants use sunlight to synthesize foods.' },
          { type: 'text', content: " to " },
          { type: 'input', id: 4, prefix: 'cl', full: 'clean', missing: 'ean', hint: 'Free from dirt, marks, or stains.' },
          { type: 'text', content: " the air." }
        ],
        [
          { type: 'text', content: "Warm " },
          { type: 'input', id: 0, prefix: 'wa', full: 'water', missing: 'ter', hint: 'A colorless, transparent, odorless liquid.' },
          { type: 'text', content: " " },
          { type: 'input', id: 1, prefix: 'ev', full: 'evaporates', missing: 'aporates', hint: 'Turn from liquid into vapor.' },
          { type: 'text', content: " from the deep " },
          { type: 'input', id: 2, prefix: 'oc', full: 'ocean', missing: 'ean', hint: 'A very large expanse of sea.' },
          { type: 'text', content: " and " },
          { type: 'input', id: 3, prefix: 'fo', full: 'forms', missing: 'rms', hint: 'Bring together parts or combine to create something.' },
          { type: 'text', content: " white " },
          { type: 'input', id: 4, prefix: 'cl', full: 'clouds', missing: 'ouds', hint: 'A visible mass of condensed water vapor floating in the atmosphere.' },
          { type: 'text', content: " in the sky." }
        ]
      ],
      // Exercise 2: 3 Passages
      [
        [
          { type: 'text', content: "Bright " },
          { type: 'input', id: 0, prefix: 'su', full: 'sunlight', missing: 'nlight', hint: 'Light from the sun.' },
          { type: 'text', content: " " },
          { type: 'input', id: 1, prefix: 'wa', full: 'warms', missing: 'arms', hint: 'Make or become warm.' },
          { type: 'text', content: " the cold " },
          { type: 'input', id: 2, prefix: 'ea', full: 'earth', missing: 'rth', hint: 'The planet on which we live.' },
          { type: 'text', content: " and " },
          { type: 'input', id: 3, prefix: 'he', full: 'helps', missing: 'lps', hint: 'Make it easier for someone to do something.' },
          { type: 'text', content: " plants " },
          { type: 'input', id: 4, prefix: 'gr', full: 'grow', missing: 'ow', hint: 'Undergo natural development by increasing in size.' },
          { type: 'text', content: " tall." }
        ],
        [
          { type: 'text', content: "The " },
          { type: 'input', id: 0, prefix: 'co', full: 'cool', missing: 'ol', hint: 'Fairly cold; not warm.' },
          { type: 'text', content: " " },
          { type: 'input', id: 1, prefix: 'wi', full: 'wind', missing: 'nd', hint: 'The perceptible natural movement of the air.' },
          { type: 'text', content: " is " },
          { type: 'input', id: 2, prefix: 'mo', full: 'moving', missing: 'oving', hint: 'In motion.' },
          { type: 'text', content: " fresh " },
          { type: 'input', id: 3, prefix: 'ai', full: 'air', missing: 'r', hint: 'The invisible gaseous substance surrounding the earth.' },
          { type: 'text', content: " around our green " },
          { type: 'input', id: 4, prefix: 'ga', full: 'garden', missing: 'rden', hint: 'A piece of ground adjoining a house, used for growing flowers, fruit, or vegetables.' },
          { type: 'text', content: "." }
        ],
        [
          { type: 'text', content: "A " },
          { type: 'input', id: 0, prefix: 'fa', full: 'falling', missing: 'lling', hint: 'Moving downward of its own weight.' },
          { type: 'text', content: " " },
          { type: 'input', id: 1, prefix: 'ra', full: 'rain', missing: 'in', hint: 'Moisture condensed from the atmosphere that falls in separate drops.' },
          { type: 'text', content: " always " },
          { type: 'input', id: 2, prefix: 'fe', full: 'feeds', missing: 'eds', hint: 'Give food to or supply.' },
          { type: 'text', content: " the wide " },
          { type: 'input', id: 3, prefix: 'ri', full: 'rivers', missing: 'vers', hint: 'Large natural streams of water flowing in a channel to the sea.' },
          { type: 'text', content: " of the dry " },
          { type: 'input', id: 4, prefix: 'ea', full: 'earth', missing: 'rth', hint: 'The planet on which we live.' },
          { type: 'text', content: "." }
        ]
      ],
      // Exercise 3: 3 Passages
      [
        [
          { type: 'text', content: "Rich " },
          { type: 'input', id: 0, prefix: 'so', full: 'soil', missing: 'il', hint: 'The upper layer of earth in which plants grow.' },
          { type: 'text', content: " always " },
          { type: 'input', id: 1, prefix: 'pr', full: 'provides', missing: 'ovides', hint: 'Make available for use; supply.' },
          { type: 'text', content: " essential " },
          { type: 'input', id: 2, prefix: 'nu', full: 'nutrients', missing: 'trients', hint: 'Substances that provide nourishment essential for growth.' },
          { type: 'text', content: " for " },
          { type: 'input', id: 3, prefix: 'gr', full: 'growing', missing: 'owing', hint: 'Undergo natural development by increasing in size.' },
          { type: 'text', content: " green " },
          { type: 'input', id: 4, prefix: 'pl', full: 'plants', missing: 'ants', hint: 'Living organisms of the vegetable kingdom.' },
          { type: 'text', content: " in spring." }
        ],
        [
          { type: 'text', content: "Green " },
          { type: 'input', id: 0, prefix: 'tr', full: 'trees', missing: 'ees', hint: 'Woody perennial plants.' },
          { type: 'text', content: " constantly " },
          { type: 'input', id: 1, prefix: 'ab', full: 'absorb', missing: 'sorb', hint: 'Take in or soak up energy, liquid, or other substance.' },
          { type: 'text', content: " " },
          { type: 'input', id: 2, prefix: 'ha', full: 'harmful', missing: 'rmful', hint: 'Causing or likely to cause harm.' },
          { type: 'text', content: " " },
          { type: 'input', id: 3, prefix: 'ca', full: 'carbon', missing: 'rbon', hint: 'A chemical element that is the main constituent of coal, petroleum, etc.' },
          { type: 'text', content: " from the dirty " },
          { type: 'input', id: 4, prefix: 'ai', full: 'air', missing: 'r', hint: 'The invisible gaseous substance surrounding the earth.' },
          { type: 'text', content: " of cities." }
        ],
        [
          { type: 'text', content: "Busy " },
          { type: 'input', id: 0, prefix: 'be', full: 'bees', missing: 'es', hint: 'Stinging winged insects which collect nectar and pollen.' },
          { type: 'text', content: " always " },
          { type: 'input', id: 1, prefix: 'po', full: 'pollinate', missing: 'llinate', hint: 'Convey pollen to allow fertilization.' },
          { type: 'text', content: " many " },
          { type: 'input', id: 2, prefix: 'be', full: 'beautiful', missing: 'autiful', hint: 'Pleasing the senses or mind aesthetically.' },
          { type: 'text', content: " " },
          { type: 'input', id: 3, prefix: 'fl', full: 'flowers', missing: 'owers', hint: 'The seed-bearing part of a plant.' },
          { type: 'text', content: " in the warm " },
          { type: 'input', id: 4, prefix: 'su', full: 'summer', missing: 'mmer', hint: 'The warmest season of the year.' },
          { type: 'text', content: "." }
        ]
      ]
    ]
  },
  "Normal": {
    1: [
      [
        { type: 'text', content: "The " },
        { type: 'input', id: 0, prefix: 'ur', full: 'urbanization', missing: 'banization', hint: 'The process of making an area more urban.' },
        { type: 'text', content: " of the " },
        { type: 'input', id: 1, prefix: 'me', full: 'metropolis', missing: 'tropolis', hint: 'A very large and busy city.' },
        { type: 'text', content: " has led to " },
        { type: 'input', id: 2, prefix: 'si', full: 'significant', missing: 'gnificant', hint: 'Sufficiently great or important to be worthy of attention.' },
        { type: 'text', content: " " },
        { type: 'input', id: 3, prefix: 'ch', full: 'challenges', missing: 'allenges', hint: 'A task or situation that tests someone\'s abilities.' },
        { type: 'text', content: " in " },
        { type: 'input', id: 4, prefix: 'in', full: 'infrastructure', missing: 'frastructure', hint: 'The basic physical and organizational structures and facilities needed for the operation of a society or enterprise.' },
        { type: 'text', content: ". City " },
        { type: 'input', id: 5, prefix: 'pl', full: 'planners', missing: 'lanners', hint: 'A person who makes plans for something.' },
        { type: 'text', content: " must " },
        { type: 'input', id: 6, prefix: 'co', full: 'consider', missing: 'nsider', hint: 'Think carefully about (something), typically before making a decision.' },
        { type: 'text', content: " the " },
        { type: 'input', id: 7, prefix: 'en', full: 'environmental', missing: 'vironmental', hint: 'Relating to the natural world and the impact of human activity on its condition.' },
        { type: 'text', content: " " },
        { type: 'input', id: 8, prefix: 'im', full: 'impact', missing: 'pact', hint: 'The action of one object coming forcibly into contact with another.' },
        { type: 'text', content: " of " },
        { type: 'input', id: 9, prefix: 'ex', full: 'expansion', missing: 'pansion', hint: 'The action of becoming larger or more extensive.' },
        { type: 'text', content: ". " },
        { type: 'input', id: 10, prefix: 'Su', full: 'Sustainable', missing: 'stainable', hint: 'Able to be maintained at a certain rate or level.' },
        { type: 'text', content: " " },
        { type: 'input', id: 11, prefix: 'de', full: 'development', missing: 'velopment', hint: 'The process of developing or being developed.' },
        { type: 'text', content: " is " },
        { type: 'input', id: 12, prefix: 'es', full: 'essential', missing: 'sential', hint: 'Absolutely necessary; extremely important.' },
        { type: 'text', content: " for " },
        { type: 'input', id: 13, prefix: 'fu', full: 'future', missing: 'ture', hint: 'The time or a period of time following the moment of speaking or writing.' },
        { type: 'text', content: " " },
        { type: 'input', id: 14, prefix: 'ge', full: 'generations', missing: 'nerations', hint: 'All of the people born and living at about the same time.' },
        { type: 'text', content: ". Public " },
        { type: 'input', id: 15, prefix: 'tr', full: 'transportation', missing: 'ansportation', hint: 'The action of transporting someone or something or the process of being transported.' },
        { type: 'text', content: " " },
        { type: 'input', id: 16, prefix: 'sy', full: 'systems', missing: 'stems', hint: 'A set of connected things or parts forming a complex whole.' },
        { type: 'text', content: " need " },
        { type: 'input', id: 17, prefix: 'mo', full: 'modernization', missing: 'dernization', hint: 'The process of adapting something to modern needs or habits.' },
        { type: 'text', content: " to " },
        { type: 'input', id: 18, prefix: 'ac', full: 'accommodate', missing: 'ccommodate', hint: '(Of physical space) provide lodging or sufficient space for.' },
        { type: 'text', content: " the " },
        { type: 'input', id: 19, prefix: 'gr', full: 'growing', missing: 'owing', hint: '(Of a living thing) undergoing natural development by increasing in size and changing physically.' },
        { type: 'text', content: " " },
        { type: 'input', id: 20, prefix: 'po', full: 'population', missing: 'pulation', hint: 'All the inhabitants of a particular town, area, or country.' },
        { type: 'text', content: "." }
      ]
    ],
    2: [
      [
        { type: 'text', content: "Genetic " },
        { type: 'input', id: 0, prefix: 'mo', full: 'modification', missing: 'dification', hint: 'The action of modifying something.' },
        { type: 'text', content: " is a " },
        { type: 'input', id: 1, prefix: 'co', full: 'controversial', missing: 'ntroversial', hint: 'Giving rise or likely to give rise to public disagreement.' },
        { type: 'text', content: " " },
        { type: 'input', id: 2, prefix: 'su', full: 'subject', missing: 'bject', hint: 'A person or thing that is being discussed, described, or dealt with.' },
        { type: 'text', content: " in " },
        { type: 'input', id: 3, prefix: 'bi', full: 'biotechnology', missing: 'otechnology', hint: 'The exploitation of biological processes for industrial and other purposes.' },
        { type: 'text', content: ". Scientists can " },
        { type: 'input', id: 4, prefix: 'al', full: 'alter', missing: 'ter', hint: 'Change or cause to change in character or composition, typically in a comparatively small but significant way.' },
        { type: 'text', content: " the " },
        { type: 'input', id: 5, prefix: 'ge', full: 'genetic', missing: 'netic', hint: 'Relating to genes or heredity.' },
        { type: 'text', content: " " },
        { type: 'input', id: 6, prefix: 'ma', full: 'makeup', missing: 'keup', hint: 'The composition or constitution of something.' },
        { type: 'text', content: " of " },
        { type: 'input', id: 7, prefix: 'or', full: 'organisms', missing: 'ganisms', hint: 'An individual animal, plant, or single-celled life form.' },
        { type: 'text', content: ". This " },
        { type: 'input', id: 8, prefix: 'te', full: 'technique', missing: 'chnique', hint: 'A way of carrying out a particular task.' },
        { type: 'text', content: " has " },
        { type: 'input', id: 9, prefix: 'po', full: 'potential', missing: 'tential', hint: 'Having or showing the capacity to become or develop into something in the future.' },
        { type: 'text', content: " " },
        { type: 'input', id: 10, prefix: 'be', full: 'benefits', missing: 'nefits', hint: 'An advantage or profit gained from something.' },
        { type: 'text', content: " for " },
        { type: 'input', id: 11, prefix: 'ag', full: 'agriculture', missing: 'riculture', hint: 'The science or practice of farming.' },
        { type: 'text', content: " and " },
        { type: 'input', id: 12, prefix: 'me', full: 'medicine', missing: 'dicine', hint: 'The science or practice of the diagnosis, treatment, and prevention of disease.' },
        { type: 'text', content: ". However, " },
        { type: 'input', id: 13, prefix: 'et', full: 'ethical', missing: 'hical', hint: 'Relating to moral principles or the branch of knowledge dealing with these.' },
        { type: 'text', content: " " },
        { type: 'input', id: 14, prefix: 'co', full: 'concerns', missing: 'ncerns', hint: 'Anxiety; worry.' },
        { type: 'text', content: " " },
        { type: 'input', id: 15, prefix: 'ar', full: 'arise', missing: 'ise', hint: '(Of a problem, opportunity, or situation) emerge; become apparent.' },
        { type: 'text', content: " " },
        { type: 'input', id: 16, prefix: 're', full: 'regarding', missing: 'garding', hint: 'In respect of; concerning.' },
        { type: 'text', content: " " },
        { type: 'input', id: 17, prefix: 'un', full: 'unintended', missing: 'intended', hint: 'Not planned or meant.' },
        { type: 'text', content: " " },
        { type: 'input', id: 18, prefix: 'co', full: 'consequences', missing: 'nsequences', hint: 'A result or effect of an action or condition.' },
        { type: 'text', content: ". Rigorous " },
        { type: 'input', id: 19, prefix: 're', full: 'regulation', missing: 'gulation', hint: 'A rule or directive made and maintained by an authority.' },
        { type: 'text', content: " is " },
        { type: 'input', id: 20, prefix: 'ne', full: 'necessary', missing: 'cessary', hint: 'Required to be done, achieved, or present; needed; essential.' },
        { type: 'text', content: "." }
      ]
    ],
    3: [
      // Exercise 1: 3 Passages
      [
        [
          { type: 'text', content: "The envelope of gases surrounding the earth, known as the " },
          { type: 'input', id: 0, prefix: 'at', full: 'atmosphere', missing: 'mosphere', hint: 'The envelope of gases surrounding the earth.' },
          { type: 'text', content: ", is " },
          { type: 'input', id: 1, prefix: 'cr', full: 'crucial', missing: 'ucial', hint: 'Decisive or critical, especially in the success or failure of something.' },
          { type: 'text', content: " for " },
          { type: 'input', id: 2, prefix: 'su', full: 'supporting', missing: 'pporting', hint: 'Bearing the weight of or providing assistance to.' },
          { type: 'text', content: " human " },
          { type: 'input', id: 3, prefix: 'li', full: 'life', missing: 'fe', hint: 'The condition that distinguishes animals and plants from inorganic matter.' },
          { type: 'text', content: " on our " },
          { type: 'input', id: 4, prefix: 'pl', full: 'planet', missing: 'anet', hint: 'A celestial body moving in an elliptical orbit round a star.' },
          { type: 'text', content: "." }
        ],
        [
          { type: 'text', content: "Green " },
          { type: 'input', id: 0, prefix: 'pl', full: 'plants', missing: 'ants', hint: 'Living organisms of the vegetable kingdom.' },
          { type: 'text', content: " " },
          { type: 'input', id: 1, prefix: 'pr', full: 'produce', missing: 'oduce', hint: 'Make or manufacture from components or raw materials.' },
          { type: 'text', content: " fresh " },
          { type: 'input', id: 2, prefix: 'ox', full: 'oxygen', missing: 'ygen', hint: 'A colorless, odorless reactive gas.' },
          { type: 'text', content: " through the natural process of " },
          { type: 'input', id: 3, prefix: 'ph', full: 'photosynthesis', missing: 'otosynthesis', hint: 'The process by which green plants use sunlight to synthesize foods.' },
          { type: 'text', content: " to " },
          { type: 'input', id: 4, prefix: 'cl', full: 'clean', missing: 'ean', hint: 'Free from dirt, marks, or stains.' },
          { type: 'text', content: " the air." }
        ],
        [
          { type: 'text', content: "Warm " },
          { type: 'input', id: 0, prefix: 'wa', full: 'water', missing: 'ter', hint: 'A colorless, transparent, odorless liquid.' },
          { type: 'text', content: " " },
          { type: 'input', id: 1, prefix: 'ev', full: 'evaporates', missing: 'aporates', hint: 'Turn from liquid into vapor.' },
          { type: 'text', content: " from the deep " },
          { type: 'input', id: 2, prefix: 'oc', full: 'ocean', missing: 'ean', hint: 'A very large expanse of sea.' },
          { type: 'text', content: " and " },
          { type: 'input', id: 3, prefix: 'fo', full: 'forms', missing: 'rms', hint: 'Bring together parts or combine to create something.' },
          { type: 'text', content: " white " },
          { type: 'input', id: 4, prefix: 'cl', full: 'clouds', missing: 'ouds', hint: 'A visible mass of condensed water vapor floating in the atmosphere.' },
          { type: 'text', content: " in the sky." }
        ]
      ],
      // Exercise 2: 3 Passages
      [
        [
          { type: 'text', content: "Bright " },
          { type: 'input', id: 0, prefix: 'su', full: 'sunlight', missing: 'nlight', hint: 'Light from the sun.' },
          { type: 'text', content: " " },
          { type: 'input', id: 1, prefix: 'wa', full: 'warms', missing: 'arms', hint: 'Make or become warm.' },
          { type: 'text', content: " the cold " },
          { type: 'input', id: 2, prefix: 'ea', full: 'earth', missing: 'rth', hint: 'The planet on which we live.' },
          { type: 'text', content: " and " },
          { type: 'input', id: 3, prefix: 'he', full: 'helps', missing: 'lps', hint: 'Make it easier for someone to do something.' },
          { type: 'text', content: " plants " },
          { type: 'input', id: 4, prefix: 'gr', full: 'grow', missing: 'ow', hint: 'Undergo natural development by increasing in size.' },
          { type: 'text', content: " tall." }
        ],
        [
          { type: 'text', content: "The " },
          { type: 'input', id: 0, prefix: 'co', full: 'cool', missing: 'ol', hint: 'Fairly cold; not warm.' },
          { type: 'text', content: " " },
          { type: 'input', id: 1, prefix: 'wi', full: 'wind', missing: 'nd', hint: 'The perceptible natural movement of the air.' },
          { type: 'text', content: " is " },
          { type: 'input', id: 2, prefix: 'mo', full: 'moving', missing: 'oving', hint: 'In motion.' },
          { type: 'text', content: " fresh " },
          { type: 'input', id: 3, prefix: 'ai', full: 'air', missing: 'r', hint: 'The invisible gaseous substance surrounding the earth.' },
          { type: 'text', content: " around our green " },
          { type: 'input', id: 4, prefix: 'ga', full: 'garden', missing: 'rden', hint: 'A piece of ground adjoining a house, used for growing flowers, fruit, or vegetables.' },
          { type: 'text', content: "." }
        ],
        [
          { type: 'text', content: "A " },
          { type: 'input', id: 0, prefix: 'fa', full: 'falling', missing: 'lling', hint: 'Moving downward of its own weight.' },
          { type: 'text', content: " " },
          { type: 'input', id: 1, prefix: 'ra', full: 'rain', missing: 'in', hint: 'Moisture condensed from the atmosphere that falls in separate drops.' },
          { type: 'text', content: " always " },
          { type: 'input', id: 2, prefix: 'fe', full: 'feeds', missing: 'eds', hint: 'Give food to or supply.' },
          { type: 'text', content: " the wide " },
          { type: 'input', id: 3, prefix: 'ri', full: 'rivers', missing: 'vers', hint: 'Large natural streams of water flowing in a channel to the sea.' },
          { type: 'text', content: " of the dry " },
          { type: 'input', id: 4, prefix: 'ea', full: 'earth', missing: 'rth', hint: 'The planet on which we live.' },
          { type: 'text', content: "." }
        ]
      ],
      // Exercise 3: 3 Passages
      [
        [
          { type: 'text', content: "Rich " },
          { type: 'input', id: 0, prefix: 'so', full: 'soil', missing: 'il', hint: 'The upper layer of earth in which plants grow.' },
          { type: 'text', content: " always " },
          { type: 'input', id: 1, prefix: 'pr', full: 'provides', missing: 'ovides', hint: 'Make available for use; supply.' },
          { type: 'text', content: " essential " },
          { type: 'input', id: 2, prefix: 'nu', full: 'nutrients', missing: 'trients', hint: 'Substances that provide nourishment essential for growth.' },
          { type: 'text', content: " for " },
          { type: 'input', id: 3, prefix: 'gr', full: 'growing', missing: 'owing', hint: 'Undergo natural development by increasing in size.' },
          { type: 'text', content: " green " },
          { type: 'input', id: 4, prefix: 'pl', full: 'plants', missing: 'ants', hint: 'Living organisms of the vegetable kingdom.' },
          { type: 'text', content: " in spring." }
        ],
        [
          { type: 'text', content: "Green " },
          { type: 'input', id: 0, prefix: 'tr', full: 'trees', missing: 'ees', hint: 'Woody perennial plants.' },
          { type: 'text', content: " constantly " },
          { type: 'input', id: 1, prefix: 'ab', full: 'absorb', missing: 'sorb', hint: 'Take in or soak up energy, liquid, or other substance.' },
          { type: 'text', content: " " },
          { type: 'input', id: 2, prefix: 'ha', full: 'harmful', missing: 'rmful', hint: 'Causing or likely to cause harm.' },
          { type: 'text', content: " " },
          { type: 'input', id: 3, prefix: 'ca', full: 'carbon', missing: 'rbon', hint: 'A chemical element that is the main constituent of coal, petroleum, etc.' },
          { type: 'text', content: " from the dirty " },
          { type: 'input', id: 4, prefix: 'ai', full: 'air', missing: 'r', hint: 'The invisible gaseous substance surrounding the earth.' },
          { type: 'text', content: " of cities." }
        ],
        [
          { type: 'text', content: "Busy " },
          { type: 'input', id: 0, prefix: 'be', full: 'bees', missing: 'es', hint: 'Stinging winged insects which collect nectar and pollen.' },
          { type: 'text', content: " always " },
          { type: 'input', id: 1, prefix: 'po', full: 'pollinate', missing: 'llinate', hint: 'Convey pollen to allow fertilization.' },
          { type: 'text', content: " many " },
          { type: 'input', id: 2, prefix: 'be', full: 'beautiful', missing: 'autiful', hint: 'Pleasing the senses or mind aesthetically.' },
          { type: 'text', content: " " },
          { type: 'input', id: 3, prefix: 'fl', full: 'flowers', missing: 'owers', hint: 'The seed-bearing part of a plant.' },
          { type: 'text', content: " in the warm " },
          { type: 'input', id: 4, prefix: 'su', full: 'summer', missing: 'mmer', hint: 'The warmest season of the year.' },
          { type: 'text', content: "." }
        ]
      ]
    ]
  },
  "Hard": {
    1: [
      [
        { type: 'text', content: "The " },
        { type: 'input', id: 0, prefix: 'In', full: 'Industrial', missing: 'dustrial', hint: 'Relating to or characterized by industry.' },
        { type: 'text', content: " " },
        { type: 'input', id: 1, prefix: 'Re', full: 'Revolution', missing: 'volution', hint: 'A forcible overthrow of a government or social order, in favor of a new system.' },
        { type: 'text', content: " " },
        { type: 'input', id: 2, prefix: 'tr', full: 'transformed', missing: 'ansformed', hint: 'Make a thorough or dramatic change in the form, appearance, or character of.' },
        { type: 'text', content: " the " },
        { type: 'input', id: 3, prefix: 'gl', full: 'global', missing: 'obal', hint: 'Relating to the whole world; worldwide.' },
        { type: 'text', content: " " },
        { type: 'input', id: 4, prefix: 'ec', full: 'economy', missing: 'onomy', hint: 'The wealth and resources of a country or region.' },
        { type: 'text', content: "." }
      ]
    ],
    2: [
      [
        { type: 'text', content: "The strategic " },
        { type: 'input', id: 0, prefix: 'st', full: 'strategic', missing: 'rategic', hint: 'Relating to the identification of long-term or overall aims and interests and the means of achieving them.' },
        { type: 'text', content: " " },
        { type: 'input', id: 1, prefix: 'ov', full: 'overhaul', missing: 'erhaul', hint: 'A thorough examination of machinery or a system, with repairs or changes made if necessary.' },
        { type: 'text', content: " of " },
        { type: 'input', id: 2, prefix: 'gl', full: 'global', missing: 'obal', hint: 'Relating to the whole world; worldwide.' },
        { type: 'text', content: " " },
        { type: 'input', id: 3, prefix: 'lo', full: 'logistics', missing: 'gistics', hint: 'The detailed coordination of a complex operation involving many people, facilities, or supplies.' },
        { type: 'text', content: " is absolutely " },
        { type: 'input', id: 4, prefix: 'ne', full: 'necessary', missing: 'cessary', hint: 'Required to be done, achieved, or present; needed to be a particular way.' },
        { type: 'text', content: " to address international complexity. " },
        { type: 'input', id: 5, prefix: 'Co', full: 'Companies', missing: 'ompanies', hint: 'A commercial business.' },
        { type: 'text', content: " " },
        { type: 'input', id: 6, prefix: 'mu', full: 'must', missing: 'st', hint: 'Be obliged to; should.' },
        { type: 'text', content: " quickly " },
        { type: 'input', id: 7, prefix: 'ad', full: 'adapt', missing: 'apt', hint: 'Make (something) suitable for a new use or purpose; modify.' },
        { type: 'text', content: " to " },
        { type: 'input', id: 8, prefix: 'sh', full: 'shifting', missing: 'ifting', hint: 'Changing, especially in a way that is not continuous or predictable.' },
        { type: 'text', content: " " },
        { type: 'input', id: 9, prefix: 'ma', full: 'market', missing: 'rket', hint: 'A regular gathering of people for the purchase and sale of provisions, livestock, and other goods.' },
        { type: 'text', content: " " },
        { type: 'input', id: 10, prefix: 'de', full: 'demands', missing: 'emands', hint: 'An insistent and peremptory request, made as if by right.' },
        { type: 'text', content: " worldwide. " },
        { type: 'input', id: 11, prefix: 'In', full: 'Innovation', missing: 'novation', hint: 'The action or process of innovating.' },
        { type: 'text', content: " in " },
        { type: 'input', id: 12, prefix: 'su', full: 'supply', missing: 'pply', hint: 'A stock of a resource from which a person or organization can be provided with the amount needed.' },
        { type: 'text', content: " " },
        { type: 'input', id: 13, prefix: 'ch', full: 'chain', missing: 'ain', hint: 'A series of relevant things or people.' },
        { type: 'text', content: " " },
        { type: 'input', id: 14, prefix: 'ma', full: 'management', missing: 'nagement', hint: 'The process of dealing with or controlling things or people.' },
        { type: 'text', content: " " },
        { type: 'input', id: 15, prefix: 'ca', full: 'can', missing: 'an', hint: 'Be able to.' },
        { type: 'text', content: " " },
        { type: 'input', id: 16, prefix: 'pr', full: 'provide', missing: 'ovide', hint: 'Make available for use; supply.' },
        { type: 'text', content: " a significant " },
        { type: 'input', id: 17, prefix: 'co', full: 'competitive', missing: 'mpetitive', hint: 'Relating to or characterized by competition.' },
        { type: 'text', content: " " },
        { type: 'input', id: 18, prefix: 'ad', full: 'advantage', missing: 'vantage', hint: 'A condition or circumstance that puts one in a favorable or superior position.' },
        { type: 'text', content: " in a crowded market. " },
        { type: 'input', id: 19, prefix: 'Fi', full: 'Finally', missing: 'nally', hint: 'After a long time, typically when there has been difficulty or delay.' },
        { type: 'text', content: ", " },
        { type: 'input', id: 20, prefix: 'di', full: 'digital', missing: 'gital', hint: '(Of signals or data) expressed as series of the digits 0 and 1.' },
        { type: 'text', content: " " },
        { type: 'input', id: 21, prefix: 'tr', full: 'transformation', missing: 'ansformation', hint: 'A thorough or dramatic change in form or appearance.' },
        { type: 'text', content: " is " },
        { type: 'input', id: 22, prefix: 're', full: 'reshaping', missing: 'eshaping', hint: 'Shape (something) differently or again.' },
        { type: 'text', content: " the " },
        { type: 'input', id: 23, prefix: 'en', full: 'entire', missing: 'tire', hint: 'With no part left out; whole.' },
        { type: 'text', content: " " },
        { type: 'input', id: 24, prefix: 'in', full: 'industry', missing: 'dustry', hint: 'Economic activity concerned with the processing of raw materials and manufacture of goods in factories.' },
        { type: 'text', content: " by introducing automated processes. Leaders are now focusing on data-driven decision-making to optimize efficiency." }
      ]
    ],
    3: [
      // Exercise 1: 3 Passages
      [
        [
          { type: 'text', content: "The envelope of gases surrounding the earth, known as the " },
          { type: 'input', id: 0, prefix: 'at', full: 'atmosphere', missing: 'mosphere', hint: 'The envelope of gases surrounding the earth.' },
          { type: 'text', content: ", is " },
          { type: 'input', id: 1, prefix: 'cr', full: 'crucial', missing: 'ucial', hint: 'Decisive or critical, especially in the success or failure of something.' },
          { type: 'text', content: " for " },
          { type: 'input', id: 2, prefix: 'su', full: 'supporting', missing: 'pporting', hint: 'Bearing the weight of or providing assistance to.' },
          { type: 'text', content: " human " },
          { type: 'input', id: 3, prefix: 'li', full: 'life', missing: 'fe', hint: 'The condition that distinguishes animals and plants from inorganic matter.' },
          { type: 'text', content: " on our " },
          { type: 'input', id: 4, prefix: 'pl', full: 'planet', missing: 'anet', hint: 'A celestial body moving in an elliptical orbit round a star.' },
          { type: 'text', content: "." }
        ],
        [
          { type: 'text', content: "Green " },
          { type: 'input', id: 0, prefix: 'pl', full: 'plants', missing: 'ants', hint: 'Living organisms of the vegetable kingdom.' },
          { type: 'text', content: " " },
          { type: 'input', id: 1, prefix: 'pr', full: 'produce', missing: 'oduce', hint: 'Make or manufacture from components or raw materials.' },
          { type: 'text', content: " fresh " },
          { type: 'input', id: 2, prefix: 'ox', full: 'oxygen', missing: 'ygen', hint: 'A colorless, odorless reactive gas.' },
          { type: 'text', content: " through the natural process of " },
          { type: 'input', id: 3, prefix: 'ph', full: 'photosynthesis', missing: 'otosynthesis', hint: 'The process by which green plants use sunlight to synthesize foods.' },
          { type: 'text', content: " to " },
          { type: 'input', id: 4, prefix: 'cl', full: 'clean', missing: 'ean', hint: 'Free from dirt, marks, or stains.' },
          { type: 'text', content: " the air." }
        ],
        [
          { type: 'text', content: "Warm " },
          { type: 'input', id: 0, prefix: 'wa', full: 'water', missing: 'ter', hint: 'A colorless, transparent, odorless liquid.' },
          { type: 'text', content: " " },
          { type: 'input', id: 1, prefix: 'ev', full: 'evaporates', missing: 'aporates', hint: 'Turn from liquid into vapor.' },
          { type: 'text', content: " from the deep " },
          { type: 'input', id: 2, prefix: 'oc', full: 'ocean', missing: 'ean', hint: 'A very large expanse of sea.' },
          { type: 'text', content: " and " },
          { type: 'input', id: 3, prefix: 'fo', full: 'forms', missing: 'rms', hint: 'Bring together parts or combine to create something.' },
          { type: 'text', content: " white " },
          { type: 'input', id: 4, prefix: 'cl', full: 'clouds', missing: 'ouds', hint: 'A visible mass of condensed water vapor floating in the atmosphere.' },
          { type: 'text', content: " in the sky." }
        ]
      ],
      // Exercise 2: 3 Passages
      [
        [
          { type: 'text', content: "Bright " },
          { type: 'input', id: 0, prefix: 'su', full: 'sunlight', missing: 'nlight', hint: 'Light from the sun.' },
          { type: 'text', content: " " },
          { type: 'input', id: 1, prefix: 'wa', full: 'warms', missing: 'arms', hint: 'Make or become warm.' },
          { type: 'text', content: " the cold " },
          { type: 'input', id: 2, prefix: 'ea', full: 'earth', missing: 'rth', hint: 'The planet on which we live.' },
          { type: 'text', content: " and " },
          { type: 'input', id: 3, prefix: 'he', full: 'helps', missing: 'lps', hint: 'Make it easier for someone to do something.' },
          { type: 'text', content: " plants " },
          { type: 'input', id: 4, prefix: 'gr', full: 'grow', missing: 'ow', hint: 'Undergo natural development by increasing in size.' },
          { type: 'text', content: " tall." }
        ],
        [
          { type: 'text', content: "The " },
          { type: 'input', id: 0, prefix: 'co', full: 'cool', missing: 'ol', hint: 'Fairly cold; not warm.' },
          { type: 'text', content: " " },
          { type: 'input', id: 1, prefix: 'wi', full: 'wind', missing: 'nd', hint: 'The perceptible natural movement of the air.' },
          { type: 'text', content: " is " },
          { type: 'input', id: 2, prefix: 'mo', full: 'moving', missing: 'oving', hint: 'In motion.' },
          { type: 'text', content: " fresh " },
          { type: 'input', id: 3, prefix: 'ai', full: 'air', missing: 'r', hint: 'The invisible gaseous substance surrounding the earth.' },
          { type: 'text', content: " around our green " },
          { type: 'input', id: 4, prefix: 'ga', full: 'garden', missing: 'rden', hint: 'A piece of ground adjoining a house, used for growing flowers, fruit, or vegetables.' },
          { type: 'text', content: "." }
        ],
        [
          { type: 'text', content: "A " },
          { type: 'input', id: 0, prefix: 'fa', full: 'falling', missing: 'lling', hint: 'Moving downward of its own weight.' },
          { type: 'text', content: " " },
          { type: 'input', id: 1, prefix: 'ra', full: 'rain', missing: 'in', hint: 'Moisture condensed from the atmosphere that falls in separate drops.' },
          { type: 'text', content: " always " },
          { type: 'input', id: 2, prefix: 'fe', full: 'feeds', missing: 'eds', hint: 'Give food to or supply.' },
          { type: 'text', content: " the wide " },
          { type: 'input', id: 3, prefix: 'ri', full: 'rivers', missing: 'vers', hint: 'Large natural streams of water flowing in a channel to the sea.' },
          { type: 'text', content: " of the dry " },
          { type: 'input', id: 4, prefix: 'ea', full: 'earth', missing: 'rth', hint: 'The planet on which we live.' },
          { type: 'text', content: "." }
        ]
      ],
      // Exercise 3: 3 Passages
      [
        [
          { type: 'text', content: "Rich " },
          { type: 'input', id: 0, prefix: 'so', full: 'soil', missing: 'il', hint: 'The upper layer of earth in which plants grow.' },
          { type: 'text', content: " always " },
          { type: 'input', id: 1, prefix: 'pr', full: 'provides', missing: 'ovides', hint: 'Make available for use; supply.' },
          { type: 'text', content: " essential " },
          { type: 'input', id: 2, prefix: 'nu', full: 'nutrients', missing: 'trients', hint: 'Substances that provide nourishment essential for growth.' },
          { type: 'text', content: " for " },
          { type: 'input', id: 3, prefix: 'gr', full: 'growing', missing: 'owing', hint: 'Undergo natural development by increasing in size.' },
          { type: 'text', content: " green " },
          { type: 'input', id: 4, prefix: 'pl', full: 'plants', missing: 'ants', hint: 'Living organisms of the vegetable kingdom.' },
          { type: 'text', content: " in spring." }
        ],
        [
          { type: 'text', content: "Green " },
          { type: 'input', id: 0, prefix: 'tr', full: 'trees', missing: 'ees', hint: 'Woody perennial plants.' },
          { type: 'text', content: " constantly " },
          { type: 'input', id: 1, prefix: 'ab', full: 'absorb', missing: 'sorb', hint: 'Take in or soak up energy, liquid, or other substance.' },
          { type: 'text', content: " " },
          { type: 'input', id: 2, prefix: 'ha', full: 'harmful', missing: 'rmful', hint: 'Causing or likely to cause harm.' },
          { type: 'text', content: " " },
          { type: 'input', id: 3, prefix: 'ca', full: 'carbon', missing: 'rbon', hint: 'A chemical element that is the main constituent of coal, petroleum, etc.' },
          { type: 'text', content: " from the dirty " },
          { type: 'input', id: 4, prefix: 'ai', full: 'air', missing: 'r', hint: 'The invisible gaseous substance surrounding the earth.' },
          { type: 'text', content: " of cities." }
        ],
        [
          { type: 'text', content: "Busy " },
          { type: 'input', id: 0, prefix: 'be', full: 'bees', missing: 'es', hint: 'Stinging winged insects which collect nectar and pollen.' },
          { type: 'text', content: " always " },
          { type: 'input', id: 1, prefix: 'po', full: 'pollinate', missing: 'llinate', hint: 'Convey pollen to allow fertilization.' },
          { type: 'text', content: " many " },
          { type: 'input', id: 2, prefix: 'be', full: 'beautiful', missing: 'autiful', hint: 'Pleasing the senses or mind aesthetically.' },
          { type: 'text', content: " " },
          { type: 'input', id: 3, prefix: 'fl', full: 'flowers', missing: 'owers', hint: 'The seed-bearing part of a plant.' },
          { type: 'text', content: " in the warm " },
          { type: 'input', id: 4, prefix: 'su', full: 'summer', missing: 'mmer', hint: 'The warmest season of the year.' },
          { type: 'text', content: "." }
        ]
      ]
    ]
  },
  "Advanced": {
    1: [
      [
        { type: 'text', content: "The " },
        { type: 'input', id: 0, prefix: 'sc', full: 'scientific', missing: 'ientific', hint: 'Based on or characterized by the methods and principles of science.' },
        { type: 'text', content: " " },
        { type: 'input', id: 1, prefix: 'me', full: 'method', missing: 'thod', hint: 'A particular form of procedure for accomplishing or approaching something.' },
        { type: 'text', content: " " },
        { type: 'input', id: 2, prefix: 're', full: 'requires', missing: 'equires', hint: 'Need for a particular purpose.' },
        { type: 'text', content: " " },
        { type: 'input', id: 3, prefix: 'ca', full: 'careful', missing: 'reful', hint: 'Making sure of avoiding potential danger, mishap, or harm.' },
        { type: 'text', content: " " },
        { type: 'input', id: 4, prefix: 'ob', full: 'observation', missing: 'servation', hint: 'The action or process of observing something or someone carefully.' },
        { type: 'text', content: " and systematic experimentation to validate complex hypotheses. Researchers must maintain " },
        { type: 'input', id: 5, prefix: 'ob', full: 'objectivity', missing: 'jectivity', hint: 'The quality of being objective.' },
        { type: 'text', content: " throughout the entire process to ensure the integrity of their findings. Data collection should be " },
        { type: 'input', id: 6, prefix: 'pr', full: 'precise', missing: 'ecise', hint: 'Marked by exactness and accuracy of expression or detail.' },
        { type: 'text', content: " and well-documented to allow for future replication by other scientists. Analyzing results often involves " },
        { type: 'input', id: 7, prefix: 'so', full: 'sophisticated', missing: 'phisticated', hint: 'Developed to a high degree of complexity.' },
        { type: 'text', content: " statistical tools that help identify significant patterns. Finally, the peer review process provides a " },
        { type: 'input', id: 8, prefix: 'cr', full: 'critical', missing: 'itical', hint: 'Expressing adverse or disapproving comments or judgments.' },
        { type: 'text', content: " evaluation of the research before it is published in academic journals." }
      ],
      [
        { type: 'text', content: "The " },
        { type: 'input', id: 0, prefix: 'th', full: 'theory', missing: 'heory', hint: 'A supposition or a system of ideas intended to explain something.' },
        { type: 'text', content: " of " },
        { type: 'input', id: 1, prefix: 'ev', full: 'evolution', missing: 'olution', hint: 'The process by which different kinds of living organisms are thought to have developed and diversified.' },
        { type: 'text', content: " " },
        { type: 'input', id: 2, prefix: 'ex', full: 'explains', missing: 'xplains', hint: 'Make clear by describing in more detail.' },
        { type: 'text', content: " the " },
        { type: 'input', id: 3, prefix: 'di', full: 'diversity', missing: 'iversity', hint: 'The state of being diverse; variety.' },
        { type: 'text', content: " of " },
        { type: 'input', id: 4, prefix: 'li', full: 'life', missing: 'fe', hint: 'The condition that distinguishes animals and plants from inorganic matter.' },
        { type: 'text', content: " through the mechanism of natural selection over millions of years. Organisms that are better " },
        { type: 'input', id: 5, prefix: 'ad', full: 'adapted', missing: 'apted', hint: 'Make (something) suitable for a new use or purpose.' },
        { type: 'text', content: " to their environment have a higher probability of survival and reproduction. Over time, these " },
        { type: 'input', id: 6, prefix: 'ad', full: 'advantageous', missing: 'vantageous', hint: 'Involving or creating favorable circumstances.' },
        { type: 'text', content: " traits become more common within the population, leading to gradual changes. Fossil records provide " },
        { type: 'input', id: 7, prefix: 'su', full: 'substantial', missing: 'bstantial', hint: 'Of considerable importance, size, or worth.' },
        { type: 'text', content: " evidence for the historical development of various species across different eras. Modern genetics has further " },
        { type: 'input', id: 8, prefix: 'co', full: 'confirmed', missing: 'nfirmed', hint: 'Establish the truth or correctness of.' },
        { type: 'text', content: " these evolutionary relationships by comparing the DNA sequences of diverse organisms." }
      ]
    ],
    2: [
      [
        { type: 'text', content: "The rapid " },
        { type: 'input', id: 0, prefix: 'ur', full: 'urbanization', missing: 'banization', hint: 'The process of making an area more urban.' },
        { type: 'text', content: " of the modern " },
        { type: 'input', id: 1, prefix: 'me', full: 'metropolis', missing: 'tropolis', hint: 'A very large and busy city.' },
        { type: 'text', content: " has led to " },
        { type: 'input', id: 2, prefix: 'si', full: 'significant', missing: 'gnificant', hint: 'Sufficiently great or important to be worthy of attention.' },
        { type: 'text', content: " " },
        { type: 'input', id: 3, prefix: 'ch', full: 'challenges', missing: 'allenges', hint: 'A task or situation that tests someone\'s abilities.' },
        { type: 'text', content: " in maintaining aging " },
        { type: 'input', id: 4, prefix: 'in', full: 'infrastructure', missing: 'frastructure', hint: 'The basic physical and organizational structures and facilities needed for the operation of a society or enterprise.' },
        { type: 'text', content: " and managing high population density. Professional city " },
        { type: 'input', id: 5, prefix: 'pl', full: 'planners', missing: 'lanners', hint: 'A person who makes plans for something.' },
        { type: 'text', content: " must carefully " },
        { type: 'input', id: 6, prefix: 'co', full: 'consider', missing: 'nsider', hint: 'Think carefully about (something), typically before making a decision.' },
        { type: 'text', content: " the " },
        { type: 'input', id: 7, prefix: 'en', full: 'environmental', missing: 'vironmental', hint: 'Relating to the natural world and the impact of human activity on its condition.' },
        { type: 'text', content: " " },
        { type: 'input', id: 8, prefix: 'im', full: 'impact', missing: 'pact', hint: 'The action of one object coming forcibly into contact with another.' },
        { type: 'text', content: " of urban " },
        { type: 'input', id: 9, prefix: 'ex', full: 'expansion', missing: 'pansion', hint: 'The action of becoming larger or more extensive.' },
        { type: 'text', content: " to prevent the loss of vital green spaces. " },
        { type: 'input', id: 10, prefix: 'Su', full: 'Sustainable', missing: 'stainable', hint: 'Able to be maintained at a certain rate or level.' },
        { type: 'text', content: " " },
        { type: 'input', id: 11, prefix: 'de', full: 'development', missing: 'velopment', hint: 'The process of developing or being developed.' },
        { type: 'text', content: " is absolutely " },
        { type: 'input', id: 12, prefix: 'es', full: 'essential', missing: 'sential', hint: 'Absolutely necessary; extremely important.' },
        { type: 'text', content: " for ensuring a high quality of life for " },
        { type: 'input', id: 13, prefix: 'fu', full: 'future', missing: 'ture', hint: 'The time or a period of time following the moment of speaking or writing.' },
        { type: 'text', content: " " },
        { type: 'input', id: 14, prefix: 'ge', full: 'generations', missing: 'nerations', hint: 'All of the people born and living at about the same time.' },
        { type: 'text', content: " while minimizing resource consumption. Public " },
        { type: 'input', id: 15, prefix: 'tr', full: 'transportation', missing: 'ansportation', hint: 'The action of transporting someone or something or the process of being transported.' },
        { type: 'text', content: " " },
        { type: 'input', id: 16, prefix: 'sy', full: 'systems', missing: 'stems', hint: 'A set of connected things or parts forming a complex whole.' },
        { type: 'text', content: " need urgent " },
        { type: 'input', id: 17, prefix: 'mo', full: 'modernization', missing: 'dernization', hint: 'The process of adapting something to modern needs or habits.' },
        { type: 'text', content: " to " },
        { type: 'input', id: 18, prefix: 'ac', full: 'accommodate', missing: 'ccommodate', hint: '(Of physical space) provide lodging or sufficient space for.' },
        { type: 'text', content: " the " },
        { type: 'input', id: 19, prefix: 'gr', full: 'growing', missing: 'owing', hint: '(Of a living thing) undergoing natural development by increasing in size and changing physically.' },
        { type: 'text', content: " " },
        { type: 'input', id: 20, prefix: 'po', full: 'population', missing: 'pulation', hint: 'All the inhabitants of a particular town, area, or country.' },
        { type: 'text', content: " and reduce traffic congestion in city centers. These innovative initiatives aim to create a more balanced and livable environment for everyone by integrating smart technology into daily life." }
      ],
      [
        { type: 'text', content: "Genetic " },
        { type: 'input', id: 0, prefix: 'mo', full: 'modification', missing: 'dification', hint: 'The action of modifying something.' },
        { type: 'text', content: " is a highly " },
        { type: 'input', id: 1, prefix: 'co', full: 'controversial', missing: 'ntroversial', hint: 'Giving rise or likely to give rise to public disagreement.' },
        { type: 'text', content: " " },
        { type: 'input', id: 2, prefix: 'su', full: 'subject', missing: 'bject', hint: 'A person or thing that is being discussed, described, or dealt with.' },
        { type: 'text', content: " in " },
        { type: 'input', id: 3, prefix: 'bi', full: 'biotechnology', missing: 'otechnology', hint: 'The exploitation of biological processes for industrial and other purposes.' },
        { type: 'text', content: " that sparks intense debate among scientists and the general public. Specialized researchers can now precisely " },
        { type: 'input', id: 4, prefix: 'al', full: 'alter', missing: 'ter', hint: 'Change or cause to change in character or composition.' },
        { type: 'text', content: " the " },
        { type: 'input', id: 5, prefix: 'ge', full: 'genetic', missing: 'netic', hint: 'Relating to genes or heredity.' },
        { type: 'text', content: " " },
        { type: 'input', id: 6, prefix: 'ma', full: 'makeup', missing: 'keup', hint: 'The composition or constitution of something.' },
        { type: 'text', content: " of " },
        { type: 'input', id: 7, prefix: 'or', full: 'organisms', missing: 'ganisms', hint: 'An individual animal, plant, or single-celled life form.' },
        { type: 'text', content: " to enhance specific traits or eliminate undesirable characteristics. This advanced " },
        { type: 'input', id: 8, prefix: 'te', full: 'technique', missing: 'chnique', hint: 'A way of carrying out a particular task.' },
        { type: 'text', content: " has " },
        { type: 'input', id: 9, prefix: 'po', full: 'potential', missing: 'tential', hint: 'Having or showing the capacity to become or develop into something in the future.' },
        { type: 'text', content: " " },
        { type: 'input', id: 10, prefix: 'be', full: 'benefits', missing: 'nefits', hint: 'An advantage or profit gained from something.' },
        { type: 'text', content: " for " },
        { type: 'input', id: 11, prefix: 'ag', full: 'agriculture', missing: 'riculture', hint: 'The science or practice of farming.' },
        { type: 'text', content: " and " },
        { type: 'input', id: 12, prefix: 'me', full: 'medicine', missing: 'dicine', hint: 'The science or practice of the diagnosis, treatment, and prevention of disease.' },
        { type: 'text', content: ", such as creating drought-resistant crops and developing targeted therapies. However, " },
        { type: 'input', id: 13, prefix: 'et', full: 'ethical', missing: 'hical', hint: 'Relating to moral principles.' },
        { type: 'text', content: " " },
        { type: 'input', id: 14, prefix: 'co', full: 'concerns', missing: 'ncerns', hint: 'Anxiety; worry.' },
        { type: 'text', content: " frequently " },
        { type: 'input', id: 15, prefix: 'ar', full: 'arise', missing: 'ise', hint: '(Of a problem, opportunity, or situation) emerge; become apparent.' },
        { type: 'text', content: " " },
        { type: 'input', id: 16, prefix: 're', full: 'regarding', missing: 'garding', hint: 'In respect of; concerning.' },
        { type: 'text', content: " " },
        { type: 'input', id: 17, prefix: 'un', full: 'unintended', missing: 'intended', hint: 'Not planned or meant.' },
        { type: 'text', content: " " },
        { type: 'input', id: 18, prefix: 'co', full: 'consequences', missing: 'nsequences', hint: 'A result or effect of an action or condition.' },
        { type: 'text', content: " and the long-term effects on global biodiversity. Rigorous " },
        { type: 'input', id: 19, prefix: 're', full: 'regulation', missing: 'gulation', hint: 'A rule or directive made and maintained by an authority.' },
        { type: 'text', content: " and transparent oversight are strictly " },
        { type: 'input', id: 20, prefix: 'ne', full: 'necessary', missing: 'cessary', hint: 'Required to be done, achieved, or present; needed; essential.' },
        { type: 'text', content: " to ensure that these powerful technologies are used responsibly and safely." }
      ],
      [
        { type: 'text', content: "The " },
        { type: 'input', id: 0, prefix: 'in', full: 'integration', missing: 'tegration', hint: 'The action or process of integrating.' },
        { type: 'text', content: " of " },
        { type: 'input', id: 1, prefix: 'ar', full: 'artificial', missing: 'tificial', hint: 'Made or produced by human beings rather than occurring naturally.' },
        { type: 'text', content: " " },
        { type: 'input', id: 2, prefix: 'in', full: 'intelligence', missing: 'telligence', hint: 'The ability to acquire and apply knowledge and skills.' },
        { type: 'text', content: " into modern " },
        { type: 'input', id: 3, prefix: 'he', full: 'healthcare', missing: 'althcare', hint: 'The organized provision of medical care to individuals or a community.' },
        { type: 'text', content: " systems has " },
        { type: 'input', id: 4, prefix: 're', full: 'revolutionized', missing: 'volutionized', hint: 'Changed radically or fundamentally.' },
        { type: 'text', content: " diagnostic " },
        { type: 'input', id: 5, prefix: 'ac', full: 'accuracy', missing: 'curacy', hint: 'The quality or state of being correct or precise.' },
        { type: 'text', content: " and patient outcomes. Machine learning " },
        { type: 'input', id: 6, prefix: 'al', full: 'algorithms', missing: 'lgorithms', hint: 'A process or set of rules to be followed in calculations or other problem-solving operations.' },
        { type: 'text', content: " can " },
        { type: 'input', id: 7, prefix: 'an', full: 'analyze', missing: 'alyze', hint: 'Examine methodically and in detail.' },
        { type: 'text', content: " vast " },
        { type: 'input', id: 8, prefix: 'da', full: 'datasets', missing: 'tasets', hint: 'A collection of related sets of information.' },
        { type: 'text', content: " of medical imaging to " },
        { type: 'input', id: 9, prefix: 'de', full: 'detect', missing: 'tect', hint: 'Discover or identify the presence or existence of.' },
        { type: 'text', content: " subtle " },
        { type: 'input', id: 10, prefix: 'an', full: 'anomalies', missing: 'omalies', hint: 'Something that deviates from what is standard, normal, or expected.' },
        { type: 'text', content: " that might be overlooked by human eyes. Furthermore, " },
        { type: 'input', id: 11, prefix: 'pr', full: 'predictive', missing: 'edictive', hint: 'Relating to or having the effect of predicting.' },
        { type: 'text', content: " " },
        { type: 'input', id: 12, prefix: 'an', full: 'analytics', missing: 'alytics', hint: 'The systematic computational analysis of data or statistics.' },
        { type: 'text', content: " help clinicians " },
        { type: 'input', id: 13, prefix: 'id', full: 'identify', missing: 'entify', hint: 'Establish or indicate who or what (someone or something) is.' },
        { type: 'text', content: " patients at high " },
        { type: 'input', id: 14, prefix: 'ri', full: 'risk', missing: 'sk', hint: 'A situation involving exposure to danger.' },
        { type: 'text', content: " of developing " },
        { type: 'input', id: 15, prefix: 'ch', full: 'chronic', missing: 'ronic', hint: '(Of an illness) persisting for a long time or constantly recurring.' },
        { type: 'text', content: " conditions before symptoms even manifest. This " },
        { type: 'input', id: 16, prefix: 'pr', full: 'proactive', missing: 'oactive', hint: '(Of a person, policy, or action) creating or controlling a situation by causing something to happen.' },
        { type: 'text', content: " approach allows for early " },
        { type: 'input', id: 17, prefix: 'in', full: 'intervention', missing: 'tervention', hint: 'The action or process of intervening.' },
        { type: 'text', content: " and more " },
        { type: 'input', id: 18, prefix: 'pe', full: 'personalized', missing: 'rsonalized', hint: 'Design or produce (something) to meet someone\'s individual requirements.' },
        { type: 'text', content: " treatment plans tailored to individual " },
        { type: 'input', id: 19, prefix: 'ge', full: 'genetic', missing: 'netic', hint: 'Relating to genes or heredity.' },
        { type: 'text', content: " profiles. However, the implementation of these technologies raises significant concerns regarding data privacy and the ethical use of patient information. Ensuring robust security measures is paramount to maintaining public trust in digital health initiatives." }
      ],
      [
        { type: 'text', content: "Sustainable " },
        { type: 'input', id: 0, prefix: 'ar', full: 'architecture', missing: 'chitecture', hint: 'The art or practice of designing and constructing buildings.' },
        { type: 'text', content: " focuses on creating buildings that " },
        { type: 'input', id: 1, prefix: 'mi', full: 'minimize', missing: 'nimize', hint: 'Reduce (something, especially something unwanted or unpleasant) to the smallest possible amount or degree.' },
        { type: 'text', content: " their " },
        { type: 'input', id: 2, prefix: 'en', full: 'environmental', missing: 'vironmental', hint: 'Relating to the natural world and the impact of human activity on its condition.' },
        { type: 'text', content: " " },
        { type: 'input', id: 3, prefix: 'fo', full: 'footprint', missing: 'otprint', hint: 'The impact that a particular activity, person, or organization has on the environment.' },
        { type: 'text', content: " through " },
        { type: 'input', id: 4, prefix: 'en', full: 'energy-efficient', missing: 'ergy-efficient', hint: 'Using less energy to provide the same level of performance, comfort, or convenience.' },
        { type: 'text', content: " design and " },
        { type: 'input', id: 5, prefix: 'ec', full: 'eco-friendly', missing: 'o-friendly', hint: 'Not harmful to the environment.' },
        { type: 'text', content: " materials. Architects are increasingly " },
        { type: 'input', id: 6, prefix: 'in', full: 'incorporating', missing: 'corporating', hint: 'Take in or contain (something) as part of a whole; include.' },
        { type: 'text', content: " passive solar " },
        { type: 'input', id: 7, prefix: 'he', full: 'heating', missing: 'ating', hint: 'The action of heating something.' },
        { type: 'text', content: " and natural " },
        { type: 'input', id: 8, prefix: 've', full: 'ventilation', missing: 'ntilation', hint: 'The provision of fresh air to a room, building, etc.' },
        { type: 'text', content: " systems to reduce " },
        { type: 'input', id: 9, prefix: 're', full: 'reliance', missing: 'liance', hint: 'Dependence on or trust in someone or something.' },
        { type: 'text', content: " on mechanical climate control. Additionally, the use of " },
        { type: 'input', id: 10, prefix: 're', full: 'recycled', missing: 'cycled', hint: 'Convert (waste) into reusable material.' },
        { type: 'text', content: " or locally " },
        { type: 'input', id: 11, prefix: 'so', full: 'sourced', missing: 'urced', hint: 'Obtain from a particular source.' },
        { type: 'text', content: " materials helps decrease the " },
        { type: 'input', id: 12, prefix: 'ca', full: 'carbon', missing: 'rbon', hint: 'The chemical element of atomic number 6, a nonmetal which has two main forms (diamond and graphite) and which also occurs in impure form in charcoal, soot, and coal.' },
        { type: 'text', content: " " },
        { type: 'input', id: 13, prefix: 'em', full: 'emissions', missing: 'issions', hint: 'The production and discharge of something, especially gas or radiation.' },
        { type: 'text', content: " associated with construction and transportation. Green roofs and vertical gardens not only improve air quality but also provide " },
        { type: 'input', id: 14, prefix: 'es', full: 'essential', missing: 'sential', hint: 'Absolutely necessary; extremely important.' },
        { type: 'text', content: " " },
        { type: 'input', id: 15, prefix: 'in', full: 'insulation', missing: 'sulation', hint: 'The action of insulating something.' },
        { type: 'text', content: " and urban " },
        { type: 'input', id: 16, prefix: 'bi', full: 'biodiversity', missing: 'odiversity', hint: 'The variety of life in the world or in a particular habitat or ecosystem.' },
        { type: 'text', content: ". These innovative " },
        { type: 'input', id: 17, prefix: 'st', full: 'structures', missing: 'tructures', hint: 'A building or other object constructed from several parts.' },
        { type: 'text', content: " demonstrate that " },
        { type: 'input', id: 18, prefix: 'ae', full: 'aesthetic', missing: 'sthetic', hint: 'Concerned with beauty or the appreciation of beauty.' },
        { type: 'text', content: " beauty and environmental " },
        { type: 'input', id: 19, prefix: 're', full: 'responsibility', missing: 'sponsibility', hint: 'The state or fact of having a duty to deal with something or of having control over someone.' },
        { type: 'text', content: " can coexist harmoniously in the built environment. As urban populations grow, the demand for resilient and sustainable housing solutions continues to escalate globally." }
      ],
      [
        { type: 'text', content: "The prospect of human " },
        { type: 'input', id: 0, prefix: 'co', full: 'colonization', missing: 'lonization', hint: 'The action or process of settling among and establishing control over the indigenous people of an area.' },
        { type: 'text', content: " on Mars has " },
        { type: 'input', id: 1, prefix: 'tr', full: 'transitioned', missing: 'ansitioned', hint: 'Undergo or cause to undergo a process of change.' },
        { type: 'text', content: " from science fiction to a " },
        { type: 'input', id: 2, prefix: 'ta', full: 'tangible', missing: 'ngible', hint: 'Perceptible by touch.' },
        { type: 'text', content: " goal for international space " },
        { type: 'input', id: 3, prefix: 'ag', full: 'agencies', missing: 'encies', hint: 'A business or organization established to provide a particular service, typically one that involves organizing transactions between two other parties.' },
        { type: 'text', content: ". " },
        { type: 'input', id: 4, prefix: 'Ad', full: 'Advancements', missing: 'vancements', hint: 'The process of promoting a cause or plan.' },
        { type: 'text', content: " in " },
        { type: 'input', id: 5, prefix: 'pr', full: 'propulsion', missing: 'opulsion', hint: 'The action of driving or pushing forward.' },
        { type: 'text', content: " technology and " },
        { type: 'input', id: 6, prefix: 'li', full: 'life-support', missing: 'fe-support', hint: 'The provision of medical equipment and treatment that keeps a person alive.' },
        { type: 'text', content: " systems are making long-duration " },
        { type: 'input', id: 7, prefix: 'in', full: 'interplanetary', missing: 'terplanetary', hint: 'Situated or occurring between planets.' },
        { type: 'text', content: " travel more " },
        { type: 'input', id: 8, prefix: 'fe', full: 'feasible', missing: 'asible', hint: 'Possible to do easily or conveniently.' },
        { type: 'text', content: " than ever before. Establishing a " },
        { type: 'input', id: 9, prefix: 'se', full: 'self-sustaining', missing: 'lf-sustaining', hint: 'Able to continue in a healthy state without outside assistance.' },
        { type: 'text', content: " colony requires overcoming " },
        { type: 'input', id: 10, prefix: 'im', full: 'immense', missing: 'mense', hint: 'Extremely large or great, especially in scale or degree.' },
        { type: 'text', content: " " },
        { type: 'input', id: 11, prefix: 'ch', full: 'challenges', missing: 'allenges', hint: 'A task or situation that tests someone\'s abilities.' },
        { type: 'text', content: ", including " },
        { type: 'input', id: 12, prefix: 'ra', full: 'radiation', missing: 'diation', hint: 'The emission of energy as electromagnetic waves or as moving subatomic particles.' },
        { type: 'text', content: " " },
        { type: 'input', id: 13, prefix: 'pr', full: 'protection', missing: 'otection', hint: 'The action of protecting someone or something.' },
        { type: 'text', content: " and resource " },
        { type: 'input', id: 14, prefix: 'ut', full: 'utilization', missing: 'ilization', hint: 'The action of making practical and effective use of something.' },
        { type: 'text', content: " on the Martian surface. Scientists are researching ways to " },
        { type: 'input', id: 15, prefix: 'ex', full: 'extract', missing: 'tract', hint: 'Remove or take out, especially by effort or force.' },
        { type: 'text', content: " " },
        { type: 'input', id: 16, prefix: 'ox', full: 'oxygen', missing: 'ygen', hint: 'A colorless, odorless reactive gas, the life-supporting component of the air.' },
        { type: 'text', content: " and water from the planet\'s thin " },
        { type: 'input', id: 17, prefix: 'at', full: 'atmosphere', missing: 'mosphere', hint: 'The envelope of gases surrounding the earth or another planet.' },
        { type: 'text', content: " and frozen soil. International " },
        { type: 'input', id: 18, prefix: 'co', full: 'collaboration', missing: 'llaboration', hint: 'The action of working with someone to produce or create something.' },
        { type: 'text', content: " is " },
        { type: 'input', id: 19, prefix: 'vi', full: 'vital', missing: 'tal', hint: 'Absolutely necessary or important; essential.' },
        { type: 'text', content: " for sharing the astronomical costs and technical expertise needed for such ambitious missions. The exploration of the cosmos not only expands our scientific knowledge but also inspires future generations to pursue careers in STEM fields." }
      ],
      [
        { type: 'text', content: "The " },
        { type: 'input', id: 0, prefix: 'pe', full: 'pervasive', missing: 'rvasive', hint: '(Especially of an unwelcome influence or physical effect) spreading widely throughout an area or a group of people.' },
        { type: 'text', content: " " },
        { type: 'input', id: 1, prefix: 'in', full: 'influence', missing: 'fluence', hint: 'The capacity to have an effect on the character, development, or behavior of someone or something.' },
        { type: 'text', content: " of social media " },
        { type: 'input', id: 2, prefix: 'pl', full: 'platforms', missing: 'atforms', hint: 'A raised level surface on which people or things can stand.' },
        { type: 'text', content: " has " },
        { type: 'input', id: 3, prefix: 'fu', full: 'fundamentally', missing: 'ndamentally', hint: 'In central or primary respects.' },
        { type: 'text', content: " " },
        { type: 'input', id: 4, prefix: 'al', full: 'altered', missing: 'tered', hint: 'Change or cause to change in character or composition.' },
        { type: 'text', content: " the way " },
        { type: 'input', id: 5, prefix: 'in', full: 'individuals', missing: 'dividuals', hint: 'A single human being as distinct from a group, class, or family.' },
        { type: 'text', content: " " },
        { type: 'input', id: 6, prefix: 'in', full: 'interact', missing: 'teract', hint: 'Act in such a way as to have an effect on another; exert mutual influence.' },
        { type: 'text', content: " and " },
        { type: 'input', id: 7, prefix: 'pe', full: 'perceive', missing: 'rceive', hint: 'Become aware or conscious of (something); come to realize or understand.' },
        { type: 'text', content: " themselves in the digital age. " },
        { type: 'input', id: 8, prefix: 'Al', full: 'Algorithms', missing: 'gorithms', hint: 'A process or set of rules to be followed in calculations or other problem-solving operations.' },
        { type: 'text', content: " are designed to " },
        { type: 'input', id: 9, prefix: 'ma', full: 'maximize', missing: 'ximize', hint: 'Make as large or great as possible.' },
        { type: 'text', content: " user " },
        { type: 'input', id: 10, prefix: 'en', full: 'engagement', missing: 'gagement', hint: 'The action of engaging or being engaged.' },
        { type: 'text', content: " by delivering " },
        { type: 'input', id: 11, prefix: 'pe', full: 'personalized', missing: 'rsonalized', hint: 'Design or produce (something) to meet someone\'s individual requirements.' },
        { type: 'text', content: " content that often " },
        { type: 'input', id: 12, prefix: 're', full: 'reinforces', missing: 'inforces', hint: 'Strengthen or support (an object or substance), especially with additional material.' },
        { type: 'text', content: " existing " },
        { type: 'input', id: 13, prefix: 'bi', full: 'biases', missing: 'ases', hint: 'Prejudice in favor of or against one thing, person, or group compared with another.' },
        { type: 'text', content: " and " },
        { type: 'input', id: 14, prefix: 'ec', full: 'echo', missing: 'cho', hint: 'A sound or series of sounds caused by the reflection of sound waves.' },
        { type: 'text', content: " " },
        { type: 'input', id: 15, prefix: 'ch', full: 'chambers', missing: 'ambers', hint: 'A large room used for formal or public events.' },
        { type: 'text', content: ". This constant " },
        { type: 'input', id: 16, prefix: 'ex', full: 'exposure', missing: 'posure', hint: 'The state of being exposed to contact with something.' },
        { type: 'text', content: " to curated lifestyles can lead to increased feelings of " },
        { type: 'input', id: 17, prefix: 'in', full: 'inadequacy', missing: 'adequacy', hint: 'The state or quality of being inadequate; lack of the quantity or quality required.' },
        { type: 'text', content: " and social comparison among younger demographics. Psychologists are studying the long-term effects of digital " },
        { type: 'input', id: 18, prefix: 'co', full: 'connectivity', missing: 'nnectivity', hint: 'The state or extent of being connected or interconnected.' },
        { type: 'text', content: " on mental health and " },
        { type: 'input', id: 19, prefix: 'co', full: 'cognitive', missing: 'gnitive', hint: 'Relating to cognition.' },
        { type: 'text', content: " development. It is essential to develop digital " },
        { type: 'input', id: 20, prefix: 'li', full: 'literacy', missing: 'teracy', hint: 'The ability to read and write.' },
        { type: 'text', content: " skills to navigate the complexities of online information and maintain a healthy relationship with technology. Balancing virtual interactions with real-world connections is crucial for overall well-being and social cohesion." }
      ]
    ]
  }
};

export const DAILY_LIFE_CONTENT: any = {
  "Easy": {
    1: [
      {
        title: "Morning Routine",
        text: "I wake up at 7:00 AM every day. First, I brush my teeth and wash my face. Then, I have breakfast. I usually eat cereal or toast. After breakfast, I get dressed and go to work.",
        questions: [
          { id: 1, question: "What time do I wake up?", options: ["6:00 AM", "7:00 AM", "8:00 AM"], correct: "7:00 AM", hint: "Check the first sentence." },
          { id: 2, question: "What do I do first?", options: ["Have breakfast", "Brush teeth", "Get dressed"], correct: "Brush teeth", hint: "Look for the first activity mentioned." }
        ]
      },
      {
        title: "Catching the Bus",
        text: "I walk to the bus stop near my house at 8:15 AM. The blue bus arrives ten minutes later. I pay my fare with a transit card and sit near a window to read the morning newspaper during the commute.",
        questions: [
          { id: 1, question: "What color is the bus?", options: ["Yellow", "Blue", "Green"], correct: "Blue", hint: "Look at the second sentence." },
          { id: 2, question: "How does the speaker pay the fare?", options: ["With cash", "With a transit card", "With a phone app"], correct: "With a transit card", hint: "Check the third sentence." }
        ]
      },
      {
        title: "Grocery Shopping",
        text: "Every Tuesday evening, I make a shopping list and go to the local market. I always buy fresh fruits like apples and bananas. I also pick up milk and a loaf of whole wheat bread before heading to the checkout lane.",
        questions: [
          { id: 1, question: "When does the author go grocery shopping?", options: ["Monday morning", "Tuesday evening", "Friday afternoon"], correct: "Tuesday evening", hint: "Check the first sentence." },
          { id: 2, question: "What kind of bread does the author buy?", options: ["White bread", "Garlic bread", "Whole wheat bread"], correct: "Whole wheat bread", hint: "Look at the third sentence." }
        ]
      },
      {
        title: "The Morning Brew",
        text: "I love the smell of coffee in the kitchen. I measure two scoops of dark roast beans and grind them. Then, I pour hot water slowly over the grounds. I add a splash of almond milk and a spoonful of honey for sweetness.",
        questions: [
          { id: 1, question: "How many scoops of beans are used?", options: ["One scoop", "Two scoops", "Three scoops"], correct: "Two scoops", hint: "Check the second sentence." },
          { id: 2, question: "What is added for sweetness?", options: ["Sugar", "Honey", "Syrup"], correct: "Honey", hint: "Check the last sentence." }
        ]
      },
      {
        title: "A Quick Run",
        text: "After work, I put on my running shoes and go to the park track. I jog slowly for fifteen minutes to warm up, then run fast for another ten. Exercising outdoors always clears my mind after a long day.",
        questions: [
          { id: 1, question: "Where does the author go to run?", options: ["The gym", "The beach", "The park track"], correct: "The park track", hint: "Check the first sentence." },
          { id: 2, question: "How long does the author jog slowly to warm up?", options: ["Five minutes", "Ten minutes", "Fifteen minutes"], correct: "Fifteen minutes", hint: "Look for the warm-up duration." }
        ]
      },
      {
        title: "Caring for Houseplants",
        text: "I keep several green plants on my sunny windowsill. Every Saturday, I check the soil of each pot. If the soil feels dry, I water them using a small metal watering can. I also wipe the dust off their leaves so they can breathe.",
        questions: [
          { id: 1, question: "How often does the author check the plants?", options: ["Every day", "Every Saturday", "Once a month"], correct: "Every Saturday", hint: "Look at the second sentence." },
          { id: 2, question: "What kind of watering can is used?", options: ["Large plastic can", "Small metal can", "Glass bottle"], correct: "Small metal can", hint: "Check the third sentence." }
        ]
      },
      {
        title: "Preparing Pasta",
        text: "Tonight, I am cooking spaghetti for dinner. I boil a pot of water and add a pinch of salt. While the pasta cooks, I heat tomato sauce in a small pan. I mix them together and sprinkle parmesan cheese on top before serving.",
        questions: [
          { id: 1, question: "What is added to the boiling water?", options: ["A pinch of salt", "Olive oil", "Pepper"], correct: "A pinch of salt", hint: "Look at the second sentence." },
          { id: 2, question: "What type of cheese is sprinkled on top?", options: ["Cheddar cheese", "Mozzarella cheese", "Parmesan cheese"], correct: "Parmesan cheese", hint: "Look for the cheese type mentioned at the end." }
        ]
      },
      {
        title: "A Quiet Study Space",
        text: "The city library is my favorite place to study. It has comfortable chairs and large wooden tables. I turn off my phone to avoid distractions. Today, I borrowed a history textbook and read two chapters about ancient Rome.",
        questions: [
          { id: 1, question: "Why does the author turn off their phone?", options: ["To save battery", "To avoid distractions", "To follow library rules"], correct: "To avoid distractions", hint: "Check the third sentence." },
          { id: 2, question: "What subject is the textbook about?", options: ["Science", "History", "Art"], correct: "History", hint: "Look at the final sentence." }
        ]
      },
      {
        title: "Walking Buster",
        text: "My dog Buster gets very excited when I hold his red leash. We walk around the neighborhood block twice. Buster likes to sniff the grass and greet other dogs we meet. I always bring plastic bags to clean up after him.",
        questions: [
          { id: 1, question: "What color is Buster's leash?", options: ["Red", "Black", "Blue"], correct: "Red", hint: "Check the first sentence." },
          { id: 2, question: "How many times do they walk around the block?", options: ["Once", "Twice", "Three times"], correct: "Twice", hint: "Look at the second sentence." }
        ]
      },
      {
        title: "Sunday Chores",
        text: "Every Sunday afternoon, I clean my bedroom. First, I put my dirty clothes in the laundry basket. Next, I dust the desk and bookshelves. Finally, I vacuum the carpet. A clean room helps me sleep much better at night.",
        questions: [
          { id: 1, question: "When does the author clean their bedroom?", options: ["Friday night", "Saturday morning", "Sunday afternoon"], correct: "Sunday afternoon", hint: "Look at the very first sentence." },
          { id: 2, question: "What is the final cleaning step mentioned?", options: ["Dusting the desk", "Vacuuming the carpet", "Doing the laundry"], correct: "Vacuuming the carpet", hint: "Look for the activity marked by 'Finally'." }
        ]
      },
      {
        title: "A Routine Health Checkup",
        text: "I visited my family doctor for a routine medical checkup. The nurse checked my height, weight, and blood pressure first. Then, the doctor listened to my heart and asked about my diet. She advised me to drink more water and sleep at least eight hours every night.",
        questions: [
          { id: 1, question: "What did the nurse check first?", options: ["Height, weight, and blood pressure", "Heartbeat and breathing", "Vision and hearing"], correct: "Height, weight, and blood pressure", hint: "Check the second sentence." },
          { id: 2, question: "What did the doctor advise the author to do?", options: ["Eat less fruit", "Drink more water and sleep eight hours", "Join a gym immediately"], correct: "Drink more water and sleep eight hours", hint: "Look at the final sentence." }
        ]
      },
      {
        title: "Mailing a Package",
        text: "I went to the post office to mail a birthday gift to my sister in Chicago. I carefully wrapped the fragile ceramic mug in bubble wrap and placed it in a sturdy cardboard box. The postal clerk weighed the box, printed a shipping label, and promised it would arrive within three days.",
        questions: [
          { id: 1, question: "What was the birthday gift?", options: ["A book", "A ceramic mug", "A woolen scarf"], correct: "A ceramic mug", hint: "Check the second sentence." },
          { id: 2, question: "How long will the package take to arrive?", options: ["Next day", "Within three days", "One week"], correct: "Within three days", hint: "Check the final sentence." }
        ]
      },
      {
        title: "Rainy Day Essentials",
        text: "The morning weather forecast predicted heavy rain showers starting at noon. Before leaving the house, I grabbed my sturdy black umbrella and wore a waterproof yellow raincoat. I also chose leather boots instead of canvas sneakers to keep my feet dry.",
        questions: [
          { id: 1, question: "When did the rain forecast say the showers would start?", options: ["In the morning", "At noon", "In the evening"], correct: "At noon", hint: "Check the first sentence." },
          { id: 2, question: "Why did the author choose leather boots?", options: ["To match the raincoat", "To run faster", "To keep their feet dry"], correct: "To keep their feet dry", hint: "Look at the end of the last sentence." }
        ]
      },
      {
        title: "Packing the Suitcase",
        text: "I am traveling to the beach for a two-day weekend getaway. I packed light clothing, sunglasses, sunscreen, and a beach towel into my small backpack. I also made sure to pack my phone charger and an engaging paperback novel to read by the shore.",
        questions: [
          { id: 1, question: "Where is the author traveling to?", options: ["A mountain cabin", "The beach", "A historic city"], correct: "The beach", hint: "Check the first sentence." },
          { id: 2, question: "What kind of bag is the author using to pack?", options: ["A large suitcase", "A small backpack", "A duffel bag"], correct: "A small backpack", hint: "Look at the second sentence." }
        ]
      },
      {
        title: "A Cafe Breakfast",
        text: "I sat at an outdoor table at my favorite local cafe. I ordered a warm butter croissant and a hot cup of black coffee. The waiter was very friendly and brought my order quickly. He also gave me a small glass of ice water on the house.",
        questions: [
          { id: 1, question: "Where did the author sit at the cafe?", options: ["By the counter", "At an outdoor table", "Near the fireplace"], correct: "At an outdoor table", hint: "Check the first sentence." },
          { id: 2, question: "What did the waiter provide on the house?", options: ["A slice of cake", "A butter croissant", "A small glass of ice water"], correct: "A small glass of ice water", hint: "Look at the final sentence." }
        ]
      },
      {
        title: "Writing a Professional Email",
        text: "I needed to ask my professor for an extension on my chemistry assignment. I drafted a polite email explaining that I had been sick over the weekend. I proofread the draft twice to check for spelling errors, attached my medical note, and clicked send.",
        questions: [
          { id: 1, question: "Why did the author write the email?", options: ["To drop the class", "To ask for an assignment extension", "To schedule an interview"], correct: "To ask for an assignment extension", hint: "Check the first sentence." },
          { id: 2, question: "What did the author attach to the email?", options: ["A draft of the project", "A textbook chapter", "A medical note"], correct: "A medical note", hint: "Check the last sentence." }
        ]
      },
      {
        title: "The Weekend Train Journey",
        text: "I booked a train ticket to visit my parents. I opened the railway app, selected an express train departing at 9:00 AM on Friday, and chose a quiet window seat in the second-class carriage. Booking early allowed me to save thirty percent on the standard ticket price.",
        questions: [
          { id: 1, question: "What type of seat did the author choose?", options: ["A middle seat", "An aisle seat", "A quiet window seat"], correct: "A quiet window seat", hint: "Check the second sentence." },
          { id: 2, question: "What benefit did the author get by booking early?", options: ["A free meal", "A thirty percent discount", "A first-class upgrade"], correct: "A thirty percent discount", hint: "Look at the last sentence." }
        ]
      },
      {
        title: "An Evening at the Movies",
        text: "My friends and I decided to watch a newly released science fiction movie. We bought our tickets online in advance to secure the middle seats. Before entering the theater, we purchased a large bucket of salted popcorn and two cups of cold lemonade to share.",
        questions: [
          { id: 1, question: "What genre was the movie they watched?", options: ["Comedy", "Horror", "Science fiction"], correct: "Science fiction", hint: "Check the first sentence." },
          { id: 2, question: "What drinks did they purchase to share?", options: ["Sodas", "Lemonades", "Bottled waters"], correct: "Lemonades", hint: "Check the final sentence." }
        ]
      },
      {
        title: "Planting Tomato Seeds",
        text: "Spring is here, so I decided to start a small vegetable garden in my backyard. I dug up the soil to loosen it and mixed in rich organic compost. Then, I planted tomato and basil seeds in neat rows, making sure to water them gently so the seeds wouldn't wash away.",
        questions: [
          { id: 1, question: "Where did the author start the vegetable garden?", options: ["On the balcony", "In the backyard", "At a community plot"], correct: "In the backyard", hint: "Check the first sentence." },
          { id: 2, question: "What did the author plant?", options: ["Flower bulbs", "Tomato and basil seeds", "Fruit tree saplings"], correct: "Tomato and basil seeds", hint: "Check the last sentence." }
        ]
      },
      {
        title: "A Visit to the City Zoo",
        text: "On Sunday morning, my family and I visited the newly renovated city zoo. The weather was perfect—sunny with a gentle, cool breeze. We began our tour at the African savanna exhibit, where we watched tall giraffes grazing on acacia leaves. Next, we visited the tropical rainforest pavilion to see colorful parrots and mischievous monkeys swinging from ropes. Finally, we stopped at the underwater tunnel to watch playful penguins swim overhead. It was both an educational and deeply enjoyable day for everyone.",
        questions: [
          { id: 1, question: "Where did the family begin their zoo tour?", options: ["The underwater tunnel", "The African savanna exhibit", "The tropical rainforest pavilion"], correct: "The African savanna exhibit", hint: "Check the third sentence." },
          { id: 2, question: "What were the giraffes grazing on?", options: ["Fresh grass", "Acacia leaves", "Sweet fruits"], correct: "Acacia leaves", hint: "Look closely at the description of the African savanna." },
          { id: 3, question: "Which animal did they observe at the underwater tunnel?", options: ["Playful penguins", "Colorful parrots", "Mischievous monkeys"], correct: "Playful penguins", hint: "Check the final destination of their tour near the end." }
        ]
      }
    ],
    2: EASY_DAILY_LIFE_M2
  },
  "Normal": {
    1: [
      {
        title: "A Day at the Park",
        text: "Yesterday, I went to the park with my friends. The weather was beautiful and sunny. We played soccer for two hours. Then, we had a picnic under a large oak tree. We ate sandwiches and fruit. It was a very relaxing afternoon.",
        questions: [
          { id: 1, question: "What was the weather like?", options: ["Rainy", "Sunny", "Cloudy"], correct: "Sunny", hint: "Check the second sentence." },
          { id: 2, question: "How long did they play soccer?", options: ["One hour", "Two hours", "Three hours"], correct: "Two hours", hint: "Look for the duration mentioned." }
        ]
      }
    ],
    2: NORMAL_DAILY_LIFE_M2
  },
  "Hard": {
    1: [
      {
        title: "The Importance of Healthy Eating",
        text: "Maintaining a balanced diet is crucial for overall health and well-being. A healthy diet should include a variety of fruits, vegetables, whole grains, and lean proteins. These foods provide essential nutrients that help the body function properly and reduce the risk of chronic diseases. It is also important to limit the intake of processed foods, sugary drinks, and excessive amounts of salt and saturated fats.",
        questions: [
          { id: 1, question: "What should a healthy diet include?", options: ["Only meat", "Variety of fruits, vegetables, grains, and proteins", "Mostly processed foods"], correct: "Variety of fruits, vegetables, grains, and proteins", hint: "Check the second sentence." },
          { id: 2, question: "What should be limited in a healthy diet?", options: ["Whole grains", "Water", "Processed foods and sugary drinks"], correct: "Processed foods and sugary drinks", hint: "Look at the final sentence." }
        ]
      }
    ],
    2: HARD_DAILY_LIFE_M2
  },
  "Advanced": {
    1: [
      {
        title: "The Benefits of Regular Exercise",
        text: "Regular physical activity is one of the most important things you can do for your health. It can help you manage your weight, reduce your risk of chronic diseases, strengthen your bones and muscles, and improve your mental health and mood. Adults should aim for at least 150 minutes of moderate-intensity aerobic activity each week, along with muscle-strengthening activities on two or more days.",
        questions: [
          { id: 1, question: "What is one benefit of regular exercise?", options: ["Increased risk of disease", "Weight management", "Weaker muscles"], correct: "Weight management", hint: "Check the second sentence." },
          { id: 2, question: "How much aerobic activity is recommended for adults per week?", options: ["60 minutes", "150 minutes", "300 minutes"], correct: "150 minutes", hint: "Look for the specific number in the final sentence." }
        ]
      }
    ],
    2: ADVANCED_DAILY_LIFE_M2
  }
};

const expandList = (list: any[]) => (list || []).map(expandPassageToFullIBTLength);

export const ACADEMIC_PASSAGE_CONTENT: any = {
  "Easy": {
    1: expandList(EASY_ACADEMIC_PASSAGES_M1),
    2: expandList(EASY_ACADEMIC_PASSAGES_M2)
  },
  "Normal": {
    1: expandList(NORMAL_ACADEMIC_PASSAGES_M1),
    2: expandList(NORMAL_ACADEMIC_PASSAGES_M2)
  },
  "Hard": {
    1: expandList(HARD_ACADEMIC_PASSAGES_M1),
    2: expandList(HARD_ACADEMIC_PASSAGES_M2)
  },
  "Advanced": {
    1: expandList(ADVANCED_ACADEMIC_PASSAGES_M1),
    2: expandList(ADVANCED_ACADEMIC_PASSAGES_M2)
  }
};

export const TERMINOLOGY_CONTENT: any = {
  "Easy": {
    1: EASY_TERMINOLOGY_M1,
    2: EASY_TERMINOLOGY_M2
  },
  "Normal": {
    1: [
      {
        title: "Academic Analysis",
        questions: [
          { id: 1, word: "Analyze", options: ["Ignore", "Examine in detail", "Create", "Simplify", "Repeat"], correct: "Examine in detail", sentence: "The researchers had to analyze the data carefully to find patterns.", hint: "To study something closely and systematically." },
          { id: 2, word: "Evaluate", options: ["Assess", "Destroy", "Copy", "Ignore", "Create"], correct: "Assess", sentence: "We need to evaluate the effectiveness of the new policy.", hint: "To form an idea of the amount, number, or value of something." },
          { id: 3, word: "Illustrate", options: ["Explain with examples", "Hide", "Simplify", "Repeat", "Expand"], correct: "Explain with examples", sentence: "The professor used a diagram to illustrate the complex theory.", hint: "To make something clear by using examples, charts, or pictures." },
          { id: 4, word: "Interpret", options: ["Ignore", "Translate", "Explain meaning", "Copy", "Destroy"], correct: "Explain meaning", sentence: "It is difficult to interpret the meaning of these ancient symbols.", hint: "Explain the meaning of (information, words, or actions)." },
          { id: 5, word: "Summarize", options: ["Expand", "Give brief version", "Repeat", "Simplify", "Ignore"], correct: "Give brief version", sentence: "Can you summarize the main points of the article in one paragraph?", hint: "Give a brief statement of the main points of (something)." }
        ]
      },
      {
        title: "Environmental Science",
        questions: [
          { id: 1, word: "Ecosystem", options: ["Single plant", "Biological community", "Weather pattern", "Geological formation", "Ocean current"], correct: "Biological community", sentence: "Pollution can have a devastating effect on the local **ecosystem**.", hint: "A biological community of interacting organisms and their physical environment." },
          { id: 2, word: "Sustainable", options: ["Expensive", "Temporary", "Environmentally friendly", "Profitable", "Renewable"], correct: "Environmentally friendly", sentence: "We need to find more **sustainable** ways to generate energy.", hint: "Able to be maintained at a certain rate or level." },
          { id: 3, word: "Biodiversity", options: ["Variety of life", "Single species", "Extinction", "Climate change", "Ecosystem stability"], correct: "Variety of life", sentence: "The rainforest is known for its incredible **biodiversity**.", hint: "The variety of life in the world or in a particular habitat or ecosystem." }
        ]
      },
      {
        title: "Psychology Basics",
        questions: [
          { id: 1, word: "Cognition", options: ["Physical action", "Emotional reaction", "Mental processes", "Social interaction", "Biological growth"], correct: "Mental processes", sentence: "Memory and attention are key components of human **cognition**.", hint: "The mental action or process of acquiring knowledge and understanding through thought, experience, and the senses." },
          { id: 2, word: "Perception", options: ["Reality", "Dreams", "Ways of seeing", "Physical touch", "Memory"], correct: "Ways of seeing", sentence: "Our **perception** of reality can be influenced by our past experiences.", hint: "The ability to see, hear, or become aware of something through the senses." },
          { id: 3, word: "Behavior", options: ["Thoughts", "Feelings", "Conduct or actions", "Dreams", "Reflexes"], correct: "Conduct or actions", sentence: "The scientist studied the **behavior** of the mice in the maze.", hint: "The way in which one acts or conducts oneself, especially toward others." }
        ]
      }
    ],
    2: [
      {
        title: "Advanced Academic Inquiry",
        questions: [
          { id: 1, word: "Paradigm", options: ["Mistake", "New idea", "Model or pattern", "Old tradition", "Random theory"], correct: "Model or pattern", sentence: "The discovery of DNA led to a major **paradigm** shift in biology.", hint: "A typical example or pattern of something; a model." },
          { id: 2, word: "Methodology", options: ["Random guess", "System of methods", "Single tool", "Final result", "Preliminary study"], correct: "System of methods", sentence: "The researchers explained their **methodology** in the first chapter of the thesis.", hint: "A system of methods used in a particular area of study or activity." },
          { id: 3, word: "Hypothesize", options: ["Prove a fact", "Ignore evidence", "Propose a theory", "Summarize", "Create data"], correct: "Propose a theory", sentence: "Scientists **hypothesize** that there may be water on other planets.", hint: "Put forward as a hypothesis." },
          { id: 4, word: "Validate", options: ["Reject", "Ignore", "Confirm or check", "Create", "Postpone"], correct: "Confirm or check", sentence: "Further experiments are needed to **validate** the initial findings.", hint: "Check or prove the validity or accuracy of (something)." },
          { id: 5, word: "Synthesize", options: ["Separate parts", "Analyze", "Combine ideas", "Simplify", "Repeat"], correct: "Combine ideas", sentence: "The essay requires you to **synthesize** information from multiple sources.", hint: "Combine (a number of things) into a coherent whole." }
        ]
      },
      {
        title: "Business Communication",
        questions: [
          { id: 1, word: "Negotiation", options: ["A type of meeting", "A formal speech", "Discussion for agreement", "Company picnic", "Sales report"], correct: "Discussion for agreement", sentence: "The **negotiation** between the two parties lasted for several hours.", hint: "Discussion aimed at reaching an agreement." },
          { id: 2, word: "Collaboration", options: ["Working together", "Working alone", "Competing", "Hiring staff", "Firing staff"], correct: "Working together", sentence: "The project's success was due to the **collaboration** of all team members.", hint: "The action of working with someone to produce something." },
          { id: 3, word: "Consensus", options: ["General agreement", "Disagreement", "A vote", "A secret", "A rumor"], correct: "General agreement", sentence: "The committee reached a **consensus** on the new budget proposal.", hint: "A general agreement." }
        ]
      }
    ]
  },
  "Hard": {
    1: [
      {
        title: "Scientific Inquiry",
        questions: [
          { id: 1, word: "Hypothesis", options: ["Fact", "Proposed explanation", "Theory", "Conclusion", "Observation"], correct: "Proposed explanation", sentence: "The scientist formulated a hypothesis to explain the phenomenon.", hint: "A starting point for further investigation." },
          { id: 2, word: "Empirical", options: ["Based on logic", "Based on tradition", "Based on observation", "Theoretical", "Random"], correct: "Based on observation", sentence: "The study provided empirical evidence to support the claim.", hint: "Verified by experience rather than theory." },
          { id: 3, word: "Synthesis", options: ["Breakdown", "Analysis", "Combination", "Separation", "Destruction"], correct: "Combination", sentence: "The report is a synthesis of several different research papers.", hint: "The production of chemical compounds by reaction from simpler materials." },
          { id: 4, word: "Variable", options: ["Constant", "Result", "Changing factor", "Cause", "Effect"], correct: "Changing factor", sentence: "Temperature is a key variable in this chemical reaction.", hint: "An element, feature, or factor that is liable to vary or change." },
          { id: 5, word: "Correlation", options: ["Cause", "Difference", "Relationship", "Similarity", "Conflict"], correct: "Relationship", sentence: "There is a strong correlation between exercise and health.", hint: "A mutual relationship or connection between two or more things." }
        ]
      },
      {
        title: "Law & Politics",
        questions: [
          { id: 1, word: "Legislation", options: ["Court case", "Law-making", "Criminal act", "Election", "Protest"], correct: "Law-making", sentence: "The government introduced new **legislation** to protect workers' rights.", hint: "Laws, considered collectively." },
          { id: 2, word: "Jurisdiction", options: ["Police force", "Legal authority", "Crime scene", "Lawsuit", "Punishment"], correct: "Legal authority", sentence: "The court has **jurisdiction** over all legal matters in the state.", hint: "The official power to make legal decisions and judgments." },
          { id: 3, word: "Policy", options: ["Law", "Principle of action", "Secret plan", "Tax", "Budget"], correct: "Principle of action", sentence: "The company's **policy** on data privacy is very strict.", hint: "A course or principle of action adopted or proposed by a government, party, business, or individual." }
        ]
      },
      {
        title: "Technology & Tech Ethics",
        questions: [
          { id: 1, word: "Algorithm", options: ["Computer virus", "Hidden message", "Process or set of rules", "Hardware component", "User interface"], correct: "Process or set of rules", sentence: "The social media platform uses a complex **algorithm** to show you relevant content.", hint: "A process or set of rules to be followed in calculations or other problem-solving operations." },
          { id: 2, word: "Encryption", options: ["Deleting data", "Coding information", "Sharing passwords", "Downloading files", "Printing documents"], correct: "Coding information", sentence: "Data **encryption** is essential for protecting sensitive information online.", hint: "The process of converting information or data into a code." },
          { id: 3, word: "Ethics", options: ["Moral principles", "Legal rules", "Personal opinions", "Scientific facts", "Market trends"], correct: "Moral principles", sentence: "The **ethics** of artificial intelligence is a major topic of discussion.", hint: "Moral principles that govern a person's behavior or the conducting of an activity." }
        ]
      }
    ],
    2: [
      {
        title: "Complex Scientific Terminology",
        questions: [
          { id: 1, word: "Entropy", options: ["Order", "Disorder or randomness", "Energy", "Heat", "Cold"], correct: "Disorder or randomness", sentence: "The second law of thermodynamics states that the **entropy** of an isolated system always increases.", hint: "A thermodynamic quantity representing the unavailability of a system's thermal energy for conversion into mechanical work." },
          { id: 2, word: "Catalyst", options: ["Inhibitor", "Accelerator", "Result", "Reactant", "Product"], correct: "Accelerator", sentence: "The enzyme acts as a **catalyst**, speeding up the chemical reaction.", hint: "A substance that increases the rate of a chemical reaction without itself undergoing any permanent chemical change." },
          { id: 3, word: "Osmosis", options: ["Solidification", "Diffusion of water", "Evaporation", "Melting", "Sublimation"], correct: "Diffusion of water", sentence: "Plants absorb water from the soil through the process of **osmosis**.", hint: "A process by which molecules of a solvent tend to pass through a semipermeable membrane from a less concentrated solution into a more concentrated one." },
          { id: 4, word: "Symbiosis", options: ["Mutually beneficial relationship", "Conflict", "Competition", "Isolation", "Hostility"], correct: "Mutually beneficial relationship", sentence: "The relationship between bees and flowers is a classic example of **symbiosis**.", hint: "Interaction between two different organisms living in close physical association, typically to the advantage of both." },
          { id: 5, word: "Mitigation", options: ["Increase of severity", "Ignoring a problem", "Reduction of severity", "Creating a problem", "Delaying a solution"], correct: "Reduction of severity", sentence: "The government is implementing new policies for the **mitigation** of climate change.", hint: "The action of reducing the severity, seriousness, or painfulness of something." }
        ]
      },
      {
        title: "Medical Terminology",
        questions: [
          { id: 1, word: "Diagnosis", options: ["Treatment", "Identification of illness", "Prevention", "Surgery", "X-ray"], correct: "Identification of illness", sentence: "The doctor made a quick **diagnosis** after examining the patient.", hint: "The identification of the nature of an illness." },
          { id: 2, word: "Prognosis", options: ["Likely outcome", "Medical history", "Surgery", "Emergency", "Patient record"], correct: "Likely outcome", sentence: "The **prognosis** for the patient's recovery is very good.", hint: "The likely course of a disease." },
          { id: 3, word: "Therapy", options: ["Diagnosis", "Treatment", "Examination", "Medicine", "Rest"], correct: "Treatment", sentence: "Physical **therapy** helped the athlete recover from the injury.", hint: "Treatment intended to relieve or heal a disorder." }
        ]
      }
    ]
  },
  "Advanced": {
    1: [
      {
        title: "Academic Perspectives",
        questions: [
          { id: 1, word: "Proponent", options: ["Opponent", "Observer", "Supporter", "Critic", "Leader"], correct: "Supporter", sentence: "He is a leading proponent of renewable energy.", hint: "Someone who argues in favor of something." },
          { id: 2, word: "Ambiguous", options: ["Clear", "Large", "Small", "Uncertain", "Fast"], correct: "Uncertain", sentence: "The instructions were ambiguous, leading to confusion among the students.", hint: "Having more than one possible meaning." },
          { id: 3, word: "Pragmatic", options: ["Idealistic", "Practical", "Theoretical", "Emotional", "Random"], correct: "Practical", sentence: "We need to take a pragmatic approach to solving this problem.", hint: "Dealing with things sensibly and realistically." },
          { id: 4, word: "Abstract", options: ["Theoretical", "Concrete", "Simple", "Complex", "Real"], correct: "Theoretical", sentence: "The concept of justice is often discussed in abstract terms.", hint: "Existing in thought or as an idea but not having a physical or concrete existence." },
          { id: 5, word: "Concrete", options: ["Vague", "Soft", "Specific/Real", "Hard", "Abstract"], correct: "Specific/Real", sentence: "We need concrete examples to understand the theory better.", hint: "Existing in a material or physical form; real or solid; not abstract." }
        ]
      }
    ],
    2: [
      {
        title: "Epistemological & Philosophical Terms",
        questions: [
          { id: 1, word: "Epistemology", options: ["Study of stars", "Theory of knowledge", "Study of rocks", "Theory of art", "Theory of time"], correct: "Theory of knowledge", sentence: "**Epistemology** explores the nature, origin, and limits of human knowledge.", hint: "The theory of knowledge, especially with regard to its methods, validity, and scope." },
          { id: 2, word: "Phenomenology", options: ["Study of fossils", "Study of consciousness", "Study of weather", "Study of plants", "Study of sound"], correct: "Study of consciousness", sentence: "**Phenomenology** is a philosophical movement that describes the formal structure of objects of awareness.", hint: "An approach that concentrates on the study of consciousness and the objects of direct experience." },
          { id: 3, word: "Ontology", options: ["Study of being", "Study of birds", "Study of insects", "Study of oceans", "Study of light"], correct: "Study of being", sentence: "**Ontology** is the branch of metaphysics dealing with the nature of existence.", hint: "The branch of metaphysics dealing with the nature of being." },
          { id: 4, word: "Hermeneutics", options: ["Theory of flight", "Theory of interpretation", "Theory of sound", "Theory of light", "Theory of maps"], correct: "Theory of interpretation", sentence: "**Hermeneutics** is the branch of knowledge that deals with interpretation, especially of the Bible or literary texts.", hint: "The branch of knowledge that deals with interpretation." },
          { id: 5, word: "Dialectic", options: ["Monologue", "Silence", "Discourse between opposing views", "Agreement", "Soliloquy"], correct: "Discourse between opposing views", sentence: "The philosopher used a **dialectic** method to explore the contradictions in the argument.", hint: "The art of investigating or discussing the truth of opinions." }
        ]
      },
      {
        title: "Advanced Economic Theory",
        questions: [
          { id: 1, word: "Macroeconomics", options: ["Individual economics", "Personal finance", "Large-scale economics", "Stock market", "Bank loans"], correct: "Large-scale economics", sentence: "**Macroeconomics** deals with the performance and behavior of an economy as a whole.", hint: "The branch of economics concerned with large-scale economic factors." },
          { id: 2, word: "Fiscal Policy", options: ["Bank interest rates", "Government spending/taxation", "Trade laws", "Job market", "Social media"], correct: "Government spending/taxation", sentence: "The government adjusted its **fiscal policy** to combat inflation.", hint: "The use of government spending and taxation to influence the economy." },
          { id: 3, word: "Monetary Policy", options: ["Taxes", "Public services", "Money supply regulation", "Global warming", "Public transport"], correct: "Money supply regulation", sentence: "The central bank's **monetary policy** aims to maintain price stability.", hint: "The process by which the monetary authority of a country controls the supply of money." }
        ]
      }
    ]
  }
};


export const FACTUAL_INFORMATION_CONTENT: any = {
  "Easy": {
    3: [
      // Exercise 1
      [
        {
          title: "The Roman Empire",
          passage: "The Roman Empire was the post-Republican period of ancient Rome. As a polity, it included large territorial holdings around the Mediterranean Sea in Europe, North Africa, and Western Asia, ruled by emperors. From the accession of Caesar Augustus to the military anarchy of the third century, it was a principate with Italy as the metropole of its provinces and the city of Rome as its sole capital. Although the empire was fragmented during the third-century crisis, it was later reorganized by Diocletian and Constantine.",
          question: "According to the passage, which of the following was a region included in the Roman Empire?",
          options: ["Europe", "North America", "Australia", "Antarctica"],
          correct: "Europe",
          explanation: "The passage explicitly states that the Roman Empire included territorial holdings in Europe, North Africa, and Western Asia.",
          highlight: "it included large territorial holdings around the Mediterranean Sea in Europe, North Africa, and Western Asia"
        },
        {
          title: "The Great Barrier Reef",
          passage: "The Great Barrier Reef is the world's largest coral reef system, composed of over 2,900 individual reefs and 900 islands stretching for over 2,300 kilometres (1,400 mi) over an area of approximately 344,400 square kilometres (133,000 sq mi). The reef is located in the Coral Sea, off the coast of Queensland, Australia. The Great Barrier Reef can be seen from outer space and is the world's biggest single structure made by living organisms. This reef structure is composed of and built by billions of tiny organisms, known as coral polyps.",
          question: "Where is the Great Barrier Reef located?",
          options: ["In the Atlantic Ocean", "Off the coast of Queensland, Australia", "Near the coast of Brazil", "In the Mediterranean Sea"],
          correct: "Off the coast of Queensland, Australia",
          explanation: "The passage states that the reef is located in the Coral Sea, off the coast of Queensland, Australia.",
          highlight: "off the coast of Queensland, Australia"
        },
        {
          title: "The Industrial Revolution",
          passage: "The Industrial Revolution was the transition to new manufacturing processes in Great Britain, continental Europe, and the United States, in the period from about 1760 to sometime between 1820 and 1840. This transition included going from hand production methods to machines, new chemical manufacturing and iron production processes, the increasing use of steam power and water power, the development of machine tools and the rise of the mechanized factory system. The Industrial Revolution also led to an unprecedented rise in the rate of population growth.",
          question: "What was one of the key transitions during the Industrial Revolution?",
          options: ["From hand production methods to machines", "From machines to hand production", "From steam power to manual labor", "From factories to small workshops"],
          correct: "From hand production methods to machines",
          explanation: "The passage mentions that the transition included going from hand production methods to machines.",
          highlight: "going from hand production methods to machines"
        },
        {
          title: "The Renaissance",
          passage: "The Renaissance was a fervent period of European cultural, artistic, political and economic 'rebirth' following the Middle Ages. Generally described as taking place from the 14th century to the 17th century, the Renaissance promoted the rediscovery of classical philosophy, literature and art. Some of the greatest thinkers, authors, statesmen, scientists and artists in human history thrived during this era, while global exploration opened up new lands and cultures to European commerce.",
          question: "What did the Renaissance promote the rediscovery of?",
          options: ["Modern technology and social media", "Classical philosophy, literature and art", "Medieval farming techniques", "Ancient Egyptian architecture"],
          correct: "Classical philosophy, literature and art",
          explanation: "The passage states that the Renaissance promoted the rediscovery of classical philosophy, literature and art.",
          highlight: "promoted the rediscovery of classical philosophy, literature and art"
        },
        {
          title: "The Amazon Rainforest",
          passage: "The Amazon rainforest, also known in English as Amazonia or the Amazon Jungle, is a moist broadleaf tropical rainforest in the Amazon biome that covers most of the Amazon basin of South America. This basin encompasses 7,000,000 km2 (2,700,000 sq mi), of which 5,500,000 km2 (2,100,000 sq mi) are covered by the rainforest. This region includes territory belonging to nine nations and 3,344 formally acknowledged indigenous territories.",
          question: "Which continent is the Amazon rainforest primarily located in?",
          options: ["South America", "Africa", "Asia", "Europe"],
          correct: "South America",
          explanation: "The passage mentions that the Amazon rainforest covers most of the Amazon basin of South America.",
          highlight: "covers most of the Amazon basin of South America"
        }
      ],
      // Exercise 2
      [
        {
          title: "The Great Wall of China",
          passage: "The Great Wall of China is a series of fortifications that were built across the historical northern borders of ancient Chinese states and Imperial China as protection against various nomadic groups from the Eurasian Steppe. Several walls were built from as early as the 7th century BC, with selective stretches later joined by Qin Shi Huang, the first emperor of China. Little of the Qin wall remains. Later, many successive dynasties built and maintained multiple stretches of border walls.",
          question: "Why was the Great Wall of China built?",
          options: ["As protection against nomadic groups", "To facilitate trade with Europe", "As a decorative monument", "To mark the boundary of a national park"],
          correct: "As protection against nomadic groups",
          explanation: "The passage states the wall was built as protection against various nomadic groups from the Eurasian Steppe.",
          highlight: "as protection against various nomadic groups from the Eurasian Steppe"
        },
        {
          title: "The Eiffel Tower",
          passage: "The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower. Constructed from 1887 to 1889 as the centerpiece of the 1889 World's Fair, it was initially criticized by some of France's leading artists and intellectuals for its design, but it has become a global cultural icon of France and one of the most recognizable structures in the world.",
          question: "Who is the Eiffel Tower named after?",
          options: ["Gustave Eiffel", "Napoleon Bonaparte", "Victor Hugo", "Claude Monet"],
          correct: "Gustave Eiffel",
          explanation: "The passage explicitly states it is named after the engineer Gustave Eiffel.",
          highlight: "named after the engineer Gustave Eiffel"
        },
        {
          title: "The Pyramids of Giza",
          passage: "The Great Pyramid of Giza is the oldest and largest of the three pyramids in the Giza pyramid complex bordering present-day Giza in Greater Cairo, Egypt. It is the oldest of the Seven Wonders of the Ancient World, and the only one to remain largely intact. Egyptologists conclude that the pyramid was built as a tomb for the Fourth Dynasty Egyptian pharaoh Khufu and estimate that it was built in the 26th century BC during a period of around 27 years.",
          question: "What was the purpose of the Great Pyramid of Giza according to Egyptologists?",
          options: ["As a tomb for pharaoh Khufu", "As a grain storage facility", "As an astronomical observatory", "As a palace for the royal family"],
          correct: "As a tomb for pharaoh Khufu",
          explanation: "The passage states that Egyptologists conclude the pyramid was built as a tomb for the Fourth Dynasty Egyptian pharaoh Khufu.",
          highlight: "built as a tomb for the Fourth Dynasty Egyptian pharaoh Khufu"
        },
        {
          title: "The Statue of Liberty",
          passage: "The Statue of Liberty is a colossal copper statue on Liberty Island in New York Harbor in New York City, in the United States. The statue, a gift from the people of France to the people of the United States, was designed by French sculptor Frédéric Auguste Bartholdi and its metal framework was built by Gustave Eiffel. The statue was dedicated on October 28, 1886.",
          question: "Who gave the Statue of Liberty as a gift to the United States?",
          options: ["The people of France", "The people of Great Britain", "The people of Canada", "The people of Germany"],
          correct: "The people of France",
          explanation: "The passage states the statue was a gift from the people of France to the people of the United States.",
          highlight: "a gift from the people of France to the people of the United States"
        },
        {
          title: "The Grand Canyon",
          passage: "The Grand Canyon is a steep-sided canyon carved by the Colorado River in Arizona, United States. The Grand Canyon is 277 miles (446 km) long, up to 18 miles (29 km) wide and attains a depth of over a mile (6,093 feet or 1,857 meters). The canyon and adjacent rim are contained within Grand Canyon National Park, the Kaibab National Forest, Grand Canyon-Parashant National Monument, the Hualapai Indian Reservation, the Havasupai Indian Reservation and the Navajo Nation.",
          question: "Which river carved the Grand Canyon?",
          options: ["The Colorado River", "The Mississippi River", "The Nile River", "The Amazon River"],
          correct: "The Colorado River",
          explanation: "The passage states the Grand Canyon was carved by the Colorado River.",
          highlight: "carved by the Colorado River"
        }
      ],
      // Exercise 3
      [
        {
          title: "The Wright Brothers",
          passage: "The Wright brothers, Orville and Wilbur, were two American aviation pioneers generally credited with inventing, building, and flying the world's first successful motor-operated airplane. They made the first controlled, sustained flight of a powered, heavier-than-air aircraft with the Wright Flyer on December 17, 1903, 4 mi (6 km) south of Kitty Hawk, North Carolina. In 1904–1905, the brothers developed their flying machine to make longer-running and more aerodynamic flights with the Wright Flyer II, followed by the first truly practical fixed-wing aircraft, the Wright Flyer III.",
          question: "When did the Wright brothers make their first controlled, sustained flight?",
          options: ["December 17, 1903", "July 4, 1776", "October 12, 1492", "January 1, 1900"],
          correct: "December 17, 1903",
          explanation: "The passage states they made the first controlled, sustained flight on December 17, 1903.",
          highlight: "December 17, 1903"
        },
        {
          title: "The Hubble Space Telescope",
          passage: "The Hubble Space Telescope is a space telescope that was launched into low Earth orbit in 1990 and remains in operation. It was not the first space telescope, but it is one of the largest and most versatile, renowned both as a vital research tool and as a public relations boon for astronomy. The Hubble telescope is named after astronomer Edwin Hubble and is one of NASA's Great Observatories.",
          question: "When was the Hubble Space Telescope launched?",
          options: ["1990", "1969", "2000", "1980"],
          correct: "1990",
          explanation: "The passage states the telescope was launched into low Earth orbit in 1990.",
          highlight: "launched into low Earth orbit in 1990"
        },
        {
          title: "The Magna Carta",
          passage: "Magna Carta Libertatum, commonly called Magna Carta, is a royal charter of rights agreed to by King John of England at Runnymede, near Windsor, on 15 June 1215. First drafted by the Archbishop of Canterbury, Cardinal Stephen Langton, to make peace between the unpopular king and a group of rebel barons, it promised the protection of church rights, protection for the barons from illegal imprisonment, access to swift justice, and limitations on feudal payments to the Crown, to be implemented through a council of 25 barons.",
          question: "Who agreed to the Magna Carta in 1215?",
          options: ["King John of England", "King Henry VIII", "Queen Elizabeth I", "King George III"],
          correct: "King John of England",
          explanation: "The passage states the Magna Carta was agreed to by King John of England.",
          highlight: "agreed to by King John of England"
        },
        {
          title: "The Panama Canal",
          passage: "The Panama Canal is an artificial 82 km (51 mi) waterway in Panama that connects the Atlantic Ocean with the Pacific Ocean and divides North and South America. The canal cuts across the Isthmus of Panama and is a conduit for maritime trade. One of the largest and most difficult engineering projects ever undertaken, the Panama Canal shortcut greatly reduces the time for ships to travel between the Atlantic and Pacific oceans, enabling them to avoid the lengthy, hazardous Cape Horn route around the southernmost tip of South America.",
          question: "What does the Panama Canal connect?",
          options: ["The Atlantic Ocean and the Pacific Ocean", "The Indian Ocean and the Arctic Ocean", "The Mediterranean Sea and the Red Sea", "The Black Sea and the Caspian Sea"],
          correct: "The Atlantic Ocean and the Pacific Ocean",
          explanation: "The passage states the Panama Canal connects the Atlantic Ocean with the Pacific Ocean.",
          highlight: "connects the Atlantic Ocean with the Pacific Ocean"
        },
        {
          title: "The Moon Landing",
          passage: "The first crewed landing on the Moon was Apollo 11, which landed on July 20, 1969. Neil Armstrong and Buzz Aldrin were the first humans to walk on the lunar surface. Armstrong's first steps were broadcast on live TV to a worldwide audience. He described the event as 'one small step for [a] man, one giant leap for mankind.' Apollo 11 effectively ended the Space Race and fulfilled a national goal proposed in 1961 by President John F. Kennedy.",
          question: "Who were the first humans to walk on the Moon?",
          options: ["Neil Armstrong and Buzz Aldrin", "John Glenn and Yuri Gagarin", "Michael Collins and Alan Shepard", "Jim Lovell and Fred Haise"],
          correct: "Neil Armstrong and Buzz Aldrin",
          explanation: "The passage states that Neil Armstrong and Buzz Aldrin were the first humans to walk on the lunar surface.",
          highlight: "Neil Armstrong and Buzz Aldrin were the first humans to walk on the lunar surface"
        }
      ]
    ]
  },
  "Normal": {
    1: [
      {
        title: "The Great Depression",
        passage: "The Great Depression was a severe worldwide economic depression that took place mostly during the 1930s, beginning in the United States. The timing of the Great Depression varied across nations; in most countries, it started in 1929 and lasted until the late 1930s. It was the longest, deepest, and most widespread depression of the 20th century.",
        question: "When did the Great Depression start in most countries?",
        options: ["1929", "1939", "1914", "1945"],
        correct: "1929",
        explanation: "The passage states that in most countries, it started in 1929.",
        highlight: "in most countries, it started in 1929"
      }
    ],
    3: [
      {
        title: "The Renaissance",
        passage: "The Renaissance was a period of European cultural, artistic, political and economic 'rebirth' following the Middle Ages. Generally described as taking place from the 14th century to the 17th century, the Renaissance promoted the rediscovery of classical philosophy, literature and art. Some of the greatest thinkers, authors, statesmen, scientists and artists in human history thrived during this era, while global exploration opened up new lands and cultures to European commerce.",
        question: "When did the Renaissance take place?",
        options: ["14th to 17th century", "10th to 12th century", "18th to 19th century", "5th to 10th century"],
        correct: "14th to 17th century",
        explanation: "The passage states it took place from the 14th century to the 17th century.",
        highlight: "from the 14th century to the 17th century"
      }
    ]
  },
  "Hard": {
    1: [
      {
        title: "Quantum Mechanics",
        passage: "Quantum mechanics is a fundamental theory in physics that provides a description of the physical properties of nature at the scale of atoms and subatomic particles. It is the foundation of all quantum physics including quantum chemistry, quantum field theory, quantum technology, and quantum information science.",
        question: "What scale does quantum mechanics describe?",
        options: ["Atoms and subatomic particles", "Galaxies and stars", "Planets and moons", "Human-sized objects"],
        correct: "Atoms and subatomic particles",
        explanation: "The passage states that it provides a description of nature at the scale of atoms and subatomic particles.",
        highlight: "at the scale of atoms and subatomic particles"
      }
    ],
    3: [
      {
        title: "Plate Tectonics",
        passage: "Plate tectonics is a scientific theory describing the large-scale motion of seven large plates and the movements of a larger number of smaller plates of Earth's lithosphere. The theoretical model builds on the concept of continental drift, an idea developed during the first decades of the 20th century. The geoscientific community accepted plate-tectonic theory after seafloor spreading was validated in the late 1950s and early 1960s.",
        question: "When was seafloor spreading validated?",
        options: ["Late 1950s and early 1960s", "Early 20th century", "18th century", "19th century"],
        correct: "Late 1950s and early 1960s",
        explanation: "The passage states seafloor spreading was validated in the late 1950s and early 1960s.",
        highlight: "validated in the late 1950s and early 1960s"
      }
    ]
  },
  "Advanced": {
    1: [
      {
        title: "General Relativity",
        passage: "General relativity, also known as the general theory of relativity and Einstein's theory of gravity, is the geometric theory of gravitation published by Albert Einstein in 1915 and is the current description of gravitation in modern physics.",
        question: "Who published the general theory of relativity?",
        options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Stephen Hawking"],
        correct: "Albert Einstein",
        explanation: "The passage states it was published by Albert Einstein in 1915.",
        highlight: "published by Albert Einstein in 1915"
      }
    ],
    3: [
      {
        title: "The Human Genome Project",
        passage: "The Human Genome Project (HGP) was an international scientific research project with the goal of determining the base pairs that make up human DNA, and of mapping and sequencing all of the genes of the human genome from both a physical and a functional standpoint. It remains the world's largest collaborative biological project. Planning started after the idea was picked up in 1984 by the US government, and the project formally launched in 1990.",
        question: "When did the Human Genome Project formally launch?",
        options: ["1990", "1984", "2000", "1970"],
        correct: "1990",
        explanation: "The passage states the project formally launched in 1990.",
        highlight: "formally launched in 1990"
      }
    ]
  }
};

export const NEGATIVE_FACTUAL_CONTENT: any = {
  "Easy": {
    1: [
      {
        title: "The Solar System",
        passage: "The Solar System consists of the Sun and the objects that orbit it. These include the eight planets: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune. It also includes dwarf planets like Pluto, as well as numerous asteroids and comets. Most of the mass in the system is contained within the Sun, while the majority of the remaining mass is in Jupiter.",
        question: "According to the passage, all of the following are planets in the Solar System EXCEPT",
        options: ["Mars", "Jupiter", "Pluto", "Neptune"],
        correct: "Pluto",
        explanation: "The passage identifies Pluto as a 'dwarf planet', distinguishing it from the list of 'eight planets'.",
        highlight: "It also includes dwarf planets like Pluto"
      },
      {
        title: "Photosynthesis",
        passage: "Photosynthesis is a process used by plants and other organisms to convert light energy into chemical energy. This process requires sunlight, water, and carbon dioxide. As a result of photosynthesis, plants produce glucose for food and release oxygen into the atmosphere. Chlorophyll, the green pigment in leaves, is essential for absorbing the light energy needed for the reaction.",
        question: "According to the passage, which of the following is NOT required for photosynthesis to occur?",
        options: ["Sunlight", "Water", "Oxygen", "Carbon dioxide"],
        correct: "Oxygen",
        explanation: "The passage states that oxygen is a result (product) of photosynthesis, while sunlight, water, and carbon dioxide are required (reactants).",
        highlight: "release oxygen into the atmosphere"
      }
    ],
    3: [
      // Exercise 1
      [
        {
          title: "The Roman Empire",
          passage: "The Roman Empire was the post-Republican period of ancient Rome. As a polity, it included large territorial holdings around the Mediterranean Sea in Europe, North Africa, and Western Asia, ruled by emperors. From the accession of Caesar Augustus to the military anarchy of the third century, it was a principate with Italy as the metropole of its provinces and the city of Rome as its sole capital. Although the empire was fragmented during the third-century crisis, it was later reorganized by Diocletian and Constantine.",
          question: "According to the passage, all of the following were regions included in the Roman Empire EXCEPT",
          options: ["Europe", "North Africa", "Western Asia", "South America"],
          correct: "South America",
          explanation: "The passage mentions Europe, North Africa, and Western Asia, but not South America.",
          highlight: "it included large territorial holdings around the Mediterranean Sea in Europe, North Africa, and Western Asia"
        },
        {
          title: "The Great Barrier Reef",
          passage: "The Great Barrier Reef is the world's largest coral reef system, composed of over 2,900 individual reefs and 900 islands stretching for over 2,300 kilometres (1,400 mi) over an area of approximately 344,400 square kilometres (133,000 sq mi). The reef is located in the Coral Sea, off the coast of Queensland, Australia. The Great Barrier Reef can be seen from outer space and is the world's biggest single structure made by living organisms. This reef structure is composed of and built by billions of tiny organisms, known as coral polyps.",
          question: "According to the passage, all of the following are true about the Great Barrier Reef EXCEPT",
          options: ["It is the world's largest coral reef system", "It is located off the coast of Africa", "It can be seen from outer space", "It is built by coral polyps"],
          correct: "It is located off the coast of Africa",
          explanation: "The passage states it is located off the coast of Queensland, Australia, not Africa.",
          highlight: "off the coast of Queensland, Australia"
        },
        {
          title: "The Industrial Revolution",
          passage: "The Industrial Revolution was the transition to new manufacturing processes in Great Britain, continental Europe, and the United States, in the period from about 1760 to sometime between 1820 and 1840. This transition included going from hand production methods to machines, new chemical manufacturing and iron production processes, the increasing use of steam power and water power, the development of machine tools and the rise of the mechanized factory system. The Industrial Revolution also led to an unprecedented rise in the rate of population growth.",
          question: "According to the passage, which of the following was NOT a part of the transition during the Industrial Revolution?",
          options: ["Hand production methods", "New chemical manufacturing processes", "Increasing use of steam power", "The rise of the mechanized factory system"],
          correct: "Hand production methods",
          explanation: "The passage says the transition was *from* hand production methods *to* machines.",
          highlight: "going from hand production methods to machines"
        },
        {
          title: "The Renaissance",
          passage: "The Renaissance was a fervent period of European cultural, artistic, political and economic 'rebirth' following the Middle Ages. Generally described as taking place from the 14th century to the 17th century, the Renaissance promoted the rediscovery of classical philosophy, literature and art. Some of the greatest thinkers, authors, statesmen, scientists and artists in human history thrived during this era, while global exploration opened up new lands and cultures to European commerce.",
          question: "According to the passage, all of the following fields were part of the Renaissance 'rebirth' EXCEPT",
          options: ["Cultural", "Artistic", "Political", "Military"],
          correct: "Military",
          explanation: "The passage mentions cultural, artistic, political, and economic rebirth, but does not mention military.",
          highlight: "European cultural, artistic, political and economic 'rebirth'"
        },
        {
          title: "The Human Brain",
          passage: "The human brain is the central organ of the human nervous system, and with the spinal cord makes up the central nervous system. The brain consists of the cerebrum, the brainstem and the cerebellum. It controls most of the activities of the body, processing, integrating, and coordinating the information it receives from the sense organs, and making decisions as to the instructions sent to the rest of the body. The brain is contained in, and protected by, the skull bones of the head.",
          question: "According to the passage, which of the following is NOT a part of the human brain?",
          options: ["Cerebrum", "Brainstem", "Cerebellum", "Spinal cord"],
          correct: "Spinal cord",
          explanation: "The passage states the brain consists of the cerebrum, brainstem, and cerebellum. The spinal cord is part of the central nervous system, but not the brain itself.",
          highlight: "The brain consists of the cerebrum, the brainstem and the cerebellum"
        }
      ],
      // Exercise 2
      [
        {
          title: "The Eiffel Tower",
          passage: "The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower. Constructed from 1887 to 1889 as the centerpiece of the 1889 World's Fair, it was initially criticized by some of France's leading artists and intellectuals for its design, but it has become a global cultural icon of France and one of the most recognisable structures in the world.",
          question: "According to the passage, all of the following are true about the Eiffel Tower EXCEPT",
          options: ["It is located in Paris, France", "It was built for the 1889 World's Fair", "It was designed by Gustave Eiffel", "It was immediately praised by all French artists"],
          correct: "It was immediately praised by all French artists",
          explanation: "The passage states it was 'initially criticized by some of France's leading artists'.",
          highlight: "it was initially criticized by some of France's leading artists and intellectuals for its design"
        },
        {
          title: "The Amazon River",
          passage: "The Amazon River in South America is the largest river by discharge volume of water in the world, and the disputed longest river system in the world in comparison to the Nile. The headwaters of the Apurímac River on Nevado Mismi had been considered for nearly a century as the Amazon's most distant source, until a 2014 study determined it to be the Cordillera Rumi Cruz at the headwaters of the Mantaro River in Peru. The Amazon basin is the largest drainage basin in the world, with an area of approximately 7,000,000 square kilometres (2,700,000 sq mi).",
          question: "According to the passage, all of the following are true about the Amazon River EXCEPT",
          options: ["It is the largest river by discharge volume", "It is located in South America", "Its source has always been undisputed", "It has the largest drainage basin in the world"],
          correct: "Its source has always been undisputed",
          explanation: "The passage mentions the source was 'disputed' and that a 2014 study changed the previously held belief.",
          highlight: "the disputed longest river system in the world"
        },
        {
          title: "The Great Wall of China",
          passage: "The Great Wall of China is a series of fortifications that were built across the historical northern borders of ancient Chinese states and Imperial China as protection against various nomadic groups from the Eurasian Steppe. Several walls were built from as early as the 7th century BC, with selective stretches later joined together by Qin Shi Huang, the first emperor of China. The most well-known sections of the wall were built by the Ming dynasty.",
          question: "According to the passage, all of the following are true about the Great Wall EXCEPT",
          options: ["It was built for protection against nomadic groups", "It was built entirely in the 7th century BC", "The Ming dynasty built the most well-known sections", "It was built across northern borders"],
          correct: "It was built entirely in the 7th century BC",
          explanation: "The passage says walls were built *from as early as* the 7th century BC, not entirely then.",
          highlight: "Several walls were built from as early as the 7th century BC"
        },
        {
          title: "The Statue of Liberty",
          passage: "The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor in New York City, in the United States. The copper statue, a gift from the people of France to the people of the United States, was designed by French sculptor Frédéric Auguste Bartholdi and its metal framework was built by Gustave Eiffel. The statue was dedicated on October 28, 1886.",
          question: "According to the passage, all of the following are true about the Statue of Liberty EXCEPT",
          options: ["It is located in New York Harbor", "It is made of copper", "It was a gift from the people of England", "It was dedicated in 1886"],
          correct: "It was a gift from the people of England",
          explanation: "The passage states it was a gift from the people of France.",
          highlight: "a gift from the people of France to the people of the United States"
        },
        {
          title: "The Human Heart",
          passage: "The human heart is a muscular organ about the size of a closed fist that functions as the body's circulatory pump. It takes in deoxygenated blood through the veins and delivers it to the lungs for oxygenation before pumping it into the various arteries. The heart is located in the thoracic cavity between the lungs. It is divided into four chambers: the right and left atria and the right and left ventricles.",
          question: "According to the passage, which of the following is NOT a function or location of the heart?",
          options: ["It functions as a circulatory pump", "It is located in the abdominal cavity", "It delivers blood to the lungs", "It is located between the lungs"],
          correct: "It is located in the abdominal cavity",
          explanation: "The passage states the heart is located in the *thoracic* cavity, not the abdominal cavity.",
          highlight: "The heart is located in the thoracic cavity between the lungs"
        }
      ],
      // Exercise 3
      [
        {
          title: "The Sahara Desert",
          passage: "The Sahara is a desert on the African continent. With an area of 9,200,000 square kilometres (3,600,000 sq mi), it is the largest hot desert in the world and the third largest desert overall, smaller only than the deserts of Antarctica and the northern Arctic. The name 'Sahara' is derived from the Arabic word for 'desert'. The Sahara covers much of North Africa, excluding the fertile region on the Mediterranean Sea coast.",
          question: "According to the passage, all of the following are true about the Sahara EXCEPT",
          options: ["It is located on the African continent", "It is the largest desert overall", "It is the largest hot desert in the world", "Its name comes from the Arabic word for 'desert'"],
          correct: "It is the largest desert overall",
          explanation: "The passage states it is the *third* largest desert overall, after Antarctica and the Arctic.",
          highlight: "it is the largest hot desert in the world and the third largest desert overall, smaller only than the deserts of Antarctica and the northern Arctic"
        },
        {
          title: "The Blue Whale",
          passage: "The blue whale is a marine mammal and a baleen whale. Reaching a maximum confirmed length of 29.9 meters (98 ft) and weighing up to 199 tonnes (196 long tons; 219 short tons), it is the largest animal known to have ever existed. The blue whale's long and slender body can be of various shades of grayish-blue dorsally and somewhat lighter underneath. Like other baleen whales, its diet consists almost exclusively of small crustaceans known as krill.",
          question: "According to the passage, all of the following are true about the blue whale EXCEPT",
          options: ["It is a marine mammal", "It is the largest animal to ever exist", "It has a short and wide body", "Its diet consists mainly of krill"],
          correct: "It has a short and wide body",
          explanation: "The passage describes the body as 'long and slender'.",
          highlight: "The blue whale's long and slender body"
        },
        {
          title: "The Mount Everest",
          passage: "Mount Everest is Earth's highest mountain above sea level, located in the Mahalangur Himal sub-range of the Himalayas. The China–Nepal border runs across its summit point. Its elevation of 8,848.86 m (29,031.7 ft) was most recently established in 2020 by the Chinese and Nepalese authorities. Mount Everest attracts many climbers, including highly experienced mountaineers. There are two main climbing routes, one approaching the summit from the southeast in Nepal and the other from the north in Tibet.",
          question: "According to the passage, all of the following are true about Mount Everest EXCEPT",
          options: ["It is Earth's highest mountain above sea level", "It is located in the Andes", "The China-Nepal border runs across its summit", "There are two main climbing routes"],
          correct: "It is located in the Andes",
          explanation: "The passage states it is located in the Himalayas, not the Andes.",
          highlight: "located in the Mahalangur Himal sub-range of the Himalayas"
        },
        {
          title: "The Internet",
          passage: "The Internet is the global system of interconnected computer networks that uses the Internet protocol suite (TCP/IP) to communicate between networks and devices. It is a network of networks that consists of private, public, academic, business, and government networks of local to global scope, linked by a broad array of electronic, wireless, and optical networking technologies. The Internet carries a vast range of information resources and services, such as the inter-linked hypertext documents and applications of the World Wide Web, electronic mail, telephony, and file sharing.",
          question: "According to the passage, all of the following are services carried by the Internet EXCEPT",
          options: ["World Wide Web", "Electronic mail", "Telephony", "Physical mail delivery"],
          correct: "Physical mail delivery",
          explanation: "The passage mentions electronic mail, but not physical mail delivery.",
          highlight: "The Internet carries a vast range of information resources and services, such as the inter-linked hypertext documents and applications of the World Wide Web, electronic mail, telephony, and file sharing"
        },
        {
          title: "The Titanic",
          passage: "The RMS Titanic was a British passenger liner operated by the White Star Line that sank in the North Atlantic Ocean in the early morning hours of 15 April 1912, after striking an iceberg during her maiden voyage from Southampton to New York City. Of the estimated 2,224 passengers and crew aboard, more than 1,500 died, making the sinking one of modern history's deadliest commercial marine disasters during peacetime.",
          question: "According to the passage, all of the following are true about the Titanic EXCEPT",
          options: ["It was a British passenger liner", "It sank in the Pacific Ocean", "It struck an iceberg", "More than 1,500 people died"],
          correct: "It sank in the Pacific Ocean",
          explanation: "The passage states it sank in the *North Atlantic* Ocean.",
          highlight: "sank in the North Atlantic Ocean"
        }
      ]
    ]
  },
  "Normal": {
    1: [
      {
        title: "The Industrial Revolution",
        passage: "The Industrial Revolution was a period of major industrialization that took place during the late 1700s and early 1800s. It began in Great Britain and quickly spread to other parts of the world, including the United States and Europe. This era saw the transition from hand production methods to machines, new chemical manufacturing and iron production processes, the increasing use of steam power and water power, and the development of machine tools.",
        question: "According to the passage, all of the following were characteristics of the Industrial Revolution EXCEPT",
        options: ["Transition to machine-based manufacturing", "Increased use of steam power", "Development of machine tools", "A decline in international trade"],
        correct: "A decline in international trade",
        explanation: "The passage lists machine-based manufacturing, steam power, and machine tools as characteristics, but does not mention a decline in trade; in fact, the era generally saw an increase in trade."
      }
    ],
    3: [
      {
        title: "The French Revolution",
        passage: "The French Revolution was a period of far-reaching social and political upheaval in France and its colonies beginning in 1789 and ending in 1799. The Revolution overthrew the monarchy, established a republic, catalyzed violent periods of political turmoil, and finally culminated in a dictatorship under Napoleon who brought many of its principles to areas he conquered in Western Europe and beyond.",
        question: "According to the passage, all of the following were outcomes of the French Revolution EXCEPT",
        options: ["Overthrow of the monarchy", "Establishment of a republic", "A long period of peaceful stability", "A dictatorship under Napoleon"],
        correct: "A long period of peaceful stability",
        explanation: "The passage mentions 'violent periods of political turmoil', which contradicts 'peaceful stability'.",
        highlight: "catalyzed violent periods of political turmoil"
      }
    ]
  },
  "Hard": {
    1: [
      {
        title: "Quantum Mechanics",
        passage: "Quantum mechanics is a fundamental theory in physics that describes the physical properties of nature at the scale of atoms and subatomic particles. Key principles include wave-particle duality, the uncertainty principle, and quantum entanglement. Unlike classical mechanics, which is deterministic, quantum mechanics is probabilistic, meaning it predicts the likelihood of various outcomes rather than a single definite result.",
        question: "According to the passage, which of the following is NOT a key principle of quantum mechanics mentioned?",
        options: ["Wave-particle duality", "The uncertainty principle", "Quantum entanglement", "General relativity"],
        correct: "General relativity",
        explanation: "The passage explicitly mentions wave-particle duality, the uncertainty principle, and quantum entanglement, but does not mention general relativity."
      }
    ],
    3: [
      {
        title: "The Big Bang Theory",
        passage: "The Big Bang theory is the prevailing cosmological model explaining the existence of the observable universe from the earliest known periods through its subsequent large-scale evolution. The model describes how the universe expanded from a very high-density and high-temperature state, and offers a comprehensive explanation for a broad range of observed phenomena, including the abundance of light elements, the cosmic microwave background (CMB) radiation, and large-scale structure.",
        question: "According to the passage, which of the following is NOT mentioned as a phenomenon explained by the Big Bang theory?",
        options: ["Abundance of light elements", "Cosmic microwave background radiation", "Large-scale structure of the universe", "The existence of parallel universes"],
        correct: "The existence of parallel universes",
        explanation: "The passage mentions light elements, CMB radiation, and large-scale structure, but not parallel universes.",
        highlight: "including the abundance of light elements, the cosmic microwave background (CMB) radiation, and large-scale structure"
      }
    ]
  },
  "Advanced": {
    1: [
      {
        title: "The Great Depression",
        passage: "The Great Depression was a severe worldwide economic depression that took place mostly during the 1930s, beginning in the United States. The timing of the Great Depression varied across nations; in most countries, it started in 1929 and lasted until the late 1930s. It was the longest, deepest, and most widespread depression of the 20th century. The depression had devastating effects in both rich and poor countries. Personal income, tax revenue, profits and prices dropped, while international trade plunged by more than 50%. Unemployment in the U.S. rose to 25% and in some countries rose as high as 33%.",
        question: "According to the passage, all of the following were effects of the Great Depression EXCEPT",
        options: ["A drop in tax revenue", "A plunge in international trade", "A rise in unemployment", "An increase in personal income"],
        correct: "An increase in personal income",
        explanation: "The passage states that 'Personal income... dropped', so an increase is false."
      }
    ],
    3: [
      {
        title: "The United Nations",
        passage: "The United Nations (UN) is an intergovernmental organization whose stated purposes are to maintain international peace and security, develop friendly relations among nations, achieve international cooperation, and be a center for harmonizing the actions of nations. It is the world's largest and most familiar international organization. The UN is headquartered on international territory in New York City, and has other main offices in Geneva, Nairobi, Vienna, and The Hague.",
        question: "According to the passage, all of the following are stated purposes of the United Nations EXCEPT",
        options: ["Maintain international peace and security", "Develop friendly relations among nations", "Establish a single global government", "Achieve international cooperation"],
        correct: "Establish a single global government",
        explanation: "The passage lists peace, friendly relations, and cooperation, but not a single global government.",
        highlight: "maintain international peace and security, develop friendly relations among nations, achieve international cooperation"
      }
    ]
  }
};

export const TERMINOLOGY_IN_CONTEXT_CONTENT: any = {
  "Easy": {
    1: [
      {
        title: "Ecology",
        passage: "In an ecosystem, every organism plays a specific role. For example, producers like plants create energy from sunlight, while consumers must eat other organisms to survive. Decomposers break down dead material, returning nutrients to the soil. This complex web of interactions ensures the stability of the environment.",
        question: "In the passage, the word 'producers' is closest in meaning to",
        options: ["Animals that hunt for prey", "Organisms that make their own food", "Plants that grow in the shade", "Bacteria that cause disease"],
        correct: "Organisms that make their own food",
        explanation: "The passage explains that producers 'create energy from sunlight', which means they make their own food."
      },
      {
        title: "Simple Machines",
        passage: "Simple machines are devices that make work easier by changing the magnitude or direction of a force. A lever, for instance, allows a person to lift a heavy object with less effort by using a fulcrum as a pivot point. These tools have been fundamental to human survival and technology for thousands of years.",
        question: "In the passage, the word 'fundamental' is closest in meaning to",
        options: ["Optional", "Essential", "Modern", "Complex"],
        correct: "Essential",
        explanation: "In this context, 'fundamental' means that these tools are basic and necessary for human progress."
      }
    ]
  },
  "Normal": {
    1: [
      {
        title: "Economics",
        passage: "Market equilibrium occurs when the quantity of a good supplied by producers equals the quantity demanded by consumers at a specific price. If the price is too high, a surplus may occur as supply exceeds demand. Conversely, if the price is too low, a shortage may arise. Prices tend to adjust naturally to reach this point of balance.",
        question: "In the passage, the word 'equilibrium' is closest in meaning to",
        options: ["Conflict", "Shortage", "Balance", "Surplus"],
        correct: "Balance",
        explanation: "The passage describes equilibrium as a point where supply equals demand, and later refers to it as a 'point of balance'."
      },
      {
        title: "Architecture",
        passage: "The structural integrity of a building depends on various factors, including the materials used and the geological stability of the site. Architects must ensure that the foundation is robust enough to support the weight of the entire structure over time. Environmental factors such as wind and seismic activity must also be taken into account during the design process.",
        question: "In the passage, the word 'robust' is closest in meaning to",
        options: ["Weak", "Strong", "Thin", "Large"],
        correct: "Strong",
        explanation: "The passage says the foundation must be 'robust enough to support the weight', which implies strength."
      }
    ]
  },
  "Hard": {
    1: [
      {
        title: "Psychology",
        passage: "Cognitive dissonance is a psychological phenomenon that occurs when an individual holds two or more contradictory beliefs or values. This inconsistency often leads to feelings of discomfort, prompting the person to change one of their beliefs to restore internal harmony. People may also use rationalization to justify their conflicting thoughts.",
        question: "In the passage, the word 'contradictory' is closest in meaning to",
        options: ["Supporting", "Identical", "Conflicting", "Simple"],
        correct: "Conflicting",
        explanation: "The passage links 'contradictory' with 'inconsistency' and 'conflicting thoughts', indicating that the beliefs are in opposition."
      },
      {
        title: "Marine Biology",
        passage: "The deep sea is a vast, largely unexplored frontier that remains shrouded in mystery. Organisms living in these extreme conditions have developed unique adaptations to withstand immense pressure and total darkness. Bioluminescence, the production of light by living creatures, is a common strategy used for communication, defense, and attracting prey.",
        question: "In the passage, the word 'shrouded' is closest in meaning to",
        options: ["Revealed", "Covered", "Simplified", "Connected"],
        correct: "Covered",
        explanation: "To be 'shrouded in mystery' means to be hidden or covered by it."
      }
    ]
  },
  "Advanced": {
    1: [
      {
        title: "Philosophy",
        passage: "Existentialism is a philosophical inquiry that explores the nature of human existence and the individual's search for meaning in an apparently indifferent universe. Key themes include freedom, responsibility, and the concept of 'authenticity'—living in accordance with one's own values rather than conforming to societal expectations. Existentialists argue that individuals must create their own purpose through their choices and actions.",
        question: "In the passage, the word 'indifferent' is closest in meaning to",
        options: ["Hostile", "Friendly", "Unconcerned", "Complex"],
        correct: "Unconcerned",
        explanation: "In this context, an 'indifferent universe' is one that does not care about or respond to human needs or desires."
      },
      {
        title: "Political Science",
        passage: "Sovereignty is the supreme authority within a territory. In modern international law, it is the basis of the nation-state system, granting each state exclusive control over its internal affairs without external interference. However, the rise of global organizations and international treaties has led to a partial erosion of absolute sovereignty in favor of collective security.",
        question: "In the passage, the word 'erosion' is closest in meaning to",
        options: ["Strengthening", "Weakening", "Creation", "Protection"],
        correct: "Weakening",
        explanation: "In this context, the erosion of sovereignty refers to it being gradually worn away or weakened."
      }
    ]
  }
};

export const RHETORICAL_PURPOSE_CONTENT: any = {
  "Easy": {
    1: [
      {
        title: "The Great Wall of China",
        passage: "The Great Wall of China was built over many centuries to protect the Chinese states and empires against the raids and invasions of various nomadic groups from the Eurasian Steppe. The wall also served other purposes, such as border controls, allowing the imposition of duties on goods transported along the Silk Road, and the regulation or encouragement of trade and the control of immigration and emigration.",
        question: "Why does the author mention 'border controls' and 'imposition of duties'?",
        options: ["To explain the primary reason for the wall's construction", "To illustrate that the wall served multiple functions beyond defense", "To argue that the wall was primarily an economic tool", "To show that the wall was ineffective at stopping invasions"],
        correct: "To illustrate that the wall served multiple functions beyond defense",
        explanation: "The author uses 'also served other purposes' to introduce these examples, showing the wall's versatility.",
        highlight: "The wall also served other purposes, such as border controls, allowing the imposition of duties on goods transported along the Silk Road"
      }
    ],
    3: [
      // Exercise 1
      [
        {
          title: "The Water Cycle",
          passage: "The water cycle describes the continuous movement of water on, above, and below the surface of the Earth. Evaporation occurs when the sun heats up water in rivers or lakes or the ocean and turns it into vapor or steam. This vapor then rises into the air. The author mentions the sun to explain the source of energy that drives the evaporation process.",
          question: "Why does the author mention 'the sun'?",
          options: ["To show how hot the Earth can get", "To explain the source of energy for evaporation", "To argue that the sun is the most important part of the cycle", "To describe the process of condensation"],
          correct: "To explain the source of energy for evaporation",
          explanation: "The passage states that the sun 'heats up water', which leads to evaporation, identifying it as the energy source.",
          highlight: "Evaporation occurs when the sun heats up water in rivers or lakes or the ocean and turns it into vapor or steam"
        },
        {
          title: "Honeybees",
          passage: "Honeybees are social insects that live in colonies. Within the hive, different bees have specific roles. The queen bee is the only female that breeds, while worker bees perform tasks such as foraging for food and defending the hive. Drones are male bees whose sole purpose is to mate with a queen. By describing these roles, the author illustrates the complex social structure of a bee colony.",
          question: "Why does the author describe the different roles of bees?",
          options: ["To show that bees are aggressive", "To explain how bees make honey", "To illustrate the complex social structure of a colony", "To argue that the queen bee is the most important"],
          correct: "To illustrate the complex social structure of a colony",
          explanation: "The description of specialized roles (queen, worker, drone) serves to show how the colony functions as a organized social unit.",
          highlight: "By describing these roles, the author illustrates the complex social structure of a bee colony"
        },
        {
          title: "Volcanic Eruptions",
          passage: "Volcanic eruptions can be highly destructive, but they also play a crucial role in forming new land. For example, the Hawaiian Islands were created by volcanic activity over millions of years. As magma reaches the surface and cools, it solidifies into rock, gradually building up the islands. The author mentions the Hawaiian Islands to provide a concrete example of how volcanoes create land.",
          question: "Why does the author mention 'the Hawaiian Islands'?",
          options: ["To describe a popular tourist destination", "To show that volcanoes are always dangerous", "To provide an example of land formation by volcanoes", "To explain why people live near volcanoes"],
          correct: "To provide an example of land formation by volcanoes",
          explanation: "The Hawaiian Islands are used as a specific instance to support the general claim that volcanoes form new land.",
          highlight: "the Hawaiian Islands were created by volcanic activity over millions of years"
        },
        {
          title: "The Printing Press",
          passage: "Johannes Gutenberg's invention of the printing press in the 15th century revolutionized the way information was shared. Before the press, books were copied by hand, a slow and expensive process. The printing press allowed for the mass production of books, making knowledge more accessible to the general public. The author mentions hand-copying to contrast the old method with the efficiency of the new invention.",
          question: "Why does the author mention that 'books were copied by hand'?",
          options: ["To show that people in the 15th century were very patient", "To explain why books were so beautiful", "To contrast the old method with the efficiency of the printing press", "To argue that hand-copied books are better than printed ones"],
          correct: "To contrast the old method with the efficiency of the printing press",
          explanation: "Mentioning the 'slow and expensive' manual process highlights the revolutionary impact of the printing press.",
          highlight: "Before the press, books were copied by hand, a slow and expensive process"
        },
        {
          title: "Migratory Birds",
          passage: "Many bird species migrate thousands of miles each year to find better feeding grounds or breeding sites. To navigate these long distances, birds use various cues, including the Earth's magnetic field and the position of the stars. Some researchers believe that birds also use landmarks like coastlines and mountain ranges. The author mentions these cues to explain how birds are able to navigate during migration.",
          question: "Why does the author mention 'the Earth's magnetic field and the position of the stars'?",
          options: ["To show that birds are interested in astronomy", "To explain the tools birds use for navigation", "To argue that migration is too difficult for most birds", "To describe the beauty of the night sky"],
          correct: "To explain the tools birds use for navigation",
          explanation: "These are listed as specific 'cues' that birds utilize to find their way over long distances.",
          highlight: "birds use various cues, including the Earth's magnetic field and the position of the stars"
        }
      ],
      // Exercise 2
      [
        {
          title: "The Great Depression",
          passage: "The Great Depression was a severe worldwide economic downturn that began in 1929. One of the most visible signs of the crisis was the 'Hoovervilles'—shanty towns built by homeless people during the era. These settlements were named after President Herbert Hoover, whom many blamed for the economic collapse. The author mentions 'Hoovervilles' to illustrate the human impact of the economic crisis.",
          question: "Why does the author mention 'Hoovervilles'?",
          options: ["To praise the architecture of the 1930s", "To illustrate the human impact of the economic crisis", "To explain the history of shanty towns", "To show that President Hoover was a popular leader"],
          correct: "To illustrate the human impact of the economic crisis",
          explanation: "The mention of shanty towns for the homeless provides a vivid example of the suffering caused by the Depression.",
          highlight: "shanty towns built by homeless people during the era"
        },
        {
          title: "Photosynthesis",
          passage: "Photosynthesis is the process by which green plants use sunlight to synthesize foods with the help of chlorophyll. Chlorophyll is a green pigment found in the chloroplasts of algae and plants. It is essential because it absorbs light energy, primarily from the sun. The author describes chlorophyll as a 'green pigment' to explain its physical appearance and its role in identifying photosynthetic organisms.",
          question: "Why does the author describe chlorophyll as a 'green pigment'?",
          options: ["To show that plants are colorful", "To explain its appearance and role in identification", "To argue that only green plants can survive", "To describe the process of light absorption"],
          correct: "To explain its appearance and role in identification",
          explanation: "The description helps the reader visualize the substance and understand why plants appear green.",
          highlight: "Chlorophyll is a green pigment found in the chloroplasts of algae and plants"
        },
        {
          title: "The Roman Aqueducts",
          passage: "The ancient Romans were master engineers, and their aqueducts are a testament to their skill. These structures were designed to carry water from distant sources into cities and towns, supporting public baths, latrines, and private households. The author mentions 'public baths and latrines' to show the various ways the water supplied by aqueducts was used in Roman society.",
          question: "Why does the author mention 'public baths and latrines'?",
          options: ["To show that Romans were obsessed with cleanliness", "To illustrate the practical uses of the water from aqueducts", "To explain how Roman cities were designed", "To argue that aqueducts were only for the wealthy"],
          correct: "To illustrate the practical uses of the water from aqueducts",
          explanation: "These examples demonstrate the diverse urban needs that the aqueducts fulfilled.",
          highlight: "supporting public baths, latrines, and private households"
        },
        {
          title: "The Rosetta Stone",
          passage: "The discovery of the Rosetta Stone in 1799 was a turning point in the study of ancient Egypt. The stone features a decree written in three scripts: Ancient Egyptian hieroglyphs, Demotic script, and Ancient Greek. Because researchers could already read Ancient Greek, they were able to use it as a key to decipher the hieroglyphs. The author mentions the three scripts to explain why the stone was so valuable for translation.",
          question: "Why does the author mention that the stone features 'three scripts'?",
          options: ["To show that ancient people were multilingual", "To explain why the stone was so heavy", "To illustrate why the stone was the key to deciphering hieroglyphs", "To argue that Greek is the most important language"],
          correct: "To illustrate why the stone was the key to deciphering hieroglyphs",
          explanation: "The presence of the same text in multiple scripts, including one that was known, allowed for the translation of the others.",
          highlight: "The stone features a decree written in three scripts... researchers could already read Ancient Greek, they were able to use it as a key to decipher the hieroglyphs"
        },
        {
          title: "Polar Bears",
          passage: "Polar bears are uniquely adapted to life in the Arctic. Their thick layer of blubber and dense fur provide insulation against the freezing temperatures. Additionally, their white fur serves as camouflage, allowing them to blend in with the snow and ice while hunting seals. The author mentions 'camouflage' to explain one of the evolutionary advantages that helps polar bears survive in their environment.",
          question: "Why does the author mention 'camouflage'?",
          options: ["To show that polar bears are shy", "To explain an evolutionary advantage for hunting", "To describe the beauty of the Arctic landscape", "To argue that polar bears are hard to find"],
          correct: "To explain an evolutionary advantage for hunting",
          explanation: "Camouflage is presented as a specific adaptation that improves the bear's success as a predator.",
          highlight: "their white fur serves as camouflage, allowing them to blend in with the snow and ice while hunting seals"
        }
      ],
      // Exercise 3
      [
        {
          title: "The Steam Engine",
          passage: "The development of the steam engine was a major catalyst for the Industrial Revolution. James Watt's improvements to the engine in the late 18th century made it much more efficient and practical for industrial use. Steam engines were soon used to power everything from textile mills to locomotives. The author mentions 'textile mills and locomotives' to provide examples of the wide-ranging applications of the steam engine.",
          question: "Why does the author mention 'textile mills and locomotives'?",
          options: ["To show that James Watt was a busy man", "To provide examples of the steam engine's applications", "To explain how trains work", "To argue that the Industrial Revolution was bad for the environment"],
          correct: "To provide examples of the steam engine's applications",
          explanation: "These examples illustrate how the steam engine transformed different sectors of industry and transport.",
          highlight: "Steam engines were soon used to power everything from textile mills to locomotives"
        },
        {
          title: "The Great Fire of London",
          passage: "In 1666, the Great Fire of London destroyed much of the city's central core. While the fire was a disaster, it also provided an opportunity to rebuild London with wider streets and brick buildings, which were less prone to fire than the old wooden structures. The author mentions 'wider streets and brick buildings' to show the positive changes that resulted from the rebuilding process.",
          question: "Why does the author mention 'wider streets and brick buildings'?",
          options: ["To show that London was a very small city", "To illustrate the improvements made during the city's reconstruction", "To explain why the fire started", "To argue that brick is better than wood"],
          correct: "To illustrate the improvements made during the city's reconstruction",
          explanation: "These specific urban planning changes are cited as benefits that emerged from the tragedy.",
          highlight: "opportunity to rebuild London with wider streets and brick buildings, which were less prone to fire"
        },
        {
          title: "The Silk Road",
          passage: "The Silk Road was a network of trade routes connecting the East and West for centuries. While silk was the most famous commodity traded, the routes also facilitated the exchange of spices, precious metals, and even ideas and religions. The author mentions 'ideas and religions' to emphasize that the Silk Road was more than just a path for commercial goods.",
          question: "Why does the author mention 'ideas and religions'?",
          options: ["To show that merchants were very religious", "To emphasize the cultural exchange that occurred along the routes", "To explain why silk was so expensive", "To argue that trade is more important than culture"],
          correct: "To emphasize the cultural exchange that occurred along the routes",
          explanation: "Including non-material items like ideas shows the broader impact of the Silk Road on human civilization.",
          highlight: "the routes also facilitated the exchange of spices, precious metals, and even ideas and religions"
        },
        {
          title: "The Hubble Space Telescope",
          passage: "Since its launch in 1990, the Hubble Space Telescope has provided astronomers with some of the most detailed images of distant galaxies ever captured. Because it orbits above the Earth's atmosphere, it is not affected by the blurring effects of air turbulence. The author mentions 'air turbulence' to explain one of the primary advantages of having a telescope in space.",
          question: "Why does the author mention 'air turbulence'?",
          options: ["To show that space is a very windy place", "To explain why ground-based telescopes have limitations", "To describe the beauty of the Earth's atmosphere", "To argue that Hubble is too expensive"],
          correct: "To explain why ground-based telescopes have limitations",
          explanation: "Air turbulence is the problem that space-based telescopes avoid, allowing for clearer images.",
          highlight: "it is not affected by the blurring effects of air turbulence"
        },
        {
          title: "The Magna Carta",
          passage: "The Magna Carta, signed in 1215, is one of the most important documents in history. It established the principle that everyone, including the king, was subject to the law. One of its most famous clauses guaranteed the right to a fair trial. The author mentions 'the right to a fair trial' to provide a specific example of the legal protections established by the document.",
          question: "Why does the author mention 'the right to a fair trial'?",
          options: ["To show that the king was a fair man", "To provide an example of a key legal protection in the document", "To explain how the court system worked in 1215", "To argue that the Magna Carta is outdated"],
          correct: "To provide an example of a key legal protection in the document",
          explanation: "This clause is a concrete instance of the broader principle of the rule of law introduced by the Magna Carta.",
          highlight: "One of its most famous clauses guaranteed the right to a fair trial"
        }
      ]
    ]
  },
  "Normal": {
    1: [
      {
        title: "The Scientific Method",
        passage: "The scientific method is a body of techniques for investigating phenomena, acquiring new knowledge, or correcting and integrating previous knowledge. To be termed scientific, a method of inquiry is commonly based on empirical or measurable evidence subject to specific principles of reasoning. The Oxford English Dictionary defines the scientific method as 'a method or procedure that has characterized natural science since the 17th century, consisting in systematic observation, measurement, and experiment, and the formulation, testing, and modification of hypotheses.'",
        question: "Why does the author include the definition from the Oxford English Dictionary?",
        options: ["To provide a formal and authoritative description of the scientific method", "To show that the dictionary definition is outdated", "To argue that the scientific method is too complex for most people", "To contrast it with the author's own definition"],
        correct: "To provide a formal and authoritative description of the scientific method",
        explanation: "The dictionary definition serves to clarify and formalize the concept being discussed."
      }
    ],
    3: [
      {
        title: "The American Civil War",
        passage: "The American Civil War was a civil war in the United States from 1861 to 1865, fought between northern states loyal to the Union and southern states that had seceded to form the Confederate States of America. The central cause of the war was the status of slavery, especially the expansion of slavery into territories acquired as a result of the Louisiana Purchase and the Mexican–American War.",
        question: "Why does the author mention the Louisiana Purchase and the Mexican-American War?",
        options: ["To identify territories where the expansion of slavery was a central issue", "To show that the war was primarily about land acquisition", "To argue that these events were more important than the war itself", "To explain how the United States became a global power"],
        correct: "To identify territories where the expansion of slavery was a central issue",
        explanation: "The passage states the cause was the 'expansion of slavery into territories acquired as a result of' these events.",
        highlight: "expansion of slavery into territories acquired as a result of the Louisiana Purchase and the Mexican–American War"
      }
    ]
  },
  "Hard": {
    1: [
      {
        title: "The Enlightenment",
        passage: "The Enlightenment was an intellectual and philosophical movement that dominated the world of ideas in Europe during the 17th and 18th centuries. It included a range of ideas centered on the sovereignty of reason and the evidence of the senses as the primary sources of knowledge and advanced ideals such as liberty, progress, toleration, fraternity, constitutional government and separation of church and state.",
        question: "Why does the author list 'liberty, progress, toleration, fraternity'?",
        options: ["To provide examples of the core ideals advanced by the Enlightenment", "To show that the Enlightenment was primarily a political movement", "To argue that these ideals were already common in Europe", "To illustrate the contradictions within Enlightenment thought"],
        correct: "To provide examples of the core ideals advanced by the Enlightenment",
        explanation: "The author uses these terms to specify the 'advanced ideals' mentioned previously."
      }
    ],
    3: [
      {
        title: "The Theory of Evolution",
        passage: "Evolution is change in the heritable characteristics of biological populations over successive generations. These characteristics are the expressions of genes that are passed on from parent to offspring during reproduction. Different characteristics tend to exist within any given population as a result of mutation, genetic recombination and other sources of genetic variation. Evolution occurs when evolutionary processes such as natural selection and genetic drift act on this variation, resulting in certain characteristics becoming more common or rare within a population.",
        question: "Why does the author mention 'mutation' and 'genetic recombination'?",
        options: ["To provide examples of sources of genetic variation within a population", "To show that evolution is a random and unpredictable process", "To argue that these are the only causes of evolution", "To explain how genes are passed from parents to offspring"],
        correct: "To provide examples of sources of genetic variation within a population",
        explanation: "The author lists them as 'sources of genetic variation' which evolution acts upon.",
        highlight: "as a result of mutation, genetic recombination and other sources of genetic variation"
      }
    ]
  }
};

export const INFERENCE_CONTENT: any = {
  "Easy": {
    3: [
      // Exercise 1
      [
        {
          title: "The Roman Empire",
          passage: "The Roman Empire was the post-Republican period of ancient Rome. As a polity, it included large territorial holdings around the Mediterranean Sea in Europe, North Africa, and Western Asia, and was ruled by emperors. From the accession of Augustus to the Crisis of the Third Century, it was a principate with Italy as the metropole of its provinces and the city of Rome as its sole capital.",
          question: "What can be inferred about the Roman Empire's geography?",
          options: ["It was limited to the Italian peninsula", "It spanned multiple continents", "It was primarily a land-locked empire", "It did not include any territory in Africa"],
          correct: "It spanned multiple continents",
          explanation: "The passage mentions holdings in 'Europe, North Africa, and Western Asia', which are three different continents.",
          highlight: "it included large territorial holdings around the Mediterranean Sea in Europe, North Africa, and Western Asia"
        },
        {
          title: "The Industrial Revolution",
          passage: "The Industrial Revolution marked a period of development in the latter half of the 18th century that transformed largely rural, agrarian societies in Europe and America into industrialized, urban ones. Goods that had once been painstakingly crafted by hand started to be produced in mass quantities by machines in factories, thanks to the introduction of new machines and techniques in textiles, iron making and other industries.",
          question: "What can be inferred about the cost of goods after the Industrial Revolution?",
          options: ["They became more expensive because of machine costs", "They likely became more affordable due to mass production", "They were still crafted by hand in most cases", "They were only available to people in rural areas"],
          correct: "They likely became more affordable due to mass production",
          explanation: "Mass production by machines typically lowers the cost of goods compared to those 'painstakingly crafted by hand'.",
          highlight: "Goods that had once been painstakingly crafted by hand started to be produced in mass quantities by machines"
        },
        {
          title: "Ancient Egyptian Pyramids",
          passage: "The pyramids of Giza, built for three pharaohs during the Old Kingdom, are some of the most famous structures in the world. Constructing these massive monuments required an incredible amount of labor and resources. Thousands of workers were involved in quarrying, transporting, and placing the massive stone blocks. Some historians believe that these workers were not slaves, but rather skilled laborers who were paid for their work.",
          question: "What can be inferred about the Egyptian government's ability to organize labor?",
          options: ["It was very weak and disorganized", "It was highly centralized and capable of large-scale projects", "It relied entirely on foreign workers", "It was unable to provide food for the pyramid builders"],
          correct: "It was highly centralized and capable of large-scale projects",
          explanation: "Organizing 'thousands of workers' and 'an incredible amount of labor and resources' for such massive monuments implies a strong, centralized authority.",
          highlight: "Constructing these massive monuments required an incredible amount of labor and resources. Thousands of workers were involved"
        },
        {
          title: "The Great Migration",
          passage: "During the Great Migration, millions of African Americans moved from the rural Southern United States to the urban North and West between 1916 and 1970. They were driven by a desire to escape the oppressive Jim Crow laws of the South and to find better economic opportunities in the booming industrial cities of the North.",
          question: "What can be inferred about the conditions for African Americans in the South during this period?",
          options: ["They were treated equally to white citizens", "They faced significant social and legal challenges", "They had more economic opportunities than in the North", "They were encouraged to stay by the Southern government"],
          correct: "They faced significant social and legal challenges",
          explanation: "The mention of 'oppressive Jim Crow laws' and the desire to 'escape' them implies that conditions in the South were very difficult.",
          highlight: "driven by a desire to escape the oppressive Jim Crow laws of the South"
        },
        {
          title: "The Printing Press",
          passage: "Before Johannes Gutenberg invented the printing press in the mid-15th century, books were rare and incredibly expensive. Each copy had to be written out by hand, a process that could take months or even years. As a result, literacy was largely confined to the clergy and the wealthy elite. The printing press changed all that, making it possible to produce hundreds of copies of a book in the time it used to take to produce one.",
          question: "What can be inferred about the impact of the printing press on literacy rates?",
          options: ["Literacy rates likely increased as books became more accessible", "Literacy rates stayed the same because books were still expensive", "Literacy rates decreased because people stopped reading", "The printing press had no effect on who could read"],
          correct: "Literacy rates likely increased as books became more accessible",
          explanation: "The passage states that before the press, literacy was 'confined to the clergy and the wealthy elite' because books were rare. Making books more accessible would naturally lead to higher literacy.",
          highlight: "making it possible to produce hundreds of copies of a book in the time it used to take to produce one"
        }
      ],
      // Exercise 2
      [
        {
          title: "The Silk Road",
          passage: "The Silk Road was not a single road, but a vast network of trade routes that connected China to the Mediterranean for over 1,500 years. While silk was the most famous commodity traded, the routes also facilitated the exchange of spices, precious metals, and even religions and philosophies. Traveling the Silk Road was dangerous, as merchants had to contend with its harsh terrain, bandits, and extreme weather.",
          question: "What can be inferred about the merchants who traveled the Silk Road?",
          options: ["They were mostly interested in sightseeing", "They were likely very brave and motivated by profit", "They only traveled during the summer months", "They did not care about the goods they were trading"],
          correct: "They were likely very brave and motivated by profit",
          explanation: "The mention of 'harsh terrain, bandits, and extreme weather' implies that the journey was very risky, so merchants must have been brave and motivated by the potential for high profits.",
          highlight: "Traveling the Silk Road was dangerous, as merchants had to contend with its harsh terrain, bandits, and extreme weather"
        },
        {
          title: "The Renaissance",
          passage: "The Renaissance was a period of 'rebirth' in European history, marking the transition from the Middle Ages to modernity. It was characterized by a renewed interest in the classical art and literature of ancient Greece and Rome. This period saw the rise of humanism, a philosophy that emphasized the value and agency of human beings and preferred critical thinking and evidence over dogma or superstition.",
          question: "What can be inferred about the prevailing mindset during the Middle Ages?",
          options: ["It was highly focused on scientific evidence", "It was likely more focused on religious dogma and tradition", "It was identical to the Renaissance mindset", "It was completely uninterested in art or literature"],
          correct: "It was likely more focused on religious dogma and tradition",
          explanation: "The passage states that the Renaissance 'preferred critical thinking and evidence over dogma or superstition', which implies that the preceding period (the Middle Ages) was more focused on those things.",
          highlight: "preferred critical thinking and evidence over dogma or superstition"
        },
        {
          title: "The Apollo 11 Mission",
          passage: "In July 1969, the Apollo 11 mission successfully landed the first two humans on the Moon. This achievement was the culmination of years of intense research, development, and testing by NASA. The mission required the coordination of thousands of scientists, engineers, and technicians, as well as the support of the American public and government.",
          question: "What can be inferred about the level of technology available in the 1960s?",
          options: ["It was very primitive and unable to support space travel", "It was advanced enough to achieve a lunar landing", "It was far more advanced than the technology we have today", "It was only used for military purposes"],
          correct: "It was advanced enough to achieve a lunar landing",
          explanation: "The fact that they successfully landed humans on the Moon and returned them to Earth proves that the technology of the time was sufficient for this complex task.",
          highlight: "successfully landed the first two humans on the Moon. This achievement was the culmination of years of intense research"
        },
        {
          title: "The Great Wall of China",
          passage: "The Great Wall of China is a series of fortifications built across the northern borders of ancient Chinese states to protect against nomadic groups. The wall was not built all at once; rather, it was constructed over several centuries by different dynasties. The most famous sections of the wall were built during the Ming Dynasty using stone and brick, replacing earlier walls made of rammed earth.",
          question: "What can be inferred about the threat from nomadic groups over time?",
          options: ["The threat disappeared after the first wall was built", "The threat persisted for centuries, necessitating ongoing construction", "The nomadic groups eventually became part of the Chinese empire", "The nomadic groups were only interested in peaceful trade"],
          correct: "The threat persisted for centuries, necessitating ongoing construction",
          explanation: "The fact that the wall was 'constructed over several centuries by different dynasties' implies that the threat it was designed to counter remained a concern for a very long time.",
          highlight: "constructed over several centuries by different dynasties"
        },
        {
          title: "The French Revolution",
          passage: "The French Revolution, which began in 1789, was a period of far-reaching social and political upheaval in France. It was fueled by widespread resentment of the monarchy's absolute power and the perceived injustices of the feudal system. The revolution led to the abolition of the monarchy and the establishment of a republic, but it was also marked by periods of extreme violence and political instability.",
          question: "What can be inferred about the state of French society before the revolution?",
          options: ["It was very peaceful and prosperous for everyone", "It was characterized by significant social and economic inequality", "It was a model of democratic governance", "It was completely unaffected by the monarchy's decisions"],
          correct: "It was characterized by significant social and economic inequality",
          explanation: "The mention of 'resentment of the monarchy's absolute power' and 'injustices of the feudal system' implies that the social structure was unfair and caused widespread dissatisfaction.",
          highlight: "fueled by widespread resentment of the monarchy's absolute power and the perceived injustices of the feudal system"
        }
      ],
      // Exercise 3
      [
        {
          title: "The Amazon Rainforest",
          passage: "The Amazon rainforest is the largest tropical rainforest in the world and is home to an incredible diversity of plant and animal species. It plays a crucial role in regulating the Earth's climate by absorbing vast amounts of carbon dioxide from the atmosphere. However, the rainforest is under threat from deforestation, driven by activities such as logging, mining, and large-scale agriculture.",
          question: "What can be inferred about the impact of deforestation on the global climate?",
          options: ["It will have no effect on the climate", "It could lead to an increase in atmospheric carbon dioxide", "It will make the climate cooler and more stable", "It will only affect the local weather in the Amazon"],
          correct: "It could lead to an increase in atmospheric carbon dioxide",
          explanation: "Since the rainforest 'absorbs vast amounts of carbon dioxide', its destruction would mean that less carbon dioxide is being removed from the atmosphere.",
          highlight: "plays a crucial role in regulating the Earth's climate by absorbing vast amounts of carbon dioxide"
        },
        {
          title: "The Wright Brothers",
          passage: "Orville and Wilbur Wright are credited with inventing and building the world's first successful airplane. Their first powered flight took place in December 1903 at Kitty Hawk, North Carolina. The flight lasted only 12 seconds and covered a distance of 120 feet, but it proved that controlled, powered flight was possible.",
          question: "What can be inferred about the public's reaction to the first flight?",
          options: ["Everyone immediately recognized its importance", "Many people were likely skeptical or unaware of the achievement at first", "It was the most famous event of the year 1903", "The government immediately banned all further flights"],
          correct: "Many people were likely skeptical or unaware of the achievement at first",
          explanation: "The passage notes the flight was very short ('12 seconds' and '120 feet'), which suggests that while it was a breakthrough, its full significance might not have been immediately obvious to the general public.",
          highlight: "The flight lasted only 12 seconds and covered a distance of 120 feet, but it proved that controlled, powered flight was possible"
        },
        {
          title: "The Great Barrier Reef",
          passage: "The Great Barrier Reef is the world's largest coral reef system and is visible from outer space. It is composed of billions of tiny organisms known as coral polyps. In recent years, the reef has suffered from 'coral bleaching,' a phenomenon caused by rising ocean temperatures. Bleaching occurs when corals expel the colorful algae that live in their tissues, leaving them white and vulnerable to disease.",
          question: "What can be inferred about the relationship between coral and algae?",
          options: ["They are enemies that compete for resources", "They have a symbiotic relationship where both benefit", "The algae are parasites that harm the coral", "The coral does not need the algae to survive"],
          correct: "They have a symbiotic relationship where both benefit",
          explanation: "The fact that corals 'expel' the algae when stressed and then become 'vulnerable to disease' implies that the algae are important for the coral's health.",
          highlight: "corals expel the colorful algae that live in their tissues, leaving them white and vulnerable to disease"
        },
        {
          title: "The Magna Carta",
          passage: "The Magna Carta was a document signed by King John of England in 1215 under pressure from a group of rebel barons. It established the principle that the king was not above the law and guaranteed certain rights to free men, such as the right to a fair trial. While it did not immediately create a democracy, it laid the foundation for the development of constitutional law in England and beyond.",
          question: "What can be inferred about King John's leadership before the Magna Carta?",
          options: ["He was a very popular and fair king", "He likely exercised his power in ways that the barons found arbitrary or unfair", "He was a weak leader who always did what the barons wanted", "He was the first king to ever sign a legal document"],
          correct: "He likely exercised his power in ways that the barons found arbitrary or unfair",
          explanation: "The fact that he was forced to sign the document 'under pressure from a group of rebel barons' and that the document 'established the principle that the king was not above the law' implies that his previous actions were seen as overstepping his authority.",
          highlight: "signed by King John of England in 1215 under pressure from a group of rebel barons. It established the principle that the king was not above the law"
        },
        {
          title: "The Hubble Space Telescope",
          passage: "Since its launch in 1990, the Hubble Space Telescope has revolutionized our understanding of the universe. By orbiting above the Earth's atmosphere, it can capture incredibly clear images of distant galaxies, nebulae, and other celestial objects. These images have allowed astronomers to determine the age of the universe more accurately and to discover that the expansion of the universe is accelerating.",
          question: "What can be inferred about the limitations of ground-based telescopes?",
          options: ["They are more powerful than the Hubble telescope", "They are affected by the Earth's atmosphere, which can blur images", "They can only see objects within our own galaxy", "They are no longer used by astronomers"],
          correct: "They are affected by the Earth's atmosphere, which can blur images",
          explanation: "The passage states that Hubble's advantage is 'orbiting above the Earth's atmosphere', which allows it to capture 'incredibly clear images', implying that the atmosphere is a hindrance for ground-based telescopes.",
          highlight: "By orbiting above the Earth's atmosphere, it can capture incredibly clear images"
        }
      ]
    ]
  },
  "Normal": {
    1: [
      {
        title: "The Steam Engine",
        passage: "The steam engine was one of the most important inventions of the Industrial Revolution. It provided a reliable source of power that did not depend on wind or water, allowing factories to be built in locations far from rivers. This led to the rapid growth of industrial cities and the expansion of the railway system, which revolutionized transportation.",
        question: "What can be inferred about factories before the invention of the steam engine?",
        options: ["They were mostly located near rivers or in windy areas", "They were more efficient than steam-powered factories", "They were primarily located in large industrial cities", "They did not require any source of power"],
        correct: "They were mostly located near rivers or in windy areas",
        explanation: "The passage states that the steam engine 'did not depend on wind or water, allowing factories to be built in locations far from rivers', implying that previously they were dependent on those sources."
      }
    ],
    3: [
      {
        title: "The Industrial Revolution",
        passage: "The Industrial Revolution was a period of major industrialization that took place during the late 1700s and early 1800s. It began in Great Britain and quickly spread to other parts of the world, including the United States and Europe. This era saw the transition from hand production methods to machines, new chemical manufacturing and iron production processes, the increasing use of steam power and water power, and the development of machine tools.",
        question: "What can be inferred about the impact of the Industrial Revolution on labor?",
        options: ["It made labor easier and more enjoyable for everyone", "It likely led to a shift from rural to urban areas as people sought factory work", "It had no effect on the way people worked", "It was primarily focused on agricultural improvements"],
        correct: "It likely led to a shift from rural to urban areas as people sought factory work",
        explanation: "The transition to 'machines' and 'mechanized factory systems' implies that work moved from homes and small shops to centralized factories, which are typically located in cities.",
        highlight: "transition from hand production methods to machines... development of machine tools"
      }
    ]
  },
  "Hard": {
    1: [
      {
        title: "Plate Tectonics",
        passage: "Plate tectonics is a scientific theory describing the large-scale motion of seven large plates and the movements of a larger number of smaller plates of Earth's lithosphere. The model builds on the concept of continental drift, an idea developed during the first decades of the 20th century. The geoscientific community accepted plate-tectonic theory after seafloor spreading was validated in the late 1950s and early 1960s.",
        question: "What can be inferred about the geoscientific community's reaction to the concept of continental drift before the 1950s?",
        options: ["They immediately accepted it as a fact", "They were likely skeptical or did not fully accept it", "They had already validated it using seafloor spreading", "They ignored it entirely in favor of other theories"],
        correct: "They were likely skeptical or did not fully accept it",
        explanation: "The passage states that the community accepted the theory *after* seafloor spreading was validated in the late 1950s, implying it wasn't fully accepted before then."
      }
    ],
    3: [
      {
        title: "Quantum Mechanics",
        passage: "Quantum mechanics is a fundamental theory in physics that describes the physical properties of nature at the scale of atoms and subatomic particles. Key principles include wave-particle duality, the uncertainty principle, and quantum entanglement. Unlike classical mechanics, which is deterministic, quantum mechanics is probabilistic, meaning it predicts the likelihood of various outcomes rather than a single definite result.",
        question: "What can be inferred about the nature of reality at the subatomic level according to quantum mechanics?",
        options: ["It is exactly the same as reality at the human scale", "It is inherently uncertain and probabilistic", "It is completely predictable and deterministic", "It is only a theoretical concept with no basis in reality"],
        correct: "It is inherently uncertain and probabilistic",
        explanation: "The passage states that quantum mechanics is 'probabilistic' and mentions the 'uncertainty principle', which implies that at the subatomic level, things are not as definite as they seem at larger scales.",
        highlight: "quantum mechanics is probabilistic, meaning it predicts the likelihood of various outcomes rather than a single definite result"
      }
    ]
  }
};

export const REFERENCE_CONTENT: any = {
  "Easy": {
    3: [
      // Exercise 1
      [
        {
          title: "The Roman Empire",
          passage: "The Roman Empire was the post-Republican period of ancient Rome. As a polity, it included large territorial holdings around the Mediterranean Sea in Europe, North Africa, and Western Asia, and was ruled by emperors. From the accession of Augustus to the Crisis of the Third Century, it was a principate with Italy as the metropole of its provinces and the city of Rome as its sole capital.",
          question: "The word 'it' in the passage refers to",
          options: ["The Roman Empire", "The Mediterranean Sea", "Europe", "North Africa"],
          correct: "The Roman Empire",
          explanation: "In the sentence 'As a polity, it included...', 'it' refers back to the subject of the previous sentence, 'The Roman Empire'.",
          highlight: "The Roman Empire was the post-Republican period of ancient Rome. As a polity, it included"
        },
        {
          title: "The Industrial Revolution",
          passage: "The Industrial Revolution marked a period of development in the latter half of the 18th century that transformed largely rural, agrarian societies in Europe and America into industrialized, urban ones. Goods that had once been painstakingly crafted by hand started to be produced in mass quantities by machines in factories, thanks to the introduction of new machines and techniques in textiles, iron making and other industries.",
          question: "The word 'ones' in the passage refers to",
          options: ["societies", "Europe and America", "Goods", "machines"],
          correct: "societies",
          explanation: "The phrase 'industrialized, urban ones' refers back to the 'rural, agrarian societies' mentioned earlier in the sentence.",
          highlight: "transformed largely rural, agrarian societies in Europe and America into industrialized, urban ones"
        },
        {
          title: "Ancient Egyptian Pyramids",
          passage: "The pyramids of Giza, built for three pharaohs during the Old Kingdom, are some of the most famous structures in the world. Constructing these massive monuments required an incredible amount of labor and resources. Thousands of workers were involved in quarrying, transporting, and placing the massive stone blocks. Some historians believe that these workers were not slaves, but rather skilled laborers who were paid for their work.",
          question: "The word 'their' in the passage refers to",
          options: ["the pyramids", "three pharaohs", "thousands of workers", "stone blocks"],
          correct: "thousands of workers",
          explanation: "In the phrase 'paid for their work', 'their' refers to the 'thousands of workers' (or 'these workers') mentioned in the same and previous sentences.",
          highlight: "Thousands of workers were involved... skilled laborers who were paid for their work"
        },
        {
          title: "The Great Migration",
          passage: "During the Great Migration, millions of African Americans moved from the rural Southern United States to the urban North and West between 1916 and 1970. They were driven by a desire to escape the oppressive Jim Crow laws of the South and to find better economic opportunities in the booming industrial cities of the North.",
          question: "The word 'They' in the passage refers to",
          options: ["millions of African Americans", "rural Southern United States", "urban North and West", "Jim Crow laws"],
          correct: "millions of African Americans",
          explanation: "In the sentence 'They were driven by...', 'They' refers back to the subject of the previous sentence, 'millions of African Americans'.",
          highlight: "millions of African Americans moved... They were driven by"
        },
        {
          title: "The Printing Press",
          passage: "Before Johannes Gutenberg invented the printing press in the mid-15th century, books were rare and incredibly expensive. Each copy had to be written out by hand, a process that could take months or even years. As a result, literacy was largely confined to the clergy and the wealthy elite. The printing press changed all that, making it possible to produce hundreds of copies of a book in the time it used to take to produce one.",
          question: "The word 'one' in the passage refers to",
          options: ["printing press", "book", "copy", "time"],
          correct: "copy",
          explanation: "In the phrase 'produce one', 'one' refers back to a 'copy' of a book.",
          highlight: "produce hundreds of copies of a book in the time it used to take to produce one"
        }
      ],
      // Exercise 2
      [
        {
          title: "The Silk Road",
          passage: "The Silk Road was not a single road, but a vast network of trade routes that connected China to the Mediterranean for over 1,500 years. While silk was the most famous commodity traded, the routes also facilitated the exchange of spices, precious metals, and even religions and philosophies. Traveling the Silk Road was dangerous, as merchants had to contend with its harsh terrain, bandits, and extreme weather.",
          question: "The word 'its' in the passage refers to",
          options: ["The Silk Road", "China", "the Mediterranean", "silk"],
          correct: "The Silk Road",
          explanation: "In the phrase 'its harsh terrain', 'its' refers back to 'The Silk Road'.",
          highlight: "Traveling the Silk Road was dangerous, as merchants had to contend with its harsh terrain"
        },
        {
          title: "The Renaissance",
          passage: "The Renaissance was a period of 'rebirth' in European history, marking the transition from the Middle Ages to modernity. It was characterized by a renewed interest in the classical art and literature of ancient Greece and Rome. This period saw the rise of humanism, a philosophy that emphasized the value and agency of human beings and preferred critical thinking and evidence over dogma or superstition.",
          question: "The word 'It' in the passage refers to",
          options: ["The Renaissance", "European history", "the transition", "the Middle Ages"],
          correct: "The Renaissance",
          explanation: "In the sentence 'It was characterized by...', 'It' refers back to 'The Renaissance'.",
          highlight: "The Renaissance was a period of 'rebirth' in European history... It was characterized by"
        },
        {
          title: "The Apollo 11 Mission",
          passage: "In July 1969, the Apollo 11 mission successfully landed the first two humans on the Moon. This achievement was the culmination of years of intense research, development, and testing by NASA. The mission required the coordination of thousands of scientists, engineers, and technicians, as well as the support of the American public and government.",
          question: "The word 'This' in the passage refers to",
          options: ["July 1969", "the Apollo 11 mission", "successfully landing the first two humans on the Moon", "the Moon"],
          correct: "successfully landing the first two humans on the Moon",
          explanation: "In the sentence 'This achievement was...', 'This' refers to the entire event described in the previous sentence: successfully landing humans on the Moon.",
          highlight: "successfully landed the first two humans on the Moon. This achievement was"
        },
        {
          title: "The Great Wall of China",
          passage: "The Great Wall of China is a series of fortifications built across the northern borders of ancient Chinese states to protect against nomadic groups. The wall was not built all at once; rather, it was constructed over several centuries by different dynasties. The most famous sections of the wall were built during the Ming Dynasty using stone and brick, replacing earlier walls made of rammed earth.",
          question: "The word 'it' in the passage refers to",
          options: ["The Great Wall of China", "a series of fortifications", "the northern borders", "ancient Chinese states"],
          correct: "The Great Wall of China",
          explanation: "In the phrase 'it was constructed', 'it' refers back to 'The Great Wall of China' (or 'The wall').",
          highlight: "The Great Wall of China is a series of fortifications... it was constructed over several centuries"
        },
        {
          title: "The French Revolution",
          passage: "The French Revolution, which began in 1789, was a period of far-reaching social and political upheaval in France. It was fueled by widespread resentment of the monarchy's absolute power and the perceived injustices of the feudal system. The revolution led to the abolition of the monarchy and the establishment of a republic, but it was also marked by periods of extreme violence and political instability.",
          question: "The word 'It' in the passage refers to",
          options: ["The French Revolution", "1789", "social and political upheaval", "France"],
          correct: "The French Revolution",
          explanation: "In the sentence 'It was fueled by...', 'It' refers back to 'The French Revolution'.",
          highlight: "The French Revolution, which began in 1789... It was fueled by"
        }
      ],
      // Exercise 3
      [
        {
          title: "The Amazon Rainforest",
          passage: "The Amazon rainforest is the largest tropical rainforest in the world and is home to an incredible diversity of plant and animal species. It plays a crucial role in regulating the Earth's climate by absorbing vast amounts of carbon dioxide from the atmosphere. However, the rainforest is under threat from deforestation, driven by activities such as logging, mining, and large-scale agriculture.",
          question: "The word 'It' in the passage refers to",
          options: ["The Amazon rainforest", "the largest tropical rainforest", "incredible diversity", "plant and animal species"],
          correct: "The Amazon rainforest",
          explanation: "In the sentence 'It plays a crucial role...', 'It' refers back to 'The Amazon rainforest'.",
          highlight: "The Amazon rainforest is the largest tropical rainforest... It plays a crucial role"
        },
        {
          title: "The Wright Brothers",
          passage: "Orville and Wilbur Wright are credited with inventing and building the world's first successful airplane. Their first powered flight took place in December 1903 at Kitty Hawk, North Carolina. The flight lasted only 12 seconds and covered a distance of 120 feet, but it proved that controlled, powered flight was possible.",
          question: "The word 'Their' in the passage refers to",
          options: ["Orville and Wilbur Wright", "the world's first successful airplane", "powered flight", "Kitty Hawk, North Carolina"],
          correct: "Orville and Wilbur Wright",
          explanation: "In the phrase 'Their first powered flight', 'Their' refers back to 'Orville and Wilbur Wright'.",
          highlight: "Orville and Wilbur Wright are credited... Their first powered flight"
        },
        {
          title: "The Great Barrier Reef",
          passage: "The Great Barrier Reef is the world's largest coral reef system and is visible from outer space. It is composed of billions of tiny organisms known as coral polyps. In recent years, the reef has suffered from 'coral bleaching,' a phenomenon caused by rising ocean temperatures. Bleaching occurs when corals expel the colorful algae that live in their tissues, leaving them white and vulnerable to disease.",
          question: "The word 'them' in the passage refers to",
          options: ["coral polyps", "rising ocean temperatures", "corals", "colorful algae"],
          correct: "corals",
          explanation: "In the phrase 'leaving them white', 'them' refers back to the 'corals' that expelled the algae.",
          highlight: "corals expel the colorful algae that live in their tissues, leaving them white"
        },
        {
          title: "The Magna Carta",
          passage: "The Magna Carta was a document signed by King John of England in 1215 under pressure from a group of rebel barons. It established the principle that the king was not above the law and guaranteed certain rights to free men, such as the right to a fair trial. While it did not immediately create a democracy, it laid the foundation for the development of constitutional law in England and beyond.",
          question: "The word 'it' in the passage refers to",
          options: ["The Magna Carta", "King John of England", "a group of rebel barons", "the principle"],
          correct: "The Magna Carta",
          explanation: "In the phrase 'it laid the foundation', 'it' refers back to 'The Magna Carta'.",
          highlight: "The Magna Carta was a document... it laid the foundation"
        },
        {
          title: "The Hubble Space Telescope",
          passage: "Since its launch in 1990, the Hubble Space Telescope has revolutionized our understanding of the universe. By orbiting above the Earth's atmosphere, it can capture incredibly clear images of distant galaxies, nebulae, and other celestial objects. These images have allowed astronomers to determine the age of the universe more accurately and to discover that the expansion of the universe is accelerating.",
          question: "The word 'its' in the passage refers to",
          options: ["1990", "the Hubble Space Telescope", "our understanding", "the universe"],
          correct: "the Hubble Space Telescope",
          explanation: "In the phrase 'its launch', 'its' refers back to 'the Hubble Space Telescope'.",
          highlight: "Since its launch in 1990, the Hubble Space Telescope"
        }
      ]
    ]
  },
  "Normal": {
    3: [
      {
        title: "The French Revolution",
        passage: "The French Revolution was a period of far-reaching social and political upheaval in France and its colonies beginning in 1789 and ending in 1799. The Revolution overthrew the monarchy, established a republic, catalyzed violent periods of political turmoil, and finally culminated in a dictatorship under Napoleon who brought many of its principles to areas he conquered in Western Europe and beyond.",
        question: "The word 'its' in the passage refers to",
        options: ["The French Revolution", "France", "the monarchy", "Napoleon"],
        correct: "The French Revolution",
        explanation: "In the phrase 'brought many of its principles', 'its' refers back to 'The French Revolution'.",
        highlight: "The French Revolution was a period... brought many of its principles"
      }
    ]
  },
  "Hard": {
    3: [
      {
        title: "The Big Bang Theory",
        passage: "The Big Bang theory is the prevailing cosmological model explaining the existence of the observable universe from the earliest known periods through its subsequent large-scale evolution. The model describes how the universe expanded from a very high-density and high-temperature state, and offers a comprehensive explanation for a broad range of observed phenomena, including the abundance of light elements, the cosmic microwave background (CMB) radiation, and large-scale structure.",
        question: "The word 'its' in the passage refers to",
        options: ["the observable universe", "The Big Bang theory", "the earliest known periods", "large-scale evolution"],
        correct: "the observable universe",
        explanation: "In the phrase 'through its subsequent large-scale evolution', 'its' refers back to 'the observable universe'.",
        highlight: "existence of the observable universe... through its subsequent large-scale evolution"
      }
    ]
  },
  "Advanced": {
    3: [
      {
        title: "The United Nations",
        passage: "The United Nations (UN) is an intergovernmental organization whose stated purposes are to maintain international peace and security, develop friendly relations among nations, achieve international cooperation, and be a center for harmonizing the actions of nations. It is the world's largest and most familiar international organization. The UN is headquartered on international territory in New York City, and has other main offices in Geneva, Nairobi, Vienna, and The Hague.",
        question: "The word 'It' in the passage refers to",
        options: ["The United Nations", "an intergovernmental organization", "international peace and security", "the world"],
        correct: "The United Nations",
        explanation: "In the sentence 'It is the world's largest...', 'It' refers back to 'The United Nations'.",
        highlight: "The United Nations (UN) is an intergovernmental organization... It is the world's largest"
      }
    ]
  }
};

export const SENTENCE_SIMPLIFICATION_CONTENT: any = {
  "Easy": {
    3: [
      // Exercise 1
      [
        {
          title: "The Roman Empire",
          passage: "The Roman Empire, which at its height spanned three continents and included millions of diverse people, was eventually weakened by a combination of internal political instability and external pressure from invading tribes.",
          question: "Which of the following best expresses the essential information in the highlighted sentence?",
          options: [
            "The Roman Empire was very large but was eventually brought down by internal and external problems.",
            "The Roman Empire was the most powerful empire in history until it was invaded by tribes.",
            "Internal political instability was the main reason the Roman Empire collapsed.",
            "The Roman Empire included millions of people from three different continents."
          ],
          correct: "The Roman Empire was very large but was eventually brought down by internal and external problems.",
          explanation: "This option captures the two main points: the empire's vast size ('spanned three continents') and the causes of its decline ('internal political instability and external pressure').",
          highlight: "The Roman Empire, which at its height spanned three continents and included millions of diverse people, was eventually weakened by a combination of internal political instability and external pressure from invading tribes."
        },
        {
          title: "The Industrial Revolution",
          passage: "Although the Industrial Revolution led to significant economic growth and technological advancement, it also resulted in poor working conditions and increased pollution in many urban areas.",
          question: "Which of the following best expresses the essential information in the highlighted sentence?",
          options: [
            "The Industrial Revolution was a period of great progress that benefited everyone.",
            "The Industrial Revolution had both positive economic effects and negative social and environmental consequences.",
            "Poor working conditions were the most significant result of the Industrial Revolution.",
            "Technological advancement was the only positive outcome of the Industrial Revolution."
          ],
          correct: "The Industrial Revolution had both positive economic effects and negative social and environmental consequences.",
          explanation: "This option correctly summarizes the contrast between the 'economic growth' and the 'poor working conditions and increased pollution'.",
          highlight: "Although the Industrial Revolution led to significant economic growth and technological advancement, it also resulted in poor working conditions and increased pollution in many urban areas."
        },
        {
          title: "Ancient Egyptian Pyramids",
          passage: "The construction of the Great Pyramids, which required the labor of thousands of workers over several decades, serves as a testament to the highly organized and centralized nature of ancient Egyptian society.",
          question: "Which of the following best expresses the essential information in the highlighted sentence?",
          options: [
            "The Great Pyramids are the most famous structures in Egypt.",
            "Building the pyramids took a long time and many workers.",
            "The massive effort required to build the pyramids shows how well-organized Egyptian society was.",
            "Ancient Egyptian society was primarily focused on building monuments for their pharaohs."
          ],
          correct: "The massive effort required to build the pyramids shows how well-organized Egyptian society was.",
          explanation: "This option captures the relationship between the 'labor of thousands of workers' and the 'organized and centralized nature' of the society.",
          highlight: "The construction of the Great Pyramids, which required the labor of thousands of workers over several decades, serves as a testament to the highly organized and centralized nature of ancient Egyptian society."
        },
        {
          title: "The Great Migration",
          passage: "Driven by the hope for better economic opportunities and the desire to escape the oppressive Jim Crow laws of the South, millions of African Americans moved to Northern and Western cities during the early 20th century.",
          question: "Which of the following best expresses the essential information in the highlighted sentence?",
          options: [
            "African Americans moved to the North to find jobs in factories.",
            "The Great Migration was caused by a combination of economic goals and the need to escape Southern injustice.",
            "Jim Crow laws were the only reason African Americans left the South.",
            "Millions of people moved to the West during the early 20th century."
          ],
          correct: "The Great Migration was caused by a combination of economic goals and the need to escape Southern injustice.",
          explanation: "This option summarizes the two main drivers mentioned: 'economic opportunities' and 'escape the oppressive Jim Crow laws'.",
          highlight: "Driven by the hope for better economic opportunities and the desire to escape the oppressive Jim Crow laws of the South, millions of African Americans moved to Northern and Western cities during the early 20th century."
        },
        {
          title: "The Printing Press",
          passage: "By making books more affordable and accessible to a wider audience, the invention of the printing press played a crucial role in the spread of literacy and the rapid dissemination of new ideas throughout Europe.",
          question: "Which of the following best expresses the essential information in the highlighted sentence?",
          options: [
            "The printing press made books cheaper, which helped spread knowledge and literacy.",
            "Before the printing press, books were only for the wealthy.",
            "The printing press was the most important invention of the 15th century.",
            "Literacy rates in Europe were very low before the mid-15th century."
          ],
          correct: "The printing press made books cheaper, which helped spread knowledge and literacy.",
          explanation: "This option captures the cause ('making books more affordable') and the effect ('spread of literacy and the rapid dissemination of new ideas').",
          highlight: "By making books more affordable and accessible to a wider audience, the invention of the printing press played a crucial role in the spread of literacy and the rapid dissemination of new ideas throughout Europe."
        }
      ],
      // Exercise 2
      [
        {
          title: "The Silk Road",
          passage: "The Silk Road, a complex network of trade routes connecting the East and West, facilitated not only the exchange of goods like silk and spices but also the transmission of cultural ideas and religious beliefs.",
          question: "Which of the following best expresses the essential information in the highlighted sentence?",
          options: [
            "The Silk Road was primarily used for trading silk between China and Europe.",
            "The Silk Road was a trade network that allowed for both commercial and cultural exchange.",
            "Cultural ideas were more important than silk on the Silk Road.",
            "The Silk Road was a single road that connected many different countries."
          ],
          correct: "The Silk Road was a trade network that allowed for both commercial and cultural exchange.",
          explanation: "This option summarizes the 'exchange of goods' and the 'transmission of cultural ideas'.",
          highlight: "The Silk Road, a complex network of trade routes connecting the East and West, facilitated not only the exchange of goods like silk and spices but also the transmission of cultural ideas and religious beliefs."
        },
        {
          title: "The Renaissance",
          passage: "Characterized by a renewed interest in classical learning and the rise of humanism, the Renaissance marked a significant shift in European thought away from medieval dogma toward critical thinking and observation.",
          question: "Which of the following best expresses the essential information in the highlighted sentence?",
          options: [
            "The Renaissance was a time when people started painting more realistically.",
            "The Renaissance represented a change in thinking that prioritized reason and evidence over tradition.",
            "Humanism was the most important philosophy of the Renaissance.",
            "Medieval dogma was completely replaced by science during the Renaissance."
          ],
          correct: "The Renaissance represented a change in thinking that prioritized reason and evidence over tradition.",
          explanation: "This option captures the 'shift in European thought' from 'dogma' toward 'critical thinking and observation'.",
          highlight: "Characterized by a renewed interest in classical learning and the rise of humanism, the Renaissance marked a significant shift in European thought away from medieval dogma toward critical thinking and observation."
        },
        {
          title: "The Apollo 11 Mission",
          passage: "The success of the Apollo 11 mission, which required the coordination of thousands of individuals and the application of cutting-edge technology, demonstrated the immense capabilities of human ingenuity and national cooperation.",
          question: "Which of the following best expresses the essential information in the highlighted sentence?",
          options: [
            "The Apollo 11 mission was the first time humans landed on the Moon.",
            "Landing on the Moon showed what people can achieve through teamwork and advanced technology.",
            "Thousands of engineers worked on the Apollo 11 mission for many years.",
            "NASA is the most advanced space agency in the world."
          ],
          correct: "Landing on the Moon showed what people can achieve through teamwork and advanced technology.",
          explanation: "This option summarizes the 'coordination of thousands', 'cutting-edge technology', and the resulting 'human ingenuity and national cooperation'.",
          highlight: "The success of the Apollo 11 mission, which required the coordination of thousands of individuals and the application of cutting-edge technology, demonstrated the immense capabilities of human ingenuity and national cooperation."
        },
        {
          title: "The Great Wall of China",
          passage: "Built over several centuries by multiple dynasties, the Great Wall of China served as a massive defensive fortification designed to protect the empire from the persistent threat of nomadic invasions from the north.",
          question: "Which of the following best expresses the essential information in the highlighted sentence?",
          options: [
            "The Great Wall was built to keep people from leaving China.",
            "The Great Wall was a long-term project intended to defend China against northern invaders.",
            "The Ming Dynasty built the most famous parts of the Great Wall.",
            "Nomadic invasions were a constant problem for ancient Chinese states."
          ],
          correct: "The Great Wall was a long-term project intended to defend China against northern invaders.",
          explanation: "This option captures the 'several centuries' (long-term), 'defensive fortification' (defend), and 'nomadic invasions from the north' (northern invaders).",
          highlight: "Built over several centuries by multiple dynasties, the Great Wall of China served as a massive defensive fortification designed to protect the empire from the persistent threat of nomadic invasions from the north."
        },
        {
          title: "The French Revolution",
          passage: "While the French Revolution succeeded in overthrowing the absolute monarchy and establishing a republic, it also plunged the nation into a period of extreme violence and political instability known as the Reign of Terror.",
          question: "Which of the following best expresses the essential information in the highlighted sentence?",
          options: [
            "The French Revolution was a complete success that brought democracy to France.",
            "The French Revolution replaced the king with a republic but also caused great chaos and violence.",
            "The Reign of Terror was the most important part of the French Revolution.",
            "The French Revolution began in 1789 and ended in 1799."
          ],
          correct: "The French Revolution replaced the king with a republic but also caused great chaos and violence.",
          explanation: "This option summarizes the 'overthrowing the absolute monarchy' (replacing the king), 'establishing a republic', and the 'extreme violence and political instability'.",
          highlight: "While the French Revolution succeeded in overthrowing the absolute monarchy and establishing a republic, it also plunged the nation into a period of extreme violence and political instability known as the Reign of Terror."
        }
      ],
      // Exercise 3
      [
        {
          title: "The Amazon Rainforest",
          passage: "As the world's largest tropical rainforest, the Amazon plays a vital role in global climate regulation by absorbing carbon dioxide, yet it faces constant threats from deforestation caused by human activities.",
          question: "Which of the following best expresses the essential information in the highlighted sentence?",
          options: [
            "The Amazon is a very large forest that is home to many animals.",
            "The Amazon helps control the climate but is being destroyed by humans.",
            "Deforestation is the biggest problem facing the Amazon today.",
            "The Amazon absorbs more carbon dioxide than any other forest."
          ],
          correct: "The Amazon helps control the climate but is being destroyed by humans.",
          explanation: "This option captures the 'vital role in global climate regulation' and the 'threats from deforestation caused by human activities'.",
          highlight: "As the world's largest tropical rainforest, the Amazon plays a vital role in global climate regulation by absorbing carbon dioxide, yet it faces constant threats from deforestation caused by human activities."
        },
        {
          title: "The Wright Brothers",
          passage: "Although their first powered flight lasted only 12 seconds and covered a short distance, the Wright brothers' achievement proved that controlled, sustained flight was possible, forever changing the course of transportation.",
          question: "Which of the following best expresses the essential information in the highlighted sentence?",
          options: [
            "The Wright brothers' first flight was very short and not very impressive.",
            "The Wright brothers' first flight was a major breakthrough that revolutionized travel.",
            "Transportation changed forever in December 1903.",
            "Orville and Wilbur Wright were the first people to ever fly."
          ],
          correct: "The Wright brothers' first flight was a major breakthrough that revolutionized travel.",
          explanation: "This option captures the 'achievement proved that controlled, sustained flight was possible' and 'forever changing the course of transportation'.",
          highlight: "Although their first powered flight lasted only 12 seconds and covered a short distance, the Wright brothers' achievement proved that controlled, sustained flight was possible, forever changing the course of transportation."
        },
        {
          title: "The Great Barrier Reef",
          passage: "The Great Barrier Reef, a vast and diverse ecosystem composed of billions of coral polyps, is currently facing significant degradation due to rising ocean temperatures and the resulting phenomenon of coral bleaching.",
          question: "Which of the following best expresses the essential information in the highlighted sentence?",
          options: [
            "The Great Barrier Reef is the largest coral reef in the world.",
            "The Great Barrier Reef is being damaged by warmer oceans and bleaching.",
            "Coral polyps are the tiny organisms that build the reef.",
            "Coral bleaching is a natural process that happens every few years."
          ],
          correct: "The Great Barrier Reef is being damaged by warmer oceans and bleaching.",
          explanation: "This option summarizes the 'significant degradation' caused by 'rising ocean temperatures' and 'coral bleaching'.",
          highlight: "The Great Barrier Reef, a vast and diverse ecosystem composed of billions of coral polyps, is currently facing significant degradation due to rising ocean temperatures and the resulting phenomenon of coral bleaching."
        },
        {
          title: "The Magna Carta",
          passage: "By establishing the principle that even the monarch was subject to the law, the Magna Carta laid the essential groundwork for the development of modern constitutional democracy and the protection of individual rights.",
          question: "Which of the following best expresses the essential information in the highlighted sentence?",
          options: [
            "The Magna Carta was signed by King John in 1215.",
            "The Magna Carta helped create modern democracy by making the king follow the law.",
            "Individual rights were first protected by the Magna Carta.",
            "The Magna Carta is the most important document in English history."
          ],
          correct: "The Magna Carta helped create modern democracy by making the king follow the law.",
          explanation: "This option captures the 'principle that even the monarch was subject to the law' and the 'groundwork for the development of modern constitutional democracy'.",
          highlight: "By establishing the principle that even the monarch was subject to the law, the Magna Carta laid the essential groundwork for the development of modern constitutional democracy and the protection of individual rights."
        },
        {
          title: "The Hubble Space Telescope",
          passage: "The Hubble Space Telescope, which orbits above the Earth's blurring atmosphere, has provided astronomers with unprecedentedly clear views of the cosmos, leading to fundamental discoveries about the age and expansion of the universe.",
          question: "Which of the following best expresses the essential information in the highlighted sentence?",
          options: [
            "The Hubble telescope is better than ground-based telescopes because it is in space.",
            "The Hubble telescope has allowed for major scientific discoveries by providing clear images of space.",
            "Astronomers have used the Hubble telescope to find new galaxies.",
            "The universe is expanding faster than scientists previously thought."
          ],
          correct: "The Hubble telescope has allowed for major scientific discoveries by providing clear images of space.",
          explanation: "This option captures the 'unprecedentedly clear views' and the 'fundamental discoveries about the age and expansion of the universe'.",
          highlight: "The Hubble Space Telescope, which orbits above the Earth's blurring atmosphere, has provided astronomers with unprecedentedly clear views of the cosmos, leading to fundamental discoveries about the age and expansion of the universe."
        }
      ]
    ]
  }
};

export const PARAGRAPH_RELATIONSHIPS_CONTENT: any = {
  "Easy": {
    3: [
      // Exercise 1
      [
        {
          title: "The Roman Empire",
          passage: "Paragraph 1: The Roman Empire was one of the most powerful and influential civilizations in history. At its peak, it controlled vast territories across Europe, North Africa, and the Middle East. Paragraph 2: This expansion was made possible by Rome's highly organized military and its advanced engineering, which allowed for the construction of an extensive network of roads and bridges.",
          question: "What is the relationship between Paragraph 1 and Paragraph 2?",
          options: [
            "Paragraph 2 provides reasons for the success described in Paragraph 1.",
            "Paragraph 2 contradicts the information presented in Paragraph 1.",
            "Paragraph 2 introduces a new topic unrelated to Paragraph 1.",
            "Paragraph 1 explains the consequences of the events in Paragraph 2."
          ],
          correct: "Paragraph 2 provides reasons for the success described in Paragraph 1.",
          explanation: "Paragraph 1 describes Rome's power and territory, and Paragraph 2 explains *how* that was achieved (military and engineering).",
          highlight: "At its peak, it controlled vast territories... This expansion was made possible by Rome's highly organized military"
        },
        {
          title: "The Industrial Revolution",
          passage: "Paragraph 1: The Industrial Revolution began in Great Britain in the late 18th century and quickly spread to other parts of the world. It was a period of rapid technological advancement and economic growth. Paragraph 2: However, this progress came at a cost. Many workers faced long hours, low wages, and dangerous conditions in factories and mines.",
          question: "What is the relationship between Paragraph 1 and Paragraph 2?",
          options: [
            "Paragraph 2 provides further examples of the growth mentioned in Paragraph 1.",
            "Paragraph 2 presents a negative aspect of the development described in Paragraph 1.",
            "Paragraph 1 explains the causes of the problems mentioned in Paragraph 2.",
            "Paragraph 2 summarizes the main points of Paragraph 1."
          ],
          correct: "Paragraph 2 presents a negative aspect of the development described in Paragraph 1.",
          explanation: "Paragraph 1 focuses on the positive 'growth' and 'advancement', while Paragraph 2 uses 'However' to introduce the negative 'cost' for workers.",
          highlight: "It was a period of rapid technological advancement and economic growth. Paragraph 2: However, this progress came at a cost."
        },
        {
          title: "Ancient Egyptian Pyramids",
          passage: "Paragraph 1: The Great Pyramids of Giza were built as tombs for the pharaohs of ancient Egypt. They were designed to protect the pharaoh's body and belongings for the afterlife. Paragraph 2: To ensure this protection, the pyramids were constructed with massive stone blocks and featured complex internal passages and hidden chambers.",
          question: "What is the relationship between Paragraph 1 and Paragraph 2?",
          options: [
            "Paragraph 2 describes the methods used to achieve the purpose mentioned in Paragraph 1.",
            "Paragraph 2 explains why the purpose mentioned in Paragraph 1 was unnecessary.",
            "Paragraph 1 provides a history of the construction described in Paragraph 2.",
            "Paragraph 2 compares the pyramids to other types of tombs."
          ],
          correct: "Paragraph 2 describes the methods used to achieve the purpose mentioned in Paragraph 1.",
          explanation: "Paragraph 1 states the purpose (protection for the afterlife), and Paragraph 2 describes the physical features (stone blocks, passages) used to achieve that protection.",
          highlight: "They were designed to protect the pharaoh's body... To ensure this protection, the pyramids were constructed"
        },
        {
          title: "The Great Migration",
          passage: "Paragraph 1: Between 1916 and 1970, millions of African Americans moved from the rural South to the urban North and West. This movement is known as the Great Migration. Paragraph 2: Several factors drove this migration, including the desire to escape racial segregation and the hope for better-paying jobs in Northern industries.",
          question: "What is the relationship between Paragraph 1 and Paragraph 2?",
          options: [
            "Paragraph 2 lists the causes for the event described in Paragraph 1.",
            "Paragraph 1 describes the effects of the migration mentioned in Paragraph 2.",
            "Paragraph 2 argues that the migration described in Paragraph 1 was unsuccessful.",
            "Paragraph 1 provides a specific example of the factors mentioned in Paragraph 2."
          ],
          correct: "Paragraph 2 lists the causes for the event described in Paragraph 1.",
          explanation: "Paragraph 1 introduces the Great Migration, and Paragraph 2 explains the 'factors' (causes) that drove it.",
          highlight: "This movement is known as the Great Migration. Paragraph 2: Several factors drove this migration"
        },
        {
          title: "The Printing Press",
          passage: "Paragraph 1: The invention of the printing press by Johannes Gutenberg in the 15th century revolutionized the production of books. It allowed for the mass production of texts for the first time. Paragraph 2: As a result, books became much more affordable and accessible, leading to a significant increase in literacy rates across Europe.",
          question: "What is the relationship between Paragraph 1 and Paragraph 2?",
          options: [
            "Paragraph 2 describes the consequences of the invention mentioned in Paragraph 1.",
            "Paragraph 2 provides a detailed description of how the invention in Paragraph 1 works.",
            "Paragraph 1 explains why the invention mentioned in Paragraph 1 was initially rejected.",
            "Paragraph 2 compares the printing press to earlier methods of book production."
          ],
          correct: "Paragraph 2 describes the consequences of the invention mentioned in Paragraph 1.",
          explanation: "Paragraph 1 describes the invention, and Paragraph 2 uses 'As a result' to introduce its effects (affordability, literacy).",
          highlight: "It allowed for the mass production of texts for the first time. Paragraph 2: As a result, books became much more affordable"
        }
      ],
      // Exercise 2
      [
        {
          title: "The Silk Road",
          passage: "Paragraph 1: The Silk Road was a network of trade routes that connected the East and West for centuries. It facilitated the exchange of goods, such as silk, spices, and precious metals. Paragraph 2: Beyond commerce, the Silk Road also served as a conduit for the spread of ideas, religions, and technologies between different civilizations.",
          question: "What is the relationship between Paragraph 1 and Paragraph 2?",
          options: [
            "Paragraph 2 adds another dimension to the role of the Silk Road described in Paragraph 1.",
            "Paragraph 2 contradicts the idea that the Silk Road was primarily for trade.",
            "Paragraph 1 explains the origin of the ideas mentioned in Paragraph 2.",
            "Paragraph 2 provides a specific example of the goods mentioned in Paragraph 1."
          ],
          correct: "Paragraph 2 adds another dimension to the role of the Silk Road described in Paragraph 1.",
          explanation: "Paragraph 1 focuses on the commercial aspect (goods), and Paragraph 2 adds the cultural/intellectual aspect (ideas, religions).",
          highlight: "It facilitated the exchange of goods... Beyond commerce, the Silk Road also served as a conduit"
        },
        {
          title: "The Renaissance",
          passage: "Paragraph 1: The Renaissance was a period of great artistic and intellectual achievement in Europe. It saw the rise of famous artists like Leonardo da Vinci and Michelangelo. Paragraph 2: This artistic flourishing was deeply connected to the philosophy of humanism, which emphasized the potential and value of the individual.",
          question: "What is the relationship between Paragraph 1 and Paragraph 2?",
          options: [
            "Paragraph 2 explains the underlying philosophy of the period described in Paragraph 1.",
            "Paragraph 2 provides a critique of the artists mentioned in Paragraph 1.",
            "Paragraph 1 describes the decline of the philosophy mentioned in Paragraph 2.",
            "Paragraph 2 lists the specific works of the artists mentioned in Paragraph 1."
          ],
          correct: "Paragraph 2 explains the underlying philosophy of the period described in Paragraph 1.",
          explanation: "Paragraph 1 describes the artistic achievement, and Paragraph 2 explains the 'humanism' philosophy that was 'deeply connected' to it.",
          highlight: "It saw the rise of famous artists... This artistic flourishing was deeply connected to the philosophy of humanism"
        },
        {
          title: "The Apollo 11 Mission",
          passage: "Paragraph 1: In 1969, the Apollo 11 mission successfully landed the first humans on the Moon. This was a landmark event in the history of space exploration. Paragraph 2: Achieving this goal required an unprecedented level of national effort, involving thousands of scientists and billions of dollars in funding.",
          question: "What is the relationship between Paragraph 1 and Paragraph 2?",
          options: [
            "Paragraph 2 describes the resources required for the achievement mentioned in Paragraph 1.",
            "Paragraph 2 argues that the event in Paragraph 1 was not worth the cost.",
            "Paragraph 1 explains the scientific discoveries made during the mission in Paragraph 2.",
            "Paragraph 2 compares Apollo 11 to later space missions."
          ],
          correct: "Paragraph 2 describes the resources required for the achievement mentioned in Paragraph 1.",
          explanation: "Paragraph 1 states the achievement, and Paragraph 2 describes the 'effort', 'scientists', and 'funding' (resources) needed to achieve it.",
          highlight: "This was a landmark event in the history of space exploration. Paragraph 2: Achieving this goal required an unprecedented level of national effort"
        },
        {
          title: "The Great Wall of China",
          passage: "Paragraph 1: The Great Wall of China was built over many centuries to protect the Chinese empire from northern invaders. It consists of walls, towers, and fortifications. Paragraph 2: Despite its massive scale, the wall was not always effective in preventing invasions, as some groups were able to bypass or breach it.",
          question: "What is the relationship between Paragraph 1 and Paragraph 2?",
          options: [
            "Paragraph 2 qualifies the effectiveness of the structure described in Paragraph 1.",
            "Paragraph 2 provides more details about the construction of the wall in Paragraph 1.",
            "Paragraph 1 explains why the wall was eventually abandoned in Paragraph 2.",
            "Paragraph 2 gives examples of the specific invaders mentioned in Paragraph 1."
          ],
          correct: "Paragraph 2 qualifies the effectiveness of the structure described in Paragraph 1.",
          explanation: "Paragraph 1 describes the wall's purpose (protection), and Paragraph 2 points out that it was 'not always effective' (qualifying its success).",
          highlight: "The Great Wall of China was built... to protect the Chinese empire... Paragraph 2: Despite its massive scale, the wall was not always effective"
        },
        {
          title: "The French Revolution",
          passage: "Paragraph 1: The French Revolution was a period of radical social and political change that began in 1789. It led to the end of the monarchy and the rise of Napoleon Bonaparte. Paragraph 2: The revolution was sparked by a combination of economic hardship, social inequality, and the influence of Enlightenment ideas.",
          question: "What is the relationship between Paragraph 1 and Paragraph 2?",
          options: [
            "Paragraph 2 identifies the causes of the revolution described in Paragraph 1.",
            "Paragraph 2 describes the long-term effects of the revolution in Paragraph 1.",
            "Paragraph 1 explains why the ideas in Paragraph 2 were initially ignored.",
            "Paragraph 2 provides a timeline of the events mentioned in Paragraph 1."
          ],
          correct: "Paragraph 2 identifies the causes of the revolution described in Paragraph 1.",
          explanation: "Paragraph 1 introduces the revolution, and Paragraph 2 explains what 'sparked' (caused) it.",
          highlight: "The French Revolution was a period of radical social and political change... Paragraph 2: The revolution was sparked by a combination of"
        }
      ],
      // Exercise 3
      [
        {
          title: "The Amazon Rainforest",
          passage: "Paragraph 1: The Amazon rainforest is a vital part of the Earth's ecosystem, home to millions of species and a key regulator of the global climate. Paragraph 2: However, the rainforest is currently facing a severe threat from deforestation, which is destroying habitats and releasing stored carbon into the atmosphere.",
          question: "What is the relationship between Paragraph 1 and Paragraph 2?",
          options: [
            "Paragraph 2 introduces a problem facing the ecosystem described in Paragraph 1.",
            "Paragraph 2 provides evidence for the importance of the rainforest mentioned in Paragraph 1.",
            "Paragraph 1 explains the causes of the deforestation mentioned in Paragraph 2.",
            "Paragraph 2 suggests a solution to the problem described in Paragraph 1."
          ],
          correct: "Paragraph 2 introduces a problem facing the ecosystem described in Paragraph 1.",
          explanation: "Paragraph 1 describes the rainforest's importance, and Paragraph 2 uses 'Hold' to introduce the 'threat' (problem) it faces.",
          highlight: "The Amazon rainforest is a vital part of the Earth's ecosystem... Paragraph 2: However, the rainforest is currently facing a severe threat"
        },
        {
          title: "The Wright Brothers",
          passage: "Paragraph 1: In 1903, the Wright brothers achieved the first controlled, powered flight in history. This event marked the beginning of the aviation age. Paragraph 2: Their success was the result of years of experimentation with gliders and the development of a lightweight engine and an effective control system.",
          question: "What is the relationship between Paragraph 1 and Paragraph 2?",
          options: [
            "Paragraph 2 explains how the achievement in Paragraph 1 was accomplished.",
            "Paragraph 2 describes the impact of the aviation age mentioned in Paragraph 1.",
            "Paragraph 1 provides a specific example of the experiments mentioned in Paragraph 2.",
            "Paragraph 2 argues that the Wright brothers were not the first to fly."
          ],
          correct: "Paragraph 2 explains how the achievement in Paragraph 1 was accomplished.",
          explanation: "Paragraph 1 states the achievement, and Paragraph 2 explains the 'experimentation' and 'development' (how) that led to it.",
          highlight: "the Wright brothers achieved the first controlled, powered flight... Paragraph 2: Their success was the result of years of experimentation"
        },
        {
          title: "The Great Barrier Reef",
          passage: "Paragraph 1: The Great Barrier Reef is the largest coral reef system in the world, stretching over 2,300 kilometers along the coast of Australia. Paragraph 2: This unique ecosystem is built by billions of tiny organisms called coral polyps, which secrete calcium carbonate to form the reef's structure.",
          question: "What is the relationship between Paragraph 1 and Paragraph 2?",
          options: [
            "Paragraph 2 provides biological details about the formation of the reef described in Paragraph 1.",
            "Paragraph 2 explains why the reef in Paragraph 1 is under threat.",
            "Paragraph 1 describes the history of the organisms mentioned in Paragraph 2.",
            "Paragraph 2 compares the Great Barrier Reef to other reef systems."
          ],
          correct: "Paragraph 2 provides biological details about the formation of the reef described in Paragraph 1.",
          explanation: "Paragraph 1 describes the reef's size and location, and Paragraph 2 explains *what* builds it (coral polyps) and *how* (calcium carbonate).",
          highlight: "The Great Barrier Reef is the largest coral reef system... Paragraph 2: This unique ecosystem is built by billions of tiny organisms"
        },
        {
          title: "The Magna Carta",
          passage: "Paragraph 1: The Magna Carta was a document signed in 1215 that limited the power of the English king. It is considered a cornerstone of individual liberty. Paragraph 2: For example, it established that no free man could be imprisoned or punished without a lawful judgment by his peers or by the law of the land.",
          question: "What is the relationship between Paragraph 1 and Paragraph 2?",
          options: [
            "Paragraph 2 provides a specific example of the principles mentioned in Paragraph 1.",
            "Paragraph 2 explains why the document in Paragraph 1 was initially ignored.",
            "Paragraph 1 describes the long-term effects of the principle in Paragraph 2.",
            "Paragraph 2 compares the Magna Carta to other historical documents."
          ],
          correct: "Paragraph 2 provides a specific example of the principles mentioned in Paragraph 1.",
          explanation: "Paragraph 1 mentions the document 'limited the power' and 'individual liberty', and Paragraph 2 uses 'For example' to give a specific rule (no imprisonment without judgment).",
          highlight: "It is considered a cornerstone of individual liberty. Paragraph 2: For example, it established that no free man could be imprisoned"
        },
        {
          title: "The Hubble Space Telescope",
          passage: "Paragraph 1: The Hubble Space Telescope has provided some of the most detailed images of the universe ever captured. These images have led to many scientific breakthroughs. Paragraph 2: One such breakthrough was the discovery that the expansion of the universe is actually accelerating, rather than slowing down as previously thought.",
          question: "What is the relationship between Paragraph 1 and Paragraph 2?",
          options: [
            "Paragraph 2 gives a specific example of a breakthrough mentioned in Paragraph 1.",
            "Paragraph 2 explains the technology used to capture the images in Paragraph 1.",
            "Paragraph 1 describes the history of the discovery mentioned in Paragraph 2.",
            "Paragraph 2 argues that the images in Paragraph 1 are misleading."
          ],
          correct: "Paragraph 2 gives a specific example of a breakthrough mentioned in Paragraph 1.",
          explanation: "Paragraph 1 mentions 'many scientific breakthroughs', and Paragraph 2 introduces 'One such breakthrough' (accelerating expansion).",
          highlight: "These images have led to many scientific breakthroughs. Paragraph 2: One such breakthrough was the discovery"
        }
      ]
    ]
  },
  "Normal": {
    3: [
      // Exercise 1
      [
        {
          title: "Plate Tectonics",
          passage: "Plate tectonics is the scientific theory that describes the large-scale motion of seven large plates and the movements of a larger number of smaller plates of Earth's lithosphere, since tectonic processes began on Earth between 3.3 and 3.5 billion years ago. The model builds on the concept of continental drift, an idea developed during the first decades of the 20th century. The geoscientific community accepted plate-tectonic theory after seafloor spreading was validated in the late 1950s and early 1960s. The lithosphere, which is the rigid outermost shell of a planet (the crust and upper mantle), is broken into tectonic plates. Where the plates meet, their relative motion determines the type of boundary: convergent, divergent, or transform.",
          question: "According to the passage, what are the three types of plate boundaries determined by relative motion?",
          options: ["Solid, liquid, and gas", "Convergent, divergent, and transform", "North, south, and west", "Inner, outer, and middle"],
          correct: "Convergent, divergent, and transform",
          explanation: "The text states: 'Where the plates meet, their relative motion determines the type of boundary: convergent, divergent, or transform.'"
        },
        {
          title: "The Great Depression",
          passage: "The Great Depression was a severe worldwide economic depression that took place mostly during the 1930s, beginning in the United States. The timing of the Great Depression varied across nations; in most countries it started in 1929 and lasted until the late 1930s. It was the longest, deepest, and most widespread depression of the 20th century. The Great Depression is commonly used as an example of how intensely the global economy can decline. The depression had devastating effects in both rich and poor countries. Personal income, tax revenue, profits and prices dropped, while international trade fell by more than 50%. Unemployment in the U.S. rose to 23% and in some countries rose as high as 33%.",
          question: "According to the passage, by how much did international trade fall during the Great Depression?",
          options: ["By 10%", "By 25%", "By more than 50%", "By nearly 100%"],
          correct: "By more than 50%",
          explanation: "The passage explicitly mentions: '...while international trade fell by more than 50%.'"
        },
        {
          title: "DNA Structure",
          passage: "Deoxyribonucleic acid (DNA) is a molecule composed of two polynucleotide chains that coil around each other to form a double helix carrying genetic instructions for the development, functioning, growth and reproduction of all known organisms and many viruses. DNA and ribonucleic acid (RNA) are nucleic acids. Alongside proteins, lipids and complex carbohydrates (polysaccharides), nucleic acids are one of the four major types of macromolecules that are essential for all known forms of life. The two DNA strands are also known as polynucleotides as they are composed of simpler monomeric units called nucleotides. Each nucleotide is composed of one of four nitrogen-containing nucleobases (cytosine [C], guanine [G], adenine [A] or thymine [T]), a sugar called deoxyribose, and a phosphate group.",
          question: "According to the passage, what are the three components that make up a nucleotide in DNA?",
          options: ["Protein, lipid, and carbohydrate", "Nucleobase, deoxyribose sugar, and a phosphate group", "Polynucleotide, double helix, and genetic instructions", "Oxygen, carbon dioxide, and water"],
          correct: "Nucleobase, deoxyribose sugar, and a phosphate group",
          explanation: "The text states: 'Each nucleotide is composed of one of four nitrogen-containing nucleobases... a sugar called deoxyribose, and a phosphate group.'"
        }
      ],
      // Exercise 2
      [
        {
          title: "The Magna Carta",
          passage: "The Magna Carta, meaning 'Great Charter', is a royal charter of rights agreed to by King John of England at Runnymede, near Windsor, on 15 June 1215. First drafted by the Archbishop of Canterbury to make peace between the unpopular King and a group of rebel barons, it promised the protection of church rights, protection for the barons from illegal imprisonment, access to swift justice, and limitations on feudal payments to the Crown, to be implemented through a council of 25 barons. Neither side stood by its commitments, and the charter was annulled by Pope Innocent III, leading to the First Barons' War. After John's death, the regency government of his young son, Henry III, reissued the document in 1216, stripped of some of its more radical content, in an unsuccessful attempt to build political support for their cause.",
          question: "According to the passage, who originally drafted the Magna Carta?",
          options: ["King John of England", "The rebel barons", "The Archbishop of Canterbury", "Pope Innocent III"],
          correct: "The Archbishop of Canterbury",
          explanation: "The passage states it was 'First drafted by the Archbishop of Canterbury...'"
        },
        {
          title: "The Big Bang Theory",
          passage: "The Big Bang theory is the prevailing cosmological model explaining the existence of the observable universe from the earliest known periods through its subsequent large-scale evolution. The model describes how the universe expanded from an initial state of extremely high density and high temperature, and offers a comprehensive explanation for a broad range of observed phenomena, including the abundance of light elements, the cosmic microwave background (CMB) radiation, and large-scale structure. Crucially, the theory is compatible with Hubble–Lemaître law—the observation that the farther away galaxies are, the faster they are moving away from Earth. If the observed conditions are extrapolated backwards in time using the known laws of physics, they predict that the universe was once in a state of extremely high density and temperature.",
          question: "According to the passage, what observation is the Big Bang theory compatible with?",
          options: ["The existence of black holes", "The Hubble–Lemaître law", "The rotation of the Milky Way", "The formation of the Solar System"],
          correct: "The Hubble–Lemaître law",
          explanation: "The text mentions: 'Crucially, the theory is compatible with Hubble–Lemaître law...'"
        },
        {
          title: "The Human Genome Project",
          passage: "The Human Genome Project (HGP) was an international scientific research project with the goal of determining the base pairs that make up human DNA, and of mapping and sequencing all of the genes of the human genome from both a physical and a functional standpoint. It remains the world's largest collaborative biological project. Planning started after the idea was picked up in 1984 by the US government, the project formally launched in 1990, and was declared complete on April 14, 2003. While the project aimed to map the nucleotides contained in a human haploid reference genome, the genome of any given individual is unique; mapping the \"human genome\" involved sequencing a small number of individual volunteers and then assembling these together to get a complete sequence for each chromosome.",
          question: "According to the passage, how was the \"human genome\" mapped despite every individual's genome being unique?",
          options: ["By sequencing every human on Earth", "By sequencing a small number of volunteers and assembling the data", "By using computer simulations instead of real DNA", "By focusing only on one specific ethnic group"],
          correct: "By sequencing a small number of volunteers and assembling the data",
          explanation: "The passage explains: '...mapping the \"human genome\" involved sequencing a small number of individual volunteers and then assembling these together...'"
        }
      ],
      // Exercise 3
      [
        {
          title: "Quantum Mechanics",
          passage: "Quantum mechanics is a fundamental theory in physics that provides a description of the physical properties of nature at the scale of atoms and subatomic particles. It is the foundation of all quantum physics including quantum chemistry, quantum field theory, quantum technology, and quantum information science. Classical physics, the collection of theories that existed before the advent of quantum mechanics, describes many aspects of nature at an ordinary (macroscopic) scale, but is not sufficient for describing them at very small (atomic and subatomic) scales. Most theories in classical physics can be derived from quantum mechanics as an approximation valid at large (macroscopic) scale. Quantum mechanics differs from classical physics in that energy, momentum, angular momentum, and other quantities of a bound system are restricted to discrete values (quantization).",
          question: "According to the passage, how does quantum mechanics differ from classical physics regarding physical quantities in a bound system?",
          options: ["They are always infinite", "They are restricted to discrete values (quantization)", "They are exactly the same as in classical physics", "They cannot be measured"],
          correct: "They are restricted to discrete values (quantization)",
          explanation: "The text states: 'Quantum mechanics differs from classical physics in that energy... and other quantities of a bound system are restricted to discrete values (quantization).'"
        },
        {
          title: "The French Revolution",
          passage: "The French Revolution was a period of far-reaching social and political upheaval in France and its colonies beginning in 1789 and ending in 1799. The Revolution overthrew the monarchy, established a republic, catalyzed violent periods of political turmoil, and finally culminated in a dictatorship under Napoleon who brought many of its principles to areas he conquered in Western Europe and beyond. Inspired by liberal and radical ideas, the Revolution profoundly altered the course of modern history, triggering the global decline of absolute monarchies while replacing them with republics and liberal democracies. It unleashed emotions in the form of nationalism that were previously unknown. The Revolution also led to the abolition of feudalism and the introduction of the Declaration of the Rights of Man and of the Citizen, which remains a foundational document of human rights.",
          question: "According to the passage, what foundational document of human rights was introduced during the French Revolution?",
          options: ["The Magna Carta", "The Declaration of Independence", "The Declaration of the Rights of Man and of the Citizen", "The Bill of Rights"],
          correct: "The Declaration of the Rights of Man and of the Citizen",
          explanation: "The passage mentions: 'The Revolution also led to... the introduction of the Declaration of the Rights of Man and of the Citizen...'"
        },
        {
          title: "Artificial Intelligence",
          passage: "Artificial intelligence (AI) is intelligence demonstrated by machines, as opposed to the natural intelligence displayed by animals including humans. AI research has been defined as the field of study of intelligent agents, which refers to any system that perceives its environment and takes actions that maximize its chance of achieving its goals. The various sub-fields of AI research are centered around particular goals and the use of particular tools. The traditional goals of AI research include reasoning, knowledge representation, planning, learning, natural language processing, perception, and the ability to move and manipulate objects. General intelligence (the ability to solve any problem) is among the field's long-term goals. To solve these problems, AI researchers have adapted and integrated a wide range of problem-solving techniques, including search and mathematical optimization, formal logic, artificial neural networks, and methods based on statistics, probability and economics.",
          question: "According to the passage, what is considered one of the long-term goals of the field of AI?",
          options: ["Building faster computers", "General intelligence (the ability to solve any problem)", "Replacing all human workers", "Creating a new language"],
          correct: "General intelligence (the ability to solve any problem)",
          explanation: "The text states: 'General intelligence (the ability to solve any problem) is among the field's long-term goals.'"
        }
      ]
    ]
  },
  "Hard": {
    3: [
      // Exercise 1: Advanced Science & Philosophy
      [
        {
          title: "The Theory of General Relativity",
          passage: "General relativity, also known as the general theory of relativity, is the geometric theory of gravitation published by Albert Einstein in 1915 and is the current description of gravitation in modern physics. General relativity generalizes special relativity and refines Newton's law of universal gravitation, providing a unified description of gravity as a geometric property of space and time, or four-dimensional spacetime. In particular, the curvature of spacetime is directly related to the energy and momentum of whatever matter and radiation are present. The relation is specified by the Einstein field equations, a system of partial differential equations. Some predictions of general relativity differ significantly from those of classical physics, especially concerning the passage of time, the geometry of space, the motion of bodies in free fall, and the propagation of light.",
          question: "According to the passage, how does general relativity describe gravity?",
          options: ["As a force between two masses", "As a geometric property of space and time (spacetime)", "As a result of electromagnetic waves", "As a purely mathematical abstraction with no physical basis"],
          correct: "As a geometric property of space and time (spacetime)",
          explanation: "The text states: '...providing a unified description of gravity as a geometric property of space and time, or four-dimensional spacetime.'"
        },
        {
          title: "The Philosophy of Existentialism",
          passage: "Existentialism is a form of philosophical inquiry that explores the nature of the human condition and the individual's experience of existence. It emphasizes the individual's freedom and responsibility to create meaning in an inherently meaningless or absurd world. Key figures in existentialist thought include Søren Kierkegaard, Friedrich Nietzsche, Jean-Paul Sartre, and Albert Camus. A central tenet of existentialism is that \"existence precedes essence,\" meaning that individuals are not born with a predetermined purpose or nature but must define themselves through their choices and actions. This perspective often leads to a focus on themes such as anxiety, dread, and the search for authenticity in a world that offers no objective moral certainty.",
          question: "According to the passage, what does the phrase \"existence precedes essence\" mean in existentialist philosophy?",
          options: ["Humans are born with a fixed purpose", "Individuals must define themselves through choices and actions", "The world has an inherent meaning", "Essence is more important than existence"],
          correct: "Individuals must define themselves through choices and actions",
          explanation: "The passage explains it means 'individuals are not born with a predetermined purpose or nature but must define themselves through their choices and actions.'"
        },
        {
          title: "The Second Law of Thermodynamics",
          passage: "The second law of thermodynamics is a physical law based on universal experience concerning heat and energy interconversions. One classical statement of the law is that heat does not spontaneously pass from a colder body to a hotter body. Another way to state the law is that the total entropy of an isolated system can never decrease over time; it can only remain constant or increase. Entropy is a measure of the molecular disorder or randomness of a system. The second law explains why certain processes are irreversible and why the universe as a whole tends toward a state of maximum disorder. It has profound implications for our understanding of time, as it provides a physical basis for the \"arrow of time,\" indicating that the future is fundamentally different from the past.",
          question: "According to the passage, what happens to the total entropy of an isolated system over time?",
          options: ["It always decreases", "It remains constant or increases", "It fluctuates randomly", "It is not affected by time"],
          correct: "It remains constant or increases",
          explanation: "The text states: '...the total entropy of an isolated system can never decrease over time; it can only remain constant or increase.'"
        }
      ],
      // Exercise 2: Complex Historical Events
      [
        {
          title: "The Meiji Restoration",
          passage: "The Meiji Restoration was an event that restored practical imperial rule to the Empire of Japan in 1868 under Emperor Meiji. Although there were ruling Emperors before the Meiji Restoration, the events restored practical abilities and consolidated the political system under the Emperor of Japan. The goals of the restored government were expressed by the new Emperor in the Charter Oath. The Restoration led to enormous changes in Japan's political and social structure and spanned both the late Edo period (often called the Bakumatsu) and the beginning of the Meiji era. The period was responsible for Japan's rapid modernization and its emergence as a world power. This transformation involved the abolition of the feudal system, the adoption of Western-style legal and educational systems, and the development of a modern military and industrial base.",
          question: "According to the passage, what was one of the primary outcomes of the Meiji Restoration for Japan?",
          options: ["The strengthening of the feudal system", "Rapid modernization and emergence as a world power", "The isolation of Japan from the rest of the world", "The end of imperial rule"],
          correct: "Rapid modernization and emergence as a world power",
          explanation: "The passage states: 'The period was responsible for Japan's rapid modernization and its emergence as a world power.'"
        },
        {
          title: "The Russian Revolution",
          passage: "The Russian Revolution was a period of political and social revolution across the territory of the Russian Empire, commencing with the abolition of the monarchy in 1917 and concluding in 1923 with the Bolshevik establishment of the Soviet Union at the end of the Civil War. It began during the First World War, with the February Revolution that overthrew the imperial government and the October Revolution in which the Bolsheviks, led by Vladimir Lenin, seized power. The revolution replaced the absolute monarchy with a socialist state and led to the creation of the world's first communist government. The subsequent Russian Civil War was a multi-party war in the former Russian Empire immediately after the two Russian Revolutions of 1917, as many factions vied to determine Russia's political future.",
          question: "According to the passage, who led the Bolsheviks during the October Revolution?",
          options: ["Tsar Nicholas II", "Vladimir Lenin", "Joseph Stalin", "Leon Trotsky"],
          correct: "Vladimir Lenin",
          explanation: "The text mentions: '...the October Revolution in which the Bolsheviks, led by Vladimir Lenin, seized power.'"
        },
        {
          title: "The Cold War",
          passage: "The Cold War was a period of geopolitical tension between the United States and the Soviet Union and their respective allies, the Western Bloc and the Eastern Bloc, which began following World War II. The term \"cold\" is used because there was no large-scale fighting directly between the two superpowers, but they each supported major regional conflicts known as proxy wars. The conflict was based around the ideological and geopolitical struggle for global influence by these two superpowers, following their temporary alliance and victory against Nazi Germany in 1945. Aside from the nuclear arsenal development and conventional military deployment, the struggle for dominance was expressed via indirect means such as psychological warfare, propaganda campaigns, espionage, far-reaching embargoes, rivalry at sports events and technological competitions such as the Space Race.",
          question: "According to the passage, why was the conflict between the U.S. and the Soviet Union called a \"cold\" war?",
          options: ["Because it took place in cold climates", "Because there was no direct large-scale fighting between the superpowers", "Because it happened during the winter months", "Because the relationship between the leaders was very cold"],
          correct: "Because there was no direct large-scale fighting between the superpowers",
          explanation: "The passage explains: 'The term \"cold\" is used because there was no large-scale fighting directly between the two superpowers...'"
        }
      ],
      // Exercise 3: Advanced Biological & Environmental Concepts
      [
        {
          title: "Epigenetics",
          passage: "Epigenetics is the study of heritable phenotype changes that do not involve alterations in the DNA sequence. The Greek prefix epi- (ἐπι- \"over, outside of, around\") in epigenetics implies features that are \"on top of\" or \"in addition to\" the traditional genetic basis for inheritance. Epigenetics most often involves even changes that affect gene activity and expression, but the term can also be used to describe any heritable phenotypic change. Such effects on cellular and physiological phenotypic traits may result from external or environmental factors, or be part of a normal developmental program. The standard definition of epigenetics requires these alterations to be heritable in the progeny of either cells or organisms. These changes may last through cell divisions for the duration of the cell's life, and may also last for multiple generations, even though they do not involve changes in the underlying DNA sequence.",
          question: "According to the passage, what is the defining characteristic of epigenetic changes?",
          options: ["They involve mutations in the DNA sequence", "They are heritable changes that do not involve alterations in the DNA sequence", "They are only caused by internal genetic factors", "They are always permanent and cannot be reversed"],
          correct: "They are heritable changes that do not involve alterations in the DNA sequence",
          explanation: "The passage defines epigenetics as 'the study of heritable phenotype changes that do not involve alterations in the DNA sequence.'"
        },
        {
          title: "Ocean Acidification",
          passage: "Ocean acidification is the ongoing decrease in the pH of the Earth's oceans, caused by the uptake of carbon dioxide (CO2) from the atmosphere. Seawater is slightly basic (meaning pH > 7), and ocean acidification involves a shift towards pH-neutral conditions rather than a transition to acidic conditions (pH < 7). An estimated 30–40% of the carbon dioxide from human activity released into the atmosphere dissolves into oceans, rivers and lakes. To achieve chemical equilibrium, some of it reacts with the water to form carbonic acid. Some of these extra carbonic acid molecules react with a water molecule to give a bicarbonate ion and a hydronium ion, thus increasing ocean \"acidity\" (H+ ion concentration). This process has significant implications for marine life, particularly for organisms that rely on calcium carbonate to build shells and skeletons, such as corals and some shellfish.",
          question: "According to the passage, what is the primary cause of ocean acidification?",
          options: ["Oil spills in the ocean", "The uptake of carbon dioxide from the atmosphere", "Changes in ocean currents", "Overfishing"],
          correct: "The uptake of carbon dioxide from the atmosphere",
          explanation: "The text states: 'Ocean acidification is the ongoing decrease in the pH of the Earth's oceans, caused by the uptake of carbon dioxide (CO2) from the atmosphere.'"
        },
        {
          title: "The Nitrogen Cycle",
          passage: "The nitrogen cycle is the biogeochemical cycle by which nitrogen is converted into multiple chemical forms as it circulates among atmosphere, terrestrial, and marine ecosystems. The conversion of nitrogen can be carried out through both biological and physical processes. Important processes in the nitrogen cycle include fixation, ammonification, nitrification, and denitrification. The majority of Earth's atmosphere (78%) is atmospheric nitrogen, making it the largest source of nitrogen. However, atmospheric nitrogen has limited availability for biological use, leading to a scarcity of usable nitrogen in many types of ecosystems. The nitrogen cycle is of particular interest to ecologists because nitrogen availability can affect the rate of key ecosystem processes, including primary production and decomposition.",
          question: "According to the passage, what is the largest source of nitrogen on Earth?",
          options: ["The ocean", "The Earth's crust", "The atmosphere", "Living organisms"],
          correct: "The atmosphere",
          explanation: "The passage mentions: 'The majority of Earth's atmosphere (78%) is atmospheric nitrogen, making it the largest source of nitrogen.'"
        }
      ]
    ]
  },
  "Advanced": {
    3: [
      {
        title: "Quantum Mechanics",
        passage: "Quantum mechanics is a fundamental theory in physics that provides a description of the physical properties of nature at the scale of atoms and subatomic particles. It is the foundation of all quantum physics including quantum chemistry, quantum field theory, quantum technology, and quantum information science. Classical physics, the collection of theories that existed before the advent of quantum mechanics, describes many aspects of nature at an ordinary (macroscopic) scale, but is not sufficient for describing them at very small (atomic and subatomic) scales.",
        question: "According to the passage, what is the primary limitation of classical physics?",
        options: ["It cannot describe nature at an ordinary scale", "It is not sufficient for describing nature at atomic and subatomic scales", "It is the foundation of quantum chemistry", "It only describes subatomic particles"],
        correct: "It is not sufficient for describing nature at atomic and subatomic scales",
        explanation: "The text states: 'Classical physics... is not sufficient for describing them at very small (atomic and subatomic) scales.'"
      },
      {
        title: "The French Revolution",
        passage: "The French Revolution was a period of far-reaching social and political upheaval in France and its colonies beginning in 1789 and ending in 1799. The Revolution overthrew the monarchy, established a republic, catalyzed violent periods of political turmoil, and finally culminated in a dictatorship under Napoleon who brought many of its principles to areas he conquered in Western Europe and beyond. Inspired by liberal and radical ideas, the Revolution profoundly altered the course of modern history, triggering the global decline of absolute monarchies while replacing them with republics and liberal democracies.",
        question: "According to the passage, what was one major long-term global effect of the French Revolution?",
        options: ["The establishment of absolute monarchies", "The global decline of absolute monarchies", "The end of all political turmoil in Europe", "The immediate abolition of slavery in all colonies"],
        correct: "The global decline of absolute monarchies",
        explanation: "The passage mentions: 'triggering the global decline of absolute monarchies while replacing them with republics and liberal democracies.'"
      },
      {
        title: "Artificial Intelligence",
        passage: "Artificial intelligence (AI) is intelligence demonstrated by machines, as opposed to the natural intelligence displayed by animals including humans. AI research has been defined as the field of study of intelligent agents, which refers to any system that perceives its environment and takes actions that maximize its chance of achieving its goals. The various sub-fields of AI research are centered around particular goals and the use of particular tools. The traditional goals of AI research include reasoning, knowledge representation, planning, learning, natural language processing, perception, and the ability to move and manipulate objects.",
        question: "According to the passage, how is an \"intelligent agent\" defined in the context of AI research?",
        options: ["A machine that displays natural intelligence", "A system that perceives its environment and acts to maximize goal achievement", "A sub-field of AI centered around reasoning", "A tool used for natural language processing"],
        correct: "A system that perceives its environment and acts to maximize goal achievement",
        explanation: "The text defines intelligent agents as 'any system that perceives its environment and takes actions that maximize its chance of achieving its goals.'"
      },
      {
        title: "The Renaissance",
        passage: "The Renaissance was a fervent period of European cultural, artistic, political and economic \"rebirth\" following the Middle Ages. Generally described as taking place from the 14th century to the 17th century, the Renaissance promoted the rediscovery of classical philosophy, literature and art. Some of the greatest thinkers, authors, statesmen, scientists and artists in human history thrived during this era, while global exploration opened up new lands and cultures to European commerce. The Renaissance is credited with bridging the gap between the Middle Ages and modern-day civilization.",
        question: "According to the passage, what did the Renaissance promote the rediscovery of?",
        options: ["Modern technology", "Classical philosophy, literature, and art", "Medieval religious practices", "New languages"],
        correct: "Classical philosophy, literature, and art",
        explanation: "The passage states: 'the Renaissance promoted the rediscovery of classical philosophy, literature and art.'"
      },
      {
        title: "Plate Tectonics",
        passage: "Plate tectonics is a scientific theory describing the large-scale motion of seven large plates and the movements of a larger number of smaller plates of Earth's lithosphere, since tectonic processes began on Earth between 3.3 and 3.5 billion years ago. The model builds on the concept of continental drift, an idea developed during the first decades of the 20th century. The geoscientific community accepted plate-tectonic theory after seafloor spreading was validated in the late 1950s and early 1960s.",
        question: "According to the passage, when did tectonic processes begin on Earth?",
        options: ["20th century", "Late 1950s", "Between 3.3 and 3.5 billion years ago", "3.3 million years ago"],
        correct: "Between 3.3 and 3.5 billion years ago",
        explanation: "The text states: 'since tectonic processes began on Earth between 3.3 and 3.5 billion years ago.'"
      }
    ]
  }
};

export const IMPORTANT_IDEA_CONTENT: any = {
  "Easy": {
    3: [
      // Exercise 1
      [
        {
          title: "The Roman Empire",
          passage: "The Roman Empire was one of the most powerful and influential civilizations in history. At its peak, it controlled vast territories across Europe, North Africa, and the Middle East. This expansion was made possible by Rome's highly organized military and its advanced engineering, which allowed for the construction of an extensive network of roads and bridges.",
          question: "What is the most important idea in this passage?",
          options: [
            "Rome's military was the only reason for its success.",
            "The Roman Empire was a vast and powerful civilization built on military and engineering strength.",
            "The Romans built many roads and bridges across Europe.",
            "The Roman Empire was located in North Africa and the Middle East."
          ],
          correct: "The Roman Empire was a vast and powerful civilization built on military and engineering strength.",
          explanation: "The passage summarizes Rome's power, its territory, and the factors (military and engineering) that enabled its expansion.",
          highlight: "The Roman Empire was one of the most powerful and influential civilizations... This expansion was made possible by Rome's highly organized military and its advanced engineering"
        },
        {
          title: "The Industrial Revolution",
          passage: "The Industrial Revolution began in Great Britain in the late 18th century and quickly spread to other parts of the world. It was a period of rapid technological advancement and economic growth. However, this progress came at a cost. Many workers faced long hours, low wages, and dangerous conditions in factories and mines.",
          question: "What is the most important idea in this passage?",
          options: [
            "The Industrial Revolution was a time of growth but also brought significant hardships for workers.",
            "Great Britain was the only country to benefit from the Industrial Revolution.",
            "Factories and mines were the only places where people worked during this time.",
            "The Industrial Revolution ended in the late 18th century."
          ],
          correct: "The Industrial Revolution was a time of growth but also brought significant hardships for workers.",
          explanation: "The passage balances the 'technological advancement and economic growth' with the 'cost' and 'hardships' faced by workers.",
          highlight: "It was a period of rapid technological advancement and economic growth. However, this progress came at a cost. Many workers faced long hours, low wages, and dangerous conditions"
        },
        {
          title: "Ancient Egyptian Pyramids",
          passage: "The Great Pyramids of Giza were built as tombs for the pharaohs of ancient Egypt. They were designed to protect the pharaoh's body and belongings for the afterlife. To ensure this protection, the pyramids were constructed with massive stone blocks and featured complex internal passages and hidden chambers.",
          question: "What is the most important idea in this passage?",
          options: [
            "The pyramids were built with massive stone blocks.",
            "The pyramids were complex structures designed to protect pharaohs for the afterlife.",
            "Pharaohs were the only people buried in pyramids.",
            "The pyramids are located in Giza."
          ],
          correct: "The pyramids were complex structures designed to protect pharaohs for the afterlife.",
          explanation: "The passage explains the purpose of the pyramids (protection for the afterlife) and the complex construction methods used to achieve that purpose.",
          highlight: "The Great Pyramids of Giza were built as tombs for the pharaohs... They were designed to protect the pharaoh's body and belongings for the afterlife."
        },
        {
          title: "The Great Migration",
          passage: "Between 1916 and 1970, millions of African Americans moved from the rural South to the urban North and West. This movement is known as the Great Migration. Several factors drove this migration, including the desire to escape racial segregation and the hope for better-paying jobs in Northern industries.",
          question: "What is the most important idea in this passage?",
          options: [
            "Millions of people moved from the South to the North between 1916 and 1970.",
            "The Great Migration was a massive movement of African Americans driven by social and economic factors.",
            "Racial segregation was the only reason for the Great Migration.",
            "Northern industries offered better-paying jobs than Southern farms."
          ],
          correct: "The Great Migration was a massive movement of African Americans driven by social and economic factors.",
          explanation: "The passage defines the Great Migration and identifies the key social (escape segregation) and economic (better jobs) reasons for it.",
          highlight: "millions of African Americans moved from the rural South to the urban North and West... Several factors drove this migration, including the desire to escape racial segregation and the hope for better-paying jobs"
        },
        {
          title: "The Printing Press",
          passage: "The invention of the printing press by Johannes Gutenberg in the 15th century revolutionized the production of books. It allowed for the mass production of texts for the first time. As a result, books became much more affordable and accessible, leading to a significant increase in literacy rates across Europe.",
          question: "What is the most important idea in this passage?",
          options: [
            "Johannes Gutenberg invented the printing press in the 15th century.",
            "The printing press revolutionized society by making books more affordable and increasing literacy.",
            "Books were very expensive before the 15th century.",
            "Literacy rates in Europe were very low before the printing press."
          ],
          correct: "The printing press revolutionized society by making books more affordable and increasing literacy.",
          explanation: "The passage highlights the revolutionary impact of the printing press on book production, affordability, and literacy.",
          highlight: "The invention of the printing press... revolutionized the production of books... As a result, books became much more affordable and accessible, leading to a significant increase in literacy rates"
        }
      ],
      // Exercise 2
      [
        {
          title: "The Silk Road",
          passage: "The Silk Road was a network of trade routes that connected the East and West for centuries. It facilitated the exchange of goods, such as silk, spices, and precious metals. Beyond commerce, the Silk Road also served as a conduit for the spread of ideas, religions, and technologies between different civilizations.",
          question: "What is the most important idea in this passage?",
          options: [
            "The Silk Road was a trade route for silk and spices.",
            "The Silk Road was a vital network for both commercial trade and cultural exchange between civilizations.",
            "Ideas and religions were more important than goods on the Silk Road.",
            "The Silk Road connected the East and the West for many centuries."
          ],
          correct: "The Silk Road was a vital network for both commercial trade and cultural exchange between civilizations.",
          explanation: "The passage emphasizes that the Silk Road was not just for 'commerce' (goods) but also for the 'spread of ideas, religions, and technologies'.",
          highlight: "The Silk Road was a network of trade routes... It facilitated the exchange of goods... Beyond commerce, the Silk Road also served as a conduit for the spread of ideas, religions, and technologies"
        },
        {
          title: "The Renaissance",
          passage: "The Renaissance was a period of great artistic and intellectual achievement in Europe. It saw the rise of famous artists like Leonardo da Vinci and Michelangelo. This artistic flourishing was deeply connected to the philosophy of humanism, which emphasized the potential and value of the individual.",
          question: "What is the most important idea in this passage?",
          options: [
            "Leonardo da Vinci and Michelangelo were the most important artists of the Renaissance.",
            "The Renaissance was a time of artistic and intellectual growth driven by the philosophy of humanism.",
            "Humanism is a philosophy that emphasizes the value of the individual.",
            "The Renaissance took place in Europe and saw many achievements."
          ],
          correct: "The Renaissance was a time of artistic and intellectual growth driven by the philosophy of humanism.",
          explanation: "The passage links the 'artistic and intellectual achievement' of the Renaissance to its core philosophy, 'humanism'.",
          highlight: "The Renaissance was a period of great artistic and intellectual achievement... This artistic flourishing was deeply connected to the philosophy of humanism"
        },
        {
          title: "The Apollo 11 Mission",
          passage: "In 1969, the Apollo 11 mission successfully landed the first humans on the Moon. This was a landmark event in the history of space exploration. Achieving this goal required an unprecedented level of national effort, involving thousands of scientists and billions of dollars in funding.",
          question: "What is the most important idea in this passage?",
          options: [
            "The Apollo 11 mission landed the first humans on the Moon in 1969.",
            "The Moon landing was a major achievement that required massive national resources and effort.",
            "Thousands of scientists worked on the Apollo 11 mission.",
            "Space exploration is a very expensive and difficult undertaking."
          ],
          correct: "The Moon landing was a major achievement that required massive national resources and effort.",
          explanation: "The passage highlights both the 'landmark event' of the landing and the 'unprecedented level of national effort' required to achieve it.",
          highlight: "the Apollo 11 mission successfully landed the first humans on the Moon... Achieving this goal required an unprecedented level of national effort"
        },
        {
          title: "The Great Wall of China",
          passage: "The Great Wall of China was built over many centuries to protect the Chinese empire from northern invaders. It consists of walls, towers, and fortifications. Despite its massive scale, the wall was not always effective in preventing invasions, as some groups were able to bypass or breach it.",
          question: "What is the most important idea in this passage?",
          options: [
            "The Great Wall of China was built to protect the empire from invaders.",
            "The Great Wall is a massive structure that had mixed success in its defensive purpose.",
            "The Great Wall consists of many walls, towers, and fortifications.",
            "Some groups were able to bypass the Great Wall of China."
          ],
          correct: "The Great Wall is a massive structure that had mixed success in its defensive purpose.",
          explanation: "The passage describes the wall's purpose and scale but also notes its limitations in 'preventing invasions'.",
          highlight: "The Great Wall of China was built... to protect the Chinese empire... Despite its massive scale, the wall was not always effective in preventing invasions"
        },
        {
          title: "The French Revolution",
          passage: "The French Revolution was a period of radical social and political change that began in 1789. It led to the end of the monarchy and the rise of Napoleon Bonaparte. The revolution was sparked by a combination of economic hardship, social inequality, and the influence of Enlightenment ideas.",
          question: "What is the most important idea in this passage?",
          options: [
            "The French Revolution began in 1789 and led to the rise of Napoleon.",
            "The French Revolution was a major period of change driven by social, economic, and intellectual factors.",
            "Economic hardship and social inequality were the main causes of the French Revolution.",
            "Enlightenment ideas were very influential in 18th-century France."
          ],
          correct: "The French Revolution was a major period of change driven by social, economic, and intellectual factors.",
          explanation: "The passage summarizes the revolution as a period of 'radical change' and identifies its complex causes (economic, social, intellectual).",
          highlight: "The French Revolution was a period of radical social and political change... The revolution was sparked by a combination of economic hardship, social inequality, and the influence of Enlightenment ideas."
        }
      ],
      // Exercise 3
      [
        {
          title: "The Amazon Rainforest",
          passage: "The Amazon rainforest is a vital part of the Earth's ecosystem, home to millions of species and a key regulator of the global climate. However, the rainforest is currently facing a severe threat from deforestation, which is destroying habitats and releasing stored carbon into the atmosphere.",
          question: "What is the most important idea in this passage?",
          options: [
            "The Amazon rainforest is home to millions of species.",
            "The Amazon rainforest is a critical ecosystem that is currently under threat from deforestation.",
            "Deforestation is destroying habitats and releasing carbon into the atmosphere.",
            "The Amazon rainforest helps regulate the global climate."
          ],
          correct: "The Amazon rainforest is a critical ecosystem that is currently under threat from deforestation.",
          explanation: "The passage highlights the importance of the rainforest and the 'severe threat' it faces from deforestation.",
          highlight: "The Amazon rainforest is a vital part of the Earth's ecosystem... However, the rainforest is currently facing a severe threat from deforestation"
        },
        {
          title: "The Wright Brothers",
          passage: "In 1903, the Wright brothers achieved the first controlled, powered flight in history. This event marked the beginning of the aviation age. Their success was the result of years of experimentation with gliders and the development of a lightweight engine and an effective control system.",
          question: "What is the most important idea in this passage?",
          options: [
            "The Wright brothers achieved the first powered flight in 1903.",
            "The first successful flight was the result of persistent experimentation and technical innovation.",
            "The aviation age began in the early 20th century.",
            "The Wright brothers developed a lightweight engine and a control system."
          ],
          correct: "The first successful flight was the result of persistent experimentation and technical innovation.",
          explanation: "The passage focuses on the achievement of the first flight and the 'years of experimentation' and 'development' that made it possible.",
          highlight: "the Wright brothers achieved the first controlled, powered flight... Their success was the result of years of experimentation... and the development of a lightweight engine and an effective control system."
        },
        {
          title: "The Great Barrier Reef",
          passage: "The Great Barrier Reef is the largest coral reef system in the world, stretching over 2,300 kilometers along the coast of Australia. This unique ecosystem is built by billions of tiny organisms called coral polyps, which secrete calcium carbonate to form the reef's structure.",
          question: "What is the most important idea in this passage?",
          options: [
            "The Great Barrier Reef is the largest reef system in the world.",
            "The Great Barrier Reef is a massive and unique ecosystem formed by coral polyps.",
            "Coral polyps secrete calcium carbonate to build reefs.",
            "The Great Barrier Reef is located along the coast of Australia."
          ],
          correct: "The Great Barrier Reef is a massive and unique ecosystem formed by coral polyps.",
          explanation: "The passage describes the reef's scale and explains the biological process (coral polyps) that creates its structure.",
          highlight: "The Great Barrier Reef is the largest coral reef system... This unique ecosystem is built by billions of tiny organisms called coral polyps"
        },
        {
          title: "The Magna Carta",
          passage: "The Magna Carta was a document signed in 1215 that limited the power of the English king. It is considered a cornerstone of individual liberty. For example, it established that no free man could be imprisoned or punished without a lawful judgment by his peers or by the law of the land.",
          question: "What is the most important idea in this passage?",
          options: [
            "The Magna Carta was signed in 1215 by the English king.",
            "The Magna Carta was a landmark document that established key principles of individual liberty.",
            "No free man could be imprisoned without a lawful judgment according to the Magna Carta.",
            "The Magna Carta limited the power of the king."
          ],
          correct: "The Magna Carta was a landmark document that established key principles of individual liberty.",
          explanation: "The passage identifies the Magna Carta as a 'cornerstone of individual liberty' and provides a specific example of its impact.",
          highlight: "The Magna Carta was a document... that limited the power of the English king. It is considered a cornerstone of individual liberty."
        },
        {
          title: "The Hubble Space Telescope",
          passage: "The Hubble Space Telescope has provided some of the most detailed images of the universe ever captured. These images have led to many scientific breakthroughs. One such breakthrough was the discovery that the expansion of the universe is actually accelerating, rather than slowing down as previously thought.",
          question: "What is the most important idea in this passage?",
          options: [
            "The Hubble Space Telescope captures detailed images of the universe.",
            "The Hubble Space Telescope has been a vital tool for making major scientific discoveries about the universe.",
            "The expansion of the universe is accelerating, not slowing down.",
            "Scientific breakthroughs are common in the field of astronomy."
          ],
          correct: "The Hubble Space Telescope has been a vital tool for making major scientific discoveries about the universe.",
          explanation: "The passage emphasizes the telescope's role in providing 'detailed images' that lead to 'scientific breakthroughs', using the accelerating expansion as an example.",
          highlight: "The Hubble Space Telescope has provided some of the most detailed images... These images have led to many scientific breakthroughs."
        }
      ]
    ]
  }
};

export const INSERT_TEXT_CONTENT: any = {
  "Easy": {
    3: [
      // Exercise 1
      [
        {
          title: "The Roman Empire",
          passage: "The Roman Empire was one of the most powerful and influential civilizations in history. [A] At its peak, it controlled vast territories across Europe, North Africa, and the Middle East. [B] This expansion was made possible by Rome's highly organized military and its advanced engineering. [C] These strengths allowed for the construction of an extensive network of roads and bridges. [D]",
          question: "Where would the following sentence best fit? 'This infrastructure was essential for moving troops and goods quickly across the empire.'",
          options: ["[A]", "[B]", "[C]", "[D]"],
          correct: "[D]",
          explanation: "The sentence refers to 'This infrastructure', which logically follows the mention of 'roads and bridges' in the previous sentence.",
          highlight: "construction of an extensive network of roads and bridges. [D]"
        },
        {
          title: "The Industrial Revolution",
          passage: "The Industrial Revolution began in Great Britain in the late 18th century and quickly spread to other parts of the world. [A] It was a period of rapid technological advancement and economic growth. [B] However, this progress came at a cost. [C] Many workers faced long hours, low wages, and dangerous conditions in factories and mines. [D]",
          question: "Where would the following sentence best fit? 'These harsh realities led to the eventual rise of labor unions and calls for reform.'",
          options: ["[A]", "[B]", "[C]", "[D]"],
          correct: "[D]",
          explanation: "The sentence refers to 'These harsh realities', which refers to the 'long hours, low wages, and dangerous conditions' mentioned in the previous sentence.",
          highlight: "Many workers faced long hours, low wages, and dangerous conditions in factories and mines. [D]"
        },
        {
          title: "Ancient Egyptian Pyramids",
          passage: "The Great Pyramids of Giza were built as tombs for the pharaohs of ancient Egypt. [A] They were designed to protect the pharaoh's body and belongings for the afterlife. [B] To ensure this protection, the pyramids were constructed with massive stone blocks. [C] They also featured complex internal passages and hidden chambers. [D]",
          question: "Where would the following sentence best fit? 'These architectural features were intended to confuse and deter potential grave robbers.'",
          options: ["[A]", "[B]", "[C]", "[D]"],
          correct: "[D]",
          explanation: "The sentence refers to 'These architectural features', which refers to the 'complex internal passages and hidden chambers' mentioned in the previous sentence.",
          highlight: "featured complex internal passages and hidden chambers. [D]"
        },
        {
          title: "The Great Migration",
          passage: "Between 1916 and 1970, millions of African Americans moved from the rural South to the urban North and West. [A] This movement is known as the Great Migration. [B] Several factors drove this migration, including the desire to escape racial segregation. [C] Another major factor was the hope for better-paying jobs in Northern industries. [D]",
          question: "Where would the following sentence best fit? 'The demand for labor during World War I created many of these new opportunities.'",
          options: ["[A]", "[B]", "[C]", "[D]"],
          correct: "[D]",
          explanation: "The sentence refers to 'these new opportunities', which refers to the 'better-paying jobs' mentioned in the previous sentence.",
          highlight: "hope for better-paying jobs in Northern industries. [D]"
        },
        {
          title: "The Printing Press",
          passage: "The invention of the printing press by Johannes Gutenberg in the 15th century revolutionized the production of books. [A] It allowed for the mass production of texts for the first time. [B] As a result, books became much more affordable and accessible. [C] This led to a significant increase in literacy rates across Europe. [D]",
          question: "Where would the following sentence best fit? 'The spread of new ideas, including those of the Renaissance and Reformation, was greatly accelerated by this development.'",
          options: ["[A]", "[B]", "[C]", "[D]"],
          correct: "[D]",
          explanation: "The sentence refers to 'this development', which summarizes the impact of the printing press described in the entire passage.",
          highlight: "significant increase in literacy rates across Europe. [D]"
        }
      ],
      // Exercise 2
      [
        {
          title: "The Silk Road",
          passage: "The Silk Road was a network of trade routes that connected the East and West for centuries. [A] It facilitated the exchange of goods, such as silk, spices, and precious metals. [B] Beyond commerce, the Silk Road also served as a conduit for the spread of ideas and religions. [C] Technologies, such as papermaking and gunpowder, were also exchanged between civilizations. [D]",
          question: "Where would the following sentence best fit? 'This cultural and technological diffusion had a profound impact on the development of the medieval world.'",
          options: ["[A]", "[B]", "[C]", "[D]"],
          correct: "[D]",
          explanation: "The sentence refers to 'This cultural and technological diffusion', which summarizes the exchange of ideas, religions, and technologies described in the previous sentences.",
          highlight: "gunpowder, were also exchanged between civilizations. [D]"
        },
        {
          title: "The Renaissance",
          passage: "The Renaissance was a period of great artistic and intellectual achievement in Europe. [A] It saw the rise of famous artists like Leonardo da Vinci and Michelangelo. [B] This artistic flourishing was deeply connected to the philosophy of humanism. [C] Humanism emphasized the potential and value of the individual. [D]",
          question: "Where would the following sentence best fit? 'This shift in focus from the divine to the human experience marked a major turning point in European thought.'",
          options: ["[A]", "[B]", "[C]", "[D]"],
          correct: "[D]",
          explanation: "The sentence refers to 'This shift in focus', which refers to the 'philosophy of humanism' and its emphasis on the 'individual' described in the previous sentences.",
          highlight: "emphasized the potential and value of the individual. [D]"
        },
        {
          title: "The Apollo 11 Mission",
          passage: "In 1969, the Apollo 11 mission successfully landed the first humans on the Moon. [A] This was a landmark event in the history of space exploration. [B] Achieving this goal required an unprecedented level of national effort. [C] It involved thousands of scientists and billions of dollars in funding. [D]",
          question: "Where would the following sentence best fit? 'The successful return of the astronauts to Earth further solidified the mission's historic status.'",
          options: ["[A]", "[B]", "[C]", "[D]"],
          correct: "[D]",
          explanation: "The sentence refers to the 'successful return', which logically follows the description of the landing and the effort involved in the mission.",
          highlight: "billions of dollars in funding. [D]"
        },
        {
          title: "The Great Wall of China",
          passage: "The Great Wall of China was built over many centuries to protect the Chinese empire from northern invaders. [A] It consists of walls, towers, and fortifications. [B] Despite its massive scale, the wall was not always effective in preventing invasions. [C] Some groups were able to bypass or breach it. [D]",
          question: "Where would the following sentence best fit? 'In such cases, the wall served more as a psychological barrier than a physical one.'",
          options: ["[A]", "[B]", "[C]", "[D]"],
          correct: "[D]",
          explanation: "The sentence refers to 'In such cases', which refers to the instances where groups were able to 'bypass or breach' the wall mentioned in the previous sentence.",
          highlight: "Some groups were able to bypass or breach it. [D]"
        },
        {
          title: "The French Revolution",
          passage: "The French Revolution was a period of radical social and political change that began in 1789. [A] It led to the end of the monarchy and the rise of Napoleon Bonaparte. [B] The revolution was sparked by a combination of economic hardship and social inequality. [C] The influence of Enlightenment ideas also played a crucial role. [D]",
          question: "Where would the following sentence best fit? 'These ideas challenged the traditional authority of the church and the state.'",
          options: ["[A]", "[B]", "[C]", "[D]"],
          correct: "[D]",
          explanation: "The sentence refers to 'These ideas', which refers to the 'Enlightenment ideas' mentioned in the previous sentence.",
          highlight: "influence of Enlightenment ideas also played a crucial role. [D]"
        }
      ],
      // Exercise 3
      [
        {
          title: "The Amazon Rainforest",
          passage: "The Amazon rainforest is a vital part of the Earth's ecosystem. [A] It is home to millions of species and a key regulator of the global climate. [B] However, the rainforest is currently facing a severe threat from deforestation. [C] This process is destroying habitats and releasing stored carbon into the atmosphere. [D]",
          question: "Where would the following sentence best fit? 'The loss of these trees significantly reduces the forest's ability to absorb carbon dioxide.'",
          options: ["[A]", "[B]", "[C]", "[D]"],
          correct: "[D]",
          explanation: "The sentence refers to 'The loss of these trees', which is the result of 'deforestation' mentioned in the previous sentences.",
          highlight: "releasing stored carbon into the atmosphere. [D]"
        },
        {
          title: "The Wright Brothers",
          passage: "In 1903, the Wright brothers achieved the first controlled, powered flight in history. [A] This event marked the beginning of the aviation age. [B] Their success was the result of years of experimentation with gliders. [C] They also developed a lightweight engine and an effective control system. [D]",
          question: "Where would the following sentence best fit? 'These technical innovations were crucial for maintaining stability and direction in the air.'",
          options: ["[A]", "[B]", "[C]", "[D]"],
          correct: "[D]",
          explanation: "The sentence refers to 'These technical innovations', which refers to the 'lightweight engine and effective control system' mentioned in the previous sentence.",
          highlight: "developed a lightweight engine and an effective control system. [D]"
        },
        {
          title: "The Great Barrier Reef",
          passage: "The Great Barrier Reef is the largest coral reef system in the world. [A] It stretches over 2,300 kilometers along the coast of Australia. [B] This unique ecosystem is built by billions of tiny organisms called coral polyps. [C] These organisms secrete calcium carbonate to form the reef's structure. [D]",
          question: "Where would the following sentence best fit? 'Over thousands of years, these secretions accumulate to create the massive formations seen today.'",
          options: ["[A]", "[B]", "[C]", "[D]"],
          correct: "[D]",
          explanation: "The sentence refers to 'these secretions', which refers to the 'calcium carbonate' secreted by coral polyps mentioned in the previous sentence.",
          highlight: "secrete calcium carbonate to form the reef's structure. [D]"
        },
        {
          title: "The Magna Carta",
          passage: "The Magna Carta was a document signed in 1215 that limited the power of the English king. [A] It is considered a cornerstone of individual liberty. [B] For example, it established that no free man could be imprisoned without a lawful judgment. [C] This principle of due process remains a fundamental part of many modern legal systems. [D]",
          question: "Where would the following sentence best fit? 'The document also addressed other grievances, such as illegal taxes and the rights of the church.'",
          options: ["[A]", "[B]", "[C]", "[D]"],
          correct: "[B]",
          explanation: "The sentence adds more details about what the document 'also addressed', which fits well after the initial introduction of the document's purpose.",
          highlight: "limited the power of the English king. [A]"
        },
        {
          title: "The Hubble Space Telescope",
          passage: "The Hubble Space Telescope has provided some of the most detailed images of the universe ever captured. [A] These images have led to many scientific breakthroughs. [B] One such breakthrough was the discovery that the expansion of the universe is accelerating. [C] This finding challenged previous theories that the expansion was slowing down. [D]",
          question: "Where would the following sentence best fit? 'To capture such clear views, the telescope operates above the distortion of Earth's atmosphere.'",
          options: ["[A]", "[B]", "[C]", "[D]"],
          correct: "[A]",
          explanation: "The sentence explains *how* the telescope provides 'detailed images', so it fits best immediately after that initial statement.",
          highlight: "detailed images of the universe ever captured. [A]"
        }
      ]
    ]
  }
};

export const COMPLETE_SUMMARY_CONTENT: any = {
  "Easy": {
    3: [
      // Exercise 1: Ecology
      [
        {
          title: "The Role of Keystone Species",
          passage: "Keystone species play a disproportionately large role in their ecosystems relative to their abundance. A classic example is the sea otter in the North Pacific. Sea otters prey on sea urchins, which in turn consume kelp. When sea otter populations declined due to overhunting, sea urchin populations exploded, leading to the destruction of kelp forests. These forests are vital habitats for numerous other species, including fish and invertebrates. By controlling urchin populations, sea otters maintain the health and diversity of the entire ecosystem. Similarly, wolves in Yellowstone National Park act as keystone species by controlling elk populations, which prevents overgrazing and allows riparian vegetation to flourish, benefiting birds and beavers.",
          introSentence: "Keystone species are essential for maintaining the balance and biodiversity of their respective ecosystems.",
          options: [
            { id: 1, text: "Sea otters are a well-known example of a keystone species because they regulate sea urchin populations.", isCorrect: true, explanation: "This is a key supporting example that illustrates the main concept of the passage." },
            { id: 2, text: "The decline of sea otters led to the near-extinction of several species of North Pacific fish.", isCorrect: false, explanation: "This is an exaggeration; the passage mentions habitat destruction but not 'near-extinction'." },
            { id: 3, text: "Wolves in Yellowstone help maintain riparian vegetation by controlling the population of elk.", isCorrect: true, explanation: "This is the second major example provided to support the thesis about keystone species." },
            { id: 4, text: "Keystone species have a significant impact on their environment that is much greater than their population size would suggest.", isCorrect: true, explanation: "This is the central thesis and a primary point of the passage." },
            { id: 5, text: "Sea urchins are the primary food source for many marine mammals in the North Pacific.", isCorrect: false, explanation: "This information is not stated in the passage and is likely factually incorrect." },
            { id: 6, text: "Riparian vegetation is necessary for the survival of beavers and various bird species.", isCorrect: false, explanation: "While mentioned, this is a minor detail supporting the wolf example, not a main idea of the entire passage." }
          ]
        }
      ],
      // Exercise 2: Geology
      [
        {
          title: "Plate Tectonics",
          passage: "The theory of plate tectonics describes the large-scale motion of the seven large plates and several smaller plates of the Earth's lithosphere. These plates are in constant motion, driven by convection currents in the underlying mantle. Where plates meet, their relative motion determines the type of boundary: convergent, divergent, or transform. At convergent boundaries, plates collide, often leading to subduction and the formation of mountain ranges or volcanic arcs. Divergent boundaries occur where plates move apart, creating new crust as magma rises from the mantle, as seen in mid-ocean ridges. Transform boundaries, such as the San Andreas Fault, involve plates sliding past each other, which can cause significant earthquakes.",
          introSentence: "Plate tectonics is the fundamental theory explaining the Earth's dynamic geological processes and surface features.",
          options: [
            { id: 1, text: "The movement of tectonic plates is primarily driven by heat-driven convection currents within the Earth's mantle.", isCorrect: true, explanation: "This is a core mechanism explaining why the plates move." },
            { id: 2, text: "The San Andreas Fault is the only transform boundary currently active on Earth.", isCorrect: false, explanation: "The passage uses it as an example, but does not state it is the only one." },
            { id: 3, text: "Different types of plate boundaries, such as convergent and divergent, result in distinct geological formations like mountains and ridges.", isCorrect: true, explanation: "This summarizes the primary geological outcomes of plate interactions." },
            { id: 4, text: "The Earth's lithosphere is divided into several large and small plates that are in a state of continuous motion.", isCorrect: true, explanation: "This is the basic premise of the theory of plate tectonics." },
            { id: 5, text: "Magma rising at transform boundaries is the main cause of volcanic activity in California.", isCorrect: false, explanation: "The passage states transform boundaries involve sliding, not rising magma; this is factually incorrect." },
            { id: 6, text: "Convection currents were first discovered by Alfred Wegener in the early 20th century.", isCorrect: false, explanation: "This historical detail is not mentioned in the passage and is not a main idea." }
          ]
        }
      ],
      // Exercise 3: Psychology
      [
        {
          title: "Cognitive Dissonance",
          passage: "Cognitive dissonance is the mental discomfort experienced by a person who holds two or more contradictory beliefs, ideas, or values. This discomfort is typically triggered when a person's behavior conflicts with their existing beliefs. To reduce this dissonance, individuals often change their attitudes, beliefs, or behaviors, or justify their actions through rationalization. For example, a person who smokes despite knowing it's unhealthy may convince themselves that the risks are exaggerated or that they will quit soon. Leon Festinger's 1957 theory suggests that humans have an inner drive to hold all our attitudes and beliefs in harmony and avoid disharmony.",
          introSentence: "Cognitive dissonance theory explains how individuals resolve the psychological tension caused by conflicting beliefs and behaviors.",
          options: [
            { id: 1, text: "Individuals experience psychological discomfort when their actions are inconsistent with their deeply held values or beliefs.", isCorrect: true, explanation: "This is the fundamental definition of cognitive dissonance." },
            { id: 2, text: "People often use rationalization or change their attitudes as a way to minimize the tension caused by contradictory ideas.", isCorrect: true, explanation: "This describes the primary methods people use to resolve dissonance." },
            { id: 3, text: "Leon Festinger's research focused primarily on the long-term health effects of smoking on psychological well-being.", isCorrect: false, explanation: "Smoking is used only as an example; it was not the primary focus of his research in this context." },
            { id: 4, text: "The human mind has an inherent tendency to seek consistency and harmony among its various attitudes and beliefs.", isCorrect: true, explanation: "This is the underlying psychological drive that motivates the resolution of dissonance." },
            { id: 5, text: "Cognitive dissonance is most commonly experienced by individuals with high levels of self-esteem.", isCorrect: false, explanation: "This information is not supported by the passage." },
            { id: 6, text: "The term 'dissonance' was originally borrowed from music theory to describe clashing sounds.", isCorrect: false, explanation: "This is a minor etymological detail, not a main idea of the psychological theory." }
          ]
        }
      ]
    ]
  },
  "Normal": {
    3: [
      // Exercise 1: Astronomy
      [
        {
          title: "The Life Cycle of Stars",
          passage: "Stars are born in vast clouds of gas and dust called nebulae. Gravity causes these clouds to collapse, forming a protostar. As the protostar contracts, its core temperature rises until nuclear fusion begins, marking the birth of a main-sequence star. The duration of this stage depends on the star's mass; massive stars burn their fuel quickly, while smaller stars like our Sun can last for billions of years. When a star exhausts its hydrogen, it enters the final stages of its life. Low-mass stars expand into red giants before shedding their outer layers to become white dwarfs. In contrast, massive stars undergo a catastrophic supernova explosion, leaving behind either a neutron star or a black hole.",
          introSentence: "The life cycle of a star is a complex process determined primarily by its initial mass and the rate of nuclear fusion.",
          options: [
            { id: 1, text: "Stars originate from the gravitational collapse of interstellar gas and dust within nebulae.", isCorrect: true, explanation: "This describes the initial formation stage of all stars." },
            { id: 2, text: "The main-sequence stage is the longest part of a star's life, during which it fuses hydrogen into helium.", isCorrect: true, explanation: "This is a key phase mentioned in the passage." },
            { id: 3, text: "White dwarfs are the final remnants of massive stars that have undergone a supernova.", isCorrect: false, explanation: "The passage states white dwarfs come from low-mass stars, not massive ones." },
            { id: 4, text: "A star's ultimate fate—whether it becomes a white dwarf, neutron star, or black hole—is dictated by its mass.", isCorrect: true, explanation: "This summarizes the different end-of-life scenarios described." },
            { id: 5, text: "Protostars are much hotter and brighter than main-sequence stars due to their rapid contraction.", isCorrect: false, explanation: "The passage does not compare the brightness or temperature of protostars to main-sequence stars in this way." },
            { id: 6, text: "Supernovae are responsible for the creation of all heavy elements found in the universe.", isCorrect: false, explanation: "While true in astronomy, this specific detail is not mentioned in the provided passage." }
          ]
        }
      ]
    ]
  },
  "Hard": {
    3: [
      // Exercise 1: History
      [
        {
          title: "The Fall of the Western Roman Empire",
          passage: "The decline of the Western Roman Empire was not a single event but a centuries-long process involving internal decay and external pressures. Internally, the empire struggled with economic instability, including hyperinflation and a heavy reliance on slave labor, which stifled technological innovation. Political corruption and frequent civil wars further weakened the central authority. Externally, the empire faced constant incursions from Germanic tribes such as the Visigoths and Vandals, who were themselves being pushed westward by the Huns. The traditional date for the fall is 476 AD, when the Germanic chieftain Odoacer deposed the last Western emperor, Romulus Augustulus. However, many historians argue that Roman culture and institutions persisted in various forms long after this date, particularly in the Eastern Roman Empire, or Byzantium.",
          introSentence: "The collapse of the Western Roman Empire resulted from a combination of systemic internal failures and relentless external invasions.",
          options: [
            { id: 1, text: "Economic issues like inflation and a lack of innovation due to slavery undermined the empire's stability.", isCorrect: true, explanation: "This summarizes the internal economic factors mentioned." },
            { id: 2, text: "The Huns were the primary group that directly conquered the city of Rome in 476 AD.", isCorrect: false, explanation: "The passage says Odoacer (a Germanic chieftain) deposed the emperor, and the Huns pushed other tribes westward." },
            { id: 3, text: "Invasions by various Germanic tribes placed immense military and political pressure on the empire's borders.", isCorrect: true, explanation: "This captures the external pressures described." },
            { id: 4, text: "The deposition of Romulus Augustulus in 476 AD is the conventional, though simplified, marker for the empire's end.", isCorrect: true, explanation: "This reflects the historical consensus and its nuances mentioned in the text." },
            { id: 5, text: "The Eastern Roman Empire collapsed shortly after the Western half due to similar economic problems.", isCorrect: false, explanation: "The passage notes that Roman culture persisted in the Eastern Empire (Byzantium)." },
            { id: 6, text: "Frequent civil wars were the most significant factor in the empire's decline, outweighing all other causes.", isCorrect: false, explanation: "The passage lists it as one of several factors, not necessarily the 'most significant'." }
          ]
        }
      ]
    ]
  },
  "Advanced": {
    3: [
      // Exercise 1: Philosophy
      [
        {
          title: "The Concept of Social Contract",
          passage: "Social contract theory posits that individuals consent, either explicitly or implicitly, to surrender some of their freedoms and submit to the authority of a ruler or magistrate in exchange for protection of their remaining rights. Thomas Hobbes, in 'Leviathan', argued that without a strong central authority, human life would be 'solitary, poor, nasty, brutish, and short' due to inherent competition. John Locke, however, proposed a more optimistic view, suggesting that the social contract is a means to protect natural rights—life, liberty, and property—and that the people have a right to overthrow a government that fails to do so. Jean-Jacques Rousseau further developed this by emphasizing the 'general will', arguing that true sovereignty resides with the people as a whole rather than a monarch. These varying perspectives laid the intellectual foundation for modern democratic governance and the concept of civil liberties.",
          introSentence: "Social contract theory explores the philosophical justification for political authority and the relationship between the individual and the state.",
          options: [
            { id: 1, text: "Hobbes believed that a powerful sovereign is necessary to prevent the chaos and violence inherent in human nature.", isCorrect: true, explanation: "This accurately reflects Hobbes's perspective as described." },
            { id: 2, text: "Locke argued that the primary purpose of government is to safeguard natural rights and that its authority is conditional.", isCorrect: true, explanation: "This summarizes Locke's contribution to the theory." },
            { id: 3, text: "Rousseau's concept of the 'general will' suggests that legitimate political power must reflect the collective interests of the citizenry.", isCorrect: true, explanation: "This captures Rousseau's main idea." },
            { id: 4, text: "The social contract is a legally binding document signed by all citizens upon reaching adulthood.", isCorrect: false, explanation: "The passage describes it as a philosophical concept of 'consent', not a literal physical document." },
            { id: 5, text: "Most social contract theorists agree that absolute monarchy is the most effective form of government.", isCorrect: false, explanation: "The passage shows a progression toward democratic ideals, particularly with Locke and Rousseau." },
            { id: 6, text: "The theory was primarily used to justify the divine right of kings during the Middle Ages.", isCorrect: false, explanation: "The passage states it laid the foundation for *modern democratic* governance." }
          ]
        }
      ]
    ]
  }
};

export const COMPLETE_TABLE_CONTENT: any = {
  "Easy": {
    3: [
      // Exercise 1: History
      [
        {
          title: "Industrial Revolution vs. Information Age",
          passage: "The Industrial Revolution, beginning in the 18th century, was characterized by the transition from hand production methods to machines, new chemical manufacturing and iron production processes, and the rise of the factory system. It led to an unprecedented rise in the rate of population growth and urbanization. In contrast, the Information Age, starting in the mid-20th century, is defined by the shift from traditional industry to an economy based on information technology. This era has seen the rapid development of computers, the internet, and digital communication, leading to global connectivity and the automation of many cognitive tasks. While the Industrial Revolution focused on physical labor and mechanical power, the Information Age emphasizes intellectual capital and digital infrastructure.",
          categories: ["Industrial Revolution", "Information Age"],
          items: [
            { id: 1, text: "Transition to machine-based manufacturing", correctCategory: "Industrial Revolution" },
            { id: 2, text: "Rise of the factory system", correctCategory: "Industrial Revolution" },
            { id: 3, text: "Development of the internet", correctCategory: "Information Age" },
            { id: 4, text: "Emphasis on intellectual capital", correctCategory: "Information Age" },
            { id: 5, text: "Rapid urbanization", correctCategory: "Industrial Revolution" },
            { id: 6, text: "Global digital connectivity", correctCategory: "Information Age" }
          ]
        }
      ],
      // Exercise 2: Biology
      [
        {
          title: "Prokaryotic vs. Eukaryotic Cells",
          passage: "All living organisms are composed of cells, which are broadly classified into two types: prokaryotic and eukaryotic. Prokaryotic cells, such as bacteria, are generally smaller and simpler. They lack a defined nucleus and membrane-bound organelles; their genetic material floats freely in the cytoplasm. In contrast, eukaryotic cells, which make up plants, animals, and fungi, are larger and more complex. They contain a distinct nucleus that houses the DNA, as well as specialized organelles like mitochondria and chloroplasts. While both cell types share a cell membrane and ribosomes, the structural organization of eukaryotic cells allows for greater specialization and multicellularity.",
          categories: ["Prokaryotic Cells", "Eukaryotic Cells"],
          items: [
            { id: 1, text: "Lack a defined nucleus", correctCategory: "Prokaryotic Cells" },
            { id: 2, text: "Contain membrane-bound organelles", correctCategory: "Eukaryotic Cells" },
            { id: 3, text: "Generally smaller and simpler structure", correctCategory: "Prokaryotic Cells" },
            { id: 4, text: "Genetic material housed in a distinct nucleus", correctCategory: "Eukaryotic Cells" },
            { id: 5, text: "Includes organisms like bacteria", correctCategory: "Prokaryotic Cells" },
            { id: 6, text: "Found in plants and animals", correctCategory: "Eukaryotic Cells" }
          ]
        }
      ],
      // Exercise 3: Economics
      [
        {
          title: "Command vs. Market Economies",
          passage: "Economic systems are often categorized by how they allocate resources and determine production. In a command economy, the central government makes all major economic decisions, including what goods are produced, how much is produced, and the price of those goods. This system emphasizes collective goals and state control over resources. Conversely, a market economy relies on the interactions of buyers and sellers to allocate resources. Prices are determined by supply and demand, and private individuals or businesses own the means of production. While command economies aim for stability and equality, market economies prioritize efficiency, innovation, and individual choice.",
          categories: ["Command Economy", "Market Economy"],
          items: [
            { id: 1, text: "Central government makes major production decisions", correctCategory: "Command Economy" },
            { id: 2, text: "Prices determined by supply and demand", correctCategory: "Market Economy" },
            { id: 3, text: "Private ownership of the means of production", correctCategory: "Market Economy" },
            { id: 4, text: "Emphasizes collective goals and state control", correctCategory: "Command Economy" },
            { id: 5, text: "Prioritizes individual choice and innovation", correctCategory: "Market Economy" },
            { id: 6, text: "State determines the price of goods", correctCategory: "Command Economy" }
          ]
        }
      ]
    ]
  },
  "Normal": {
    3: [
      // Exercise 1: Environmental Science
      [
        {
          title: "Renewable vs. Non-renewable Energy",
          passage: "Energy sources are broadly classified into renewable and non-renewable categories based on their sustainability and environmental impact. Renewable energy sources, such as solar, wind, and hydroelectric power, are naturally replenished over short periods and generally produce fewer greenhouse gas emissions. These sources are considered sustainable for long-term use. In contrast, non-renewable energy sources, including fossil fuels like coal, oil, and natural gas, are finite and take millions of years to form. Their extraction and combustion often lead to significant environmental degradation and contribute heavily to global warming. While renewable energy requires high initial investment in infrastructure, non-renewable sources currently benefit from established global supply chains and lower immediate costs.",
          categories: ["Renewable Energy", "Non-renewable Energy"],
          items: [
            { id: 1, text: "Naturally replenished over short periods", correctCategory: "Renewable Energy" },
            { id: 2, text: "Includes fossil fuels like coal and oil", correctCategory: "Non-renewable Energy" },
            { id: 3, text: "Produces fewer greenhouse gas emissions", correctCategory: "Renewable Energy" },
            { id: 4, text: "Finite resources that take millions of years to form", correctCategory: "Non-renewable Energy" },
            { id: 5, text: "Requires high initial infrastructure investment", correctCategory: "Renewable Energy" },
            { id: 6, text: "Extraction leads to significant environmental degradation", correctCategory: "Non-renewable Energy" }
          ]
        }
      ]
    ]
  },
  "Hard": {
    3: [
      // Exercise 1: Psychology
      [
        {
          title: "Classical vs. Operant Conditioning",
          passage: "Behavioral psychology identifies two primary forms of learning: classical conditioning and operant conditioning. Classical conditioning, famously studied by Ivan Pavlov, involves learning through association. A neutral stimulus is paired with a naturally occurring stimulus until the neutral stimulus alone elicits a response. This process typically involves involuntary, reflexive behaviors. Operant conditioning, developed by B.F. Skinner, focuses on learning through consequences. Behaviors are strengthened or weakened based on the reinforcement or punishment that follows them. This type of learning involves voluntary actions and the individual's active interaction with their environment. While classical conditioning links two stimuli, operant conditioning links a behavior with its outcome.",
          categories: ["Classical Conditioning", "Operant Conditioning"],
          items: [
            { id: 1, text: "Learning through association of stimuli", correctCategory: "Classical Conditioning" },
            { id: 2, text: "Focuses on voluntary behaviors and their outcomes", correctCategory: "Operant Conditioning" },
            { id: 3, text: "Involves involuntary, reflexive responses", correctCategory: "Classical Conditioning" },
            { id: 4, text: "Behaviors are modified by reinforcement or punishment", correctCategory: "Operant Conditioning" },
            { id: 5, text: "Associated with the work of Ivan Pavlov", correctCategory: "Classical Conditioning" },
            { id: 6, text: "Associated with the work of B.F. Skinner", correctCategory: "Operant Conditioning" }
          ]
        }
      ]
    ]
  },
  "Advanced": {
    3: [
      // Exercise 1: Political Science
      [
        {
          title: "Direct vs. Representative Democracy",
          passage: "Democracy can be implemented in various forms, primarily categorized as direct or representative. In a direct democracy, citizens participate directly in decision-making processes, voting on laws and policies themselves rather than through intermediaries. This system was famously practiced in ancient Athens and is seen today in some local Swiss cantons. Representative democracy, the most common form in modern nation-states, involves citizens electing officials to make decisions on their behalf. These representatives are expected to act in the interests of their constituents and are held accountable through periodic elections. While direct democracy allows for more immediate popular will, representative democracy is generally considered more practical for managing large, complex populations and ensuring specialized governance.",
          categories: ["Direct Democracy", "Representative Democracy"],
          items: [
            { id: 1, text: "Citizens vote directly on laws and policies", correctCategory: "Direct Democracy" },
            { id: 2, text: "Citizens elect officials to make decisions on their behalf", correctCategory: "Representative Democracy" },
            { id: 3, text: "Practiced in ancient Athens", correctCategory: "Direct Democracy" },
            { id: 4, text: "Most common form in modern nation-states", correctCategory: "Representative Democracy" },
            { id: 5, text: "Allows for more immediate expression of popular will", correctCategory: "Direct Democracy" },
            { id: 6, text: "More practical for managing large, complex populations", correctCategory: "Representative Democracy" }
          ]
        }
      ]
    ]
  }
};
