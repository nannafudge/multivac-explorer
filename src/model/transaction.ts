import { Entity, Column, PrimaryColumn, BaseEntity, ManyToOne } from 'typeorm';
import { Block } from 'src/model/block';

@Entity()
export class Transaction extends BaseEntity {
    @PrimaryColumn()
    hash: number;

    @ManyToOne(() => Block, block => block.hash)
    block: Block;

    @Column()
    from: number;

    @Column()
    gas: number;

    @Column()
    gasPrice: number;

    @Column()
    input: number;

    @Column()
    nonce: number;

    @Column()
    to: number;

    @Column()
    value: number;

    @Column()
    v: number;

    @Column()
    r: number;

    @Column()
    s: number;
}