import { Image } from './image';

export class Release {
    title: string;
    id: number;
    artists: any[];
    artistsSort?: string[];
    dataQuality: string;
    thumbnail: string;
    community: any;
    companies: any[];
    country: string;
    date_Added: string;
    dateChanged: string;
    estimatedWeight: number;
    extraArtists: any[];
    formatQuantity: number;
    formats: any[];
    genres: string[];
    identifiers: any[];
    images: Image[];
    labels: any[];
    lowestPrice: number;
    masterId: number;
    masterUrl: string;
    notes: string;
    numForSale: number;
    released: string;
    releasedFormatted: string;
    resourceUrl: string;
    series: any[];
    status: string;
    styles: string[];
    tracklist: any[];
    uri: string;
    videos: any[];
    year: number;

    constructor(obj: any) {
        // this.title = obj.title;
        // this.id = obj.id;
        // this.artists = obj.artists;
        // this.artistsSort = obj.artistsSort;
        // this.dataQuality = obj.dataQuality;
        // this.thumbnail = obj.thumbnail;
        // this.community = obj.community;
        // this.companies = obj.companies;
        // this.country = obj.country;
        // this.dateAdded = obj.dateAdded;
        // this.dateChanged = obj.dateChanged;
        // this.estimatedWeight = obj.estimatedWeight;
        // this.extraArtists = obj.extraArtists;
        // this.formatQuantity = obj.formatQuantity;
        // this.formats = obj.formats;
        // this.genres = obj.genres;
        // this.identifiers = obj.identifiers;
        // this.images = obj.images;
        // this.labels = obj.labels;
        // this.lowestPrice = obj.lowestPrice;
        // this.masterId = obj.masterId;
        // this.masterUrl = obj.masterUrl;
        // this.notes = obj.notes;
        // this.numForSale = obj.numForSale;
        // this.released = obj.released;
        // this.releasedFormatted = obj.releasedFormatted;
        // this.resourceUrl = obj.resourceUrl;
        // this.series = obj.series;
        // this.status = obj.status;
        // this.styles = obj.styles;
        // this.tracklist = obj.tracklist;
        // this.uri = obj.uri;
        // this.videos = obj.videos;
        // this.year = obj.year;

        this.title = obj.title;
        this.id = obj.id;
        this.artists = obj.artists;
        this.artistsSort = this.formatArtistsSort(obj.artists_sort);
        this.dataQuality = obj.data_quality;
        this.thumbnail = obj.thumb;
        this.community = obj.community;
        this.companies = obj.companies;
        this.country = obj.country;
        this.date_Added = obj.date_added;
        this.dateChanged = obj.date_changed;
        this.estimatedWeight = obj.estimated_weight;
        this.extraArtists = obj.extraartists;
        this.formatQuantity = obj.format_quantity;
        this.formats = obj.formats;
        this.genres = obj.genres;
        this.identifiers = obj.identifiers;
        this.images = obj.images;
        this.labels = obj.labels;
        this.lowestPrice = obj.lowest_price;
        this.masterId = obj.master_id;
        this.masterUrl = obj.master_url;
        this.notes = obj.notes;
        this.numForSale = obj.num_for_sale;
        this.released = obj.released;
        this.releasedFormatted = obj.released_formatted;
        this.resourceUrl = obj.resource_url;
        this.series = obj.series;
        this.status = obj.status;
        this.styles = obj.styles;
        this.tracklist = obj.tracklist;
        this.uri = obj.uri;
        this.videos = obj.videos;
        this.year = obj.year;
    }

    formatArtistsSort(str: string) {
        let arr = str.split('/');
        arr.forEach((value, index, self) => {
            self[index] = self[index].trim();
        });
        return arr;
    }
}