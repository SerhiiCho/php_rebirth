import type Modifier from '@/Modifiers/Modifier'
import conf from '@/conf'

export default class implements Modifier {
    private elements?: {
        logo: HTMLImageElement
        text: HTMLParagraphElement
        buttons: HTMLDivElement
    }

    public modify(): void {
        const hero = document.querySelector<HTMLDivElement>(conf.selectors.home.hero)

        if (!hero) {
            return
        }

        this.elements = {
            logo: hero.querySelector<HTMLImageElement>('.hero-logo')!,
            text: hero.querySelector<HTMLParagraphElement>('.hero-text')!,
            buttons: hero.querySelector<HTMLDivElement>('.hero-actions')!,
        }

        this.wrapInRow(hero)
        this.wrapTextAndButtons()

        hero.style.opacity = '1'
    }

    private wrapInRow(hero: HTMLDivElement): void {
        if (!this.elements) {
            return
        }

        const heroRow = document.createElement('div')
        heroRow.classList.add('php-revival-hero-row')

        heroRow.appendChild(this.elements.logo)
        heroRow.appendChild(this.elements.text)
        heroRow.appendChild(this.elements.buttons)

        hero.prepend(heroRow)
    }

    private wrapTextAndButtons(): void {
        if (!this.elements) {
            return
        }

        const row = document.querySelector<HTMLDivElement>('.php-revival-hero-row')!

        const heroTextAndButtons = document.createElement('div')
        heroTextAndButtons.classList.add('php-revival-hero-row__text-and-buttons')

        heroTextAndButtons.appendChild(this.elements.text)
        heroTextAndButtons.appendChild(this.elements.buttons)

        row.appendChild(heroTextAndButtons)
    }
}