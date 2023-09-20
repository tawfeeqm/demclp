import { Asset } from 'src/types/assets.types';
import { emitHTTPErrorResponse } from '../middleware/errorHandling.middleware';
import { createAssetInDbByUserId, getAssetFromDbById } from '../model/assets.model';

export async function createAssetInServices(obj: Asset, userId: string): Promise<void> {
    try {
        return await createAssetInDbByUserId(obj, userId);
    } catch (error: any) {
        emitHTTPErrorResponse(400, 'User or Asset not found.');
    }
}


export async function getAssetInServices(uuid: string) {
    const assetsResult = await getAssetFromDbById(uuid);
    if (assetsResult.rowCount === 0) {
        emitHTTPErrorResponse(404, 'Assets not found');
        return;
    }
    return assetsResult;
}

