<script setup lang="ts">
import { ref } from "vue";
import Collapse from "@/components/Collapse.vue";
import executor1 from "../../assets/images/about/executor-1.webp";
import executor2 from "../../assets/images/about/executor-2.webp";

const executors = ref([
  {
    name: "蔡宏賢",
    avatar: executor1,
    title: "如何認知、理解與面對未來？",
    introduction: `
      從物理、哲學、心理、宗教、文化與藝術層面，人們帶著全然迥異的認知與態度去面對未來，最終人類將往何處去？對於未來的想望，反映出多樣的平行未來世界觀與創造。臺灣當代文化實驗場「C-LAB未來媒體藝術節」，以過去、現下與未來的科技藝術創作，演繹出未來的奇觀異景。<br />
      神人化的賽伯格、數位威權夾縫中的喘息、太空殖民的異托邦等未來景致，究竟是人類文明科技巨輪滾動的命定未來，或是慾望所驅使的未來？高低起伏地表下蜿蜒流淌的河流，真實的地理資訊被人工智慧轉化爲絕美的聲響與視覺裝置作品，演算再現的自然，可能成為未來人工智慧審美觀的運算標準之一。<br />
      當數據與參數成為未來人們演算與再造各種模型的基礎，純粹的視覺作品轉換為全球政治、社會與經濟議題抗爭的動態宣傳媒體工具。網路傳遞著蓄意的錯誤訊息與深偽技術的影片，人類的隱私、行為模式被系統存取濫用，科技霸權與國家巨獸控制了資訊的流向與記憶的存取。人臉辨識偵測系統檢查候選人的愛國之心時，人工智慧的機器變成中選會的候選資格審核機器，未來將剩下多少真實的人權、自由、民主？<br />
      我們正生活在與威權爭奪數位記憶的戰爭中，記憶是如何被植入與存取？現在與未來所能遺留殘存下的記憶，哪些才是真實留存的？人們逐漸接受數位威權控制下的生活，消費足跡、生理偵測與隱私被赤裸攤開操弄之時，失重下的人們該如何相抗排毒？去中心、反威權控制的區塊鏈與數位貨幣逐漸發展出全新數位創作的買賣機制，並屢創新高，究竟是未來新契機或被資本吞噬？<br />
      如同1929年班納爾（J.D.BERNAL）的未來經典《世界，肉體，惡魔》所述，人類如惡魔般擁有不完美的精神狀態，卻掌控了超越生物肉身結構侷限，到達地外世界的科技力。面對各種幽暗的威脅，保有一絲光明的希望，我們就能改變未來。臺灣在發展科技藝術、新媒體藝術的進程中想像未來，相信自由、開放與分享的開源社群，省思媒體與開放軟硬體，跨域協作與多樣性的實驗創作，透過無數次講座、論壇與工作坊的積累，開創了臺灣科技藝術的多樣生態環境，「C-LAB未來媒體藝術節」的核心價值與力量即在於此。
    `,
  },
  {
    name: "吳達坤",
    avatar: executor2,
    title: "探測未來：C-LAB未來媒體藝術節",
    introduction: `
      C-LAB自2018年啟動以來，即不斷透過各項計畫實驗創新，培育創意人才，已成為臺灣科技藝術發展的重要加速器。今年在C-LAB首度舉辦的「未來媒體藝術節」將以「未來學」作為方法，探究藝術總體軸線。以人類面對未知的無窮渴望，回應未來的種種驚奇。<br>
      1943年，由德國學者奧西普．弗萊西泰姆 （Ossip K. FLECHTHEIM） 率先提出「未來學」（Futurology）做跨學科統合領域的推測學門，對於社會、科學、技術史、經濟、軍事的發展進行預測。也影響後世許多藝術家針對過去、當下與未來進行創作，科幻小說與電影創作也提供生動、富有魅力的未來願景。「未來」視為此次C-LAB核心主題的媒體藝術節，策展團隊以線上/線下實體展覽建構出科技藝術方法學的取樣，邀集23組藝術家們的作品文本在此呈現；並加入未來視覺實驗室FUTURE VISION LAB計畫、PCD/TTD/PAD系列講座與工作坊，以三大塊面共構出「C-LAB未來媒體藝術節」的多層次策展架構。<br>
      若說COVID-19為全球迎來真正屬於二十一世紀的第一起事件，或許人類也正迎向新的科技奇點（Singularity）爆炸轉變。當社交媒體和網絡改變接受訊息和反應的方式，演算法與機器學習也帶來深偽造假的認知提問。假新聞、AI人工智慧、奈米晶片、生物科技、機端氣候、區塊鏈、NFT、演算視覺與太空星際探索已是人類的現在進行式，在未來，甚至賽伯格社會與時空旅行都將可能成為日常。藝術家總是能在時空的縫隙中開闢蹊徑，將創作連結議題納入思考，整合哲學、物理、文化與社會趨勢作為推測基礎，我們能否相信自由及新秩序所提供的多重參照路徑？歷史上瘟疫、戰爭、天災對人類的考驗從未曾停歇。面對持續而來的挑戰，人類是否還能以當今視角去預測未知？成為超越時間的形而上存在？而人類如何以內心的良知來審視未來？ 軟體學家艾倫‧凱 （Alan KAY）這句話是最積極的解答：「預測未來最好的方法就是創造未來。」（The best way to predict the future is to invent it.<br>
    `,
  },
]);
</script>

<template>
  <div class="py-4 px-3 lg:py-25">
    <div class="container max-w-900px mx-auto">
      <div class="about-intro mb-12">
        <h2
          class="
            text-2xl
            mb-4
            text-center
            font-bold font-noto
            lg:font-black lg:mb-9 lg:text-4xl
          "
        >
          C-LAB 未來媒體藝術節<br class="lg:hidden" />
          虛實並進想像未來
        </h2>
        <p class="text-sm font-podkova">
          臺灣當代文化實驗場年度大展「C-LAB未來媒體藝術節」10月8日至11月28日登場，由C-LAB策展人吳達坤與客座策展人蔡宏賢共同合作，以「未來」為命題，邀請國內外23組藝術家、24件作品，並舉辦系列講座與工作坊，串連科技媒體實驗平台的未來視覺展演計畫「FUTURE
          VISION
          LAB」，企圖構築媒體藝術的未來想像。C-LAB也首度推出線上展覽平台「Unzip
          C-LAB：展演匯流站」，以線上、線下虛實並進的展覽形式，實踐未來策展的無限可能。
        </p>
      </div>

      <div
        class="
          executor-intro
          flex flex-wrap
          mb-5
          lg:mb-24
          bg-gray-100
          lg:bg-white
          p-4
        "
        v-for="({ name, avatar, title, introduction }, index) in executors"
        :key="index"
      >
        <div
          class="
            w-full
            lg:w-4/12
            pr-6
            relative
            flex
            justify-center
            items-center
            lg:items-start
          "
        >
          <div class="relative mb-4 lg:mb-0">
            <div class="absolute top-2/4 transform -translate-y-1/2">
              <div
                class="
                  text-sm
                  lg:text-lg lg:font-bold
                  font-podkova
                  text-gray-700
                "
              >
                策展人
              </div>
              <h3
                class="
                  text-2xl
                  lg:text-4xl
                  font-bold font-podkova
                  text-gray-700
                "
              >
                {{ name }}
              </h3>
            </div>

            <img
              class="ml-15 lg:ml-0 w-105px lg:w-full lg:pl-20"
              :src="avatar"
              :alt="name"
            />
          </div>
        </div>

        <article class="w-full lg:w-8/12 lg:pl-4 font-noto">
          <h4 class="text-lg font-bold font-podkova mb-4">
            {{ title }}
          </h4>
          <collapse :collapse-line="8">
            <p class="text-sm leading-6" v-html="introduction"></p>
          </collapse>
        </article>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
