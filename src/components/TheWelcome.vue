<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <br><br>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Project Preivew</template>
    Zero-knowledge proofs refer to the ability of a prover to convince a verifier that a statement
    is correct without providing any additional information. They are important protocols
    in cryptography and are widely used in identity verification, blockchain and cryptocurrencies.
    While zero-knowledge proofs are complex and abstract, many simple visualisation
    methods can illustrate the concept. This project pioneers the use of interactive visualisations
    to explain zero-knowledge proofs, using a web game to achieve the visualisation goal
    of making zero-knowledge proofs accessible to non-experts and even children.



  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Tools</template>

    This project is built by
    <a href="https://unity.com/" target="_blank" rel="noopener">Unity</a>. 

    <br />
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Reference & Resources</template>

    Design pattern: <a href="https://discovered.ed.ac.uk/discovery/fulldisplay?context=PC&vid=44UOE_INST:44UOE_VU2&search_scope=UoE&tab=Everything&docid=cdi_askewsholts_vlebooks_9781610581998" target="_blank" rel="noopener">Universal Methods of Design: 100 Ways to Research Complex Problems, Develop Innovative Ideas, and Design Effective Solutions</a>.
    <br>ZKP visualisation: <a href="https://m.youtube.com/watch?v=CIGnBb8B0rQ&feature=youtu.be" target="_blank" rel="noopener">ZKP MOOC Lecture 11: From Practice to Theory</a>.
    <br>ZKP visualisation: <a href="https://www.youtube.com/watch?v=fOGdb1CTu5c" target="_blank" rel="noopener">Computer Scientist Explains One Concept in 5 Levels of Difficulty | WIRED</a>.
    <br>Video with visualization explaining ZK: <a href="https://www.youtube.com/watch?v=5ovdoxnfFVc" target="_blank" rel="noopener">AZero Knowledge Proof (with Avi Wigderson) - Numberphile</a>.
    <br>How to survive in challenging environments: <a href="https://m.youtube.com/watch?v=QMEkmopXB3g&list=WL&index=6" target="_blank" rel="noopener">Anti-disciplinary: doing academic research when you like too many things</a>.
   
    <br>Three color map interactive visualization: <a href="https://web.mit.edu/~ezyang/Public/graph/svg.html" target="_blank" rel="noopener">Interactive demonstration of the zero knowledge proof protocol for 3-colorable graphs</a>.
    





  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Contact</template>

    Juekai Zhang<br>
    University of Edinburgh<br>
    s2343556@ed.ac.uk


  </WelcomeItem>

  <!-- <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support Vue</template>

    As an independent project, Vue relies on community backing for its sustainability. You can help
    us by
    <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener">becoming a sponsor</a>.
  </WelcomeItem> -->
  
</template>
