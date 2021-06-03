<template>
  <q-page class="q-pa-md">
    <h1 class="text-h4">Créer un wallet</h1>
    <q-form
      class="q-gutter-md"
      @submit="onSubmit"
    >
      <q-input filled placeholder="Wallet name"/>

      <q-input
        v-model="cryptoModel"
        filled
        placeholder="Rechercher une crypto"
        icon="home"
        @keyup="searchCrypto()"
        clearable
        clear-icon="close"
        @clear="cryptoModel = ''"
      >
        <template v-slot:append>
          <q-icon v-if="cryptoModel === ''" name="search"/>
        </template>
      </q-input>

      <q-list v-if="cryptoModel !== ''" class="bg-info text-primary" style="border-radius: 8px" separator>
        <q-expansion-item v-for="crypto in allCryptos" :key="crypto.id" group="crypto">

          <template v-slot:header>
            <q-item-section style="flex: 1">
              <span>{{ crypto.rank }}</span>
            </q-item-section>
            <q-item-section class="items-center">
              <q-img :src="crypto.icon" width="30px"/>
            </q-item-section>
            <q-item-section>
              <h2 class="text-subtitle1">{{ crypto.name }} <span class="text-caption">({{ crypto.symbol }})</span></h2>
            </q-item-section>
            <q-item-section>
              <span>{{ Math.round(crypto.price * 100) / 100 }} $</span>
            </q-item-section>
          </template>

          <q-card>
            <q-card-section>
              <q-form
                class="q-pa-md add-crypto-form q-gutter-md"
                @submit="addCrypto"
              >

                <q-input v-model="cryptoFormData.tokens" filled stack-label label="Nombre de tokens" placeholder="0"/>
                <div class="buy-price-field">
                  <q-input v-model="cryptoFormData.price" filled stack-label label="Prix d'achat" placeholder="0" />
                  <q-select class="text-dark" filled v-model="cryptoFormData.modelFiat" :options="cryptoFormData.optionsFiat" />
                </div>

                <q-btn type="submit" label="Ajouter" color="primary"/>
              </q-form>
            </q-card-section>
          </q-card>

        </q-expansion-item>
      </q-list>

      <q-btn type="submit" label="Créer" color="secondary"/>
    </q-form>
  </q-page>
</template>

<script>
export default {
  name: "pageAddWallet",

  data () {
    return {
      cryptoModel: "",
      allCryptos: null,
      cryptoFormData: {
        tokens: null,
        price: null,
        modelFiat: "$",
        optionsFiat: ['$', '€']
      }
    }
  },

  methods: {
    async searchCrypto() {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      const arrayCrypto = []

      const resp = await fetch("https://api.coincap.io/v2/assets", requestOptions)
      const result = await resp.json()
      const data = result.data

      /** COMPARE data & image or dowload other icon maybe first 100 or add one by one misses icons **/

      for (let i in data) {
        if (data[i].name.toLowerCase().includes(this.cryptoModel) || data[i].symbol.toLowerCase().includes(this.cryptoModel)) {
          arrayCrypto.push({
            name: data[i].name,
            symbol: data[i].symbol,
            icon: require(`../assets/icons/${data[i].symbol.toLowerCase()}.svg`),
            rank: data[i].rank,
            price: data[i].priceUsd,
          })
        }
      }

      this.cryptoModel = this.cryptoModel.toLowerCase()
      this.allCryptos = arrayCrypto
    },

    onSubmit() {
      console.log('submit')
    },

    addCrypto() {
      console.log('addCrypto')
    }
  }
}
</script>

<style>
.q-expansion-item:nth-child(even) {
  background-color: #f6f6f6;
}

.text-subtitle1 {
  line-height: 1rem;
}

.buyPrice {
  display: flex;
}

.add-crypto-form .q-field--filled .q-field__control {
  border-radius: 0;
}

.buy-price-field {
  display: flex;
}

.q-menu--square {
  color: #0F0D24;
}
</style>
