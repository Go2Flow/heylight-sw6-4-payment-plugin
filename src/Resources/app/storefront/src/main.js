import HeylightOpenMiniBasket from './heylight-plugin/open-mini-basket.plugin';
const PluginManager = window.PluginManager;
if (!'HeylightOpenMiniBasket' in PluginManager.getPluginList()) {
    PluginManager.register('HeylightOpenMiniBasket', HeylightOpenMiniBasket);
}
