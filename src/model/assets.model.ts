import { Asset } from 'src/types/assets.types';
import pool from '../../getDbClient';

export async function getAssetFromDbById(uuid: string): Promise<any> {
    try {
        const getAssetsQuery = `SELECT type, title, url, description FROM assets WHERE id = $1`;
        const asset = await pool.query(getAssetsQuery, [uuid]);
        return asset.rows[0];
    } catch (error: any) {
        console.log(error);
        return error;
    }
}

export async function createAssetInDbByUserId(assetObj: Asset, userId: string) {
    const { title, description, type, url } = assetObj;
    try {
        const query = `
            INSERT INTO assets (title, description, type, url, user_id)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING title, type, url, description, id;  
        `;
        const result = await pool.query(query, [title, description, type, url, userId]);
        return result.rows[0];
    } catch (error: any) {
        console.log(error);
        throw new Error(error);
    }
}
