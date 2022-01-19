import { Entity, Column, PrimaryColumn, BaseEntity, OneToMany, ManyToOne } from 'typeorm';
import { Transaction } from 'src/model/transaction';

@Entity()
export class Block extends BaseEntity {
    @PrimaryColumn()
    hash: number;

    @Column()
    difficulty: number;

    @Column()
    gasLimit: number;

    @Column()
    logsBloom: number;

    @Column()
    miner: number;

    @Column()
    mixHash: number;

    @Column()
    nonce: number;

    @Column()
    number: number;

    @Column()
    parentHash: number;

    @Column()
    receiptsRoot: number;

    @Column()
    sha3Uncles: number;

    @Column()
    size: number;

    @Column()
    stateRoot: number;

    @Column()
    timestamp: number;

    @Column()
    totalDifficulty: number;

    @OneToMany(() => Transaction, transaction => transaction.block)
    transactions: Transaction[];

    @Column()
    transactionsRoot: number;

    @OneToMany(() => Block, block => block.nephew)
    uncles: Block[];

    @ManyToOne(() => Block, block => block.uncles)
    nephew: Block;
}