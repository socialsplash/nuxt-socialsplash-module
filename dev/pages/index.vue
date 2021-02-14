<template>
    <div>
        Works!
        <nuxt-link to="/test">Navigate</nuxt-link>
        <img :src="imageUrl" alt="">
    </div>
</template>

<script>
    export default {
        computed: {
            imageUrl () {
                return this.$socialsplash.generate('enterprise-website', {
                    title: 'Increase your social media reach with SocialSplash',
                    subtitle: 'Visit website',
                    website: 'www.socialsplash.xyz',
                    logo_url: 'https://socialsplash.s3.fr-par.scw.cloud/static/logos/socialsplash.png',
                    background: '#2b6cb0'
                })
            }
        }
    }
</script>
