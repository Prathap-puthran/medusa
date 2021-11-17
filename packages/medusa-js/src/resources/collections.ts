import { AxiosPromise } from 'axios';
import { StoreCollectionsRes, StoreCollectionsListRes, StoreGetCollectionsParams } from '@medusajs/medusa'
import BaseResource from './base';

class CollectionsResource extends BaseResource {
  /**
   * @description Retrieves a single collection
   * @param id id of the collection
   * @returns AxiosPromise<StoreCollectionsRes>
   */
  retrieve(id: string): AxiosPromise<StoreCollectionsRes> {
    const path = `/store/collections/${id}`;
    return this.client.request('GET', path);
  }

  /**
   * @description Retrieves a list of collections
   * @param query is optional. Can contain a limit and offset for the returned list
   * @returns AxiosPromise<StoreCollectionsListRes>
   */
  list(query?: StoreGetCollectionsParams): AxiosPromise<StoreCollectionsListRes> {
    let path = `/store/collections`;

    if (query) {
      const queryString = Object.entries(query).map(([key, value]) => {
        return `${key}=${value}`;
      });

      path = `/store/collections?${queryString.join('&')}`;
    }

    return this.client.request('GET', path);
  }
}

export default CollectionsResource;