<template>
  <h1>Crypto List</h1>
  <el-table
    :data="
      coins.filter(
        (coin) =>
          !search || coin.name.toLowerCase().includes(search.toLowerCase())
      )
    "
    stripe
    style="width: 100%"
    :default-sort="{ prop: 'price_change_percentage_24h', order: 'descending' }"
  >
    <el-table-column>
      <template #header>
        <el-input v-model="search" placeholder="Ricerca per nome"></el-input>
      </template>
      <el-table-column label="" width="140px">
        <template #default="scope">
          <div class="symbol">
            <el-image
              :src="scope.row.image"
              fit="cover"
              style="max-width: 40px"
              :alt="scope.row.name"
              :title="scope.row.name"
            ></el-image>
            {{ scope.row.symbol.toUpperCase() }}
          </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="Name"
        sortable
        :filters="getNameFilters()"
        :filter-method="handleNameFilter"
      >
      </el-table-column>
    </el-table-column>
    <el-table-column prop="current_price" label="Current Price" sortable>
      <template #default="scope">
        {{ formatNumber(scope.row.current_price) }}</template
      >
    </el-table-column>
    <el-table-column label="Market Cap">
      <template #default="scope">
        {{ formatNumber(scope.row.market_cap) }}</template
      >
    </el-table-column>
    <el-table-column label="Total Volume">
      <template #default="scope">{{
        formatNumber(scope.row.total_volume)
      }}</template>
    </el-table-column>
    <el-table-column
      prop="price_change_percentage_24h"
      label="Price change % 24h"
      sortable
    >
      <template #default="scope">
        <el-tag
          v-if="scope.row.price_change_percentage_24h <= 0"
          type="danger"
          >{{ scope.row.price_change_percentage_24h }}</el-tag
        >
        <el-tag
          v-else-if="scope.row.price_change_percentage_24h > 0"
          type="success"
          >+{{ scope.row.price_change_percentage_24h }}</el-tag
        >
      </template>
    </el-table-column>
    <el-table-column label="" fixed="right">
      <template #default="scope">
        <el-button type="text" size="small" @click="gotoCryptoInfo(scope.row)">
          Info
        </el-button>
      </template></el-table-column
    >
  </el-table>
</template>

<script>
import useCoinsMarkets from "@/use/coinsMarkets";
import useTableFilter from "@/use/useTableFilter";
import { useRouter } from "vue-router";

export default {
  setup() {
    const coinsMarkets = useCoinsMarkets();
    const TableFilter = useTableFilter();
    const router = useRouter();
    function gotoCryptoInfo(crypto) {
      console.log(crypto.id);
      router.push({ path: `/crypto/${crypto.id}` });
    }
    return {
      ...coinsMarkets,
      ...TableFilter,
      gotoCryptoInfo,
    };
  },
};
</script>

<style lang="scss" scoped>
.symbol {
  display: flex;
  align-items: center;
  .el-image {
    margin-right: 10px;
  }
  span {
    font-weight: bold;
  }
}
</style>
