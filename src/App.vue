<template>
    <NavBar/>
    <RouterView/>
    <Footer/>
</template>

<script setup>
import { RouterView } from 'vue-router';
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
import { addIcons } from 'oh-vue-icons';
import { BiFileEarmarkPerson, FaRegularIdCard, ViFileTypeHtml, ViFileTypeCss, FaBootstrap, BiLinkedin, FaUserFriends, RiAdminFill, OiPaperAirplane,
        CoJavascript, ViFileTypePhp, CoLaravel, ViFileTypeMysql, BiGithub, ViFileTypeLightQuasar, BiFacebook, BiArrowLeftCircle, MdEmailOutlined,
        CoCanva, FaFigma, ViFileTypePhotoshop, SiAdobeillustrator, ViFileTypeVue, ViFileTypeNode, ViFileTypeTailwind, RiInstagramFill, BiXCircle, GiHamburgerMenu} from 'oh-vue-icons/icons';

addIcons(BiFileEarmarkPerson, FaRegularIdCard, ViFileTypeHtml, ViFileTypeCss, FaBootstrap, BiLinkedin, FaUserFriends, RiAdminFill, OiPaperAirplane,
        CoJavascript, ViFileTypePhp, CoLaravel, ViFileTypeMysql, BiGithub, ViFileTypeLightQuasar, BiFacebook, BiArrowLeftCircle, MdEmailOutlined,
        CoCanva, FaFigma, ViFileTypePhotoshop, SiAdobeillustrator, ViFileTypeVue, ViFileTypeNode,ViFileTypeTailwind, RiInstagramFill, BiXCircle, GiHamburgerMenu);


</script>