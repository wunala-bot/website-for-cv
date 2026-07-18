(() => {
  const root = document.querySelector("[data-article-root]");
  if (!root) return;

  const articles = {
    "journey-2021-review": {
      type: "journey",
      date: "2022-01-01",
      zh: {
        category: "旅程",
        title: "2021年终总结",
        dek: "用自己的身体和情绪经历这一年，然后继续游到海水变蓝。",
        blocks: [
          { type: "p", text: "首先感谢朋友“卷起来”让我下决心不再偷懒，开始动手敲这个真正的年终总结。记得2021年初的时候写过一条微博，大意是：我希望在2021年能够给身边的人和世界带来更多的积极。这是一个不能自证的Flag，也就无所谓说现在它是完成了还是彻底破产了。但Flag完成与否其实都不那么重要，重要的是我用自己的身体和情绪经历了这一年。" },
          { type: "p", text: "上海的第一个冬天远比想象中的冷，不敢出门，但我也确实爱得要死，因为这蓝天真的太舒服了。" },
          { type: "p", text: "放假回成都前照惯例看了展览。有的展览从策展到展品都很商业化，很不喜欢，金钱资本建立起来的“艺术”权力让我感到很下头。渐渐地，回四川就是例行和这个朋友碰一碰面、和那个朋友吹吹牛。贝爷对我说：“211不准回二线城市，毕业不准回四川，必须在上海撑起来。”当时差点笑不活了。很多人聊到这些话题时都会说，毕业还是回四川吧。我一下子想起《心灵捕手》里男主的好朋友在工地上说的那段话。可能好兄弟就是鼓励你去更好的地方，即便那意味着离开。我就是那种很看重朋友一起吹过的Flag、许下的约定的人，万一真的实现了呢。" },
          { type: "p", text: "这一年我遇见了很多人。忘记从什么时候开始，我决定要用力地和遇见的人打招呼，而且必须微笑。起因是看了罗翔老师的视频，然后悟了：这是一个稳赚不亏的事情。如果你的热情没有让你交到朋友，至少试过了，也没什么遗憾；但只要有一个人最后成为朋友，那就是赚翻了。简单来讲就是损失有限，收益无限，渐渐又和金融扯上关系了。" },
          { type: "p", text: "暑假开始，因为无聊玩了网易云的陌生人匹配。在上面囤了无数好歌，也听了很多不同的故事。每个人的故事都很有意思，愉快的、伤心的都有意思。不是幸灾乐祸，而是觉得如果它真实存在，就要先理解它，才有可能治愈。于是变得很想听故事。" },
          { type: "p", text: "什么都不会的我，出人意料地得到了数据分析的实习。感谢迪卡侬，也感谢带我的老师。以前的我肯定不会在文字里用“爱得要死”这样的表达，也不会在聊天中直白地说出此时此刻真实的感受，即使面对陌生网友。接纳和表达自己的情绪，也许是这一年最大的进步，随之而来的是一种通透。" },
          { type: "p", text: "虽然不完美，但我真的觉得现在是目前最好的版本。最大的快乐，大概就是踩着自己的节奏去实现想实现的东西。工作肯定会有的，一步一步都会好的，所以一切都会OK。谢谢2021。2022年我可能也不会成为什么厉害的大佬，但我会一直游到海水变蓝。" },
          { type: "blockquote", text: "写于2021年末，2026年1月更新于旧网站。" }
        ]
      },
      en: {
        category: "Journey",
        title: "2021: A Year in Review",
        dek: "Living through the year with my own body and emotions, then continuing until the sea turns blue.",
        blocks: [
          { type: "p", text: "First, thanks to a friend who pushed me to stop procrastinating and finally write a real year-end review. At the beginning of 2021, I posted that I hoped to bring more positive energy to the people around me and to the world. It was never a goal I could objectively prove, so whether I completed it or failed hardly matters. What matters is that I lived through the year with my own body and emotions." },
          { type: "p", text: "My first winter in Shanghai was much colder than I imagined. I barely wanted to go outside, yet I still loved it intensely because the blue sky felt so good." },
          { type: "p", text: "Before returning to Chengdu for the holiday, I visited exhibitions as usual. Some felt commercial from the curation to the work itself, and I disliked the kind of artistic authority built by money and capital. Going back to Sichuan gradually became a familiar routine of meeting one friend and joking around with another. One friend told me that after attending a top university I was not allowed to retreat to a second-tier city; I had to stay and make it in Shanghai. I nearly laughed out loud. Many others told me the opposite: go back to Sichuan after graduation. It reminded me of the construction-site scene in Good Will Hunting. Perhaps a true friend encourages you to reach somewhere better, even when that means leaving. I take the promises and ambitions shared with friends seriously. What if we really make them happen?" },
          { type: "p", text: "I met many people that year. At some point, after watching a talk by Luo Xiang, I decided to greet people warmly and always smile. It seemed like an investment with limited downside and unlimited return. If the warmth did not create a friendship, I had at least tried. If even one person became a friend, the return was enormous." },
          { type: "p", text: "During the summer, I tried NetEase Music's stranger-matching feature out of boredom. I collected countless songs and heard many different stories. Happy stories and painful stories were equally compelling, not because of schadenfreude, but because I felt that something real must first be understood before it can be healed. I became someone who wanted to listen." },
          { type: "p", text: "Despite knowing very little, I unexpectedly landed a data-analysis internship. I remain grateful to Decathlon and to the mentor who guided me. An earlier version of me would never have written phrases like 'I loved it intensely,' nor would I have stated my feelings directly in a conversation, even with a stranger online. Learning to accept and express my emotions may have been my biggest improvement that year, and it brought a new sense of clarity." },
          { type: "p", text: "I was still imperfect, but I genuinely felt like the best version of myself so far. The greatest happiness was moving at my own pace toward the things I wanted. Work would come; things would get better step by step. Thank you, 2021. I might not become anyone extraordinary in 2022, but I would keep swimming until the sea turned blue." },
          { type: "blockquote", text: "Written at the end of 2021 and updated on the previous website in January 2026." }
        ]
      }
    },
    "journey-2025-review": {
      type: "journey",
      date: "2025-12-30",
      zh: {
        category: "旅程",
        title: "平静地，又一年过去",
        dek: "回到成都、重新安顿生活，也慢慢找回热情、专注和对自己的信心。",
        blocks: [
          { type: "p", text: "《蜡笔小新》电影里有一个片段，小新用力地喊道：“我不要再失去任何人了。”我是在短视频里刷到的。那应该是去年底的某一天，当时觉得它简直说出了我在痛苦与气愤之后，那种不认命的倔强反扑。" },
          { type: "p", text: "回成都的一年多，换了三个地方住。最开始住在离公司步行20分钟左右的地方，每天可以多睡一会儿，但附近都是老小区，采光也不太好，总觉得缺少活力。一两个月后搬到成渝立交，新房子很宽敞，阳台是整面的落地窗，附近热闹，朋友也住得近，终于有了一些“回成都生活”的感觉。到了2月，又搬到西边的东升。附近连着好几个公园，常有人露营、烧烤、摆路边摊，还有晚上捞鱼的小朋友，很有烟火气。机场附近没有太多高楼大厦，我很喜欢。和大都市保持适当的距离，是我更舒服的状态。" },
          { type: "p", text: "虽然换了好几个地方，但和上学时的室友还是经常聚餐，也被他们带着去看了一些过去四年错过的成都。这里的人、语言、饮食和天气都很熟悉。熟悉的另一面也意味着不变，不变的好处是可以顺着曾经的惯性，让整个人休息下来。把很久没吃过的店重新吃一遍，再探索一些新的店，一方面是想等外地朋友来时带他们去尝，另一方面也觉得，生活在一个地方，就是要走进它的大街小巷。" },
          { type: "p", text: "成都的新工作，一个半月就提前锁定转正。虽然业务知识一问三不知，但岗位更考验分析思路和项目管理，所以手上的事情完成得还不错。当一切顺利时，心态也不再那么容易被工作影响。虽然仍然需要打卡、坐班，但已经有了“生活本身大于一切”的从容。这和之前在字节完全不同。" },
          { type: "p", text: "每时每分、每天每周每月，好像就这样平淡、没有波澜地度过。这是以前不敢想象的常态。" },
          { type: "p", text: "但有些坎哪有那么容易迈过。过去的Bug总会在不经意的瞬间弹出来，然后卡住你。有一次，我在心里对自己说：“绝对不会让任何人再伤害自己了。”如果一些报错能像写代码那样简单地Try-Catch，绕过去，再继续执行下一步就好了。很多这样的时刻可能发生在晚上躺着的时候、上班路上，或聚餐过程中。好在外部环境足够熟悉，没有继续添乱，让我可以专心和这些Bug周旋。" },
          { type: "p", text: "最开心的事情是去香港看Coldplay的演出，而且是舞台旁边的站票，肉眼就能看清脸。演出开始前播放了一段主唱念的独白，听到声音的那一刻没绷住，流了一点眼泪。一年前还许愿说，希望这辈子能看一次就无憾了，没想到这么快就实现。" },
          { type: "p", text: "夏天来了，还是热，哪里都热。下班后只想快点回家，吹空调，吃西瓜和冰激凌。到七八月份，回来已经一年。一年前大理某个夜晚的情绪反扑里，朋友在电话中说，时间一定会让一切过去，一定要相信。确实没有骗人。我开始经常不自觉地笑，心里想的是：“也就那么回事了”“确实没什么大不了的”“我现在多好啊”。然后，就只会越来越好。" },
          { type: "p", text: "9月开始重拾运动。飞盘、网球、攀岩都玩了，但还是网球比较酷。练了一个月发球机，慢慢找到感觉。起初只是网球，后来发现不止是网球。像是打开了一个潘多拉的盒子：工作更顺利，心态更好，思维更活跃，也找回了一些做事的专注力、执行力，以及属于自己的学习方法。现实世界的故事才刚刚开始，留到以后再讲。" },
          { type: "p", text: "前两个月，我不止一次和朋友感慨，现在的状态真的很好。这种好不是所有事情都如我所愿。我仍然会焦虑、不安和迷茫，但我觉得没关系，也有信心一定能找到好的方法去面对。" },
          { type: "p", text: "这一年也喜欢上了K-pop。女团里有很多可爱的、很酷的人。有段时间看IVE的团综，笑得捶沙发、摔靠枕，仿佛回到小时候和妈妈一起看《快乐大本营》和《天天向上》的感觉，很快乐。" },
          { type: "blockquote", text: "希望明年的自己依然热情、勇敢、专注、坚韧，找到好的方法，让想发生的事情发生；也允许自己柔软、脆弱与平静，更了解自己。" },
          { type: "p", text: "还要吃更多不同的美食，去新的地方，和散落在地球各处的老友重聚，也认识新的朋友。" }
        ]
      },
      en: {
        category: "Journey",
        title: "Quietly, Another Year Passed",
        dek: "Returning to Chengdu, rebuilding daily life, and slowly recovering enthusiasm, focus, and trust in myself.",
        blocks: [
          { type: "p", text: "There is a scene in a Crayon Shin-chan film where Shin-chan shouts, 'I don't want to lose anyone ever again.' I came across it in a short video near the end of the previous year. It captured the stubborn refusal to surrender that rose in me after pain and anger." },
          { type: "p", text: "In a little over a year after returning to Chengdu, I lived in three different places. The first was a twenty-minute walk from work, which meant more sleep, but the old neighborhood and poor natural light felt short on energy. A month or two later, I moved near Chengyu Interchange. The new apartment was spacious, with floor-to-ceiling windows, a lively neighborhood, and friends nearby. It finally felt like I had returned to live in Chengdu. In February, I moved again, this time west to Dongsheng. Several parks connected around the neighborhood. People camped, barbecued, ran street stalls, and children fished late at night. There were few towers near the airport, which I loved. I am most comfortable at an appropriate distance from a metropolis." },
          { type: "p", text: "Despite moving repeatedly, I still ate often with my former roommates. They showed me parts of Chengdu I had missed over the previous four years. The people, language, food, and weather all felt familiar. Familiarity can also mean little changes, but that constancy allowed me to follow old rhythms and finally rest. I revisited restaurants I had missed and explored new ones, partly so I could take visiting friends there, and partly because living somewhere means entering its streets and alleys." },
          { type: "p", text: "At my new job in Chengdu, I secured early confirmation after only six weeks. I knew little about the business at first, but the role relied more on analysis and project management, so I handled the work well. When things ran smoothly, work stopped controlling my emotional state. I still clocked in and sat in an office, but I had gained the calm conviction that life itself mattered more than everything else. It was completely different from my time at ByteDance." },
          { type: "p", text: "Minutes, days, weeks, and months passed quietly, without dramatic waves. That kind of ordinary calm was once unimaginable to me." },
          { type: "p", text: "Some thresholds, however, are not crossed easily. Old bugs still appeared without warning and froze the system. Once I told myself that I would never let anyone hurt me again. I wished emotional errors could be wrapped in a simple try-catch block, bypassed so the next instruction could run. Those moments came while lying in bed, commuting, or sitting at dinner. Fortunately, the outside world was familiar enough not to create more trouble, giving me room to work through the bugs themselves." },
          { type: "p", text: "The happiest event was seeing Coldplay in Hong Kong from a standing area beside the stage, close enough to see their faces. Before the show, a recorded monologue by Chris Martin began to play. The moment I heard his voice, I cried. A year earlier, I had wished to see them once in my life. I never expected that wish to come true so quickly." },
          { type: "p", text: "Summer arrived, and everywhere was hot. After work, I wanted only air conditioning, watermelon, and ice cream. By July and August, I had been back for a year. During an emotional collapse in Dali the year before, a friend told me on the phone that time would carry everything away and that I had to believe it. They were right. I began smiling without noticing. My inner script became: it was not such a big deal; there was nothing I could not survive; look how good life is now. From there, things could only get better." },
          { type: "p", text: "In September, I returned to exercise. I tried ultimate frisbee, tennis, and climbing, but tennis was still the coolest. After a month with a ball machine, I began to find the feeling. At first it was only tennis, but eventually I saw that it was more. A box had opened: work became smoother, my mood improved, my thinking grew more active, and I recovered focus, execution, and my own method for learning new things. The real-world story had only begun." },
          { type: "p", text: "More than once in the final months, I told friends that I was genuinely doing well. That did not mean everything went my way. I still felt anxiety, uncertainty, and confusion, but I also believed that was all right and trusted myself to find a good way through." },
          { type: "p", text: "It was also the year I fell into K-pop. Girl groups could be charming and cool at once. For a while I watched IVE's variety show and laughed hard enough to hit the sofa and throw cushions. It felt like being a child again, watching entertainment programs with my mother. It was uncomplicated happiness." },
          { type: "blockquote", text: "I hope next year's version of me remains passionate, brave, focused, and resilient, finding good ways to make desired things happen while also allowing softness, vulnerability, and calm." },
          { type: "p", text: "I also want to eat more kinds of food, visit new places, reunite with old friends scattered around the world, and meet new ones." }
        ]
      }
    },
    "thinking-walking": {
      type: "thinking",
      date: "2026-01-18",
      zh: {
        category: "思考",
        title: "行走是一种思考方式",
        dek: "先搭建属于自己的系统，再去实现目标。",
        blocks: [
          { type: "p", text: "有一天刷到一个视频，文案是：“对不喜欢健身的人，去健身叫自律；对喜欢健身的人，去健身叫纵欲。”" },
          { type: "p", text: "周六，一个人去了青城山后山。两年前和朋友爬过一次前山，我原以为后山只是前山的另一面，出发时看导航才发现隔得很远。快下高速时，后视镜里刚好出现冬日八点多的日出，像一个很大的蛋黄。内心很想拍下来，但开车不方便，只好多看了几眼。" },
          { type: "p", text: "爬了半小时，路边的小吃摊才开始摆摊。可能是太久没爬山，也可能是没做攻略，不知道前面有多难，我一开始走得很快。手表监测到心率超过160，脑子里仿佛都能听见心跳。于是放慢速度，降到140左右时就舒服很多。后面我一直动态调整节奏，让身体待在舒服的区间。" },
          { type: "p", text: "朋友发消息说：“真不错，一早就做了那么多。”看到这句话时，我想起最近读到的一篇文章，大意是系统的力量比设立目标更有效。如果我热爱爬山，周六早上就能早早起床，哪怕前一天还是城市里的牛马。热爱本身就是大脑里的一个系统。如果我的目标仅仅是爬完这座山，也许七点闹钟响起时，我会顺手关掉继续睡。毕竟这是打工人的周六早上，而且我是P人，放弃轻而易举。" },
          { type: "p", text: "到又一村时，太阳升得更高，落在脸上也更温暖。我站在阳光里晒了十秒，又得意地向朋友炫耀自己速度很快。现在的我有一点恐高，但在索道上获得了片刻宁静。前后没有其他乘客，摘下耳机，只能听见索道偶尔发出的摩擦声。坐完索道，奖励自己一碗炸土豆和两根烤肠。" },
          { type: "p", text: "登顶没有太多可说，山不高，也不难。下山对膝盖的考验才刚开始，但这是可预期的，所以也还好。下山走了另一边，遇到更多正在上山的游客，而我是逆行者。" },
          { type: "p", text: "行走是我的一种思考方式。三公里以内，我有时会选择走路回家，也会专门在需要思考时出门散步。但行走对有些人来说可能很无聊。一个人爬山、没有人说话，对我的系统有意义，别人却可能觉得孤单。也正因为我的系统如此，我才一直很爱思考。“行走”也可以换成别的事情，重要的是拥有一个能够触发结果的系统。" },
          { type: "p", text: "如果想成为更好的自己，我应该寻找相似的人，学习他们的系统，而不只是把他们做的事抄进自己的Todo List。区别是什么？我理解就是“纵欲”和“自律”的区别。对某些人的系统来说，投入学习拥有近乎无限的能量，来源可能是对某个领域的好奇和热爱。和他们系统不同的人，很难仅靠模仿表面的“术”来实践同样的道理。" },
          { type: "blockquote", text: "系统是身体、思维与现实不断交互、反馈、刺激后，形成的一套拥有近乎无限能量的机制。" },
          { type: "p", text: "先搭建系统，再实现目标。但到了那个时候，目标可能已经不再重要，因为在系统之中，已经可以找到想要的一切。就像养成适合自己且良好的饮食习惯，比一段时间的自律更能带来体重管理上持久的快乐。找到自己的“纵欲”，很多事情自然就能成。" },
          { type: "p", text: "这些想法都发生在下山路上。下午两点左右，全程结束，大约11公里、4个小时，比预料得更快。然后找了个地方泡汤，很满意。" }
        ]
      },
      en: {
        category: "Thinking",
        title: "Walking Is a Way of Thinking",
        dek: "Build a system that belongs to you before trying to achieve the goal.",
        blocks: [
          { type: "p", text: "One day I saw a video with a line that stayed with me: when someone who dislikes exercise goes to the gym, it is discipline; when someone who loves exercise goes, it is indulgence." },
          { type: "p", text: "On Saturday, I went alone to the back side of Qingcheng Mountain. I had climbed the front with friends two years earlier and assumed the back was simply another face of the same mountain. Only after checking navigation did I realize how far apart they were. Near the highway exit, the winter sunrise appeared in my rearview mirror after eight in the morning, like a large egg yolk. I wanted to photograph it, but driving made that impossible, so I looked a few extra times." },
          { type: "p", text: "After half an hour of climbing, the food stalls along the path were only beginning to open. Perhaps I had not hiked in too long, or perhaps I moved quickly because I had done no research and did not know what lay ahead. My watch showed a heart rate above 160, loud enough that I could almost hear it inside my head. I slowed down. Around 140 felt much better, so I kept adjusting my pace to remain in a comfortable range." },
          { type: "p", text: "A friend messaged, 'Nice, you have already done so much this morning.' It reminded me of an essay arguing that systems are more powerful than goals. If I love hiking, I can wake early on Saturday even after a hard week in the city. Love itself is a system in the brain. If my only goal were to complete the mountain, I might silence the seven o'clock alarm and return to sleep. It was a worker's Saturday morning, after all, and as a spontaneous person I can abandon plans very easily." },
          { type: "p", text: "By the time I reached Youyi Village, the sun was higher and warmer on my face. I stood in it for ten seconds and proudly told my friend how fast I had been. I have become slightly afraid of heights, yet the cable car brought a moment of calm. No one was riding in front of or behind me. I removed my headphones and heard only the occasional friction of the machinery. Afterward, I rewarded myself with fried potatoes and two grilled sausages." },
          { type: "p", text: "There was little to say about reaching the summit. The mountain was not high or difficult. The real test for my knees began on the descent, but that was predictable. I took the other route down, passing more visitors going up while I moved against their flow." },
          { type: "p", text: "Walking is one of my ways of thinking. Within three kilometers, I sometimes walk home, and I deliberately go out when I need to think. For some people, walking may be boring. Climbing alone without conversation is meaningful to my system, while someone else may experience it as loneliness. Perhaps I have always loved thinking precisely because my system works this way. Walking could be replaced by any other activity; what matters is having a system that reliably triggers the result." },
          { type: "p", text: "If I want to become better, I should find similar people and learn their systems rather than copying their actions into my to-do list. The difference, as I understand it, is the difference between indulgence and discipline. In some people's systems, learning receives almost unlimited energy from curiosity or love for a field. Someone with a different system will struggle to reproduce the same result by imitating only the visible technique." },
          { type: "blockquote", text: "A system is a mechanism with almost unlimited energy, formed as the body, mind, and reality continually interact, respond, and stimulate one another." },
          { type: "p", text: "Build the system first, then achieve the goal. By that point, the goal may no longer matter, because the system itself contains what you were looking for. A sustainable way of eating that suits you creates more lasting satisfaction than a temporary burst of discipline. Find the form of 'indulgence' that is truly yours, and many outcomes begin to follow naturally." },
          { type: "p", text: "I thought through all of this on the way down. The hike ended around two in the afternoon: roughly eleven kilometers in four hours, faster than expected. Then I found a place for a hot spring and left completely satisfied." }
        ]
      }
    },
    "thinking-desire": {
      type: "thinking",
      date: "2026-06-10",
      zh: {
        category: "思考",
        title: "洗澡时的随想",
        dek: "很多没有迈出去的第一步，根源可能不是能力，而是欲望还不够。",
        blocks: [
          { type: "p", text: "昨晚洗澡时，突然想到一句话：所有你没有去做、没有迈出那一步的事情，根源其实都是欲望不够。欲望还没有达到那个水平。" },
          { type: "p", text: "这个“欲望”可以有很多层意思。可能是你觉得那件事能带来的快乐不够确定、不够大；也可能是现在的痛苦还没有超过阈值，仍然可以忍；还有一种情况，是你以为自己很想要某个东西，其实并没有那么想要。" },
          { type: "p", text: "人为什么会纠结？因为两个选项在理性上几乎打平。如果相差很远，根本不会纠结，早就选了。纠结的时候，其实选哪个都无所谓，甚至可以摇个骰子。" },
          { type: "blockquote", text: "问题不一定在事情本身。纠结的根源，可能只是欲望不够。" },
          { type: "p", text: "举个例子。你总觉得现在的工作不好，加班多、很累。现在有一个更好的方案摆在面前，但钱少一点。如果还在纠结，纠结的可能并不只是钱。如果单纯的数字就能决定，你不会犹豫。" },
          { type: "p", text: "你犹豫，要么是对现状的痛苦还可以忍，要么是对未来的东西没有那么渴望。面对不确定时，你还没有足够的欲望去挑战它。" },
          { type: "p", text: "我做事情很讲究给自己建立正反馈系统。不能指望一下子拿到大礼包，而要在过程中不断给自己小礼包，让大脑相信这件事是对的，不至于一直处在匮乏中。顺着人性来，才有勇气和自信坚持下去。" },
          { type: "p", text: "所以意志力、自信和意愿都非常重要。电视剧里常说，只要你非常非常想，全世界都会帮你。乍一看像唯心主义，其实不是。渴望会激发极强的能动性，你会想尽办法实现目标。最终拯救你的还是自己。“心诚则灵”只是结果，根源是你自身的改变。" }
        ]
      },
      en: {
        category: "Thinking",
        title: "A Thought in the Shower",
        dek: "When we never take the first step, the cause may not be ability but insufficient desire.",
        blocks: [
          { type: "p", text: "In the shower last night, a sentence suddenly came to me: the root of everything you have not done, every first step you have not taken, is that the desire is not strong enough. It has not yet reached the necessary level." },
          { type: "p", text: "Desire can mean several things here. Perhaps the happiness promised by the action is too uncertain or too small. Perhaps the pain of the present has not crossed a threshold and remains tolerable. Or perhaps you believe you want something when, in truth, you do not want it that much." },
          { type: "p", text: "Why do people agonize over choices? Because the two options are almost tied at the rational level. If one were clearly better, there would be no struggle; the decision would already be made. When the choice remains perfectly balanced, either answer may be acceptable. You could almost roll a die." },
          { type: "blockquote", text: "The problem may not be the decision itself. The root of indecision may simply be insufficient desire." },
          { type: "p", text: "Imagine that you dislike your current job because the hours are long and the work is exhausting. A better alternative appears, but it pays a little less. If you remain stuck, money may not be the real issue. If the number alone could decide, you would not hesitate." },
          { type: "p", text: "You hesitate either because the pain of the present is still bearable or because the future does not attract you strongly enough. Faced with uncertainty, you do not yet have enough desire to challenge it." },
          { type: "p", text: "I care a great deal about building positive-feedback systems for myself. I cannot expect one enormous reward at the end. I need small rewards throughout the process so my brain learns that the effort is worthwhile and does not remain in a constant state of deprivation. Working with human nature, rather than against it, creates the courage and confidence to continue." },
          { type: "p", text: "That is why willpower, confidence, and willingness matter. Television dramas often say that if you want something badly enough, the whole world will help you. It sounds idealistic, but it is not. Desire activates extraordinary agency. You search relentlessly for ways to reach the goal. In the end, the person who saves you is still yourself. The apparent miracle is only the outcome; the cause is the change within you." }
        ]
      }
    }
  };

  const params = new URLSearchParams(location.search);
  const requestedId = params.get("article");
  const articleId = articles[requestedId] ? requestedId : "journey-2025-review";
  const article = articles[articleId];

  function language() {
    return document.documentElement.lang.startsWith("zh") ? "zh" : "en";
  }

  function render() {
    const lang = language();
    const content = article[lang];
    const isJourney = article.type === "journey";
    const back = root.querySelector("[data-article-back]");
    const body = root.querySelector("[data-article-body]");
    const formattedDate = new Intl.DateTimeFormat(lang === "zh" ? "zh-CN" : "en", {
      year: "numeric",
      month: "long",
      day: "numeric"
    }).format(new Date(`${article.date}T12:00:00`));

    root.querySelector("[data-article-category]").textContent = `${content.category} · ${article.date.slice(0, 4)}`;
    root.querySelector("[data-article-title]").textContent = content.title;
    root.querySelector("[data-article-dek]").textContent = content.dek;
    root.querySelector("[data-article-date]").textContent = formattedDate;
    root.querySelector("[data-article-date]").dateTime = article.date;
    back.href = isJourney ? "experiences.html" : "thinking.html";
    back.textContent = lang === "zh" ? `← 返回${isJourney ? "旅程" : "思考"}` : `← Back to ${isJourney ? "Journey" : "Thinking"}`;

    document.querySelectorAll("[data-article-nav]").forEach((link) => {
      if (link.dataset.articleNav === article.type) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });

    body.replaceChildren(...content.blocks.map((block) => {
      const element = document.createElement(block.type);
      element.textContent = block.text;
      return element;
    }));
    document.title = `${content.title} · ${lang === "zh" ? "读读说明书" : "Craig Young"}`;
  }

  window.addEventListener("portfolio-language-change", render);
  render();
})();
