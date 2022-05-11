import { getMarkets } from "@/api/coins";
import { ref, onMounted } from "vue";

export default function useCoinsMarkets() {
  const coins = ref([]);
  const search = ref("");

  async function getAPIData() {
    coins.value = await getMarkets();
  }
  onMounted(getAPIData);

  function getNameFilters() {
    return coins.value.map((coin) => ({
      text: coin.name,
      value: coin.name,
    }));
  }

  return { search, coins, getNameFilters };
}
