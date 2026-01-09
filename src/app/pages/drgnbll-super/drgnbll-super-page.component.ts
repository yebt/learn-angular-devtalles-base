import { Component, inject } from '@angular/core';
import { CharacterList } from '../../components/drgnbll-super/character-list/character-list.components';
import { CharacterAddComponent } from '../../components/drgnbll-super/character-add/character-add.component';
import { DragonballsService } from '../../services/dragonball-characters.service';

@Component({
  templateUrl: './drgnbll-super-page.component.html',
  imports: [CharacterList, CharacterAddComponent],
})
export class DrgnbllPageSuperComponent {

  public drgnbllService = inject(DragonballsService)

}
