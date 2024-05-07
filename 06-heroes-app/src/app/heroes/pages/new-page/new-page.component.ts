import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, switchMap } from 'rxjs';

import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: ``
})
export class NewPageComponent implements OnInit {

  public heroForm = new FormGroup({
    id: new FormControl<string>(''),
    superhero: new FormControl<string>('', { nonNullable: true }),
    alter_ego: new FormControl<string>(''),
    first_appearance: new FormControl<string>(''),
    characters: new FormControl<string>(''),
    publisher: new FormControl<Publisher>(Publisher.DCComics),
    alt_img: new FormControl<string>(''),
  });

  public publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics',
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics',
    },
  ];

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) return;

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.heroesService.getHeroById(id))
      ).subscribe(hero => {
        if (!hero) this.router.navigateByUrl('/');

        this.heroForm.reset(hero);
      })
  }

  get currentHero(): Hero {
    const hero = this.heroForm.value as Hero;
    return hero;
  }

  onSubmit(): void {
    console.log({
      formIsValid: this.heroForm.valid,
      value: this.heroForm.value,
    })

    if (this.heroForm.invalid) return;

    if (this.currentHero.id) {
      this.heroesService.updateHero(this.currentHero)
        .subscribe(hero => {
          //TODO: Show snackbar
          this.showSnackbar(`${hero.superhero} updated successfully`);
        });

    } else {
      this.heroesService.addHero(this.currentHero)
      .subscribe(hero => {
        //TODO: Show snackbar and redirect to /heroes/edit/hero.id
        this.showSnackbar('Hero created successfully');
        this.router.navigate(['/heroes/edit', hero.id]);
      });
    }

    return;
  }

  onDeleteHero(): void {
    if (!this.currentHero.id) return;

    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: this.heroForm.value
    });

    dialogRef.afterClosed()
      .pipe(
        filter((result: boolean) => result),
        switchMap(() => this.heroesService.deleteHerobyId(this.currentHero.id)),
        filter((wasDeleted: boolean) => wasDeleted),
      )
      .subscribe(() => {
        this.router.navigateByUrl('/heroes');
      });


    // dialogRef.afterClosed().subscribe(result => {
    //   if (!result) return;
    //   this.heroesService.deleteHerobyId(this.currentHero.id)
    //     .subscribe(wasDeleted => {
    //       if (!wasDeleted)
    //         this.router.navigateByUrl('/heroes');
    //     });

    // });

  }

  showSnackbar(message: string): void {
    this.snackbar.open(message, 'Ok!', {
      duration: 2500
    })
  }
}
