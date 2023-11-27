<template >
    <div>
        <FormCargarDatosVue v-if="isAuthenticated"></FormCargarDatosVue>
    </div>
</template>

<script>
import FormCargarDatosVue from '@/components/FormCargarDatos.vue'
import useAuth from '@/composables/authUser';
export default {
    name: 'AyudaPage',
    components:{
        FormCargarDatosVue
    },

setup() {
    const { isAuthenticated } = useAuth();
    return {
      isAuthenticated,
    };
  },
  async created() {
    const { validateToken } = useAuth();
    try {
      await validateToken();
    } catch (error) {
      console.error('Error al obtener la información del usuario:', error);
    }
  }
}

</script>

<style>

</style>