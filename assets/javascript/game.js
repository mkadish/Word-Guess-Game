            var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
            //var movie = "ThIS ISN'T ABOUT YOU, tONY!";
            var wins = 0
            var vanna = 0
            var firstHalf = ""
            var secondHalf = ""
            var losses = 0
            var zzz = 0
            var partial = ""
            var movies = ["Burlesque", "Season of the Witch", "Old Dogs", "The Last Airbender", "Drive Angry", "Battlefield Earth", "All About Steve", "Sucker Punch", "Fast Five", "The Green Slime", "Invaders from the Deep", "Revenge of the Mysterons from Mars", "Star Force: Fugitive Alien II", "Gamera vs. Barugon", "Gamera vs. Gaos", "Gamera vs. Zigra", "Gamera vs. Guiron", "Phase IV", "Twister", "The Hunchback of Notre Dame", "Independence Day", "Mission: Impossible", "A Time to Kill", "Con Air", "Batman & Robin", "The Lost World: Jurassic Park", "Turbulence"]
            var featured = ["How Did this Get Made", "How Did this Get Made", "How Did this Get Made", "How Did this Get Made", "How Did this Get Made", "How Did this Get Made", "How Did this Get Made", "How Did this Get Made", "How Did this Get Made", "Mystery Science Theater 3000 Movie", "Mystery Science Theater 3000 Movie", "Mystery Science Theater 3000 Movie", "Mystery Science Theater 3000 Movie", "Mystery Science Theater 3000 Movie", "Mystery Science Theater 3000 Movie", "Mystery Science Theater 3000 Movie", "Mystery Science Theater 3000 Movie", "Mystery Science Theater 3000 Movie", "Razzie Awards -(Winner of Worst Written Film Grossing Over $100 Million)", "Razzie Awards - (Worst Written Film Grossing Over $100 Million Nominee)", "Razzie Awards - (Worst Written Film Grossing Over $100 Million Nominee)", "Razzie Awards - (Worst Written Film Grossing Over $100 Million Nominee)", "Razzie Awards - (Worst Written Film Grossing Over $100 Million Nominee)", "Razzie Award Winner - Worst Reckless Disregard for Human Life and Public Property, How Did This Get Made?", "Razzie Award Nominee - Worst Reckless Disregard for Human Life and Public Property, How Did This Get Made?", "Razzie Award Nominee - Worst Reckless Disregard for Human Life and Public Property, How Did This Get Made?", "Razzie Award Nominee - Worst Reckless Disregard for Human Life and Public Property, How Did This Get Made?"]
            var years = ["2010", "2011", "2009", "2010", "2011", "2000", "2009", "2011", "2011", "1968", "1981", "1980", "1987", "1966", "1976", "1971", "1969", "1974", "1996", "1996", "1996", "1996", "1996", "1997", "1997", "1997", "1997"]
            var directors = ["Steve Antin", "Dominic Sena", "Walt Becker", "M. Night Shyamalan", "Patrick Lussier", "Roger Christian", "Phil Traill", "Zack Snyder", "Justin Linn", "Kinji Fukasaku", "David Lane", "Robert Lynn, Ken Turner, Brian Burgess", "Minoru Kanaya, Kiyosumi Kuzakawa", "Shigeo Tanaka", "Noriaki Yuasa", "Noriaki Yuasa", "Noriaki Yuasa", "Saul Bass", "Jan de Bont", "Gary Trousdale, Kirk Wise", "Roland Emmerich", "Brian De Palma", "Joel Schumacher", "Simon West", "Joel Schumacher", "Steven Spielberg", "Robert Butler"]
            var actors = ["Cher, Christina Aguilera, and Alan Cumming", "Nicolas Cage, Ron Perlman, Claire Foy", "John Travolta, Robin Williams, Rita Wilson", "Nicola Peltz, Noah Ringer, Dev Patel", "Amber Heard, Nicholas Cage, William Fichtner", "John Travolta, Forest Whitaker, Barry Pepper", "Sandra Bullock, Bradley Cooper, Thomas Haden Church", "Emily Browning, Vanessa Hudgens, Abbie Cornish", "Vin Diesel, Paul Walker, Dwayne Johnson", "Robert Horton, Luciana Paluzzi, Richard Jaeckel", "Lois Maxwell, Robert Easton, Ray Barrett", "Francis Matthews, Ed Bishop, Donald Gray", "Jô Shishido, Tatsuya Azuma, Miyuki Tanigawa", "Kojiro Hongo, Kyoko Enami, Koji Fujiyama", "Kojiro Hongo, Kichijiro Ueda, Reiko Kashahara", "Reiko Kasahara, Koji Fujiyama, Daigo Inoue", "Eliji Funakoshi, Kon Omura, Yuko Hamada", "Lynn Frederick, Nigel Davenport, Michael Murphy", "Helen Hunt, Bill Paxton, Cary Elwes", "Tom Hulce, Demi Moore, Tony Jay", "Jeff Goldblum, Will Smith, Captain Steven", "Tom Cruise. Emmanuelle Béart, Ving Rhames", "Matthew McConaughey, Sandra Bullock, Samuel L. Jackson", "Nicolas Cage, John Malkovich, Steve Buscemi", "George Clooney, Chris O'Donnell, Arnold Schwarzenegger", "Jeff Goldblum, Julianne Moore, Richard Attenboro", "Ray Liotta, Lauren Holly, Brendon Gleeson"]
            var plots = ["Ali (Christina Aguilera), a small-town gal with a great voice, leaves a troubled life behind and follows her dreams to Los Angeles. She lands a job as a cocktail waitress at the Burlesque Lounge, a once-majestic theater that houses an inspired musical revue led by Tess (Cher), the proprietor. Ali vows to perform there and, with the help of a savvy stage manager and a gender-bending host, she makes the leap from bar to stage, helping restore the club's former glory.", "His faith broken by many years fighting in the Crusades, a knight named Behman (Nicolas Cage) returns to Europe and finds it ravaged by the Black Plague. A dying cardinal orders Behman and his friend, Felson (Ron Perlman), to take an accused witch to a remote abbey, where monks will destroy her powers and end the pestilence. As Behman and five comrades undertake the dangerous journey, they come to realize that the prisoner is no ordinary girl, and evil forces await at the destination.", "While preparing for an important business deal, two bachelors (John Travolta, Robin Williams) become the unexpected caretakers of twin children. One debacle after another follows, as the two clueless men try to take care of both their business duties and the rambunctious siblings. Though their lives are turned upside-down, the men may just gain an understanding of what is really important in life.", "The four nations of Air, Water, Earth and Fire lived in harmony until the Fire Nation declared war. A century later, there is still no end in sight to the destruction, then, an Avatar named Aang (Noah Ringer) discovers that he has the power to control the four elements. He joins forces with Katara (Nicola Peltz), a Waterbender, and her brother, Sokka, to restore balance and harmony to their world.", "Thrown into hell for his crimes, brutal felon John Milton (Nicolas Cage) escapes from the fiery pit after cultists murder his daughter and take her baby. Intent on rescuing the child, Milton joins forces with a waitress, who gives him her ex-lover's fire-red muscle car. In it, the two pursue the cult leader, who plans to sacrifice the infant and unleash hell on Earth. However, the hunters become the hunted when Satan sends his merciless henchman (William Fichtner) to drag Milton back.", "In the year 3000, there are no countries, no cities... Earth is a wasteland. And man is an endangered species. As the leader of the evil Psychlos, Terl and his race have taken over the world's natural resources and disregarded everyone and everything else. It's up to Jonnie 'Goodboy' Tyler, a brave human, to battle the Psychlos and restore normalcy to the world.", "After a lovely blind date, crossword-puzzle creator Mary Horowitz (Sandra Bullock) falls head over heels in love with Steve (Bradley Cooper), a news cameraman. Mary is convinced that she and Steve are soul mates, and with the encouragement of a reporter (Thomas Haden Church), follows Steve around the country in a bid to win his love. Along the way, she befriends an assortment of misfits who accept her for who she is, leading her to reassess her reasons for this strange journey.", "Locked away, a young woman named Babydoll (Emily Browning) retreats to a fantasy world where she is free to go wherever her mind takes her. Determined to fight for real freedom, she finds four women -- Rocket, Blondie, Amber and Sweet Pea -- to join together to escape the terrible fate that awaits them. With a virtual arsenal at their disposal, the allies battle everything from samurais to serpents, while trying to decide what price they will pay for survival.", "Ever since ex-cop Brian O'Conner (Paul Walker) and Mia Torretto (Jordana Brewster) broke her brother Dom (Vin Diesel) out of custody, they've traveled border to border to evade authorities. In Rio de Janeiro, they must do one final job before they can gain their freedom for good. Assembling their elite team of car racers, Brian and Dom know they must confront the corrupt businessman who wants them dead, before the federal agent (Dwayne Johnson) on their trail finds them.", "Two space-station astronauts (Robert Horton, Richard Jaeckel) destroy an asteroid, then face monsters formed from viscous cells.", "Animated. The world aquanaut security patrol battles an army of aquatic aliens who want to take over the planet.", "Captain Scarlet and friends battle their Martian enemies.", "In this second film compiled from two episodes of a Japanese TV serial, Captain Joe, reformed interstellar marauder Ken and the rest of the crew of the Backus-3 set off to destroy an alien race's super-weapon, face off with Ken's vengeful ex-lover Rita and confront the sinister leader of the marauding Star Wolves.", "The fire-breathing flying turtle meets a cold-tongued rainbow-death-ray beamer.", "Fire-breathing flying turtle fights a new enemy, a flying fox-thing that shoots laser beams orally.", "The big dual-exhaust turtle chucks a boulder on the razor-sharp back fins of a 75-ton monster.", "Flying turtle spins to the far side of the sun and meets a pointy-headed monster and women who like brains.", "Arizona ants mock the food chain on their way to a desert lab to get two scientists (Nigel Davenport, Michael Murphy) and a woman (Lynne Frederick).", "Bill and Jo Harding, advanced storm chasers on the brink of divorce, must join together to create an advanced weather alert system by putting themselves in the cross-hairs of extremely violent tornadoes.", "An animated Disney adventure follows disfigured Quasimodo (Tom Hulce), the bell-ringer of Notre Dame Cathedral, who bides his time locked away in a tower. With only gargoyles to keep him company, Quasimodo longs to be with other people, leading to his chance encounter with the enchanting Gypsy Esmeralda (Demi Moore). When the beautiful young woman catches the attention of Quasimodo's guardian, sinister Frollo (Tony Jay), Quasimodo must help to keep her out of his clutches.", "Strange phenomena surface around the globe. The skies ignite. Terror races through the world's major cities. As these extraordinary events unfold, it becomes increasingly clear that a force of incredible magnitude has arrived, its mission: total annihilation over the Fourth of July weekend. The last hope to stop the destruction is an unlikely group of people united by fate and unimaginable circumstances.", "When U.S. government operative Ethan Hunt (Tom Cruise) and his mentor, Jim Phelps (Jon Voight), go on a covert assignment that takes a disastrous turn, Jim is killed, and Ethan becomes the prime murder suspect. Now a fugitive, Hunt recruits brilliant hacker Luther Stickell (Ving Rhames) and maverick pilot Franz Krieger (Jean Reno) to help him sneak into a heavily guarded CIA building to retrieve a confidential computer file that will prove his innocence.", "Carl Lee Hailey (Samuel L. Jackson) is a heartbroken black father who avenges his daughter's brutal rape by shooting the bigoted men responsible for the crime as they are on their way to trial. He turns to Jake Brigance (Matthew McConaughey), an untested lawyer, to defend him. Brigance struggles to believe that he can get Hailey acquitted in this small, segregated Southern town, given Hailey's race and the deliberate nature of his crimes, but Carl has unshakable faith in him.", "Just-paroled army ranger Cameron Poe (Nicolas Cage) is headed back to his wife (Monica Potter), but must fly home aboard a prison transport flight dubbed 'Jailbird' with some of the worst criminals living. Along with Diamond Dog (Ving Rhames) and Baby-O (Mykelti Williamson), genius serial killer Cyrus 'The Virus' Grissom (John Malkovich) unleashes a violent escape plot in mid-flight. Secretly working with U.S. Marshall Vince Larkin (John Cusack), Poe tries to foil Grissom's plan.", "This superhero adventure finds the Caped Crusader and his partner, attempting to the foil the sinister schemes of a deranged set of new villains, most notably the melancholy Mr. Freeze (Arnold Schwarzenegger), who wants to make Gotham into an arctic region, and the sultry Poison Ivy (Uma Thurman), a plant-loving femme fatale. As the Dynamic Duo contends with these bad guys, a third hero, Batgirl (Alicia Silverstone), joins the ranks of the city's crime-fighterss", "John Hammond (Richard Attenborough) summons chaos theorist Ian Malcolm (Jeff Goldblum) to his home with some startling information -- while nearly everything at his park had been destroyed, his engineers happened to have a second site, where other dinosaurs were kept in hiding. It seems the dinosaurs on the second island are alive and well and even breeding; and Hammond wants Malcolm to observe and document the reptiles before Hammond's financiers can get to them.", "On a flight transporting dangerous convicts, murderer Ryan Weaver (Ray Liotta) manages to break free and cause complete chaos throughout the plane. As various people on board fall victim to Weaver, it is ultimately down to flight attendant Teri Halloran (Lauren Holly) to keep the aircraft from crashing, with on-ground support from an air traffic controller (Ben Cross). While Halloran struggles to pilot the plane, Weaver continues to terrorize the surviving members of the crew."]
            var videos = ["https://video-http.media-imdb.com/MV5BODE0MjRmZWUtMDNhYS00YTAyLWFiNTYtNDRiYjhlOGI5NmE2XkExMV5BbXA0XkFpbWRiLWV0cy10cmFuc2NvZGU@.mp4?Expires=1530143338&Signature=BZqGdTIZtRFVOilMGuvCBspIIs5Pdl4UCfGV5hTeq01i-XyberzlcTOL5AqRniIJxBR3p2OOiz8LZseh78~J~2UCGKv9v151ObuDvtKfxU4-KQlr775kGWLI3NaYevWc4ujkfG9xlYEDqxUirzsYwrPD3Ilv3SKNLH72HbKyMWM_&Key-Pair-Id=APKAILW5I44IHKUN2DYA", "https://video-http.media-imdb.com/MV5BNjY5Y2FhYzEtM2YwZi00YWQ3LWIwNTYtNjBjYzMwOThjYWJmXkExMV5BbXA0XkFpbWRiLWV0cy10cmFuc2NvZGU@.mp4?Expires=1530150016&Signature=F5oQ4Aul73Us9~WpWGtrSHywoo9~tUNSd4ROa0Z2mUN3du0HnI9Da9flIQBemYldgOsskNrjjToPeAjCzOZHphuu5l6sUN1SPkVUTUrHS5fR3ywsRxs9U0m342tpZ8e8klMQlUP~Sf0B0J4g3ASsufOymTzASwNHG3dXbIQWzGo_&Key-Pair-Id=APKAILW5I44IHKUN2DYA", "https://www.youtube.com/watch?v=-WfL9fBZF_M", "https://www.youtube.com/watch?v=Dtia2drX_uA", "https://www.youtube.com/watch?v=4UCF3sNvhrI", "https://www.youtube.com/watch?v=I8z7-DIa1As", "https://www.youtube.com/watch?v=mtJfr-a_oHQ", "https://www.youtube.com/watch?v=6LvdMGZBC6w", "https://www.youtube.com/watch?v=mw2AqdB5EVA", "https://www.youtube.com/watch?v=g79_ljVC5Wk", "https://www.youtube.com/watch?v=4JcAqyUblvU", "https://www.youtube.com/watch?v=t-KJn2Rwnds", "https://www.youtube.com/watch?v=AwaCzusjhIU", "https://www.youtube.com/watch?v=J_13kPYIvhc", "https://www.youtube.com/watch?v=yivof1XsCU4", "https://www.youtube.com/watch?v=Rqwsm3ue5U8", "https://www.youtube.com/watch?v=OtIDF3DqI2o", "https://www.youtube.com/watch?v=IuhgBvOWb_k", "https://totaleclips-a.akamaihd.net/103/e10387_301.mp4?eclipId=e10387&bitrateId=471&vendorId=102&affiliateId=-1", "https://totaleclips-a.akamaihd.net/120/e120627_227.mp4?eclipId=e120627&bitrateId=449&vendorId=102&affiliateId=-1", "https://www.youtube.com/watch?v=xr7Zy9l13y0", "https://www.youtube.com/watch?v=VI-PobQLr1M", "https://www.youtube.com/watch?v=cE2v4jTL1Kg", "https://www.youtube.com/watch?v=pF7ixUJRGqo", "https://www.youtube.com/watch?v=_hRn4mmCWMU", "https://www.youtube.com/watch?v=RxrvaneULkE", "https://www.youtube.com/watch?v=eLzAB8DkMzk"]
            var imdb = ["https://www.imdb.com/title/tt1126591/", "https://www.imdb.com/title/tt0479997/", "https://www.imdb.com/title/tt0976238/", "https://www.imdb.com/title/tt0938283/", "https://www.imdb.com/title/tt1502404", "https://www.imdb.com/title/tt0185183/", "https://www.imdb.com/title/tt0881891/", "https://www.imdb.com/title/tt0978764/", "https://www.imdb.com/title/tt1596343/", "https://www.imdb.com/title/tt0064393/", "https://www.imdb.com/title/tt0128273/", "https://www.imdb.com/title/tt1272026/", "https://www.imdb.com/title/tt0131028/", "https://www.imdb.com/title/tt0060446/", "https://www.imdb.com/title/tt0061695/", "https://www.imdb.com/title/tt0067123/", "https://www.imdb.com/title/tt0064360/", "https://www.imdb.com/title/tt0070531/", "https://www.imdb.com/title/tt0117998/", "https://www.imdb.com/title/tt0116583/", "https://www.imdb.com/title/tt0116629/", "https://www.imdb.com/title/tt0117060/", "https://www.imdb.com/title/tt0117913/", "https://www.imdb.com/title/tt0118880/", "https://www.imdb.com/title/tt0118688/", "https://www.imdb.com/title/tt0119567/", "https://www.imdb.com/title/tt0120390/"]
            var rottentomatoes = ["https://www.rottentomatoes.com/m/burlesque", "https://www.rottentomatoes.com/m/10010694_season_of_the_witch", "https://www.rottentomatoes.com/m/10009596_old_dogs", "https://www.rottentomatoes.com/m/last_airbender/", "https://www.rottentomatoes.com/m/drive-angry/", "https://www.rottentomatoes.com/m/battlefield_earth/", "https://www.rottentomatoes.com/m/all_about_steve/", "https://www.rottentomatoes.com/m/sucker_punch_2011/", "https://www.rottentomatoes.com/m/fast_five/", "https://www.rottentomatoes.com/m/green_slime/", "https://www.rottentomatoes.com/m/stingray_invaders_of_the_deep/", "", "", "", "", "", "", "https://www.rottentomatoes.com/m/phase_iv_1974/", "https://www.rottentomatoes.com/m/1071167-twister/", "https://www.rottentomatoes.com/m/1073037-hunchback_of_notre_dame/", "https://www.rottentomatoes.com/m/1071806_independence_day?", "https://www.rottentomatoes.com/m/mission_impossible/", "https://www.rottentomatoes.com/m/1072381_time_to_kill?", "https://www.rottentomatoes.com/m/con_air/", "https://www.rottentomatoes.com/m/1077027-batman_and_robin/", "https://www.rottentomatoes.com/m/lost_world_jurassic_park/", "https://www.rottentomatoes.com/m/1074496-turbulence/"]
            var imdbscores = ["6.4", "5.4", "5.4", "4.2", "5.4", "2.4", "4.8", "6.1", "7.3", "4.6", "3.2", "4.3", "1.8", "4.5", "4.6", "3.2", "3.8", "6.6", "6.3", "6.9", "7", "7.1", "7.4", "6.8", "3.7", "6.5", "4.8"]
            var tomatoscores = ["36%", "9%", "5%", "6%", "46%", "3%", "7%", "23%", "77%", "22%", "", "", "", "", "", "", "", "56%", "57%", "74%", "63%", "62%", "5%", "55%", "10%", "53%", "17%"]
            var pictures = ["https://m.media-amazon.com/images/M/MV5BMjM1ZmI4NmUtMDJmMC00N2NkLTg1NGYtMDUyZDZlMmExNGNiXkEyXkFqcGdeQXVyMTkzODUwNzk@._V1_SY1000_CR0,0,677,1000_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMzc3MjYxNzg2N15BMl5BanBnXkFtZTcwNzQyMTkwNA@@._V1_SY1000_CR0,0,675,1000_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMjExMTYyMzk3MV5BMl5BanBnXkFtZTcwMzI2Njg0Mg@@._V1_.jpg", "https://m.media-amazon.com/images/M/MV5BNmY2YmUyNjQtNDI2OS00MGVmLTkzMWMtOGJmNzUyY2JmN2Y5XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SY1000_CR0,0,674,1000_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNzU4OWUzODYtZDllZC00NTY5LTk4YmMtMjFlNzQzMDZhODIxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SY1000_CR0,0,676,1000_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BYWRkNzY5NWQtNmY3Yy00ZmU0LWJmYTUtZjhlNmRlMDIyZjgxL2ltYWdlXkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_SY1000_SX750_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BZDU4NThjMDItM2EyYi00M2ZkLTkxZDctNzhiNzdhZDM2ZmIyXkEyXkFqcGdeQXVyMjU5OTg5NDc@._V1_SY1000_SX760_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNDEwNGRlNjQtZjI4OC00ZmMxLWEyYmQtNGI1NDk4YmUyYTNkXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SY1000_CR0,0,676,1000_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMjAxMDAzMjcwNF5BMl5BanBnXkFtZTcwNDQ5NzQ2NA@@._V1_.jpg", "https://m.media-amazon.com/images/M/MV5BY2M3OGE1M2UtZDZkNC00ODU2LTlmYWItNDgwNTg4NGNmZmVmXkEyXkFqcGdeQXVyNjQzNDI3NzY@._V1_.jpg", "https://m.media-amazon.com/images/M/MV5BZTU2ZjYwMWMtN2MyNS00MzcwLTg2MWUtZTg0ODcwMjhkZjFkXkEyXkFqcGdeQXVyNDUxNjc5NjY@._V1_.jpg", "https://m.media-amazon.com/images/M/MV5BNjEwZDQ1Y2ItNjIxNS00YWJjLThmMTYtNWY2NjQ5N2UyNWVkXkEyXkFqcGdeQXVyMzU0NzkwMDg@._V1_.jpg", "https://m.media-amazon.com/images/M/MV5BNDJlNTFkZGItMTExNi00OGU1LWFkYmEtNDBlMzRmMmViOGNhXkEyXkFqcGdeQXVyMzU0NzkwMDg@._V1_.jpg", "https://m.media-amazon.com/images/M/MV5BMjIyODk3NTEyN15BMl5BanBnXkFtZTcwMTgzMzU0Mw@@._V1_.jpg", "https://m.media-amazon.com/images/M/MV5BMTg4NjExMDAwMV5BMl5BanBnXkFtZTcwOTE2ODUyMQ@@._V1_.jpg", "https://m.media-amazon.com/images/M/MV5BMmUwNDYxYzYtNDllZi00ZGU1LThhNGMtZmQ4MWY3NTdkZGExXkEyXkFqcGdeQXVyMTQ2MjQyNDc@._V1_.jpg", "https://m.media-amazon.com/images/M/MV5BMGEzOTVkNzgtMDIzOC00Y2IyLTkwZWQtZmU0MjBmODU1MWMwXkEyXkFqcGdeQXVyMTQ2MjQyNDc@._V1_.jpg", "", "https://m.media-amazon.com/images/M/MV5BODExYTM0MzEtZGY2Yy00N2ExLTkwZjItNGYzYTRmMWZlOGEzXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SY1000_CR0,0,673,1000_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNzMxMDc4OGItODBiZi00NjYyLThiMzctMzQwZjgzYWE0MzQzXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_.jpg", "https://m.media-amazon.com/images/M/MV5BMGQwNDNkMmItYWY1Yy00YTZmLWE5OTAtODU0MGZmMzQ1NDdkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,666,1000_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMDNjMTEyZDQtN2M0Zi00NTIzLTgzOTktNDAyNGM3MGEwYjM4XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg", "https://m.media-amazon.com/images/M/MV5BOWExZTg4ZWYtOTQxMi00YWZkLTkxYzgtOTg1MTUxNzNiNDcxL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,665,1000_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BOTFkYzBkYTYtNTU4Yi00MDUyLWEyMmYtNzU1MzlkNWM0ZmRkXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg", "https://m.media-amazon.com/images/M/MV5BNjkxNzQ1ODE2OF5BMl5BanBnXkFtZTgwNDM2Njk5MTE@._V1_.jpg", "https://m.media-amazon.com/images/M/MV5BZDMxZGFhODgtNjZkNC00MTA0LTliMWYtN2I2NDJkNWEyZWM0XkEyXkFqcGdeQXVyMjMyNTkxNzY@._V1_.jpg", "https://m.media-amazon.com/images/M/MV5BYzMxNGY4NWQtYjUxOC00ZWYwLWExZTYtNmEwODg5MzFmZmEyXkEyXkFqcGdeQXVyNjU0NTI0Nw@@._V1_.jpg"]
            var wrong = [];
            var right = [];
            var guessed = ""
            var firstHint;
            var secondHint;
            var thirdHint;
            var fourthHint;
            var fifthHint;
            var secondHintB;
            var magicnumber = (Math.floor(Math.random()*movies.length))
            var movie = movies[magicnumber];
            var movieB = movie.toUpperCase();
            var movieC = (movieB.replace(/ /g, String.fromCharCode(1)));
            var mysteryWord = (movieC.replace(/A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z/g, "_"));
            var letters = movieB.split("");
        document.querySelector("#puzzle").innerHTML = mysteryWord;
            if(!points){
                var points = 0;
            }
            //document.querySelector("#movie").innerHTML = movieB;
    
function startGame() {
    wrong = [];
    right = [];
    document.querySelector("#temp").innerHTML = ""
    document.querySelector("#gameOver").innerHTML = ""
    document.querySelector("#picture").innerHTML = ""
    document.querySelector("#hints").innerHTML = ""
    magicnumber = (Math.floor(Math.random()*movies.length))
    movie = movies[magicnumber];
    //document.querySelector("#temp").innerHTML = "movie";
    movieB = movie.toUpperCase();
    movieC = (movieB.replace(/ /g, String.fromCharCode(1)));
    mysteryWord = (movieC.replace(/A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z/g, "_"));
    document.querySelector("#puzzle").innerHTML = mysteryWord;
    //document.querySelector("#movie").innerHTML = movieB;
    letters = movieB.split("");
    zzz = 0;
    document.querySelector("#score").innerHTML = 
        "Scores: <br> Wins: "+wins+"<br> Losses: "+losses+"<br> Total Points: "+points;
    
    }
    //guessing letter, limiting to letters
    document.onkeyup = function(event){
    document.querySelector("#startbutton").innerHTML = "";    
    document.querySelector("#score").innerHTML = 
        "Scores: <br> Wins: "+wins+"<br> Losses: "+losses+"<br> Total Points: "+points;
    var guess = event.key.toUpperCase();
        if (alphabet.includes(guess)){
            guessed = guess;
            
            //document.querySelector("#guess").innerHTML = guessed;
            
//counting letters

            for(var count=-1,index=-2; index != -1; count++,index=movieB.indexOf(guessed,index+1) );
                //document.querySelector("#four").innerHTML = count;
        }

        
//not there

        if (count == 0 && wrong.includes(guessed) == false){
            wrong.push(guessed);
            document.querySelector("#wronganswers").innerHTML = "Wrong letters: " + wrong + " <br> You have " + (6 - wrong.length) + " more chances left...";
            if (wrong.length == 1) {
            firstHint = document.querySelector("#hints").innerHTML = "Hint #1: The movie was released in " + years[magicnumber] +".";
            firstHint;
            }
            if (wrong.length == 2) {
            secondHint = document.querySelector("#hints").innerHTML = firstHint + "<p>Hint #2: It's here because it earned a " + featured[magicnumber] + "  It's got a " + imdbscores[magicnumber] +" out of 10 on IMDB"; 
                if (tomatoscores[magicnumber].length > 2) {
                    secondHintB = " and a " + tomatoscores[magicnumber] + " on Rotten Tomatoes.";
                    }
                    else {
                    secondHintB = "."
                    }
            secondHint = secondHint + secondHintB;
            secondHint;
            }
            else if (wrong.length == 3) {
                thirdHint = document.querySelector("#hints").innerHTML = secondHint + "<p>Hint #3: The director was " + directors[magicnumber];
                thirdHint;
                }
            else if (wrong.length == 4) {
                fourthHint = document.querySelector("#hints").innerHTML = thirdHint + "<p>Hint #4: It starred " + actors[magicnumber];
                fourthHint;
                }
            else if (wrong.length == 5) {
                fifthHint = document.querySelector("#hints").innerHTML = fourthHint + "<p>Hint #5: " + plots[magicnumber];
                fifthHint;
                }
            }

//game over

        if (wrong.length == 6){
            document.querySelector("#gameOver").innerHTML = "<em><strong>Game Over</em></strong><br>  The answer was:" + movie;
            document.querySelector("#picture").innerHTML = "<img src='"+pictures[magicnumber]+"' width= 350px>"
            losses++;
            //if (videos[magicnumber].split(0,18)=="https://www.youtube"){
              //  videoLink="<iframe class=\"youtube-player\" type=\"text/html\" src=\"http://www.youtube.com/embed/" + video[magicnumber].split(11) +"?wmode=opaque&autohide=1&autoplay=1\" frameborder=\"0\">&lt;br /&gt;</iframe>"
        //}
        //else   {
          //  videoLink="document.querySelector(\"#temp\").innerHTML = \"<video id=\"myVideo\" width=\"1280\" height=\"704\" controls=\"controls\"><source src=\""+videos[magicnumber] +"\" type=\"video/mp4\">"
        //}
    
        //document.querySelector("#temp").innerHTML = videoLink
      //var vid = document.getElementById("myVideo");
        //vid.autoplay = true;
        //vid.load();
            wrong = [];
            setTimeout(function() {
                var replay = confirm("Sorry, you lose. \n Play again?");
               if (replay = true) {
                    replay = "";
                    partial = "";
                    document.querySelector("#wronganswers").innerHTML ="";
                    startGame();};
                }
                    , 2000)
                }
   


//there once
    //if (count == 1 && right.includes(guessed) == false){
      //  if (zzz == 0 ){
        //    partial = mysteryWord;
          //  zzz++;
    //    }
     //   right.push(guessed);
       // vanna = movieC.indexOf(guessed);
     //   firstHalf = partial.slice(0,vanna);
     //   secondHalf = partial.slice(vanna+1);
     //   partial = firstHalf.concat(guessed).concat(secondHalf);
     //   document.querySelector("#puzzle").innerHTML = partial;
     //   document.querySelector("#rightanswers").innerHTML = "Right letters:" + right;
        
      //  console.log(partial)
      //  console.log(movieC)
    //};
        



    //more than once            
    if (count > 0 && right.includes(guessed) == false){
        var m = 0    
        for (n=0; count > m ; n = vanna+1) {
            if (zzz == 0 ){
                partial = mysteryWord;
                zzz++;        
            }
            vanna = movieC.indexOf(guessed,n);
            firstHalf = partial.slice(0,vanna);
            secondHalf = partial.slice(vanna+1);    
            partial = firstHalf.concat(guessed).concat(secondHalf); 
            m++
                   
        }    
    right.push(guessed);
    document.querySelector("#puzzle").innerHTML = partial;
    //document.querySelector("#rightanswers").innerHTML = "Right letters:" + right;
//    console.log(partial)
//console.log(movieC)    
            
        };
        if (partial == movieC){
        document.querySelector("#gameOver").innerHTML = "<i><b>You won!</i></b>";
        document.querySelector("#picture").innerHTML = "<img src='"+pictures[magicnumber]+"' width=250px>"
    wins++;
    wrongqs = wrong.length;
    partial = "";
    points = points + 10 - wrongqs;
 
//    if (videos[magicnumber].split(0,17)=="https://www.youtube"){
  //        videoLink="<iframe class=\"youtube-player\" type=\"text/html\" src=\"http://www.youtube.com/embed/" + video[magicnumber].split(11) +"?wmode=opaque&autohide=1&autoplay=1\" frameborder=\"0\">&lt;br /&gt;</iframe>"
//    }
 //   else   {
   //   videoLink="document.querySelector(\"#temp\").innerHTML = \"<video id=\"myVideo\" width=\"1280\" height=\"704\" controls=\"controls\"><source src=\""+videos[magicnumber] +"\" type=\"video/mp4\">"
    // document.querySelector("#temp").innerHTML = videoLink
  //   var vid = document.getElementById("myVideo");
  //  vid.autoplay = true;
  //  vid.load();
//}

 
    setTimeout(function() {
    var replay = confirm("You Won! \n Play again?");
    if (replay = true) {
        replay = "";
        document.querySelector("#wronganswers").innerHTML ="";
        startGame();};
    }
        , 2000)
    }

    
    };

