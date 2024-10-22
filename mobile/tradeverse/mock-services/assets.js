import { allAssets } from "../mock-data/all-assets";
export const searchAssets = (searchTerm) => {
  if (!searchTerm) {
    return allAssets;
  }
  return allAssets.filter((asset) =>
    asset.label.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export const getAssetById = (assetId) => {
  return allAssets.find((asset) => asset.id == assetId);
}
