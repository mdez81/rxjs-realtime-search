import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
const searchInput = document.getElementById('searchInput');
const search$ = fromEvent(searchInput, 'input').pipe(debounceTime(300), distinctUntilChanged(), switchMap(event => {
    const query = event.target.value; // Type assertion for event.target
    return fetch(`http://localhost:3000/api/search?q=${query}`).then(response => response.json());
}));
search$.subscribe(results => {
    console.log('Search results:', results);
});
